export { default as DialogModal } from '../../components/layout_components/dialog-modal.vue'
export { default as FooterComponent } from '../../components/layout_components/footerComponent.vue'
export { default as LeftMenu } from '../../components/layout_components/leftMenu.vue'
export { default as NavBars } from '../../components/layout_components/navBars.vue'
export { default as NotificationGroup } from '../../components/layout_components/notification-group.vue'
export { default as Notification } from '../../components/layout_components/notification.vue'
export { default as SelectFilter } from '../../components/layout_components/selectFilter.vue'
export { default as SelectInput } from '../../components/layout_components/selectInput.vue'
export { default as HomeComponentsHeroCard } from '../../components/home_components/HeroCard.vue'
export { default as HomeComponentsIndexDetails } from '../../components/home_components/IndexDetails.vue'
export { default as HomeComponentsIndexHero } from '../../components/home_components/IndexHero.vue'
export { default as PlotlyComponentsNewBoxPlot } from '../../components/plotly_components/NewBoxPlot.vue'
export { default as PlotlyBoxPlotFigure } from '../../components/plotly_components/PlotlyBoxPlotFigure.vue'
export { default as SharedProgressBarLoading } from '../../components/shared/ProgressBarLoading.vue'
export { default as TableauComponentsBaseSelectInput } from '../../components/tableau_components/BaseSelectInput.vue'
export { default as TableauComponentsDashboardForm } from '../../components/tableau_components/DashboardForm.vue'
export { default as TableauComponentsFileRequestSection } from '../../components/tableau_components/FileRequestSection.vue'
export { default as TableauComponentsFloatingActionButton } from '../../components/tableau_components/FloatingActionButton.vue'
export { default as TableauComponentsHeroImage } from '../../components/tableau_components/HeroImage.vue'
export { default as TableauComponentsHeroText } from '../../components/tableau_components/HeroText.vue'
export { default as TableauComponentsTableTabBody } from '../../components/tableau_components/TableTabBody.vue'
export { default as TableauComponentsTableTabsSection } from '../../components/tableau_components/TableTabsSection.vue'
export { default as TableauHeroSection } from '../../components/tableau_components/TableauHeroSection.vue'
export { default as PublicationComponentsBreadcrumb } from '../../components/publication_components/Breadcrumb.vue'
export { default as PublicationComponentsCarousel } from '../../components/publication_components/Carousel.vue'
export { default as PublicationComponentsWhatsTrending } from '../../components/publication_components/WhatsTrending.vue'
export { default as PublicationComponentsPublicationsCard } from '../../components/publication_components/publicationsCard.vue'
export { default as UploadComponentsFileUploadBreadCrumb } from '../../components/upload_components/FileUploadBreadCrumb.vue'
export { default as UploadComponentsFixedNotificationModal } from '../../components/upload_components/FixedNotificationModal.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
