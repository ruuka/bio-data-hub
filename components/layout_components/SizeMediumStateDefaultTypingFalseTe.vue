<template>
  <div class="right-icon">
    <div class="text-2">{{ text }}</div>
    <img
      class="search"
      src="https://anima-uploads.s3.amazonaws.com/projects/61eb071259085a6271779ae5/releases/61eb07172db43d929ddc59c6/img/search@2x.svg"
    />
  </div>
</template>

<script>
export default {
  name: "SizeMediumStateDefaultTypingFalseTe",
  props: ["text"],
};
</script>

<style>
.right-icon {
  align-items: center;
  background-color: rgb(255 255 255 / 20%);
  border-radius: 4px;
  display: flex;
  height: 36px;
  margin-left: 494px;
  min-width: 451px;
  padding: 0 12px;
}

.text-2 {
  color: var(--white);
  font-family: var(--font-family-inter);
  font-size: var(--font-size-xl);
  font-weight: 400;
  letter-spacing: 0;
  line-height: 22px;
  min-height: 22px;
  white-space: nowrap;
  width: 403px;
}

.search {
  height: 16px;
  margin-left: 8px;
  width: 16px;
}
</style>
