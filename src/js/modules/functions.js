export const scrollToBlock = () => {
    const navLinks = document.querySelectorAll('.nav--header .nav__link')

    if (navLinks.length) {
        navLinks.forEach((link) =>
            link.addEventListener('click', (e) => {
                e.preventDefault()

                const targetBlock = document.querySelector(
                    `${link.getAttribute('href')}`,
                )

                const offsetTop =
                    targetBlock.getBoundingClientRect().top +
                    window.scrollY -
                    110

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth',
                })
            }),
        )
    }
}
