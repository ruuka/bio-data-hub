<template>
  <div class="flex w-full">
    <div class="w-full h-full overflow-y-auto px-2 py-4">

      <div class="flex flex-col w-full bg-gray-50 px-4 py-0.5 pt-1">
        <Breadcrumb title="breadcrumb"/>
      </div>

<div class="content py-3">
  <div class="info rounded-xl shadow bg-white text-gray-500 text-sm font-light px-4 w-2/3 py-3 mb-10">
    Instructions: To begin, enter your email and simply upload your document (.doc or .docx format only) and click Submit.
  </div>

  <div class="form  rounded-xl shadow bg-white text-gray-500 t px-4 w-2/5 py-6 flex h-64 items-center justify-center">
  <form class="space-y-8">

      <div class="form-control ">
            <label class="">
            <input type="text" placeholder="youremail@gilead.com" class="input w-full input-bordered">
            </label>
      <p v-if="errorMail" class="text-red-500 text-sm font-light text-center w-full">{{errorMail}}</p>
    </div>

    <div class="form-control w-full ">
            
            <label class="flex rounded-none w-full" for="uploaded-File">
              <div class="flex-1 w-full relative ">

                <input type="file"   class="absolute cursor-pointer opacity-0  w-full h-full top-0 left-0 right-0 inset-0" id="uploaded-File" @change="fileChoosen" />
            <input type="text" id="uploaded-File" :value="uploadedFile ? uploadedFile :''"  placeholder="upload File"  class="input w-full appearance-none input-bordered rounded-r-none "  >
              </div>
              
            <span class=" flex px-0   items-enter text-white bg-none">
              <button class="flex btn rounded-l-none  btn-black" @click.prevent="submitFile" :disabled="submitting">
                <div class="submit">Submit</div>
                <svg class="h-5 w-5" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.04166 10C4.04166 9.65482 4.32149 9.375 4.66666 9.375H16.3333C16.6785 9.375 16.9583 9.65482 16.9583 10C16.9583 10.3452 16.6785 10.625 16.3333 10.625H4.66666C4.32149 10.625 4.04166 10.3452 4.04166 10Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.0581 3.72475C10.3021 3.48067 10.6979 3.48067 10.9419 3.72475L16.7753 9.55808C17.0194 9.80216 17.0194 10.1979 16.7753 10.442L10.9419 16.2753C10.6979 16.5194 10.3021 16.5194 10.0581 16.2753C9.81398 16.0312 9.81398 15.6355 10.0581 15.3914L15.4495 10L10.0581 4.60863C9.81398 4.36455 9.81398 3.96882 10.0581 3.72475Z" fill="white"/>
</svg>

              </button>
            </span>
            </label>
               <p v-if="error" class="text-red-500 text-sm font-light text-center w-full">{{error}}</p>
   <p class="text-slate-500 text-sm font-light text-center w-full">.doc or .docx only</p>
    </div>
  </form>
  </div>
</div>
    </div>
    <FixedNotificationModal @close="show=false" :show="show"/>
  </div>

</template>


<script>

import  Breadcrumb from '../components/file_upload_components/FileUploadBreadCrumb.vue'
import FixedNotificationModal   from '../components/file_upload_components/FixedNotificationModal.vue'

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
      email:"",
      uploadedFile:null,
      submitting:false,
      files:null,
      show:false,
      error:null,
      errorMail:null,
    }



  },
  methods: {
validateEmail(email)  {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
},
    submitFile() {
      if(this.validateEmail(this.email) ===false) {
        this.errorMail = "Enter a valid email"
      }
    if(this.error !==null && this.errorMail !==null) {
       return;
    }else {
    this.submitting = true;
    this.show=true;
    }
    //Submit the form


    },


    fileChoosen(event) {
      this.files = event.target.files[0];
      this.uploadedFile = event.target.files[0].name;
      var ext = this.uploadedFile.substring(this.uploadedFile.lastIndexOf('.') + 1);
console.log(ext);
      if(ext =="doc" || ext  =="docx")
      {
         this.error=null;
    
      }else {
        this.error="Please upload doc or docx files"
      }


    }
  },

  head() {
    const title = 'File Upload Stream'
    return {
      title,
    }
  },
}
</script>

