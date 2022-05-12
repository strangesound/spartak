<template>

    <div class="footer">
        <p class="footer__creators">Сайт сделан в студии <a href="https://www.petrovichbrothers.com/"
                target="_blank">Petrovich Brothers</a></p>
    </div>

</template>

<style>
.footer {
    padding: 5.208vw 0.595vw;
    background-color: var(--colorDark);
}

.footer__creators,
.footer a,
.footer a:visited {
    color: var(--colorLight);
    text-decoration: none;
    font-size: 1vw;
    opacity: .5;

}


@media (max-width: 575.98px) {
    .footer {
        padding-left: 8px;
    }

    .footer__creators,
    .footer a,
    .footer a:visited {
        font-size: 3vw;
        color: var(--colorLight);
        opacity: .5;

    }
}
</style>
