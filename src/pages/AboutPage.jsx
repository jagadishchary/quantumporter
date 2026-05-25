
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Atom, Target, Users, Lightbulb } from 'lucide-react';

const teamMembers = [
  {
    name: 'Dr. Maya Chen',
    role: 'Chief Editor',
    initials: 'MC',
    color: 'bg-blue-500'
  },
  {
    name: 'Raj Patel',
    role: 'Senior Science Writer',
    initials: 'RP',
    color: 'bg-purple-500'
  },
  {
    name: 'Lucia Torres',
    role: 'Technology Correspondent',
    initials: 'LT',
    color: 'bg-cyan-500'
  },
  {
    name: 'Kwame Asante',
    role: 'Research Analyst',
    initials: 'KA',
    color: 'bg-emerald-500'
  }
];

const values = [
  {
    icon: Target,
    title: 'Accuracy first',
    description: 'We prioritize factual reporting and rigorous fact-checking in all our quantum science coverage.'
  },
  {
    icon: Lightbulb,
    title: 'Accessible insights',
    description: 'Making complex quantum concepts understandable for both experts and curious minds alike.'
  },
  {
    icon: Users,
    title: 'Community driven',
    description: 'Building a global community of quantum enthusiasts, researchers, and industry professionals.'
  }
];

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About - Quantumporter</title>
        <meta name="description" content="Learn about Quantumporter's mission to deliver accurate, accessible quantum science and technology news." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-3xl mx-auto text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
                  <Atom className="h-8 w-8 text-primary" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ letterSpacing: '-0.02em' }}>
                  About Quantumporter
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Quantumporter is your trusted source for quantum science and technology news. We bridge the gap between groundbreaking research and public understanding, delivering accurate, timely, and accessible coverage of the quantum revolution.
                </p>
              </motion.div>
            </div>
          </section>

          <section className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="max-w-3xl mx-auto mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Our mission</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  In an era where quantum technologies are transitioning from theoretical concepts to practical applications, staying informed is more crucial than ever. Quantumporter was founded to demystify quantum science and make it accessible to everyone—from researchers and industry professionals to students and curious minds.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We cover the full spectrum of quantum developments: from quantum computing breakthroughs and quantum communication advances to fundamental physics discoveries and emerging quantum technologies. Our team of experienced science writers and editors ensures every article meets the highest standards of accuracy and clarity.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our values</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                  {values.map((value, index) => (
                    <motion.div
                      key={value.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="h-full">
                        <CardHeader>
                          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                            <value.icon className="h-6 w-6 text-primary" />
                          </div>
                          <h3 className="text-xl font-semibold">{value.title}</h3>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground">{value.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
                  {teamMembers.map((member, index) => (
                    <motion.div
                      key={member.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="text-center">
                        <CardHeader>
                          <div className={`w-20 h-20 ${member.color} rounded-xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4`}>
                            {member.initials}
                          </div>
                          <h3 className="font-semibold text-lg">{member.name}</h3>
                          <p className="text-sm text-muted-foreground">{member.role}</p>
                        </CardHeader>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
