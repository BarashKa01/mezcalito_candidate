<script setup>
import CareerItem from "./CareerItem.vue";
import DocumentationIcon from "./icons/IconDocumentation.vue";
</script>

<template>
  <CareerItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Le truck de fou</template>
    <template #role>Projet personnel</template>
    <template #technology>Technologies : PHP/Symfony/Twig</template>
    <a target="_blank" href="https://letruckdefou.fr/">"Le truck de fou"</a>
    une plate-forme de commande spécialement conçue pour les restaurateurs
    ambulants souhaitant garder le contrôle sur leurs finances.
  </CareerItem>

  <CareerItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Laby by KYLI</template>
    <template #role>Développeur d'application front-end</template>
    <template #technology>Technologies : REALBasic</template>
    <a target="_blank" href="https://laby.io/">"Laby By KYLI"</a>
    est un LIMS (Laboratory Information Management System) conçu par des
    scientifiques pour les scientifiques.
  </CareerItem>

  <CareerItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Proxiel</template>
    <template #role>Technicien informatique et réseaux</template>
    <template #technology>Stack et outils : Windows Server/Linux/GLPI</template>
    <a target="_blank" href="https://proxiel.com/">"Proxiel"</a>
    est une ESN locale disposant d'un large spectre d'actions et de services.
  </CareerItem>

  <CareerItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Royal Canin</template>
    <template #role>Technicien informatique hardware</template>
    <template #technology>Stack et outils : Outils propriétaires</template>
    Report d'incidents, accueil utilisateur front-office, gestion téléphonie IP, préparation/réparation de poste informatique
  </CareerItem>

  <CareerItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>WEDA</template>
    <template #role>Technicien support niveau 2</template>
    <template #technology>Stack et outils : Outils propriétaires</template>
    <a target="_blank" href="https://weda.fr/">"WEDA"</a>
    Logiciel médical en ligne.
  </CareerItem>

  <CareerItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>IC Distribution</template>
    <template #role>Brasseur/cableur pour les data-center de IBM</template>
    <a target="_blank" href="http://www.ic-distribution.fr/">"IC Distribution"</a>
  </CareerItem>

  <CareerItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>SMS Languedoc</template>
    <template #role>Technicien alarmes et vidéosurveillance</template>
  </CareerItem>
</template>