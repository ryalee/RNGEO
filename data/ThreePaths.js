import {
  Leaf,
  Users,
  Shield,
  Droplets,
  Recycle,
  Sun,
  Factory,
  Heart,
  Handshake,
  GraduationCap,
  ClipboardCheck,
  Scale,
  FileCheck,
  Database,
  Eye,
} from "lucide-react";

export const paths = [
  {
    id: "environmental",
    letter: "E",
    title: "Environmental",
    subtitle: "Cuidar do planeta é cuidar do negócio",
    // color: "#80bc57",
    items: [
      { icon: Factory, text: "Redução da pegada de carbono" },
      { icon: Recycle, text: "Gestão inteligente de resíduos" },
      { icon: Sun, text: "Uso eficiente de energia e água" },
      { icon: Droplets, text: "Monitoramento ambiental tecnológico" },
      { icon: Recycle, text: "Economia circular" },
      { icon: Eye, text: "Transparência ambiental" }
    ],
    highlight: "Sustentabilidade ambiental é inovação, eficiência e valor."
  },
  {
    id: "social",
    letter: "S",
    title: "Social",
    subtitle: "O impacto nas pessoas importa",
    // color: "",
    items: [
      { icon: Heart, text: "Condições dignas de trabalho" },
      { icon: Users, text: "Diversidade e inclusão" },
      { icon: Handshake, text: 'Relação ética com fornecedores' },
      { icon: Users, text: 'Engajamento comunitário' },
      { icon: Shield, text: 'Segurança e bem-estar' },
      { icon: GraduationCap, text: 'Educação e conscientização' }
    ],
    highlight: "Empresas fortes cuidam de pessoas fortes."
  },
  {
    id: "governance",
    letter: "G",
    title: "Governance",
    subtitle: "Transparência que gera confiança",
    // color: "#f5a623",
    items: [
      { icon: Scale, text: "Ética e integridade" },
      { icon: ClipboardCheck, text: "Conformidade regulatória" },
      { icon: Shield, text: "Gestão responsável" },
      { icon: FileCheck, text: 'Prestação de contas' },
      { icon: Eye, text: 'Processos claros e monitoráveis' },
      { icon: Database, text: 'Decisões baseadas em dados' }
    ],
    highlight: "Governança sólida é a base de negócios confiáveis e sustentáveis."
  }
]