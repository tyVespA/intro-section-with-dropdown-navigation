const hamburger = document.querySelector(".hamburger")
const headerContainerMobile = document.querySelector(".header-container-mobile")
const closeButton = document.querySelector(".close-button")
const brightnessWrapper = document.querySelector(".brightness-wrapper")

hamburger.addEventListener("click", () => {
   headerContainerMobile.classList.add("is-active")
   brightnessWrapper.classList.add("display-block")
})

closeButton.addEventListener("click", () => {
   headerContainerMobile.classList.remove("is-active")
   brightnessWrapper.classList.remove("display-block")
})

const features = document.querySelector(".features")
const dropDownMenuFeatures = document.querySelector(".dropdown-menu-mobile-features")

features.addEventListener("click", () => {
   if (dropDownMenuFeatures.classList.contains("display-none")) {
      dropDownMenuFeatures.classList.remove("display-none")
   } else {
      dropDownMenuFeatures.classList.add("display-none")
   }
})

const company = document.querySelector(".company")
const dropDownMenuCompany = document.querySelector(".dropdown-menu-mobile-company")

company.addEventListener("click", () => {
   if (dropDownMenuCompany.classList.contains("display-none")) {
      dropDownMenuCompany.classList.remove("display-none")
   } else {
      dropDownMenuCompany.classList.add("display-none")
   }
})

const featuresDesktop = document.querySelector(".features-desktop")
const dropDownMenuFeaturesDesktop = document.querySelector(".dropdown-menu-desktop-one")

featuresDesktop.addEventListener("click", () => {
   if (dropDownMenuFeaturesDesktop.classList.contains("display-none")) {
      dropDownMenuFeaturesDesktop.classList.remove("display-none")
   } else {
      dropDownMenuFeaturesDesktop.classList.add("display-none")
   }
})

const companyDesktop = document.querySelector(".company-desktop")
const dropDownMenuCompanyDesktop = document.querySelector(".dropdown-menu-desktop-two")

companyDesktop.addEventListener("click", () => {
   if (dropDownMenuCompanyDesktop.classList.contains("display-none")) {
      dropDownMenuCompanyDesktop.classList.remove("display-none")
   } else {
      dropDownMenuCompanyDesktop.classList.add("display-none")
   }
})


