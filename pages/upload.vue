<template>
  <div class="flex w-full">
    <div class="w-full h-full overflow-y-auto px-2 py-4">
      <div class="flex flex-col w-full bg-gray-50 px-4 py-0.5 pt-1">
        <Breadcrumb title="" />
      </div>

      <div class="content py-3">
        <div
          class="info rounded-xl shadow bg-white text-gray-500 text-sm font-light px-4 w-2/3 py-3 mb-10"
        >
          Instructions: To begin, enter your email and simply upload your
          document (.doc or .docx format only) and click Submit.
        </div>

        <div
          class="form rounded-xl shadow  bg-white text-gray-500 t px-4 w-2/5 py-6 flex  flex-col h-auto items-center justify-center"
        >
          <form class="space-y-8" id="file-form" enctype="multipart/form-data" method="POST"
          @submit.prevent="onUpload"
          action="http://sjggpappprdn09:8000/api/v1/icf-codification/upload">
            <div class="form-control">
              <label class="">
                <input
                  type="text"
                  v-model="email"
                  name="email"
                  placeholder="youremail@gilead.com"
                  class="input w-full input-bordered"
                />
              </label>
              <p
                v-if="errorMail"
                class="text-red-500 text-sm font-light text-left w-full"
              >
                {{ errorMail }}
              </p>
            </div>

            <div class="form-control w-full">
              <label class="flex rounded-none w-full" for="uploaded-File">
                <div class="flex-1 w-full relative">
                  <input type="file" name="imagesArray" 
                  class="absolute cursor-pointer opacity-0 w-full h-full top-0 left-0 right-0 inset-0"
                  multiple @change="onChange">
                  
                  <input
                    type="text"
                    id="uploaded-File"
                    name=""
                    
                    placeholder="Upload one or multiple "
                    class="input w-full appearance-none input-bordered rounded-r-none"
                  />
                </div>

                <span class="flex px-0 items-enter text-white bg-none">
                  <button
                    class="flex btn rounded-l-none btn-black"
                    @click.prevent="onUpload"
                    :disabled="submitting"
                  >
                    <div class="submit">Submit</div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
         <img src="~static/loading spinner.gif" alt="" v-if="submitting" class="h-10 w-10" srcset="">
                  </button>
                </span>
              </label>
              <p
                v-if="error"
                class="text-red-500 text-sm font-light text-left w-full"
              >
                {{ error }}
              </p>
              <p class="mt-2 text-slate-400 text-xs font-light text-center w-full">
                .doc or .docx only
              </p>
              <div class=" w-full">
          <ul class="flex w-full flex-col text-sm" v-if="imagesArray" >
                 <li v-for="(file, index) in imagesArray" class="flex gap-3 text-green-500 items-center">      
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>

                  </span>
                  <span class="text-xs">{{file.name}}</span>
                  </li>
          </ul>
        </div>
            </div>
          </form>




        </div>
      </div>
    </div>
    <FixedNotificationModal @close="show = false" :show="show" :title="notificationTitle" :message='notificationMessage' :type="notificationType"/>
  </div>
</template>

<script>
import Breadcrumb from '../components/upload_components/FileUploadBreadCrumb.vue'
import FixedNotificationModal from '../components/upload_components/FixedNotificationModal.vue'
import newAPIService from '../services/newAPIService'

export default {
  name: 'FileUpload',
  components: {
    Breadcrumb,
    FixedNotificationModal,
  },
  data() {
    return {
      pageTitle: 'Bioinformatics Data Hub - File upload',
      pageSubTitle: "A portal to access and analyze Gilead's molecular data.",
      email: '',
      uploadedFile: null,
      notificationTitle:'Thanks, we got your submission!',
      notificationMessage:"Be patient, please submit one file per request to avoid overloading the server, thank you!",
      notificationType:'success',
      submitting: false,
      files: null,
      show: false,
      error: null,
      errorMail: null,
      imagesArray: null
    }
  },
  watch: {
    email(n,old) {
      if(n.length > 0) {
        this.errorMail=null;
      }
    }
  },
  methods: {
    resetFields() {
      this.imagesArray=null;
      this.email='';
    },
    onUpload() {
          if(!this.validateForm()) {
            console.log("YES")
            return;
          }
          const formData = new FormData();
          formData.append('email', this.email);
          for (const i of Object.keys(this.imagesArray)) {
            formData.append(`file${ parseInt(i) + 1}`, this.imagesArray[i])
          }
          this.submitting = true;
          this.$axios.post('http://localhost:8000/api/v1/multi-images-upload', formData, {
          }).then((res) => {
            this.submitting = false
           this.show = true
            this.resetFields();
          })
          .catch((error) => {
         this.show = true
         this.submitting = false
         this.notificationType='error';
         this.notificationMessage=error.message
         this.notificationTitle="Error while submitting"
         this.resetFields();
        })
        } ,
    onChange (event) {
          this.imagesArray = event.target.files
        },
    validateEmail(email) {
      return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    },
    validateForm() {

      if(this.email ==='') {
        this.errorMail = "Enter your email";
        return false;
      }
      if(this.imagesArray===null) {
        this.error="No file selected"
        return false;
      }
      if (this.validateEmail(this.email) === false) {
        this.errorMail = 'Enter a valid email'
        return false;
      }
      if (this.error !== null && this.errorMail !== null) {
        return false;
      } 
      return true;
    },
    submitForm() {
   document.querySelector("#file-form").submit()
    },
    postData(file, email) {
      this.submitting = true;
     var formData = new FormData();
     formData.append('email',email);
     formData.append('id_docfile',file);

        newAPIService.postFile(this.$axios,formData).then((res) => {
        this.submitting = false
        this.show = true
        })
        .catch((error) => {
         this.show = true
         this.notificationType='error';
         this.notificationMessage=error.message
         this.notificationTitle="Error while submitting"
        })
    },

    fileCheck(event) {
      // Check file format
      this.files = event.target.files[0]
      this.uploadedFile = event.target.files[0].name
      var ext = this.uploadedFile.substring(
        this.uploadedFile.lastIndexOf('.') + 1
      )
      console.log(ext)
      if (ext == 'doc' || ext == 'docx') {
        this.error = null
      } else {
        this.error = 'Please upload .doc or .docx files only.'
      }
    },
  },

  head() {
    const title = 'Bioinformatics - ICF Upload Portal'
    return {
      title,
    }
  },
}
</script>

<style scoped>
.lds-dual-ring {
  display: inline-block;
  width: 40px;
  height: 40px;
}

.lds-dual-ring::after {
  content: " ";
  display: block;
  width: 44px;
  height: 44px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #fff;
  border-color: #fff transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}

</style>
