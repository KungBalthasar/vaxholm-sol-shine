import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import projectVaxholm from "@/assets/project-vaxholm.jpg";
import projectTaby from "@/assets/project-taby.jpg";
import projectResaro from "@/assets/project-resaro.jpg";

type ProjectType = "Hem" | "BRF" | "Företag";

interface Project {
  image: string;
  location: string;
  year: string;
  type: ProjectType;
  battery: boolean;
  roofType: string;
  panelType: string;
}

const projects: Project[] = [
  {
    image: projectVaxholm,
    location: "Vaxholm",
    year: "2024",
    type: "Hem",
    battery: true,
    roofType: "Tegeltak",
    panelType: "Premium Black 400W",
  },
  {
    image: projectTaby,
    location: "Täby",
    year: "2024",
    type: "Hem",
    battery: true,
    roofType: "Betongpannor",
    panelType: "Premium Black 400W",
  },
  {
    image: projectResaro,
    location: "Resarö",
    year: "2024",
    type: "Företag",
    battery: true,
    roofType: "Plåttak",
    panelType: "Commercial 500W",
  },
];

export const ProjectGallery = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<ProjectType | "Alla" | "Med batteri">("Alla");

  const filteredProjects = projects.filter((project) => {
    if (filter === "Alla") return true;
    if (filter === "Med batteri") return project.battery;
    return project.type === filter;
  });

  return (
    <section id="projekt" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-foreground mb-4">Våra projekt</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Utvalda installationer runt Vaxholm
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {(["Alla", "Hem", "BRF", "Företag", "Med batteri"] as const).map((filterOption) => (
              <Button
                key={filterOption}
                variant={filter === filterOption ? "default" : "outline"}
                onClick={() => setFilter(filterOption)}
                className={filter === filterOption ? "bg-primary text-primary-foreground" : ""}
              >
                {filterOption}
              </Button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden cursor-pointer hover:shadow-card-hover transition-all duration-300 group"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={project.image}
                  alt={`Solcellsinstallation i ${project.location}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {project.battery && (
                  <div className="absolute top-3 right-3 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    Med batteri
                  </div>
                )}
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-foreground">{project.location}</h4>
                  <span className="text-sm text-muted-foreground">{project.year}</span>
                </div>
                <div className="flex items-center justify-end text-sm">
                  <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
                    {project.type}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Lightbox Dialog */}
        <Dialog open={selectedProject !== null} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-4xl p-0">
            {selectedProject && (
              <div className="relative">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-10 bg-background/80 backdrop-blur-sm rounded-full p-2 hover:bg-background transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                
                <img
                  src={selectedProject.image}
                  alt={`Solcellsinstallation i ${selectedProject.location}`}
                  className="w-full h-auto"
                />
                
                <div className="p-6 md:p-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-2xl font-semibold mb-4">{selectedProject.location}</h3>
                      <div className="space-y-2 text-muted-foreground">
                        <p>
                          <strong className="text-foreground">Paneltyp:</strong> {selectedProject.panelType}
                        </p>
                        <p>
                          <strong className="text-foreground">Taktyp:</strong> {selectedProject.roofType}
                        </p>
                      </div>
                    </div>
                    <div className="space-y-2 text-muted-foreground">
                      <p>
                        <strong className="text-foreground">Typ:</strong> {selectedProject.type}
                      </p>
                      <p>
                        <strong className="text-foreground">Installation:</strong> {selectedProject.year}
                      </p>
                      <p>
                        <strong className="text-foreground">Batterilagring:</strong>{" "}
                        {selectedProject.battery ? "Ja" : "Nej"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};
