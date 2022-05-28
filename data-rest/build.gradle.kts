plugins {
    id("demo.java-library-conventions")
}
repositories {
    mavenLocal()
}

dependencies {
    // get recommended versions from the platform project
    api(platform(project(":java-platform-bom")))
    // implementation("org.springframework.data:spring-data-jpa")
    // implementation("org.springframework.boot:spring-boot-starter")
    // implementation("org.springframework.boot:spring-boot")
    //implementation("org.springframework.boot:spring-boot-starter-data-rest")
    implementation("javax.persistence:javax.persistence-api")
    implementation("org.springframework.boot:spring-boot-starter-data-rest")


}