import './Projects.css';
import ProjectCard from '../ProjectCard/Projectcard';

function Projects(props) {
    return <div className="Projects">
        <h1>Projects</h1>
        <ProjectCard image="./project_image_1.png" title="BEWAKOOF.COM CLONE" desc="Online Shopping Site for Men, Women & Accessories. Choose from the best in Men Clothing and Women Fashion Wear. Trendiest designs and styles available at Bewakoof.com. Select from a diverse range of clothes online. Shop from the best online shopping site for clothes. Free Shipping, Easy Returns, COD Available!" type="A collaborative project, built in 5 days by a team of 4 developers." tech_stack={["HTML", "CSS", "Javascript"]}  github_link="" website_link=""/>
        <ProjectCard image="./project_image_2.png" title="ASOS.COM CLONE" desc="Shop for the latest fashion styles and trends for men and women at ASOS. Discover our range of men's and women's clothes, accessories, beauty, activewear, shoes, bags, watches and more." type="A collaborative project, built in 5 days by a team of 5 developers." tech_stack={["HTML", "CSS", "Javascript"]}  github_link="" website_link=""/>
    </div>
}

export default Projects;