"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Head from "next/head";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { GraduationCap, Link as LinkIcon, Newspaper, FileText, Target } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const PROFILE = {
    name: "Soham Ghosh",
    title: "Research Scientist",
    org: "Mistral AI",
    email: "ghosh.soham@gmail.com",
    scholarUrl: "https://scholar.google.com/citations?user=QkZ8ZHEAAAAJ&hl=en",
    linkedInUrl: "https://www.linkedin.com/in/sohamghosh121/",
    summary: (
      <>
        I am a Research Scientist at <b>Mistral AI</b> working on open-source multimodal large language models such as {" "}
        <a
          href="https://mistral.ai/news/pixtral-12b"
          className="underline underline-offset-4 hover:no-underline"
          target="_blank"
          rel="noreferrer"
        >
          Pixtral
        </a>{" "}
        and {" "}
        <a
          href="https://mistral.ai/news/voxtral"
          className="underline underline-offset-4 hover:no-underline"
          target="_blank"
          rel="noreferrer"
        >
          Voxtral
        </a>.
        Previously, I worked at <b>Google Deepmind</b> on research into improving audio-visual representation learning with language supervision.
        During my Masters in <b>Carnegie Mellon University</b> I was fortunate to work with {" "}
        <a
          href="https://miis.cs.cmu.edu/people/222215651/alexander-hauptmann"
          className="underline underline-offset-4 hover:no-underline"
          target="_blank"
          rel="noreferrer"
        >
          Alexander Hauptmann
        </a>{" "}
        on video-language grounding and {" "}
        <a
          href="https://www.cs.cmu.edu/~rsalakhu/people.html"
          className="underline underline-offset-4 hover:no-underline"
          target="_blank"
          rel="noreferrer"
        >
          Ruslan Salakhutdinov
        </a>{" "}
        on meta reinforcement learning.
        I completed my undergraduate studies at <b>Nanyang Technological University</b>, where I was a recipient of Nanyang Scholarship and the President&#39;s Scholarship for Research and am thankful for being advised by {" "}
        <a
          href="https://www.dauwelslab.com/justin-dauwels"
          className="underline underline-offset-4 hover:no-underline"
          target="_blank"
          rel="noreferrer"
        >
          Justin Dauwels
        </a>{" "}
        and {" "}
        <a
          href="https://personal.ntu.edu.sg/AdamsKong/"
          className="underline underline-offset-4 hover:no-underline"
          target="_blank"
          rel="noreferrer"
        >
          Adams Kong
        </a>.
      </>
    ),
    mission: "Building artificial general intelligence that is able to perceive, understand and interact with us in natural ways and augment our own abilities.",
    interests: [
      "Vision-Language Models",
      "Audio LLMs",
      "Representation Learning",
      "Reinforcement Learning",
    ],
    profileImage: "/profile.jpg",
  };

const EDUCATION = [
  {
    school: "Carnegie Mellon University (School of Computer Science)",
    degree: "M.S.",
    field: "Computational Data Science (Analytics)",
    years: "2017 – 2018",
    details: "CGPA: 4.03/4.33. Courses: Probabilistic Graphical Models, Deep RL, Large-Scale ML, Advanced Multimodal ML. Teaching Assistant for Introduction to Machine Learning and Introduction to Deep Learning.",
    logo: "/logos/cmu.png",
  },
  {
    school: "Nanyang Technological University",
    degree: "B.Eng. & M.Sc.",
    field: "Engineering Science (Computer Science), Technology Management",
    years: "2012 – 2016",
    details: "First Class Honours, Nanyang Scholarship, President’s Research Scholar. CGPA: 4.75/5.0.",
    logo: "/logos/ntu.png",
  },
];

// Optional PDF links can be added per paper via the `pdf` field (file placed under public/pubs/...)
const PUBLICATIONS = [
  {
    title: "Voxtral",
    authors: "Mistral AI team",
    venue: "arXiv",
    year: "2025",
    link: "https://arxiv.org/abs/2507.13264",
    summary: "Voxtral Mini and Small are audio-chat multimodal models that understand speech and text, offering state-of-the-art performance on audio tasks with up to 40-minute audio context.",
    image: "/pubs/voxtral.png",
  },
  {
    title: "Pixtral 12B",
    authors: "Mistral AI team",
    venue: "arXiv",
    year: "2024",
    link: "https://arxiv.org/abs/2410.07073",
    summary: "Pixtral-12B is a 12B-parameter multimodal model combining vision-language understanding with text generation, achieving leading performance on multimodal benchmarks.",
    image: "/pubs/pixtral.png",
  },
  {
    title: "TIPS: Text-Image Pretraining with Spatial Awareness",
    authors: "K.K. Maninis, K. Chen, S. Ghosh*, A. Karpur, K. Chen, Y. Xia, B. Cao, D. Salz, …",
    venue: "arXiv",
    year: "2024",
    link: "https://arxiv.org/abs/2410.16512",
    summary: "TIPS improves spatial reasoning in image-text models by blending contrastive learning with masked image modeling, yielding strong performance on dense and global vision tasks.",
    image: "/pubs/tips.png",
  },
  {
    title: "ConDense: Consistent 2D/3D Pre-training for Dense and Sparse Features from Multi-View Images",
    authors: "X. Zhang, Z. Wang, H. Zhou, S. Ghosh*, D. Gnanapragasam, V. Jampani, H. Su, …",
    venue: "ECCV",
    year: "2024",
    summary: "ConDense jointly learns 2D and 3D representations using a NeRF-like pipeline, ensuring consistent dense and sparse features across views.",
    image: "/pubs/condense.png",
  },
  {
    title: "VideoCoCa: Video-text modeling with zero-shot transfer from contrastive captioners",
    authors: "S. Yan, T. Zhu, Z. Wang, Y. Cao, M. Zhang, S. Ghosh*, Y. Wu, J. Yu",
    venue: "arXiv",
    year: "2022",
    link: "https://arxiv.org/abs/2212.04979",
    summary: "VideoCoCa adapts CoCa to video-text tasks, enabling zero-shot video classification, retrieval, and QA with minimal additional training.",
    image: "/pubs/videococa.png",
  },
  {
    title: "Concurrent Meta Reinforcement Learning",
    authors: "E. Parisotto, S. Ghosh*, S.B. Yalamanchi, V. Chinnaobireddy, Y. Wu, …",
    venue: "arXiv",
    year: "2019",
    link: "https://arxiv.org/abs/1903.02710",
    summary: "This work proposes a concurrent meta-RL framework that learns multiple tasks simultaneously, improving sample efficiency and generalization.",
    image: "/pubs/cmrl.png",
  },
  {
    title: "Extractive Clip Localization using Natural Language Descriptions",
    authors: "S. Ghosh*, A. Agarwal, Z. Parekh, A. Hauptmann",
    venue: "ACL",
    year: "2019",
    link: "https://aclanthology.org/N19-1198/",
    summary: "Presents a method for localizing video segments described by natural language, using alignment between text and temporal visual features.",
    image: "/pubs/excl.png",
  },
  {
    title: "Denoising Autoencoders for Fast Real-time Traffic Estimation on Urban Road Networks",
    authors: "S. Ghosh*, M.T. Asif, L. Wynter",
    venue: "IEEE CDC",
    year: "2017",
    link: "https://ieeexplore.ieee.org/document/8264610/",
    pdf: "/pubs/dae-traffic.pdf",
    summary: "Uses denoising autoencoders to rapidly estimate real-time traffic states on large urban road networks from incomplete sensor data.",
    image: "/pubs/dae-traffic.png",
  },
  {
    title: "Tattoo Detection based on CNN and Remarks on the NIST Database",
    authors: "Q. Xu, S. Ghosh*, X. Xu, Y. Huang, A.W.K. Kong",
    venue: "ICB",
    year: "2016",
    link: "https://ieeexplore.ieee.org/document/7550050",
    summary: "Develops a CNN-based approach for tattoo detection in images, with analysis of the NIST tattoo image database.",
    image: "/pubs/tattoo.png",
    pdf: "/pubs/tattoo.pdf",
  },
  {
    title: "Evaluation of Smart-phone Performance for Real-time Traffic Prediction",
    authors: "R. Ansar, P. Sarampakhul, S. Ghosh*, N. Mitrovic, M.T. Asif, J. Dauwels, …",
    venue: "IEEE ITSC",
    year: "2014",
    link: "https://ieeexplore.ieee.org/document/6958173",
    pdf: "/pubs/traffic-prediction.pdf",
    summary: "Evaluates smartphones’ capability to perform real-time traffic prediction, highlighting feasibility and constraints for mobile deployment.",
    image: "/pubs/traffic-pred.png",
  },
];

type FadeInProps = React.PropsWithChildren<{ delay?: number }>;
const FadeIn: React.FC<FadeInProps> = ({ delay = 0, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    {children}
  </motion.div>
);

type LinkButtonProps = {
  href: string;
  label: string;
  icon?: React.ReactNode;
};
const LinkButton: React.FC<LinkButtonProps> = ({ href, label, icon }) => (
  <Button asChild className="rounded-2xl">
    <a href={href} target="_blank" rel="noreferrer noopener" aria-label={label}>
      <span className="inline-flex items-center gap-2">
        {icon}
        {label}
      </span>
    </a>
  </Button>
);

export default function PersonalWebsite() {
  return (
  <>
  <Head>
    <title>Soham Ghosh</title>
    <meta
      name="description"
      content="Portfolio of Soham Ghosh — Research Scientist at Mistral AI, working on multimodal large language models and AI research."
  />
  </Head>
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 text-foreground">
      <main className="mx-auto max-w-5xl px-5 py-10 sm:py-16">
        <FadeIn>
          <section className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-6">
              <Image src={PROFILE.profileImage} alt={PROFILE.name} width={200} height={200} className="rounded-full border-4 border-primary object-cover" />
              <div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{PROFILE.name}</h1>
                <p className="mt-1 text-lg text-muted-foreground">{PROFILE.title} · {PROFILE.org}</p>
                <p className="mt-3 max-w-2xl leading-relaxed">{PROFILE.summary}</p>
                <p className="mt-3 max-w-2xl leading-relaxed">The best way to reach me is through <code>{PROFILE.email}</code></p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {PROFILE.interests.map((tag) => (
                    <Badge key={tag} variant="secondary" className="rounded-xl px-3 py-1">{tag}</Badge>
                  ))}
                </div>
                <div className="flex gap-3 mt-4">
                  <LinkButton href={PROFILE.scholarUrl} label="Google Scholar" icon={<GraduationCap className="h-4 w-4" />} />
                  <LinkButton href={PROFILE.linkedInUrl} label="LinkedIn" icon={<LinkIcon className="h-4 w-4" />} />
                </div>
                <div className="mt-4 p-4 border rounded-xl bg-card flex gap-2 items-start hover:shadow-md transition">
                  <Target className="h-5 w-5 mt-0.5 text-primary" />
                  <p className="text-sm leading-relaxed"><strong>Mission:</strong> {PROFILE.mission}</p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <Separator className="my-10" />

        {/* Education */}
        <FadeIn delay={0.03}>
          <section>
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <GraduationCap className="h-5 w-5" /> Education
            </h2>
            <ul className="space-y-3">
              {EDUCATION.map((e) => (
                <li key={`${e.school}-${e.years}`} className="rounded-xl border bg-card p-4 flex gap-4 items-center hover:shadow-md transition">
                  <Image src={e.logo} alt={e.school} width={48} height={48} className="rounded-md object-contain bg-white" />
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="font-medium">{e.school}</div>
                      <span className="text-xs rounded-full border px-2 py-0.5 text-muted-foreground">{e.years}</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {e.degree}{e.field ? ` · ${e.field}` : ""}
                    </div>
                    {e.details && <div className="mt-1 text-sm">{e.details}</div>}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </FadeIn>

        <FadeIn delay={0.1}>
          <section className="mt-10">
            <div className="mb-4 flex items-center gap-2"><Newspaper className="h-5 w-5" /><h2 className="text-2xl font-semibold">Publications</h2></div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
              {PUBLICATIONS.map((paper) => (
                <Card key={paper.title} className="rounded-xl shadow-sm hover:shadow-md transition h-full flex flex-col">
                  <CardContent className="p-4 space-y-2 flex-1 flex flex-col">
                    <div className="w-full aspect-video overflow-hidden rounded-md bg-muted">
                      <Image src={paper.image} alt={paper.title} width={800} height={450} className="h-full w-full object-cover" />
                    </div>
                    <a href={paper.link} target="_blank" rel="noreferrer" className="font-medium underline-offset-4 hover:underline line-clamp-2 mt-1">{paper.title}</a>
                    <p className="text-xs text-muted-foreground line-clamp-2">{paper.authors}</p>
                    <p className="text-sm flex-1">{paper.summary}</p>
                    <div className="mt-1 flex items-center justify-between gap-2">
                      <Badge variant="outline">{paper.venue} {paper.year}</Badge>
                      {paper.pdf && (
                        <a href={paper.pdf} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs underline underline-offset-4 hover:no-underline">
                          <FileText className="h-3.5 w-3.5" /> PDF
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </FadeIn>
      </main>
    </div>
    </>
  );
}
