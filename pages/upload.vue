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
          class="form rounded-xl shadow bg-white text-gray-500 t px-4 w-2/5 py-6 flex h-64 items-center justify-center"
        >
          <form class="space-y-8">
            <div class="form-control">
              <label class="">
                <input
                  type="text"
                  v-model="email"
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
                  <input
                    type="file"
                    class="absolute cursor-pointer opacity-0 w-full h-full top-0 left-0 right-0 inset-0"
                    id="uploaded-File"
                    @change="fileCheck"
                  />
                  <input
                    type="text"
                    id="uploaded-File"
                    :value="uploadedFile ? uploadedFile : ''"
                    placeholder="click-to-upload.docx"
                    class="input w-full appearance-none input-bordered rounded-r-none"
                  />
                </div>

                <span class="flex px-0 items-enter text-white bg-none">
                  <button
                    class="flex btn rounded-l-none btn-black"
                    @click.prevent="submitFile"
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
            </div>
          </form>
        </div>
      </div>
    </div>
    <FixedNotificationModal @close="show = false" :show="show" />
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
      submitting: false,
      files: null,
      show: false,
      error: null,
      errorMail: null,
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
    validateEmail(email) {
      return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    },
    submitFile() {

      if(this.email ==='') {
        this.errorMail = "Enter your email";
        return;
      }
      if(this.files===null) {
        this.error="No file selected"
        return;
      }
      if (this.validateEmail(this.email) === false) {
        this.errorMail = 'Enter a valid email'
      }
      if (this.error !== null && this.errorMail !== null) {
        return
      } 

     this.postData(this.files, this.email); 

      
      //Submit the form
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
          console.log("Error", error);
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
