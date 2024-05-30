document.addEventListener('DOMContentLoaded', function () {
    const accordionButton = document.querySelector('.accordion-button');
    const accordionContent = document.querySelector('.accordion-content');

    accordionButton.addEventListener('click', function () {
        if (accordionContent.style.maxHeight) {
            accordionContent.style.maxHeight = null;
            accordionContent.style.padding = "0 15px";
        } else {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
            accordionContent.style.padding = "15px";
        }
    });
});
