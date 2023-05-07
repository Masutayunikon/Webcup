<template>
    <div class="container mt-6">
        <!-- <div class="row justify-content-center"> -->
            <div class="flex flex-shrink-0 image">
                <img class="block h-26 w-24" src="~/assets/Logo.png" alt="Your Company">
            </div>

            <div class="col-sm-4 col-md-3 item row-left">
                <ul>
                    <li><a href="#" class="address">Institut International des rêves</a></li>
                    <li><a href="#" class="address">5 rue du marchand de sable 3300 Métropole</a></li>
                </ul>
            </div>
            <div class="col-sm-4 col-md-3 row-center">
                <ul>
                    <li class="link"><a href="/institut">L'institut</a></li>
                    <li class="link"><a href="#">Onirix</a></li>
                    <li class="link"><a href="/contact">Contact</a></li>
                </ul>
            </div>
            <div class="col-sm-4 col-md-3">
                <ul>
                    <li class="link"><a href="#">RESTEZ INFORMÉS DES ACTUALITÉS DE L'INSTITUT</a></li>
                    <li class="sub"><a href="#">S'abonner à la Newsletter</a></li>
                    <li><a href="#"><i class="icon ion-social-facebook"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-snapchat"></i></a><a href="#"><i class="icon ion-social-instagram"></i></a></li>
                </ul>
            </div>
            <!-- </div> -->
        </div>
        <div class="col-lg-3 item social mt-4 mb-8">
            <p class="copyright"><a href="/legacity">Mentions légales</a> - <a href="/policy">Politique de confidentialité</a></p>
        </div>
</template>

<style scoped lang="scss">
    .container {
        display: flex;
    }
    .address {
        font-size: medium;
        color: rgb(20, 88, 112);
    }
    .link{
        color: rgb(20, 88, 112);
        font-weight: bold;
        font-size: medium;
    }
    .sub {
        background-color: rgb(20, 88, 112);
        color: white;
        width: 48%;
        padding: 6px;
    }
    .image {
        margin-left: 12%;
        margin-right: 5%;
    }
    .copyright {
        font-size: medium;
        color: rgb(20, 88, 112);
        margin-left: 40%;
    }
    .row-left {
        width: 17%;
        margin-right: 8%;
    }
    .row-center {
        margin-right: 16%;
    }
</style>