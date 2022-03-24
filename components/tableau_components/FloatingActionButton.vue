<template>
  <div class="fab-wrapper">
  <input id="fabCheckbox" type="checkbox" v-model="openDashboardForm" class="fab-checkbox" />
  <label class="fab border border-gilead-red bg-gilead-red hover:bg-opacity-80" for="fabCheckbox">
<svg class="mt-4 ml-4" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M31.3539 0.689148H2.49273C2.01432 0.689148 1.55551 0.879194 1.21723 1.21748C0.878949 1.55576 0.688904 2.01457 0.688904 2.49297V24.1389C0.688904 24.6173 0.878949 25.0761 1.21723 25.4144C1.55551 25.7526 2.01432 25.9427 2.49273 25.9427H11.5118L16.9233 33.158L22.3348 25.9427H31.3539C31.8323 25.9427 32.2911 25.7526 32.6294 25.4144C32.9677 25.0761 33.1577 24.6173 33.1577 24.1389V2.49297C33.1577 2.01457 32.9677 1.55576 32.6294 1.21748C32.2911 0.879194 31.8323 0.689148 31.3539 0.689148ZM16.9233 20.5312H9.70802C9.22962 20.5312 8.77081 20.3412 8.43253 20.0029C8.09424 19.6646 7.9042 19.2058 7.9042 18.7274C7.9042 18.249 8.09424 17.7902 8.43253 17.4519C8.77081 17.1136 9.22962 16.9236 9.70802 16.9236H16.9233C17.4017 16.9236 17.8605 17.1136 18.1988 17.4519C18.5371 17.7902 18.7271 18.249 18.7271 18.7274C18.7271 19.2058 18.5371 19.6646 18.1988 20.0029C17.8605 20.3412 17.4017 20.5312 16.9233 20.5312ZM24.1386 11.5121H9.70802C9.22962 11.5121 8.77081 11.3221 8.43253 10.9838C8.09424 10.6455 7.9042 10.1867 7.9042 9.70827C7.9042 9.22987 8.09424 8.77105 8.43253 8.43277C8.77081 8.09449 9.22962 7.90445 9.70802 7.90445H24.1386C24.617 7.90445 25.0758 8.09449 25.4141 8.43277C25.7524 8.77105 25.9424 9.22987 25.9424 9.70827C25.9424 10.1867 25.7524 10.6455 25.4141 10.9838C25.0758 11.3221 24.617 11.5121 24.1386 11.5121Z" fill="white"/>
<path opacity="0.5" d="M9.70812 7.90442H24.1387C24.6171 7.90442 25.0759 8.09446 25.4142 8.43275C25.7525 8.77103 25.9425 9.22984 25.9425 9.70824C25.9425 10.1866 25.7525 10.6455 25.4142 10.9837C25.0759 11.322 24.6171 11.5121 24.1387 11.5121H9.70812C9.22972 11.5121 8.77091 11.322 8.43262 10.9837C8.09434 10.6455 7.9043 10.1866 7.9043 9.70824C7.9043 9.22984 8.09434 8.77103 8.43262 8.43275C8.77091 8.09446 9.22972 7.90442 9.70812 7.90442Z" fill="white"/>
<path opacity="0.5" d="M9.70812 16.9235H16.9234C17.4018 16.9235 17.8606 17.1136 18.1989 17.4518C18.5372 17.7901 18.7272 18.2489 18.7272 18.7273C18.7272 19.2058 18.5372 19.6646 18.1989 20.0028C17.8606 20.3411 17.4018 20.5312 16.9234 20.5312H9.70812C9.22972 20.5312 8.77091 20.3411 8.43262 20.0028C8.09434 19.6646 7.9043 19.2058 7.9043 18.7273C7.9043 18.2489 8.09434 17.7901 8.43262 17.4518C8.77091 17.1136 9.22972 16.9235 9.70812 16.9235Z" fill="white"/>
</svg>

  </label>
  <div class="fab-wheel bg-white p-4 shadow-2xl rounded ">
   <dashboard-form @close="openDashboardForm = false"/>
  </div>
</div>
</template>

<script>
import DashboardForm from './DashboardForm.vue'
export default {
  data() {
    return {
      openDashboardForm: false
    }
  },
  components: {
    DashboardForm

  }
}
</script>

<style>
.fab-wrapper {
  position: fixed;
  bottom: 3rem;
  right: 3rem;
}

.fab-checkbox {
  display: none;
}

.fab {
  position: absolute;
  bottom: -1rem;
  right: -1rem;
  width: 4rem;
  height: 4rem;
  
  /* background: blue; */

  border-radius: 50%;
  transition: all 0.3s ease;
  z-index: 1;
  border-bottom-right-radius: 6px;

}

.fab::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  border-radius: 50%;
  background-color: rgb(255 255 255 / 10%);
}

.fab-checkbox:checked ~ .fab::before {
  width: 90%;
  height: 90%;
  left: 5%;
  top: 5%;
  background-color: rgb(255 255 255 /  20%);
}



.fab-dots {
  position: absolute;
  height: 8px;
  width: 8px;
  background-color: white;
  border-radius: 50%;
  top: 50%;
  transform: translateX(0%) translateY(-50%) rotate(0deg);
  opacity: 1;
  animation: blink 3s ease infinite;
  transition: all 0.3s ease;
}

.fab-dots-1 {
  left: 15px;
  animation-delay: 0s;
}

.fab-dots-2 {
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  animation-delay: 0.4s;
}

.fab-dots-3 {
  right: 15px;
  animation-delay: 0.8s;
}

.fab-checkbox:checked ~ .fab .fab-dots {
  height: 6px;
  animation: none;
}

.fab .fab-dots-2 {
  transform: translateX(-50%) translateY(-50%) rotate(0deg);
}

.fab-checkbox:checked ~ .fab .fab-dots-1 {
  width: 32px;
  border-radius: 10px;
  left: 50%;
  transform: translateX(-50%) translateY(-50%) rotate(45deg);
}

.fab-checkbox:checked ~ .fab .fab-dots-3 {
  width: 32px;
  border-radius: 10px;
  right: 50%;
  transform: translateX(50%) translateY(-50%) rotate(-45deg);
}

@keyframes blink {
  50% {
    opacity: 0.25;
  }
}



.fab-wheel {
  position: absolute;
  bottom: 1rem;
  right: 20rem;
  border: 1px solid #fff;
  width: 40rem;
  height: 34rem;
  transition: all 0.3s ease;
  transform-origin: bottom right;
  transform: scale(0);
}

.fab-checkbox:checked ~ .fab-wheel {
  transform: scale(1);
}

.fab-action {
  position: absolute;
  background: #0f1941;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  box-shadow: 0 0.1rem 1rem rgba(24 66 154 / 82%);
  transition: all 1s ease;
  opacity: 0;
}

.fab-action:hover {
  background-color: #f16100;
}

.fab-checkbox:checked ~ .fab-wheel .fab-action {
  opacity: 1;
}



.fab-wheel .fab-action-1 {
  right: -1rem;
  top: 0;
}

.fab-wheel .fab-action-2 {
  right: 3.4rem;
  top: 0.5rem;
}

.fab-wheel .fab-action-3 {
  left: 0.5rem;
  bottom: 3.4rem;
}

.fab-wheel .fab-action-4 {
  left: 0;
  bottom: -1rem;
}

</style>