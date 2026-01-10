import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
} from "recharts";
import {
  Leaf,
  Users,
  Shield,
  TrendingUp,
  TrendingDown,
  Droplets,
  Zap,
  Factory,
  TreePine,
  ArrowLeft,
  BarChart3,
  PieChartIcon,
  Activity,
  Target,
  CheckCircle2,
  Clock,
  AlertCircle,
  Sparkles,
} from "lucide-react";

// Colors based on new palette
const COLORS = {
  green: "#80BC57",
  greenLight: "#A8D47F",
  greenDark: "#5C9A32",
  blue: "#3D519F",
  blueLight: "#6B7FC7",
  blueDark: "#2A3B7A",
  teal: "#4FAFA8",
  gray: "#94A3B8",
};

// Mock data
const carbonData = [
  { month: "Jan", atual: 420, meta: 450 },
  { month: "Fev", atual: 398, meta: 440 },
  { month: "Mar", atual: 380, meta: 430 },
  { month: "Abr", atual: 365, meta: 420 },
  { month: "Mai", atual: 350, meta: 410 },
  { month: "Jun", atual: 332, meta: 400 },
];

const energyData = [
  { month: "Jan", renovável: 45, naoRenovável: 55 },
  { month: "Fev", renovável: 48, naoRenovável: 52 },
  { month: "Mar", renovável: 52, naoRenovável: 48 },
  { month: "Abr", renovável: 55, naoRenovável: 45 },
  { month: "Mai", renovável: 60, naoRenovável: 40 },
  { month: "Jun", renovável: 65, naoRenovável: 35 },
];

const wasteData = [
  { name: "Reciclado", value: 45, color: COLORS.green },
  { name: "Compostado", value: 20, color: COLORS.greenLight },
  { name: "Reutilizado", value: 15, color: COLORS.blue },
  { name: "Aterro", value: 20, color: COLORS.gray },
];

const esgScoreData = [
  { name: "Ambiental", value: 78, fill: COLORS.green },
  { name: "Social", value: 82, fill: COLORS.blue },
  { name: "Governança", value: 85, fill: COLORS.teal },
];

const kpis = [
  {
    title: "Emissão de CO₂",
    value: "250",
    unit: "ton",
    change: -12.5,
    icon: Factory,
    description: "vs. ano anterior",
    color: COLORS.green,
  },
  {
    title: "Consumo de Água",
    value: "1.2M",
    unit: "L",
    change: -8.3,
    icon: Droplets,
    description: "vs. ano anterior",
    color: COLORS.blue,
  },
  {
    title: "Energia Renovável",
    value: "65",
    unit: "%",
    change: 15.2,
    icon: Zap,
    description: "da matriz",
    color: COLORS.greenLight,
  },
  {
    title: "Áreas Preservadas",
    value: "150",
    unit: "ha",
    change: 5.0,
    icon: TreePine,
    description: "sob gestão",
    color: COLORS.teal,
  },
];

const esgActions = [
  {
    icon: Leaf,
    title: "Programa de Reflorestamento",
    status: "Em andamento",
    progress: 75,
    category: "E",
    color: COLORS.green,
  },
  {
    icon: Users,
    title: "Capacitação Comunitária",
    status: "Concluído",
    progress: 100,
    category: "S",
    color: COLORS.blue,
  },
  {
    icon: Shield,
    title: "Auditoria de Compliance",
    status: "Em andamento",
    progress: 60,
    category: "G",
    color: COLORS.teal,
  },
  {
    icon: Droplets,
    title: "Captação de Água da Chuva",
    status: "Planejado",
    progress: 25,
    category: "E",
    color: COLORS.blueLight,
  },
];

const monthlyMetrics = [
  { name: "Carbono", atual: 85, meta: 90 },
  { name: "Água", atual: 72, meta: 80 },
  { name: "Energia", atual: 65, meta: 70 },
  { name: "Resíduos", atual: 88, meta: 85 },
];

const Dashboard = () => {
  const totalScore = 82;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="container mx-auto px-3 sm:px-4 md:px-6">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <div className="flex items-center gap-2 sm:gap-4">
              <Link 
                to="/" 
                className="flex items-center gap-2 text-slate-500 hover:text-slate-800 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition-colors">
                  <ArrowLeft className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium hidden sm:inline">Voltar</span>
              </Link>
              <div className="w-px h-8 bg-slate-200 hidden sm:block" />
              <div className="flex items-center gap-2">
                <div 
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center shadow-lg"
                  style={{ background: `linear-gradient(135deg, ${COLORS.green} 0%, ${COLORS.greenDark} 100%)` }}
                >
                  <Leaf className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="hidden xs:block">
                  <span className="font-heading font-bold text-slate-800 text-base sm:text-lg">
                    RNGEO<span style={{ color: COLORS.green }}>+</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <div 
                className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-white text-xs sm:text-sm font-medium shadow-lg"
                style={{ background: `linear-gradient(135deg, ${COLORS.blue} 0%, ${COLORS.blueDark} 100%)` }}
              >
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Painel Demonstrativo</span>
                <span className="sm:hidden">Demo</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-3 sm:px-4 md:px-6 py-4 sm:py-8 md:py-12">
        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 sm:mb-10"
        >
          <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
            <div 
              className="w-1 h-6 sm:h-8 rounded-full"
              style={{ background: `linear-gradient(180deg, ${COLORS.green} 0%, ${COLORS.blue} 100%)` }}
            />
            <h1 className="font-heading text-xl sm:text-3xl md:text-4xl font-bold text-slate-800">
              Dashboard ESG
            </h1>
          </div>
          <p className="text-slate-500 text-sm sm:text-base md:text-lg ml-3 sm:ml-4">
            Indicadores ambientais, sociais e de governança
          </p>
        </motion.div>

        {/* Main Score + KPIs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {/* ESG Score Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-4 bg-white rounded-2xl sm:rounded-3xl shadow-xl shadow-slate-200/50 p-4 sm:p-6 border border-slate-100 overflow-hidden relative"
          >
            <div 
              className="absolute top-0 right-0 w-32 sm:w-40 h-32 sm:h-40 rounded-full opacity-10 blur-3xl"
              style={{ background: COLORS.green }}
            />
            <div className="relative">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <div>
                  <h3 className="font-heading font-bold text-slate-800 text-base sm:text-lg">
                    Score ESG Geral
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm">Performance consolidada</p>
                </div>
                <div 
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center"
                  style={{ background: `${COLORS.green}15` }}
                >
                  <Target className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: COLORS.green }} />
                </div>
              </div>

              <div className="flex items-center justify-center mb-4 sm:mb-6">
                <div className="relative w-32 h-32 sm:w-44 sm:h-44">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 176 176">
                    <circle
                      cx="88"
                      cy="88"
                      r="75"
                      fill="none"
                      stroke="#E2E8F0"
                      strokeWidth="12"
                    />
                    <circle
                      cx="88"
                      cy="88"
                      r="75"
                      fill="none"
                      stroke="url(#scoreGradient)"
                      strokeWidth="12"
                      strokeDasharray={`${(totalScore / 100) * 471} 471`}
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor={COLORS.green} />
                        <stop offset="100%" stopColor={COLORS.blue} />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="font-heading text-3xl sm:text-5xl font-bold text-slate-800">{totalScore}</span>
                    <span className="text-slate-500 text-xs sm:text-sm">de 100</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2 sm:space-y-3">
                {esgScoreData.map((item) => (
                  <div key={item.name} className="flex items-center gap-2 sm:gap-3">
                    <div 
                      className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full shrink-0"
                      style={{ background: item.fill }}
                    />
                    <span className="text-slate-600 text-xs sm:text-sm flex-1">{item.name}</span>
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <div className="w-14 sm:w-20 h-1.5 sm:h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full rounded-full transition-all duration-500"
                          style={{ width: `${item.value}%`, background: item.fill }}
                        />
                      </div>
                      <span className="font-semibold text-slate-800 text-xs sm:text-sm w-6 sm:w-8">{item.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* KPI Cards */}
          <div className="lg:col-span-8 grid grid-cols-2 gap-3 sm:gap-4">
            {kpis.map((kpi, index) => (
              <motion.div
                key={kpi.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + index * 0.05 }}
                className="bg-white rounded-xl sm:rounded-2xl shadow-lg shadow-slate-200/50 p-3 sm:p-5 border border-slate-100 hover:shadow-xl transition-shadow group"
              >
                <div className="flex items-center justify-between mb-2 sm:mb-4">
                  <div 
                    className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110"
                    style={{ background: `${kpi.color}15` }}
                  >
                    <kpi.icon className="w-4 h-4 sm:w-6 sm:h-6" style={{ color: kpi.color }} />
                  </div>
                </div>
                <p className="text-slate-500 text-[10px] sm:text-xs font-medium uppercase tracking-wide mb-0.5 sm:mb-1 truncate">{kpi.title}</p>
                <div className="flex items-baseline gap-1 sm:gap-1.5 mb-1 sm:mb-2">
                  <span className="font-heading text-xl sm:text-3xl font-bold text-slate-800">
                    {kpi.value}
                  </span>
                  <span className="text-slate-400 text-xs sm:text-sm font-medium">{kpi.unit}</span>
                </div>
                <div className="flex flex-wrap items-center gap-1 sm:gap-1.5">
                  <div
                    className={`flex items-center gap-0.5 sm:gap-1 text-[10px] sm:text-xs font-semibold px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full ${
                      kpi.change > 0 
                        ? "text-emerald-700 bg-emerald-50" 
                        : "text-emerald-700 bg-emerald-50"
                    }`}
                  >
                    {kpi.change > 0 ? (
                      <TrendingUp className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                    ) : (
                      <TrendingDown className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                    )}
                    {Math.abs(kpi.change)}%
                  </div>
                  <span className="text-slate-400 text-[10px] sm:text-xs hidden sm:inline">{kpi.description}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Charts Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {/* CO2 Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl sm:rounded-3xl shadow-xl shadow-slate-200/50 p-4 sm:p-6 border border-slate-100"
          >
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <div>
                <h3 className="font-heading font-bold text-slate-800 text-sm sm:text-lg">
                  Emissões de CO₂
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm">Evolução mensal vs. meta</p>
              </div>
              <div 
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center"
                style={{ background: `${COLORS.green}15` }}
              >
                <Activity className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: COLORS.green }} />
              </div>
            </div>
            <div className="h-48 sm:h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={carbonData} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorAtual" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor={COLORS.green} stopOpacity={0.3} />
                      <stop offset="95%" stopColor={COLORS.green} stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" vertical={false} />
                  <XAxis 
                    dataKey="month" 
                    stroke="#94A3B8" 
                    fontSize={10}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis 
                    stroke="#94A3B8" 
                    fontSize={10}
                    tickLine={false}
                    axisLine={false}
                    width={35}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#fff",
                      border: "none",
                      borderRadius: "12px",
                      boxShadow: "0 10px 40px -10px rgba(0,0,0,0.15)",
                      fontSize: "12px",
                      padding: "8px 12px",
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="meta"
                    stroke="#94A3B8"
                    strokeDasharray="6 4"
                    fill="none"
                    strokeWidth={2}
                    name="Meta"
                  />
                  <Area
                    type="monotone"
                    dataKey="atual"
                    stroke={COLORS.green}
                    fill="url(#colorAtual)"
                    strokeWidth={2}
                    name="Atual"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="flex items-center justify-center gap-4 sm:gap-8 mt-3 sm:mt-4">
              <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm">
                <div className="w-3 sm:w-4 h-0.5 sm:h-1 rounded-full" style={{ background: COLORS.green }} />
                <span className="text-slate-600">Atual</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm">
                <div className="w-3 sm:w-4 h-0.5 bg-slate-400" style={{ borderBottom: '1px dashed #94A3B8' }} />
                <span className="text-slate-600">Meta</span>
              </div>
            </div>
          </motion.div>

          {/* Energy Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="bg-white rounded-2xl sm:rounded-3xl shadow-xl shadow-slate-200/50 p-4 sm:p-6 border border-slate-100"
          >
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <div>
                <h3 className="font-heading font-bold text-slate-800 text-sm sm:text-lg">
                  Matriz Energética
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm">Uso de energia (%)</p>
              </div>
              <div 
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center"
                style={{ background: `${COLORS.blue}15` }}
              >
                <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: COLORS.blue }} />
              </div>
            </div>
            <div className="h-48 sm:h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={energyData} barGap={2} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" vertical={false} />
                  <XAxis 
                    dataKey="month" 
                    stroke="#94A3B8" 
                    fontSize={10}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis 
                    stroke="#94A3B8" 
                    fontSize={10}
                    tickLine={false}
                    axisLine={false}
                    width={35}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#fff",
                      border: "none",
                      borderRadius: "12px",
                      boxShadow: "0 10px 40px -10px rgba(0,0,0,0.15)",
                      fontSize: "12px",
                      padding: "8px 12px",
                    }}
                  />
                  <Bar
                    dataKey="renovável"
                    name="Renovável"
                    fill={COLORS.green}
                    radius={[6, 6, 0, 0]}
                  />
                  <Bar
                    dataKey="naoRenovável"
                    name="Não Renovável"
                    fill="#CBD5E1"
                    radius={[6, 6, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="flex items-center justify-center gap-4 sm:gap-8 mt-3 sm:mt-4">
              <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm">
                <div className="w-3 h-3 sm:w-4 sm:h-4 rounded" style={{ background: COLORS.green }} />
                <span className="text-slate-600">Renovável</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm">
                <div className="w-3 h-3 sm:w-4 sm:h-4 rounded bg-slate-300" />
                <span className="text-slate-600">Não Renovável</span>
              </div>
            </div>
          </motion.div>
        </div>


        {/* Charts Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {/* Waste Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-2xl sm:rounded-3xl shadow-xl shadow-slate-200/50 p-4 sm:p-6 border border-slate-100"
          >
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <div>
                <h3 className="font-heading font-bold text-slate-800 text-sm sm:text-lg">
                  Gestão de Resíduos
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm">Destinação por categoria</p>
              </div>
              <div 
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center"
                style={{ background: `${COLORS.teal}15` }}
              >
                <PieChartIcon className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: COLORS.teal }} />
              </div>
            </div>
            <div className="h-36 sm:h-48 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={wasteData}
                    cx="50%"
                    cy="50%"
                    innerRadius={35}
                    outerRadius={60}
                    paddingAngle={4}
                    dataKey="value"
                  >
                    {wasteData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#fff",
                      border: "none",
                      borderRadius: "12px",
                      boxShadow: "0 10px 40px -10px rgba(0,0,0,0.15)",
                      fontSize: "11px",
                      padding: "8px 12px",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-1.5 sm:gap-2 mt-3 sm:mt-4">
              {wasteData.map((item) => (
                <div key={item.name} className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm">
                  <div 
                    className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full shrink-0"
                    style={{ background: item.color }}
                  />
                  <span className="text-slate-600 truncate">{item.name}</span>
                  <span className="text-slate-800 font-semibold ml-auto">{item.value}%</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Monthly Progress */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="bg-white rounded-2xl sm:rounded-3xl shadow-xl shadow-slate-200/50 p-4 sm:p-6 border border-slate-100"
          >
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <div>
                <h3 className="font-heading font-bold text-slate-800 text-sm sm:text-lg">
                  Metas Mensais
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm">Progresso por indicador</p>
              </div>
              <div 
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center"
                style={{ background: `${COLORS.blue}15` }}
              >
                <Target className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: COLORS.blue }} />
              </div>
            </div>
            <div className="space-y-3 sm:space-y-5">
              {monthlyMetrics.map((metric, index) => {
                const percentage = (metric.atual / metric.meta) * 100;
                const isAbove = metric.atual >= metric.meta;
                return (
                  <div key={metric.name}>
                    <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                      <span className="text-slate-700 font-medium text-xs sm:text-sm">{metric.name}</span>
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <span className="text-slate-800 font-bold text-xs sm:text-sm">{metric.atual}</span>
                        <span className="text-slate-400 text-[10px] sm:text-xs">/ {metric.meta}</span>
                        {isAbove && <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-500" />}
                      </div>
                    </div>
                    <div className="h-2 sm:h-3 bg-slate-100 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${Math.min(percentage, 100)}%` }}
                        transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                        style={{ 
                          background: isAbove 
                            ? `linear-gradient(90deg, ${COLORS.green} 0%, ${COLORS.greenLight} 100%)`
                            : `linear-gradient(90deg, ${COLORS.blue} 0%, ${COLORS.blueLight} 100%)`
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* ESG Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-2xl sm:rounded-3xl shadow-xl shadow-slate-200/50 p-4 sm:p-6 border border-slate-100 md:col-span-2 lg:col-span-1"
          >
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <div>
                <h3 className="font-heading font-bold text-slate-800 text-sm sm:text-lg">
                  Ações ESG
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm">Projetos em andamento</p>
              </div>
              <div 
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center"
                style={{ background: `${COLORS.green}15` }}
              >
                <Leaf className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: COLORS.green }} />
              </div>
            </div>
            <div className="space-y-2 sm:space-y-4">
              {esgActions.map((action, index) => (
                <motion.div
                  key={action.title}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-xl hover:bg-slate-50 transition-colors"
                >
                  <div 
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: `${action.color}20` }}
                  >
                    <action.icon className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: action.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-slate-800 font-medium text-xs sm:text-sm truncate">{action.title}</p>
                    <div className="flex items-center gap-1.5 sm:gap-2 mt-0.5 sm:mt-1">
                      <div className="flex-1 h-1 sm:h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full rounded-full"
                          style={{ 
                            width: `${action.progress}%`,
                            background: action.color
                          }}
                        />
                      </div>
                      <span className="text-slate-500 text-[10px] sm:text-xs font-medium">{action.progress}%</span>
                    </div>
                  </div>
                  <div 
                    className="px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-lg text-[10px] sm:text-xs font-semibold shrink-0"
                    style={{ 
                      background: action.category === 'E' 
                        ? `${COLORS.green}15` 
                        : action.category === 'S' 
                        ? `${COLORS.blue}15` 
                        : `${COLORS.teal}15`,
                      color: action.category === 'E' 
                        ? COLORS.green 
                        : action.category === 'S' 
                        ? COLORS.blue 
                        : COLORS.teal
                    }}
                  >
                    {action.category}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-center py-6 sm:py-8"
        >
          <p className="text-slate-400 text-xs sm:text-sm mb-3 sm:mb-4">
            Este é um painel demonstrativo com dados simulados
          </p>
          <a href="/">
            <button 
              className="rounded-full px-6 sm:px-8 text-white shadow-lg hover:shadow-xl transition-all text-sm sm:text-base"
              style={{ background: `linear-gradient(135deg, ${COLORS.green} 0%, ${COLORS.greenDark} 100%)` }}
            >
              Conhecer nossas soluções
            </button>
          </a>
        </motion.div>
      </main>
    </div>
  );
};

export default Dashboard;