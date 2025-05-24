'use client'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { ThemeToggle } from '@/components/ThemeToggle'
import { profile } from '@/data/profile'

export default function Home() {
  const openWhatsApp = () => {
    window.open(`https://wa.me/${profile.contact.whatsapp}?text=Halo%20Ikhbal`, '_blank')
  }

  return (
    <div className="min-h-screen transition-colors">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <Avatar className="border-2 border-primary">
              <AvatarImage src="/assets/avatar.jpg" />
              <AvatarFallback>MI</AvatarFallback>
            </Avatar>
            <h1 className="text-lg font-bold dark:text-white">{profile.name}</h1>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button 
              onClick={openWhatsApp}
              className="bg-[#25D366] hover:bg-[#128C7E] text-white"
            >
              WhatsApp
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 text-center animate-fadein">
          <Avatar className="w-24 h-24 mx-auto mb-6 border-4 border-white dark:border-gray-800">
            <AvatarImage src="/assets/avatar.jpg" />
            <AvatarFallback>MI</AvatarFallback>
          </Avatar>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white">{profile.name}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">{profile.title}</p>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
            {profile.skills.map((skillGroup, index) => (
              <div key={index} className="flex flex-col items-center">
                <h3 className="font-medium text-sm text-gray-500 mb-1">{skillGroup.name}</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {skillGroup.items.map((skill, i) => (
                    <Badge 
                      key={i} 
                      variant="outline"
                      className="border-primary text-primary dark:border-blue-300 dark:text-blue-300 px-3 py-1"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">Portofolio Proyek</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {profile.projects.map((project) => (
            <Card 
              key={project.id} 
              className="hover:shadow-xl transition-all duration-300 dark:bg-gray-800 group overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardHeader>
                <CardTitle className="dark:text-white">{project.title}</CardTitle>
                <p className="text-sm text-gray-500">{project.category}</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
              </CardContent>
              <CardFooter className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <Badge key={i} variant="secondary">{tech}</Badge>
                ))}
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 dark:text-white">Hubungi Saya</h2>
          <div className="max-w-md mx-auto space-y-4">
            <p className="text-gray-600 dark:text-gray-300">
              <i className="fas fa-envelope mr-2"></i>
              {profile.contact.email}
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              <i className="fas fa-map-marker-alt mr-2"></i>
              {profile.contact.location}
            </p>
            <Button
              onClick={openWhatsApp}
              className="bg-[#25D366] hover:bg-[#128C7E] text-white mt-6 px-8 py-6 text-lg"
            >
              <i className="fab fa-whatsapp mr-2"></i>
              Chat via WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}