"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Tilt from "react-parallax-tilt";

import Container from "@/components/shared/Container";


const projects = [
  {
    title: "PRINCE'S JUKEBOX",
    description:
      "A modern music application with clean UI and interactive experience.",

    image:
      "/projects/jukebox.png",

    tech: [
      "React",
      "JavaScript",
      "Tailwind CSS",
    ],

    github:
      "https://github.com/princekushwaha542",

    live:
      "https://princesjukebox.netlify.app/",
  },


  {
    title: "HR Management System",

    description:
      "Employee management application with scalable backend architecture.",

    image:
      "/projects/hr.png",

    tech:[
      "React",
      "Node.js",
      "MongoDB",
    ],

    github:
      "https://github.com/princekushwaha542",

    live:"#",
  },


  {
    title:"Backend Hub",

    description:
      "Collection of backend APIs, authentication and server projects.",

    image:
      "/projects/backend.png",

    tech:[
      "Node.js",
      "Express",
      "MongoDB",
    ],

    github:
      "https://github.com/princekushwaha542",

    live:"#",
  },
];



export default function Projects(){

return (

<section
id="projects"
className="py-32"
>

<Container>


<div className="mb-16">


<p className="
mb-4
text-cyan-400
">
Projects
</p>


<h2 className="
text-4xl
font-bold
sm:text-6xl
">
Featured Work
</h2>


</div>



<div
className="
grid
gap-10
md:grid-cols-2
lg:grid-cols-3
"
>


{
projects.map((project,index)=>(


<motion.div

key={project.title}

initial={{
opacity:0,
y:60,
}}

whileInView={{
opacity:1,
y:0,
}}

viewport={{
once:true,
}}

transition={{
delay:index*0.15,
}}


>


<Tilt

tiltMaxAngleX={8}

tiltMaxAngleY={8}

scale={1.03}

transitionSpeed={1500}


className="
rounded-3xl
"

>


<article

className="
overflow-hidden
rounded-3xl
border
border-white/10
bg-white/5
backdrop-blur-xl
"


>


<div
className="
group
relative
h-52
overflow-hidden
"
>


<div
  className="
  flex
  h-full
  w-full
  items-center
  justify-center
  bg-gradient-to-br
  from-cyan-500/20
  to-purple-500/20
  "
>
  <span className="text-6xl font-bold text-white/20">
    {project.title.charAt(0)}
  </span>
</div>


<div

className="
absolute
inset-0
bg-gradient-to-t
from-black/70
to-transparent
"

/>


</div>




<div
className="
p-6
"
>


<h3

className="
text-2xl
font-bold
"

>

{project.title}

</h3>



<p
className="
mt-3
text-sm
text-slate-400
"
>

{project.description}

</p>




<div

className="
mt-5
flex
flex-wrap
gap-2
"

>

{
project.tech.map((item)=>(


<span

key={item}

className="
rounded-full
border
border-white/10
px-3
py-1
text-xs
text-slate-300
"

>

{item}

</span>


))
}

</div>





<div
className="
mt-7
flex
gap-5
"
>


<a

href={project.github}

target="_blank"

className="
text-sm
text-slate-300
hover:text-cyan-400
"

>

Github

</a>



<a

href={project.live}

target="_blank"

className="
flex
items-center
gap-2
text-sm
text-slate-300
hover:text-cyan-400
"

>

<ExternalLink size={16}/>

Live

</a>



</div>


</div>


</article>


</Tilt>


</motion.div>


))
}



</div>


</Container>


</section>

);

}