<template>
    <main class="w-full">
<tableau-hero-section />
<table-tabs-section />
<file-request-section />
<floating-action-button />
    </main>
</template>


<script>
import FloatingActionButton from '~/components/tableau_components/FloatingActionButton.vue'
import FileRequestSection from '~/components/tableau_components/FileRequestSection.vue'
import TableTabsSection from '~/components/tableau_components/TableTabsSection.vue'
import TableHeroSection from '../components/tableau_components/TableauHeroSection.vue'
export default {
components: {
    TableHeroSection,
    TableTabsSection,
    FileRequestSection,
FloatingActionButton,
}
}
</script>
