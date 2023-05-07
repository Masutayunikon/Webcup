<template>
    <div class="body">
        <div class="container">
            <p class="title mt-6 mb-6">L'institut</p>
        </div>

        <div class="container">
            <p class="text mb-6">
                Dédié à l'étude et à l'interprétation des rêves, notre mission est de fournir des informations et des outils pour aider les gens à mieux comprendre leur subconscient et à améliorer leur vie grâce à la compréhension de leurs rêves.
                Notre institut est composé d’une équipe d'experts en psychologie, en neuroscience et en intelligence artificielle, qui travaillent ensemble pour offrir des analyses et des interprétations précises des rêves. Nous sommes convaincus que les rêves peuvent être une source inestimable d'informations sur notre état mental et émotionnel, et qu'ils peuvent nous aider à mieux comprendre nos peurs, nos désirs et nos aspirations.
                Notre site offre au travers de l’IA aidera les utilisateurs à explorer et à se retrouver au travers de leurs rêves. Onirix, qui utilise des algorithmes sophistiqués pour analyser et interpréter les rêves des utilisateurs.
                Nous proposons également des experts spécialisés sur l'interprétation des rêves,  pour aider les gens à mieux comprendre les symboles et les archétypes présents dans leurs rêves, et à utiliser ces informations pour améliorer leur vie éveillée.
                Ces experts organisent régulièrement des évènements en personne, tels que des ateliers, des conférences et des retraites, pour aider les gens à explorer leur monde intérieur et à se connecter avec d’autres personnes intéressées par l'interprétation des rêves.
            </p>
        </div>
    </div>

    <div class="container-card mt-6">
        <card-3D class="card mr-6"
          image="/FrancescaSiclari.jpg"
          title="Francesca Siclari"
          description="Neurologie et médecine du sommeil">
        </card-3D>

        <card-3D class="card mr-6"
          image="/laura.jpg"
          title="Laura"
          description="Psychologue">
        </card-3D>

        <card-3D class="card mr-6"
          image="/lisa.jpg"
          title="Lisa"
          description="Médecin">
        </card-3D>

        <card-3D class="card mr-6"
          image="/tristan.png"
          title="Tristan-Frédéric Moir"
          description="Spécialiste du langage du rêve">
        </card-3D>

        <card-3D class="card"
          image="/messmer.jpg"
          title="Messmer"
          description="Fascinateur">
        </card-3D>
    </div>

    <div class="body">
        <div class="container">
            <p class="text mb-6">
                Nous croyons que l'exploration des rêves peut être une source de croissance personnelle et de transformation, et nous sommes déterminés à aider les gens à découvrir tout le potentiel de leur monde intérieur. Nous espérons que notre site sera une ressource précieuse pour tous ceux qui cherchent à mieux comprendre eux-mêmes et leur subconscient.
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.title {
    font-size: xx-large;
    font-weight: bold;
    color: rgb(20, 88, 112);
}
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    text-align: center;
    margin-left: 10%;
}
.text {
    font-family: medium;
}
.container-card {
    display: flex;
    margin-left: 10%;
    margin-right: 10%;
    .card {
        width: 300px;
        height: 600px;
    }
}
.space {
    margin-right: 10%;
}
</style>
