"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import {
  Mail,
  Phone,
  Linkedin,
  MapPin,
  Calendar,
  ExternalLink,
  GraduationCap,
  Briefcase,
  Code,
  BarChart3,
  Brain,
  Cloud,
  TrendingUp,
  DollarSign,
  Target,
  Zap,
  Award,
  Users,
  Activity,
  Rocket,
  Building,
  Globe,
  BookOpen,
  Trophy,
  Star,
  Shield,
  Github,
  Menu,
  X,
} from "lucide-react"
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts"
import { Button } from "/Users/veershah/Downloads/portfolio/veer-portfolio/src/components/ui/button.tsx"
import { Card, CardContent } from "/Users/veershah/Downloads/portfolio/veer-portfolio/src/components/ui/card.tsx"
import { Badge } from "/Users/veershah/Downloads/portfolio/veer-portfolio/src/components/ui/badge.tsx"

export default function Portfolio() {
  const [counters, setCounters] = useState({
    yearsExperience: 0,
    projectsCompleted: 0,
    technologiesUsed: 0,
    publications: 0,
  })
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Animated counters effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setCounters({
        yearsExperience: 3,
        projectsCompleted: 15,
        technologiesUsed: 20,
        publications: 3,
      })
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  // Navigation items
  const navigation = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ]

  // Portfolio data
  const experiences = [
    {
      title: "Data Engineer Summer Analyst",
      company: "UBS",
      division: "Investment Banking Group",
      location: "Weehawken, NJ",
      period: "Jun 2025 – Aug 2025",
      type: "Finance",
      icon: Building,
      description:
        "Developed machine learning models for hedge fund risk classification, directly supporting investment banking decisions and portfolio risk management strategies.",
      achievements: [
        "Enhanced risk assessment capabilities for investment banking decisions by 25%",
        "Built scalable data pipelines using Databricks and PySpark for real-time hedge fund analysis",
        "Implemented MLflow for model tracking and performance monitoring across financial datasets",
        "Analyzed macroeconomic indicators and historical performance data for predictive modeling",
      ],
      skills: [
        "Python",
        "Machine Learning",
        "Databricks",
        "PySpark",
        "MLflow",
        "Financial Modeling",
        "Risk Assessment",
      ],
      impact: "25% improvement in risk assessment accuracy",
      businessValue: "Enhanced investment decision-making process",
    },
    {
      title: "Data Analyst Intern",
      company: "Vinson & Elkins LLP",
      division: "Legal Technology",
      location: "New York, NY",
      period: "Jun 2024 – Jul 2024",
      type: "Corporate",
      icon: Briefcase,
      description:
        "Optimized data infrastructure and automated legal data processing, delivering significant operational cost savings and efficiency improvements.",
      achievements: [
        "Reduced system downtime by 40% and increased data processing efficiency by 25%",
        "Delivered $5,000 in annual operational cost savings through process optimization",
        "Built Python-based ETL pipelines reducing processing time by 35%",
        "Transformed unstructured legal and billing data into actionable business insights",
      ],
      skills: ["Python", "ETL", "Data Pipelines", "Process Optimization", "Cost Reduction"],
      impact: "$5,000 annual cost savings",
      businessValue: "40% reduction in system downtime",
    },
    {
      title: "Research Assistant",
      company: "Yale University",
      division: "School of Medicine",
      location: "New Haven, CT",
      period: "Jun 2022 – Sept 2023",
      type: "Research",
      icon: GraduationCap,
      description:
        "Led data science initiatives in medical research, publishing peer-reviewed papers and developing automated analytics solutions for healthcare applications.",
      achievements: [
        "Published 3 research papers contributing to pediatric data analysis advancements",
        "Automated data pipelines reducing analysis time by 25% for medical teams",
        "Developed machine learning models for special education youth analysis",
        "Created visualization dashboards enabling clearer insights across local hospitals",
      ],
      skills: ["Python", "R", "Data Science", "Medical Research", "Machine Learning", "NLP", "Statistical Analysis"],
      impact: "3 published research papers",
      businessValue: "25% faster medical data analysis",
    },
  ]

  const projects = [
    {
      title: "ResumeForge",
      subtitle: "AI-Powered Resume Optimization Platform",
      period: "Jan 2025 - Mar 2025",
      description:
        "Full-stack web application leveraging advanced NLP and transformer models to provide intelligent resume analysis and optimization suggestions.",
      technologies: ["Python", "Dash", "NLP", "Transformers", "SpaCy", "NLTK", "HuggingFace"],
      highlights: [
        "Real-time AI-driven content optimization and skill extraction",
        "Job description alignment using transformer models",
        "Bootstrap Components for responsive user interface",
      ],
      icon: Brain,
      githubUrl: "https://github.com/veersh31/ResumeForge",
      liveUrl: null,
    },
    {
      title: "Stock Dashboard",
      subtitle: "Stock Market Analysis & Prediction Engine",
      period: "May 2024 – Jul 2024",
      description:
        "Comprehensive financial analytics platform integrating technical indicators, predictive modeling, and portfolio optimization for trading strategies.",
      technologies: ["Python", "R", "Machine Learning", "Yahoo Finance API", "Technical Analysis"],
      highlights: [
        "Advanced predictive modeling with RSI and MACD technical indicators",
        "Portfolio performance optimization and risk management algorithms",
        "Real-time market data integration and analysis",
      ],
      icon: TrendingUp,
      githubUrl: "https://github.com/veersh31/Stock-Dashboard",
      liveUrl: null,
    },
  ]

  const skills = {
    "Programming & Data": {
      skills: ["Python", "SQL", "R", "Java", "PySpark", "Pandas", "NumPy", "Scikit-learn"],
      icon: Code,
      color: "bg-blue-100 text-blue-800",
    },
    "Machine Learning & AI": {
      skills: [
        "MLflow",
        "HuggingFace Transformers",
        "NLP",
        "Predictive Modeling",
        "Feature Engineering",
        "Statistical Analysis",
      ],
      icon: Brain,
      color: "bg-purple-100 text-purple-800",
    },
    "Cloud & Infrastructure": {
      skills: ["AWS (EC2, Lambda, S3)", "Azure", "Databricks", "Docker", "Apache Spark", "Apache Airflow"],
      icon: Cloud,
      color: "bg-orange-100 text-orange-800",
    },
    "Visualization & BI": {
      skills: ["Tableau", "Power BI", "Dash", "Matplotlib", "Seaborn", "Financial Dashboards"],
      icon: BarChart3,
      color: "bg-indigo-100 text-indigo-800",
    },
    "Financial & Analytics": {
      skills: [
        "Financial Modeling",
        "Risk Assessment",
        "Portfolio Optimization",
        "Technical Analysis",
        "Quantitative Finance",
        "Investment Analytics",
      ],
      icon: DollarSign,
      color: "bg-green-100 text-green-800",
    },
    "Business & Strategy": {
      skills: [
        "ETL",
        "Data Warehousing",
        "Process Optimization",
        "Cost Reduction",
        "A/B Testing",
        "Business Intelligence",
      ],
      icon: Target,
      color: "bg-pink-100 text-pink-800",
    },
  }

  // Radar chart data for skills proficiency
  const radarData = [
    { skill: "Python", proficiency: 85, fullMark: 100 },
    { skill: "SQL", proficiency: 80, fullMark: 100 },
    { skill: "Data Engineering", proficiency: 75, fullMark: 100 },
    { skill: "Financial Modeling", proficiency: 70, fullMark: 100 },
    { skill: "Statistical Analysis", proficiency: 68, fullMark: 100 },
    { skill: "Machine Learning", proficiency: 65, fullMark: 100 },
    { skill: "Cloud Computing", proficiency: 65, fullMark: 100 },
    { skill: "Data Visualization", proficiency: 60, fullMark: 100 },
  ]

  const achievements = [
    { label: "Years of Experience", value: counters.yearsExperience, suffix: "+", icon: Calendar },
    { label: "Projects Completed", value: counters.projectsCompleted, suffix: "+", icon: Rocket },
    { label: "Technologies Mastered", value: counters.technologiesUsed, suffix: "+", icon: Code },
    { label: "Research Publications", value: counters.publications, suffix: "", icon: Award },
  ]

  const highlights = [
    {
      icon: Award,
      title: "Published Researcher",
      description: "3 peer-reviewed papers at Yale University School of Medicine",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Building,
      title: "Fortune 500 Experience",
      description: "Currently enhancing investment decisions at UBS",
      color: "from-green-500 to-blue-500",
    },
    {
      icon: Users,
      title: "Proven Leadership",
      description: "Eagle Scout with demonstrated service and character",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: TrendingUp,
      title: "Quantifiable Impact",
      description: "Delivered measurable results in every role",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: Globe,
      title: "Cross-Industry Expertise",
      description: "Finance, Healthcare, Legal Tech, and Research",
      color: "from-teal-500 to-cyan-500",
    },
    {
      icon: GraduationCap,
      title: "Academic Excellence",
      description: "3.84 GPA, Dean's List all years",
      color: "from-violet-500 to-purple-500",
    },
  ]

  const certifications = [
    {
      title: "Eagle Scout",
      organization: "Boy Scouts of America",
      date: "2019",
      description: "Highest achievement in Scouting, demonstrating leadership, service, and character",
      icon: Shield,
      color: "bg-green-100 text-green-800",
    },
    {
      title: "Dean's List",
      organization: "University of Washington",
      date: "All Years",
      description: "Consistent academic excellence with GPA above 3.5",
      icon: Star,
      color: "bg-blue-100 text-blue-800",
    },
    {
      title: "Published Researcher",
      organization: "Yale University School of Medicine",
      date: "2022-2023",
      description: "Co-authored 3 peer-reviewed research papers in pediatric data analysis",
      icon: BookOpen,
      color: "bg-purple-100 text-purple-800",
    },
    {
      title: "High Honor Roll",
      organization: "High School",
      date: "All Years",
      description: "Consistent academic achievement throughout secondary education",
      icon: Trophy,
      color: "bg-orange-100 text-orange-800",
    },
  ]

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "veersh731@gmail.com",
      href: "mailto:veersh731@gmail.com",
      action: "Send Email",
      gradient: "from-blue-600 to-indigo-600",
      bgGradient: "from-blue-50 to-indigo-50",
      borderColor: "border-blue-200",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "908-848-9568",
      href: "tel:+19088489568",
      action: "Call Now",
      gradient: "from-green-600 to-blue-600",
      bgGradient: "from-green-50 to-blue-50",
      borderColor: "border-green-200",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/veer-shah3",
      href: "https://www.linkedin.com/in/veer-shah3/",
      action: "Connect",
      gradient: "from-purple-600 to-pink-600",
      bgGradient: "from-purple-50 to-pink-50",
      borderColor: "border-purple-200",
    },
  ]

  const socialLinks = [
    { icon: Mail, href: "mailto:veersh731@gmail.com", label: "Email" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/veer-shah3/", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/veersh31", label: "GitHub" },
  ]

  const coursework = [
    "Statistics in Programming",
    "Database Management",
    "Statistical Computing",
    "Data Structures & Algorithms",
    "Data Science Methods",
  ]

  const badges = [
    { label: "Dean's List", variant: "secondary" as const },
    { label: "Eagle Scout", variant: "secondary" as const },
    { label: "3 Publications", variant: "secondary" as const },
  ]

  // Helper functions
  const getTypeColor = (type: string) => {
    switch (type) {
      case "Finance":
        return "bg-green-100 text-green-800"
      case "Corporate":
        return "bg-blue-100 text-blue-800"
      case "Research":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getIconColor = (type: string) => {
    switch (type) {
      case "Finance":
        return "bg-green-100 text-green-600"
      case "Corporate":
        return "bg-blue-100 text-blue-600"
      case "Research":
        return "bg-purple-100 text-purple-600"
      default:
        return "bg-gray-100 text-gray-600"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-slate-200/50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">VS</span>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                Veer Shah
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-slate-600 hover:text-blue-600 transition-all duration-300 font-medium relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </nav>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-slate-200">
              <div className="flex flex-col gap-4 pt-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-slate-600 hover:text-blue-600 transition-colors font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-600/5"></div>
        <div className="container mx-auto text-center relative">
          <div className="max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Rocket className="h-4 w-4" />
              Open to Data Science & Analytics Opportunities
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
                Aspiring Data
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Scientist
              </span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-slate-600 mb-8 leading-relaxed max-w-4xl mx-auto">
              Transforming complex data into actionable insights through advanced analytics, machine learning, and
              statistical modeling.
              <span className="font-semibold text-slate-800">
                {" "}
                Currently enhancing investment banking decisions at UBS.
              </span>
            </p>

            {/* Achievement Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 max-w-4xl mx-auto">
              {achievements.map((achievement, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-4 md:p-6 text-center">
                    <achievement.icon className="h-6 w-6 md:h-8 md:w-8 text-blue-600 mx-auto mb-3" />
                    <div className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-800 mb-1">
                      {achievement.value.toLocaleString()}
                      {achievement.suffix}
                    </div>
                    <div className="text-xs md:text-sm text-slate-600 font-medium">{achievement.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="shadow-lg hover:shadow-xl transition-all duration-300">
                <Link href="mailto:veersh731@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Let's Connect
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-white text-slate-700 border-slate-300 hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <Link href="https://github.com/veersh31" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  View GitHub
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Current Status Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">Current Status</h2>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="p-6 text-center">
                  <Rocket className="h-8 w-8 mx-auto mb-4 text-green-300" />
                  <h3 className="text-xl font-semibold mb-2">Currently Working</h3>
                  <p className="text-sm opacity-90 mb-2">Data Engineer Summer Analyst at UBS</p>
                  <span className="px-2 py-1 bg-green-500/20 text-green-300 border border-green-300/30 rounded-full text-sm">
                    Active
                  </span>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="p-6 text-center">
                  <Calendar className="h-8 w-8 mx-auto mb-4 text-blue-300" />
                  <h3 className="text-xl font-semibold mb-2">Graduating Soon</h3>
                  <p className="text-sm opacity-90 mb-2">BS Data Science - March 2026</p>
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-300 border border-blue-300/30 rounded-full text-sm">
                    8 Months
                  </span>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="p-6 text-center">
                  <Award className="h-8 w-8 mx-auto mb-4 text-purple-300" />
                  <h3 className="text-xl font-semibold mb-2">Job Seeking</h3>
                  <p className="text-sm opacity-90 mb-2">Full-time Data Science roles</p>
                  <span className="px-2 py-1 bg-purple-500/20 text-purple-300 border border-purple-300/30 rounded-full text-sm">
                    Available
                  </span>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <p className="text-lg opacity-90">
                🚀 Ready to make an immediate impact with proven experience and fresh perspectives
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
                Bridging <span className="text-blue-600">Technology</span> &{" "}
                <span className="text-indigo-600">Analytics</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Combining technical expertise with analytical thinking to solve complex data challenges
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-slate-600 leading-relaxed">
                  I'm an aspiring data scientist with hands-on experience spanning{" "}
                  <strong>machine learning, data engineering, and statistical modeling</strong>. My journey includes
                  investment banking analytics, medical research, and legal tech, giving me a versatile perspective on
                  applying data science across industries.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  I excel at <strong>transforming complex data into actionable insights</strong>, building scalable data
                  pipelines, and developing predictive models that drive measurable results.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
                    <CardContent className="p-6">
                      <Brain className="h-8 w-8 text-purple-600 mb-3" />
                      <h3 className="text-xl font-semibold mb-2">Technical Expertise</h3>
                      <p className="text-sm text-slate-600">Machine Learning, Data Engineering, Statistical Modeling</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
                    <CardContent className="p-6">
                      <Building className="h-8 w-8 text-blue-600 mb-3" />
                      <h3 className="text-xl font-semibold mb-2">Industry Experience</h3>
                      <p className="text-sm text-slate-600">Investment Banking, Healthcare, Legal Tech</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="space-y-6">
                <Card className="bg-gradient-to-br from-slate-50 to-blue-50 border-slate-200">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-6">
                      <GraduationCap className="h-10 w-10 text-blue-600" />
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Education</h3>
                        <p className="text-slate-600">University of Washington - Seattle</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-600">BS Data Science + Business Minor</span>
                        <Badge variant="secondary">March 2026</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-600">GPA</span>
                        <span className="font-bold text-blue-600">3.84/4.00</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: "96%" }}></div>
                      </div>
                      <div className="mt-4">
                        <h4 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                          <BookOpen className="h-4 w-4 text-blue-600" />
                          Relevant Coursework
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {coursework.map((course, i) => (
                            <Badge key={i} variant="outline" className="text-xs">
                              {course}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {badges.map((badge, i) => (
                          <Badge key={i} variant={badge.variant}>
                            {badge.label}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid grid-cols-2 gap-4">
                  <Card>
                    <CardContent className="p-6 text-center">
                      <Globe className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                      <div className="font-bold text-slate-800">Location</div>
                      <div className="text-sm text-slate-600">Edison, NJ</div>
                      <div className="text-xs text-slate-500 mt-1">Open to relocation</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6 text-center">
                      <Users className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                      <div className="font-bold text-slate-800">Status</div>
                      <div className="text-sm text-slate-600">U.S. Citizen</div>
                      <div className="text-xs text-slate-500 mt-1">No sponsorship needed</div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">Professional Journey</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                From investment banking to medical research, delivering quantifiable business impact through data
                science
              </p>
            </div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <Card key={index} className="hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-xl ${getIconColor(exp.type)}`}>
                          <exp.icon className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="text-xl md:text-2xl font-semibold text-slate-800 mb-1">{exp.title}</h3>
                          <p className="text-lg font-semibold text-blue-600 mb-1">{exp.company}</p>
                          <div className="text-sm text-slate-500">{exp.division}</div>
                        </div>
                      </div>
                      <div className="text-right space-y-2">
                        <div className="flex items-center gap-2 text-sm text-slate-500">
                          <Calendar className="h-4 w-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-500">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </div>
                        <Badge className={getTypeColor(exp.type)}>{exp.type}</Badge>
                      </div>
                    </div>

                    <p className="text-lg text-slate-600 mb-6 leading-relaxed">{exp.description}</p>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
                          <Target className="h-4 w-4 text-blue-600" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="text-slate-600 flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
                          <Activity className="h-4 w-4 text-green-600" />
                          Business Impact
                        </h4>
                        <div className="space-y-3">
                          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg">
                            <div className="font-semibold text-green-700 text-sm">Primary Impact</div>
                            <div className="text-slate-800 font-medium">{exp.impact}</div>
                          </div>
                          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
                            <div className="font-semibold text-blue-700 text-sm">Business Value</div>
                            <div className="text-slate-800 font-medium">{exp.businessValue}</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <Badge key={i} variant="outline" className="hover:bg-blue-50 transition-colors">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">Featured Projects</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Innovative solutions combining advanced analytics with practical business applications
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white to-slate-50 group"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-3 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl group-hover:from-blue-200 group-hover:to-indigo-200 transition-all duration-300">
                          <project.icon className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-slate-800 mb-1">{project.title}</h3>
                          <p className="text-blue-600 font-medium">{project.subtitle}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-500">
                        <Calendar className="h-4 w-4" />
                        {project.period}
                      </div>
                    </div>

                    <p className="text-slate-600 mb-6 leading-relaxed">{project.description}</p>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                          <Zap className="h-4 w-4 text-yellow-600" />
                          Key Features
                        </h4>
                        <ul className="space-y-1">
                          {project.highlights.map((highlight, i) => (
                            <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
                              <div className="w-1 h-1 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, i) => (
                        <Badge
                          key={i}
                          className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 hover:from-blue-200 hover:to-indigo-200 transition-all"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <Button asChild variant="outline" size="sm">
                        <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          View Code
                        </Link>
                      </Button>
                      {project.liveUrl && (
                        <Button asChild size="sm">
                          <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Demo
                          </Link>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section with Radar Chart */}
      <section id="skills" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">Technical Expertise</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Comprehensive skill set spanning technology, analytics, and business applications
              </p>
            </div>

            {/* Skills Proficiency Radar Chart */}
            <div className="mb-16">
              <Card className="bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <h3 className="text-xl md:text-2xl font-semibold text-slate-800 mb-2">
                      Skills Proficiency Overview
                    </h3>
                    <p className="text-slate-600">
                      Interactive visualization of my technical competencies across key areas
                    </p>
                  </div>
                  <div className="h-96 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <RadarChart data={radarData}>
                        <PolarGrid gridType="polygon" />
                        <PolarAngleAxis
                          dataKey="skill"
                          tick={{ fontSize: 12, fill: "#64748b" }}
                          className="text-slate-600"
                        />
                        <PolarRadiusAxis
                          angle={90}
                          domain={[0, 100]}
                          tick={{ fontSize: 10, fill: "#94a3b8" }}
                          tickCount={6}
                        />
                        <Radar
                          name="Proficiency"
                          dataKey="proficiency"
                          stroke="#3b82f6"
                          fill="#3b82f6"
                          fillOpacity={0.1}
                          strokeWidth={2}
                          dot={{ r: 4, fill: "#3b82f6" }}
                        />
                      </RadarChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="mt-6 text-center">
                    <p className="text-sm text-slate-600">
                      Proficiency levels based on professional experience, project complexity, and practical application
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Skills Categories */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(skills).map(([category, data], index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-500 bg-white/80 backdrop-blur-sm group"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl group-hover:from-blue-200 group-hover:to-indigo-200 transition-all duration-300">
                        <data.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-slate-800">{category}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {data.skills.map((skill, i) => (
                        <Badge key={i} className={`${data.color} hover:shadow-md transition-all text-xs`}>
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why You Should Choose Me Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
                Why You Should <span className="text-blue-600">Choose Me</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Unique combination of technical expertise, research experience, and proven business impact
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {highlights.map((highlight, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-500 bg-white/80 backdrop-blur-sm group relative overflow-hidden"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${highlight.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  ></div>
                  <CardContent className="p-6 relative">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${highlight.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <highlight.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">{highlight.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{highlight.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Awards Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
                Recognition & <span className="text-blue-600">Achievements</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Awards and recognition that demonstrate leadership, academic excellence, and research impact
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((achievement, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-500 bg-gradient-to-br from-white to-slate-50 group"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl group-hover:from-blue-200 group-hover:to-indigo-200 transition-all duration-300">
                        <achievement.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-slate-800 mb-1">{achievement.title}</h3>
                        <div className="flex items-center justify-between">
                          <p className="text-blue-600 font-medium text-sm">{achievement.organization}</p>
                          <Badge className={achievement.color}>{achievement.date}</Badge>
                        </div>
                      </div>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">{achievement.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
                Let's Build Something Great
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                Ready to discuss data science opportunities, analytics projects, or innovative collaborations? I'm
                always excited to connect with like-minded professionals.
              </p>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-blue-100 text-slate-700 px-6 py-3 rounded-full text-sm font-medium">
                <Activity className="h-4 w-4 text-green-600" />
                Currently seeking data science opportunities
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {contactMethods.map((method, index) => (
                <Card
                  key={index}
                  className={`hover:shadow-xl transition-all duration-300 bg-gradient-to-br ${method.bgGradient} ${method.borderColor}`}
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${method.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                    >
                      <method.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">{method.title}</h3>
                    <p className="text-slate-600 mb-4 break-all">{method.value}</p>
                    <Button asChild variant="outline" size="sm" className="bg-white/80">
                      <Link
                        href={method.href}
                        target={method.href.startsWith("http") ? "_blank" : undefined}
                        rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        {method.action}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button asChild size="lg" className="shadow-lg hover:shadow-xl transition-all duration-300">
              <Link href="mailto:veersh731@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Start a Conversation
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gradient-to-r from-slate-800 to-slate-900 text-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">VS</span>
              </div>
              <h3 className="text-2xl font-bold">Veer Shah</h3>
            </div>
            <p className="text-slate-400 mb-6">Aspiring Data Scientist | Analytics Enthusiast | Problem Solver</p>
            <div className="flex justify-center gap-6 mb-8">
              {socialLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-slate-400 hover:text-white transition-colors"
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={link.label}
                >
                  <link.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
            <p className="text-slate-500 text-sm">© 2025 Veer Shah. Built with Next.js, Tailwind CSS, and lots of ☕</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
