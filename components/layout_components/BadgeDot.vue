<template>
  <div class='badge-dot'>
    <div class='ellipse-1'></div>
  </div>
</template>

<script>
export default {
  name: "BadgeDot",
};
</script>

<style scoped>
.badge-dot {
  align-items: flex-start;
  display: flex;
  height: 6px;
  justify-content: center;
  min-width: 6px;
}

.ellipse-1 {
  background-color: #f64c4c;
  border: 1px solid var(--white);
  border-radius: 4px;
  height: 8px;
  margin-top: -1px;
  width: 8px;
}
</style>
