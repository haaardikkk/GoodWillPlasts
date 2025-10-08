import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ArrowRight, ArrowLeft, CheckCircle, Star, Filter } from "lucide-react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { motion } from "framer-motion";
import { useRef, useState, useEffect, useMemo } from "react";
import productsImage from "@/assets/products-collection.jpg";
import rocketDrumImage from "@/assets/Products/Rocket Drum/rocket_white.png";
import rocketDrumBlueImage from "@/assets/Products/Rocket Drum/rocket_blue.png";
import rocketDrumGreenImage from "@/assets/Products/Rocket Drum/rocket_green.png";
import rocketDrumYellowImage from "@/assets/Products/Rocket Drum/rocket_yellow.png";
import rocketDrumRedImage from "@/assets/Products/Rocket Drum/rocket_red.png";
import rocketDrumWhiteImage from "@/assets/Products/Rocket Drum/rocket_white.png";
import mauserJerryBlueImage from "@/assets/Products/mauser jerry/mauser_jerry_blue.png";
import mauserJerryGreenImage from "@/assets/Products/mauser jerry/mauser_jerry_green.png";
import mauserJerryOrangeImage from "@/assets/Products/mauser jerry/mauser_jerry_orange.png";
import mauserJerryRedImage from "@/assets/Products/mauser jerry/mauser_jerry_red.png";
import mauserJerryWhiteImage from "@/assets/Products/mauser jerry/mauser_jerry_white.png";
import openMouthDrumImage from "@/assets/Products/open_top/open_mouth_drum.png";
import openMouthDrumGreenImage from "@/assets/Products/open_top/open_mouth_drum_green.png";
import openMouthDrumOrangeImage from "@/assets/Products/open_top/open_mouth_drum_orange.png";
import openMouthDrumRedImage from "@/assets/Products/open_top/open_mouth_drum_red.png";
import openMouthDrumWhiteImage from "@/assets/Products/open_top/open_mouth_drum_white.png";
import openMouthDrumYellowImage from "@/assets/Products/open_top/open_mouth_drum_yellow.png";
import whiteJerryCanImage from "@/assets/Products/Jerry_can/white_jerry_can.png";
import blueJerryCanImage from "@/assets/Products/Jerry_can/blue_jerry_can.png";
import redJerryCanImage from "@/assets/Products/Jerry_can/red_jerry_can.png";
import greenJerryCanImage from "@/assets/Products/Jerry_can/green_jerry_can.png";
import yellowJerryCanImage from "@/assets/Products/Jerry_can/yellow_jerry_can.png";
import blueWaterTaperImage from "@/assets/Products/Taper_drum/blue_water_taper.png";
import greenWaterTaperImage from "@/assets/Products/Taper_drum/green_water_taper.png";
import orangeWaterTaperImage from "@/assets/Products/Taper_drum/orange_water_taper.png";
import whiteWaterTaperImage from "@/assets/Products/Taper_drum/white_water_taper.png";
import yellowWaterTaperImage from "@/assets/Products/Taper_drum/yellow_water_taper.png";
import doubleMouthBlueImage from "@/assets/Products/Double_layer/double_mouth_blue.png";
import doubleMouthGreenImage from "@/assets/Products/Double_layer/double_mouth_green.png";
import doubleMouthOrangeImage from "@/assets/Products/Double_layer/double_mouth_orange.png";
import doubleMouthRedImage from "@/assets/Products/Double_layer/double_mouth_red.png";
import narrowMouthGreenImage from "@/assets/Products/edible/narrow_mouth_green.png";
import narrowMouthOrangeImage from "@/assets/Products/edible/narrow_mouth_orange.png";
import narrowMouthPinkImage from "@/assets/Products/edible/narrow_mouth_pink.png";
import narrowMouthRedImage from "@/assets/Products/edible/narrow_mouth_red.png";
import narrowMouthWhiteImage from "@/assets/Products/edible/narrow_mouth_white.png";
import narrowMouthYellowImage from "@/assets/Products/edible/narrow_mouth_yellow.png";
import deluxCanBlueImage from "@/assets/Products/delux_can/delux_can_blue.png";
import deluxCanWhiteImage from "@/assets/Products/delux_can/delux_can_white.png";
import deluxCanRedImage from "@/assets/Products/delux_can/delux_can_red.png";
import deluxCanGreenImage from "@/assets/Products/delux_can/delux_can_green.png";
import deluxCanOrangeImage from "@/assets/Products/delux_can/delux_can_orange.png";
import deluxCanYellowImage from "@/assets/Products/delux_can/delux_can_yellow.png";
import glossyBlueImage from "@/assets/Products/open_top_glossy/glossy_blue.png";
import glossyGreenImage from "@/assets/Products/open_top_glossy/glossy_green.png";
import glossyOrangeImage from "@/assets/Products/open_top_glossy/glossy_orange.png";
import glossyRedImage from "@/assets/Products/open_top_glossy/glossy_red.png";
import glossyWhiteImage from "@/assets/Products/open_top_glossy/glossy_white.png";
import glossyYellowImage from "@/assets/Products/open_top_glossy/glossy_yellow.png";
import jarAndPreformsImage from "@/assets/Products/jar_preform/jar_and_preforms.png";
import phenylGreenImage from "@/assets/Products/sauce_can/phenyl_green.png";
import phenylOrangeImage from "@/assets/Products/sauce_can/phenyl_orange.png";
import phenylPinkImage from "@/assets/Products/sauce_can/phenyl_pink.png";
import phenylYellowImage from "@/assets/Products/sauce_can/phenyl_yellow.png";

// Optimized card images
import cardOpenMouthDrumImage from "@/assets/Products/optimized/card_open_mouth_drum.svg";
import cardRocketDrumImage from "@/assets/Products/optimized/card_rocket_drum.svg";
import cardJerryCanImage from "@/assets/Products/optimized/card_jerry_can.svg";
import cardWaterTaperImage from "@/assets/Products/optimized/card_water_taper.svg";
import cardDoubleLayerImage from "@/assets/Products/optimized/card_double_layer.svg";
import cardEdibleOilImage from "@/assets/Products/optimized/card_edible_oil.svg";
import cardDeluxCanImage from "@/assets/Products/optimized/card_delux_can.svg";
import cardGlossyDrumImage from "@/assets/Products/optimized/card_glossy_drum.svg";
import cardJarPreformImage from "@/assets/Products/optimized/card_jar_preform.svg";
import cardSauceCanImage from "@/assets/Products/optimized/card_sauce_can.svg";

// Optimized dialog images
import dialogOpenMouthDrumImage from "@/assets/Products/optimized/dialog_open_mouth_drum.svg";
import dialogRocketDrumImage from "@/assets/Products/optimized/dialog_rocket_drum.svg";
import dialogJerryCanImage from "@/assets/Products/optimized/dialog_jerry_can.svg";
import dialogWaterTaperImage from "@/assets/Products/optimized/dialog_water_taper.svg";

// Static product card JPGs
import jpgOpenMouthDrum from "@/assets/Products/Product Card/OpenMouthDrum.jpg";
import jpgRocketDrum from "@/assets/Products/Product Card/RocketDrum_.jpg";
import jpgMauserJerry from "@/assets/Products/Product Card/Mauser jerry.jpg";
import jpgJerryCan from "@/assets/Products/Product Card/JerryCan.jpg";
import jpgTaperDrum from "@/assets/Products/Product Card/TaperDrum.jpg";
import jpgDoubleLayeredDrum from "@/assets/Products/Product Card/DoubleLayeredDrum.jpg";
import jpgNarrowMouthCan from "@/assets/Products/Product Card/NarrowMouthCan.jpg";
import jpgDeluxeCan from "@/assets/Products/Product Card/DeluxeCan.jpg";
import jpgGlossyOpenMouth from "@/assets/Products/Product Card/GlossyOpenMouth.jpg";
import jpgPetJarPreform from "@/assets/Products/Product Card/PetJarandPreform.jpg";
import jpgSauceCan from "@/assets/Products/Product Card/SauceCan.jpg";

import { toast } from "sonner";

const ProductCategories = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [openMouthDrumColor, setOpenMouthDrumColor] = useState<string>("default");
  const [jerryCanColor, setJerryCanColor] = useState<string>("blue");
const [rocketDrumColor, setRocketDrumColor] = useState<string>("yellow");
  const [taperDrumColor, setTaperDrumColor] = useState<string>("yellow");
  const [doubleMouthDrumColor, setDoubleMouthDrumColor] = useState<string>("red");
  const [narrowMouthCanColor, setNarrowMouthCanColor] = useState<string>("pink");
  const [deluxCanColor, setDeluxCanColor] = useState<string>("white");
  const [glossyOpenMouthColor, setGlossyOpenMouthColor] = useState<string>("orange");
  const [phenylCanColor, setPhenylCanColor] = useState<string>("green");
  
  // Dialog state management
  const [openDialogId, setOpenDialogId] = useState<number | null>(null);

  const getOpenMouthDrumImage = () => {
    switch(openMouthDrumColor) {
      case "green": return openMouthDrumGreenImage;
      case "orange": return openMouthDrumOrangeImage;
      case "red": return openMouthDrumRedImage;
      case "white": return openMouthDrumWhiteImage;
      case "yellow": return openMouthDrumYellowImage;
      case "default": return openMouthDrumImage;
      default: return openMouthDrumImage;
    }
  };

  const productCardImages: Record<string, string> = {
    "Open Mouth Drum": jpgOpenMouthDrum,
    "Rocket Drum": jpgRocketDrum,
    "Mauser Jerry Can": jpgMauserJerry,
    "Jerry Can": jpgJerryCan,
    "Taper Drum": jpgTaperDrum,
    "Double Layered Drum": jpgDoubleLayeredDrum,
    "Narrow Mouth Can (Edible Oil)": jpgNarrowMouthCan,
    "Deluxe Can": jpgDeluxeCan,
    "Glossy Open Mouth": jpgGlossyOpenMouth,
    "Pet Jar and Preform": jpgPetJarPreform,
    "Sauce Can": jpgSauceCan,
  };

  const getProductCardJpg = (title: string) => productCardImages[title];

  const getJerryCanImage = () => {
    switch(jerryCanColor) {
      case "blue": return blueJerryCanImage;
      case "white": return whiteJerryCanImage;
      case "red": return redJerryCanImage;
      case "green": return greenJerryCanImage;
      case "yellow": return yellowJerryCanImage;
      default: return blueJerryCanImage;
    }
  };
  
  const getRocketDrumImage = () => {
    switch(rocketDrumColor) {
      case "blue": return rocketDrumBlueImage;
      case "green": return rocketDrumGreenImage;
      case "yellow": return rocketDrumYellowImage;
      case "red": return rocketDrumRedImage;
      case "white": return rocketDrumWhiteImage;
      default: return rocketDrumYellowImage;
    }
  };
  
  const getMauserJerryCanImage = () => {
    switch(rocketDrumColor) {
      case "blue": return mauserJerryBlueImage;
      case "green": return mauserJerryGreenImage;
      case "orange": return mauserJerryOrangeImage;
      case "red": return mauserJerryRedImage;
      case "white": return mauserJerryWhiteImage;
      default: return mauserJerryOrangeImage;
    }
  };
  
  const getTaperDrumImage = () => {
    switch(taperDrumColor) {
      case "blue": return blueWaterTaperImage;
      case "green": return greenWaterTaperImage;
      case "orange": return orangeWaterTaperImage;
      case "white": return whiteWaterTaperImage;
      case "yellow": return yellowWaterTaperImage;
      default: return yellowWaterTaperImage;
    }
  };
  
  const getDoubleMouthDrumImage = () => {
    switch(doubleMouthDrumColor) {
      case "blue": return doubleMouthBlueImage;
      case "green": return doubleMouthGreenImage;
      case "orange": return doubleMouthOrangeImage;
      case "red": return doubleMouthRedImage;
      default: return doubleMouthRedImage;
    }
  };
  
  const getNarrowMouthCanImage = () => {
    switch(narrowMouthCanColor) {
      case "green": return narrowMouthGreenImage;
      case "orange": return narrowMouthOrangeImage;
      case "pink": return narrowMouthPinkImage;
      case "red": return narrowMouthRedImage;
      case "white": return narrowMouthWhiteImage;
      case "yellow": return narrowMouthYellowImage;
      default: return narrowMouthPinkImage;
    }
  };
  
  const getDeluxCanImage = () => {
    switch(deluxCanColor) {
      case "blue": return deluxCanBlueImage;
      case "white": return deluxCanWhiteImage;
      case "red": return deluxCanRedImage;
      case "green": return deluxCanGreenImage;
      case "orange": return deluxCanOrangeImage;
      case "yellow": return deluxCanYellowImage;
      default: return deluxCanWhiteImage;
    }
  };
  
  const getGlossyOpenMouthImage = () => {
    switch(glossyOpenMouthColor) {
      case "blue": return glossyBlueImage;
      case "green": return glossyGreenImage;
      case "orange": return glossyOrangeImage;
      case "red": return glossyRedImage;
      case "white": return glossyWhiteImage;
      case "yellow": return glossyYellowImage;
      default: return glossyOrangeImage;
    }
  };
  
  const getPhenylCanImage = () => {
    switch(phenylCanColor) {
      case "green": return phenylGreenImage;
      case "orange": return phenylOrangeImage;
      case "pink": return phenylPinkImage;
      case "yellow": return phenylYellowImage;
      default: return phenylGreenImage;
    }
  };

  const categories = useMemo(() => [
    {
      id: 1,
      title: "Open Mouth Drum",
      description: "Wide-mouth industrial drum for maximum accessibility and efficient bulk material handling.",
      features: [
        "Extra-wide 280mm opening for easy filling",
        "Reinforced rim structure",
        "Smooth interior surface",
        "Interlocking lid with gasket seal"
      ],
      image: getOpenMouthDrumImage(),
      specifications: {
        Capacity: "50L",
        Material: "Virgin HDPE",
        Certification: "ISO 9001:2015, UN Approved",
        "Mouth Diameter": "280mm",
        "Base Diameter": "380mm"
      },
      applications: [
        "Bulk powder and granule storage",
        "Food processing and ingredient handling",
        "Chemical manufacturing and mixing",
        "Waste collection and recycling"
      ],
      benefits: [
        "Wide opening enables rapid filling and complete emptying",
        "Stackable design reduces storage footprint by 40%",
        "Chemical-resistant construction ensures long service life",
        "Forklift compatibility streamlines material handling"
      ],
      phone: "+919811347037",
    },
    {
      id: 11,
      title: "Rocket Drum",
      description: "Narrow-mouth rocket drum engineered for secure 50L liquid storage and controlled dispensing.",
      features: [
        "Precision narrow mouth design",
        "UV-stabilized virgin HDPE",
        "Ergonomic grip handle",
        "Tamper-evident closure"
      ],
      image: getRocketDrumImage(),
      specifications: {
        Capacity: "50L",
        Material: "Virgin HDPE",
        Certification: "ISO 9001:2015",
        "Wall Thickness": "4.0mm",
        "Temperature Range": "-40°C to +60°C"
      },
      applications: [
        "Industrial chemical storage and transport",
        "Lubricants and oils",
        "Water and utilities",
        "Agricultural inputs"
      ],
      benefits: [
        "Secure sealing reduces leakage",
        "Durable HDPE withstands tough environments",
        "Ergonomic design improves handling",
        "Stackable to optimize storage"
      ],
      phone: "+919811347037",
    },
    {
      id: 2,
      title: "Mauser Jerry Can",
      description: "Heavy-duty Mauser-style jerry can for secure liquid storage and transport with precise dispensing.",
      features: [
        "Mauser narrow-mouth with tamper-evident closure",
        "Ergonomic handle and stable base",
        "Stackable, impact-resistant HDPE",
        "Compatible with standard dispensing fittings"
      ],
      image: getMauserJerryCanImage(),
      specifications: {
        Capacity: "35L",
        Material: "Virgin HDPE",
        Certification: "ISO 9001:2015",
        "Neck Type": "Mauser (narrow mouth)",
        "Wall Thickness": "3.5mm"
      },
      applications: [
        "Industrial chemicals and solvents",
        "Lubricants and oils",
        "Water and food-grade liquids (on request)",
        "Agricultural inputs"
      ],
      benefits: [
        "Secure sealing reduces leakage and product loss",
        "Ergonomic design improves handling and pouring",
        "Stackable design optimizes storage and transport",
        "Durable HDPE withstands tough conditions"
      ],
      phone: "+919811347037",
    },
    {
      id: 3,
      title: "Jerry Can",
      description: "Professional-grade jerry can with ergonomic design for safe transport and storage of liquids.",
      features: [
        "Ergonomic handle design",
        "Integrated pouring spout with precision flow",
        "Reinforced corner construction",
        "Anti-glug technology for steady flow"
      ],
      image: getJerryCanImage(),
      specifications: {
        Capacity: "20L",
        Material: "Virgin HDPE",
        Certification: "ISO 9001:2015, ADR Approved",
        "Handle Load": "Up to 25kg",
        "Drop Test": "1.8m height approved"
      },
      applications: [
        "Fuel and petroleum product transport",
        "Emergency water storage and distribution",
        "Chemical and solvent handling",
        "Marine and automotive applications"
      ],
      benefits: [
        "Ergonomic design reduces operator fatigue",
        "Precision spout eliminates spillage and waste",
        "Impact-resistant construction withstands harsh environments",
        "Stackable design optimizes storage efficiency"
      ],
      phone: "+919811347037",
    },
    {
      id: 4,
      title: "Taper Drum",
      description: "Innovative tapered drum design optimized for space-efficient storage and enhanced material flow.",
      features: [
        "Unique tapered geometry for optimal space utilization",
        "Smooth interior walls for complete discharge",
        "Reinforced bottom structure",
        "Conical bottom prevents material bridging"
      ],
      image: getTaperDrumImage(),
      specifications: {
        Capacity: "50L",
        Material: "Virgin HDPE",
        Certification: "ISO 9001:2015, Food Grade",
        "Taper Angle": "15 degrees",
        "Wall Thickness": "4mm"
      },
      applications: [
        "Powder and granular material storage",
        "Food ingredient processing and storage",
        "Pharmaceutical powder handling",
        "Chemical intermediate storage"
      ],
      benefits: [
        "Tapered design increases storage density by 25%",
        "Complete discharge capability reduces product waste",
        "Enhanced stability prevents tipping during handling",
        "Easy-clean design meets stringent hygiene requirements"
      ],
      phone: "+919811347037",
    },
    {
      id: 5,
      title: "Double Layered Drum",
      description: "Heavy-duty double-layered drum offering superior strength, durability, and protection for demanding storage and transport.",
      features: [
        "Double-layered wall construction for enhanced strength",
        "Improved impact and puncture resistance",
        "Leak-proof threaded cap with gasket seal",
        "UV-stabilized for outdoor applications"
      ],
      image: getDoubleMouthDrumImage(),
      specifications: {
        Capacity: "50L",
        Material: "Virgin HDPE",
        Certification: "ISO 9001:2015",
        "Wall Type": "Double-layer (inner + outer)",
        "Mouth Diameter": "50mm",
        "UV Rating": "Outdoor 8 years"
      },
      applications: [
        "Industrial chemical storage and handling",
        "Long-term outdoor storage and logistics",
        "Food processing and ingredient containment",
        "Pharmaceutical and specialty liquid transport"
      ],
      benefits: [
        "Double-layered walls increase safety and durability",
        "Superior impact resistance reduces damage during transport",
        "Leak-proof sealing prevents spills and contamination",
        "UV protection maintains material integrity over time"
      ],
      phone: "+919811347037",
    },
    {
      id: 6,
      title: "Narrow Mouth Can (Edible Oil)",
      description: "Food-grade narrow mouth container engineered for precision dispensing and hygienic storage.",
      features: [
        "Food-grade virgin HDPE construction",
        "Precision-molded narrow mouth",
        "Tamper-evident closure system",
        "Integrated handle for secure grip"
      ],
      image: getNarrowMouthCanImage(),
      specifications: {
        Capacity: "5L",
        Material: "Food Grade HDPE",
        Certification: "FDA, ISO 22000, HACCP",
        "Mouth Diameter": "38mm",
        "Handle Load": "Up to 8kg"
      },
      applications: [
        "Edible oil packaging and storage",
        "Food ingredient dispensing",
        "Beverage concentrate handling",
        "Condiment and sauce packaging"
      ],
      benefits: [
        "Food-safe materials ensure product purity",
        "Precision pouring reduces waste and mess",
        "Tamper-evident features guarantee product integrity",
        "Ergonomic handle provides secure, comfortable grip"
      ],
      phone: "+919811347037",
    },
    {
      id: 7,
      title: "Deluxe Can",
      description: "Premium narrow mouth container with enhanced features for high-value liquid storage.",
      features: [
        "Premium-grade virgin HDPE",
        "Advanced anti-static formulation",
        "Precision-engineered dispensing spout",
        "Multi-layer barrier construction"
      ],
      image: getDeluxCanImage(),
      specifications: {
        Capacity: "35L",
        Material: "Premium HDPE",
        Certification: "ISO 9001:2015, ATEX, FDA",
        "Barrier Layers": "3-layer construction",
        "Static Dissipation": "<10^6 ohms"
      },
      applications: [
        "High-value chemical storage",
        "Pharmaceutical intermediate handling",
        "Electronic industry solvents",
        "Precision coating materials"
      ],
      benefits: [
        "Premium construction ensures maximum product protection",
        "Anti-static properties prevent dangerous discharge",
        "Multi-layer barrier prevents permeation",
        "Enhanced durability reduces replacement costs"
      ],
      phone: "+919811347037",
    },
    {
      id: 8,
      title: "Glossy Open Mouth",
      description: "High-gloss finish open mouth drum combining aesthetic appeal with superior performance.",
      features: [
        "High-gloss surface finish",
        "Enhanced UV resistance",
        "Smooth, non-porous surface",
        "Wide mouth design for maximum accessibility"
      ],
      image: getGlossyOpenMouthImage(),
      specifications: {
        Capacity: "35L",
        Material: "UV-Stabilized HDPE",
        Certification: "ISO 9001:2015, Food Grade",
        "Surface Finish": "High-gloss mirror finish",
        "UV Rating": "8 years outdoor exposure"
      },
      applications: [
        "Premium food product packaging",
        "Cosmetic and personal care storage",
        "High-visibility industrial applications",
        "Retail display and storage"
      ],
      benefits: [
        "Premium appearance enhances brand image",
        "Superior UV resistance prevents degradation",
        "Easy-clean surface reduces maintenance",
        "Chemical resistance maintains appearance over time"
      ],
      phone: "+919811347037",
    },
    {
      id: 9,
      title: "Pet Jar and Preform",
      description: "Crystal-clear PET containers and preforms engineered for superior clarity and performance.",
      features: [
        "Crystal-clear transparency",
        "Lightweight construction",
        "Excellent barrier properties",
        "Wide mouth design for easy filling"
      ],
      image: jarAndPreformsImage,
      specifications: {
        Capacity: "Various (250ml - 5L)",
        Material: "Virgin PET",
        Certification: "FDA, EU Food Contact, ISO 9001",
        "Clarity": ">95% light transmission",
        "Barrier Properties": "Excellent O2/CO2 resistance"
      },
      applications: [
        "Food and beverage packaging",
        "Pharmaceutical and nutraceutical containers",
        "Personal care and cosmetic packaging",
        "Household product containers"
      ],
      benefits: [
        "Crystal clarity showcases product quality",
        "Lightweight design reduces transportation costs",
        "Excellent barrier properties maintain freshness",
        "Recyclable material supports sustainability goals"
      ],
      phone: "+919811347037",
    },
    {
      id: 10,
      title: "Sauce Can",
      description: "Specialized containers designed for cleaning products, sauces, and liquid formulations.",
      features: [
        "Chemical-resistant HDPE construction",
        "Precision-molded dispensing spout",
        "Child-resistant closure options",
        "Leak-proof sealing system"
      ],
      image: getPhenylCanImage(),
      specifications: {
        Capacity: "5L",
        Material: "Chemical-Grade HDPE",
        Certification: "ISO 9001:2015, Child-Safe Standards",
        "Chemical Resistance": "pH 1-14 compatible",
        "Closure Torque": "15-20 Nm"
      },
      applications: [
        "Household cleaning product packaging",
        "Industrial disinfectant storage",
        "Food sauce and condiment packaging",
        "Agricultural chemical containers"
      ],
      benefits: [
        "Chemical resistance ensures safe storage",
        "Precision dispensing reduces waste",
        "Child-resistant features enhance safety",
        "Leak-proof design prevents spills and contamination"
      ],
      phone: "+919811347037",
    }
    
  ], [openMouthDrumColor, rocketDrumColor, jerryCanColor, taperDrumColor, doubleMouthDrumColor, narrowMouthCanColor, deluxCanColor, glossyOpenMouthColor, phenylCanColor]);

  // Dropdown filter state
  const [selectedGroup, setSelectedGroup] = useState<string>("all");

  const getGroupForTitle = (title: string): "Drums" | "Cans" | "Other" => {
    const t = title.toLowerCase();
    if (t.includes("drum") || t.includes("glossy")) return "Drums";
    if (t.includes("can")) return "Cans";
    return "Other";
  };

  const visibleCategories = useMemo(() => {
    if (selectedGroup === "all") return categories;
    return categories.filter((c) => getGroupForTitle(c.title) === selectedGroup);
  }, [selectedGroup, categories]);

  const scroll = (direction: "left" | "right") => {
    if (!ref.current) return;
    const scrollAmount = ref.current.offsetWidth * 0.7;
    ref.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const checkArrows = () => {
    if (!ref.current) return;
    setCanScrollLeft(ref.current.scrollLeft > 0);
    setCanScrollRight(
      ref.current.scrollLeft + ref.current.clientWidth <
        ref.current.scrollWidth - 1
    );
  };

  useEffect(() => {
    checkArrows();
    const div = ref.current;
    if (!div) return;
    div.addEventListener("scroll", checkArrows);
    window.addEventListener("resize", checkArrows);
    return () => {
      div.removeEventListener("scroll", checkArrows);
      window.removeEventListener("resize", checkArrows);
    };
  }, []);

  // Function to convert image to base64
  const imageToBase64 = (img: HTMLImageElement): Promise<string> => {
    return new Promise((resolve, reject) => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      if (!ctx) {
        reject(new Error('Could not get canvas context'));
        return;
      }
      
      canvas.width = img.naturalWidth || img.width;
      canvas.height = img.naturalHeight || img.height;
      
      const tempImg = new Image();
      tempImg.crossOrigin = 'anonymous';
      
      tempImg.onload = () => {
        ctx.drawImage(tempImg, 0, 0);
        try {
          const dataURL = canvas.toDataURL('image/png');
          resolve(dataURL);
        } catch (error) {
          reject(error);
        }
      };
      
      tempImg.onerror = () => {
        reject(new Error('Failed to load image'));
      };
      
      // Use the current src of the image
      tempImg.src = img.src;
    });
  };

  // Function to serialize live DOM with computed styles
  const serializeLiveDOM = async (element: HTMLElement): Promise<string> => {
    console.log('🔄 Starting DOM serialization...');
    
    // Clone the element to avoid modifying the original
    const clone = element.cloneNode(true) as HTMLElement;
    
    // Hide unwanted elements in the clone before serialization
    const elementsToHide = [
      // Download buttons
      'button[class*="Download"]',
      'button:has-text("Download")',
      'button[class*="flex-1"]',
      '.flex.flex-col.sm\\:flex-row.gap-3.pt-4',
      // Close buttons
      'button[aria-label="Close"]',
      '.absolute.right-4.top-4',
      '[class*="DialogClose"]',
      'button:has(svg[class*="h-4 w-4"])',
      // Any button containing download text
      'button'
    ];
    
    // Hide buttons that contain "Download" text or are close buttons
    const buttons = clone.querySelectorAll('button');
    buttons.forEach(button => {
      const buttonText = button.textContent?.toLowerCase() || '';
      const buttonClasses = button.className || '';
      const ariaLabel = button.getAttribute('aria-label') || '';
      
      if (
        buttonText.includes('download') ||
        buttonClasses.includes('Download') ||
        ariaLabel.toLowerCase().includes('close') ||
        button.querySelector('svg[class*="h-4 w-4"]') ||
        buttonClasses.includes('DialogClose')
      ) {
        (button as HTMLElement).style.display = 'none';
      }
    });
    
    // Also hide the button container div
    const buttonContainers = clone.querySelectorAll('.flex.flex-col.sm\\:flex-row.gap-3.pt-4, .flex.gap-3.pt-4');
    buttonContainers.forEach(container => {
      (container as HTMLElement).style.display = 'none';
    });
    
    // Remove all images from the downloaded card - text only
    console.log('🚫 Removing images from downloaded card...');
    const images = clone.querySelectorAll('img');
    images.forEach((img) => {
      img.remove();
      console.log(`✅ Removed image: ${img.getAttribute('alt') || 'unnamed'}`);
    });
    
    console.log(`🚫 Removed ${images.length} images from downloaded card`);
    
    // Function to inline all computed styles
    const inlineStyles = (el: Element) => {
      if (el.nodeType === Node.ELEMENT_NODE) {
        const computedStyle = window.getComputedStyle(el as HTMLElement);
        let styleText = '';
        
        // Copy all computed styles
        for (let i = 0; i < computedStyle.length; i++) {
          const property = computedStyle[i];
          const value = computedStyle.getPropertyValue(property);
          styleText += `${property}: ${value}; `;
        }
        
        (el as HTMLElement).style.cssText = styleText;
        
        // Recursively process children
        for (let i = 0; i < el.children.length; i++) {
          inlineStyles(el.children[i]);
        }
      }
    };
    
    // Inline all styles in the cloned element
    inlineStyles(clone);
    
    // Create a complete HTML document with the serialized content
    const fullHTML = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <style>
            * { box-sizing: border-box; }
            body { 
              margin: 0; 
              padding: 20px; 
              font-family: system-ui, -apple-system, sans-serif;
              background: #1a1a1a;
              min-height: 100vh;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .screenshot-container {
              background: white;
              border-radius: 16px;
              padding: 40px;
              box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
              max-width: 800px;
              width: 100%;
              position: relative;
            }
            .watermark {
              position: absolute;
              bottom: 15px;
              right: 25px;
              font-size: 14px;
              font-weight: 600;
              opacity: 0.6;
              color: #0284c7;
            }
            /* Additional hiding rules */
            button[class*="Download"], 
            button[aria-label="Close"],
            .absolute.right-4.top-4,
            [class*="DialogClose"],
            button:has(svg[class*="h-4 w-4"]),
            .flex.flex-col.sm\\:flex-row.gap-3.pt-4,
            .flex.gap-3.pt-4 {
              display: none !important;
            }
          </style>
        </head>
        <body>
          <div class="screenshot-container">
            ${clone.outerHTML}
            <div class="watermark">Goodwill Plast</div>
          </div>
        </body>
      </html>
    `;
    
    return fullHTML;
  };

  const handleDownload = (id: number) => {
    const category = categories.find((cat) => cat.id === id);
    if (!category) {
      toast.error("Product not found");
      return;
    }

    const jpg = getProductCardJpg(category.title);
    if (!jpg) {
      toast.error("Product card image not available");
      return;
    }

    const link = document.createElement("a");
    link.href = jpg;
    link.download = `${category.title.replace(/\s+/g, '')}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast.success("Product card downloaded successfully!");
  };


  return (
    <section id="product-categories" className="py-24 bg-surface-dark relative">
      <div className="container mx-auto px-4 relative">
        {/* Filter Bar */}
        <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 px-4 md:px-[5%]">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Filter className="w-4 h-4 text-primary" />
            <span>Filter products</span>
          </div>
          <div className="w-full sm:w-64">
            <Select value={selectedGroup} onValueChange={(v) => setSelectedGroup(v)}>
              <SelectTrigger aria-label="Filter products" className="w-full bg-background border border-border h-11 focus:ring-2 focus:ring-primary focus:border-primary">
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent className="bg-popover text-popover-foreground border border-border shadow-lg">
                <SelectItem value="all">All Products</SelectItem>
                <SelectItem value="Drums">Drums</SelectItem>
                <SelectItem value="Cans">Cans</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="relative">
          {/* Left Arrow */}
          {canScrollLeft && (
            <motion.button
              onClick={() => scroll("left")}
              className="absolute -left-6 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-primary/20 backdrop-blur-sm hover:bg-primary/40 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Scroll left"
            >
              <ArrowLeft className="w-5 h-5 text-primary" />
            </motion.button>
          )}

          {/* Scrollable Cards */}
          <div
            ref={ref}
            className="flex gap-4 md:gap-6 overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory hide-scrollbar px-4 md:px-[5%] py-4"
            // Responsive padding and gap for better mobile experience
          >
            {visibleCategories.map((category, index) => (
              <motion.div
                key={category.id}
                className="flex-shrink-0 w-[240px] sm:w-[260px] md:w-[280px] snap-center relative z-10"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, zIndex: 50 }} // overlay effect
                style={{ transformOrigin: "center" }}
              >
                <Dialog open={openDialogId === category.id} onOpenChange={(open) => {
                  if (open) {
                    setOpenDialogId(category.id);
                  } else {
                    setOpenDialogId(null);
                  }
                }}>
                  <DialogTrigger asChild>
                    <motion.div className="cursor-pointer z-10">
                      <Card className="group bg-card border border-border hover:border-primary transition-all duration-500 overflow-hidden shadow-lg hover:shadow-2xl h-full rounded-2xl relative z-10">
                        <div className="relative h-40 overflow-hidden rounded-t-xl">
                          <motion.img
                            src={category.image}
                            alt={category.title}
                            className="w-full h-full object-contain transform-gpu" /* Using object-contain to prevent cutting */
                            whileHover={{ scale: 1.15 }} /* Moderate zoom on hover */
                            transition={{ duration: 0.5 }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                        </div>
                        <CardContent className="p-4 flex flex-col h-full">
                          <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-all duration-300">
                            {category.title}
                          </h3>
                          <p className="text-muted-foreground mb-4 text-sm flex-grow">
                            {category.description}
                          </p>
                          <ul className="space-y-2 mb-4">
                            {category.features.map((f, i) => (
                              <li
                                key={i}
                                className="flex items-center space-x-2 text-xs"
                              >
                                <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                                <span>{f}</span>
                              </li>
                            ))}
                          </ul>
                          <motion.div
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="mt-auto"
                          >
                            <Button
                              variant="outline"
                              className="w-full flex items-center justify-center gap-2 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary group-hover:shadow-glow transition-all duration-300 text-sm"
                            >
                              View Details
                              <motion.span
                                className="inline-block"
                                whileHover={{ x: 6 }}
                                transition={{
                                  type: "spring",
                                  stiffness: 400,
                                  damping: 12,
                                }}
                              >
                                <ArrowRight className="w-4 h-4" />
                              </motion.span>
                            </Button>
                          </motion.div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </DialogTrigger>

                  {/* Dialog Content */}
                  <DialogContent
                     id={`product-dialog-${category.id}`}
                     data-dialog-id={category.id}
                     className="max-w-[95vw] sm:max-w-3xl md:max-w-4xl max-h-[90vh] overflow-y-auto p-4 sm:p-6 bg-surface-dark rounded-xl z-[110]"
                  >
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold text-primary mb-4">
                        {category.title}
                      </DialogTitle>
                      <DialogDescription className="sr-only">
                        Detailed specifications for {category.title}: {category.description}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                      <div className="space-y-4">
                        <img
                          src={category.image}
                          alt={category.title}
                          className="w-full h-60 sm:h-72 md:h-80 object-contain rounded-lg" /* Responsive height */
                        />
                        {/* Color options for Open Mouth Drum */}
                        {category.id === 1 && (
                          <div className="mt-4">
                            <h4 className="font-semibold text-lg mb-2 text-primary">Premium Color Options</h4>
                            <div className="flex flex-wrap gap-2 sm:gap-3">
                              <button 
                                onClick={() => setOpenMouthDrumColor("default")} 
                                className={`w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-3 ${openMouthDrumColor === "default" ? "border-white shadow-lg ring-2 ring-blue-300" : "border-transparent hover:border-blue-200"} transition-all duration-300 hover:scale-110`}
                                aria-label="Ocean Blue"
                                title="Ocean Blue"
                              />
                              <button 
                                onClick={() => setOpenMouthDrumColor("green")} 
                                className={`w-6 h-6 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 border-3 ${openMouthDrumColor === "green" ? "border-white shadow-lg ring-2 ring-emerald-300" : "border-transparent hover:border-emerald-200"} transition-all duration-300 hover:scale-110`}
                                aria-label="Forest Green"
                                title="Forest Green"
                              />
                              <button 
                                onClick={() => setOpenMouthDrumColor("orange")} 
                                className={`w-6 h-6 rounded-full bg-gradient-to-br from-orange-500 to-red-600 border-3 ${openMouthDrumColor === "orange" ? "border-white shadow-lg ring-2 ring-orange-300" : "border-transparent hover:border-orange-200"} transition-all duration-300 hover:scale-110`}
                                aria-label="Sunset Orange"
                                title="Sunset Orange"
                              />
                              <button 
                                onClick={() => setOpenMouthDrumColor("red")} 
                                className={`w-6 h-6 rounded-full bg-gradient-to-br from-red-500 to-red-700 border-3 ${openMouthDrumColor === "red" ? "border-white shadow-lg ring-2 ring-red-300" : "border-transparent hover:border-red-200"} transition-all duration-300 hover:scale-110`}
                                aria-label="Crimson Red"
                                title="Crimson Red"
                              />
                              <button 
                                onClick={() => setOpenMouthDrumColor("white")} 
                                className={`w-6 h-6 rounded-full bg-gradient-to-br from-gray-50 to-gray-200 border-3 ${openMouthDrumColor === "white" ? "border-gray-600 shadow-lg ring-2 ring-gray-300" : "border-gray-300 hover:border-gray-400"} transition-all duration-300 hover:scale-110`}
                                aria-label="Pure White"
                                title="Pure White"
                              />
                              <button 
                                onClick={() => setOpenMouthDrumColor("yellow")} 
                                className={`w-6 h-6 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 border-3 ${openMouthDrumColor === "yellow" ? "border-white shadow-lg ring-2 ring-yellow-300" : "border-transparent hover:border-yellow-200"} transition-all duration-300 hover:scale-110`}
                                aria-label="Golden Yellow"
                                title="Golden Yellow"
                              />
                            </div>
                          </div>
                        )}
                        
                        {/* Color options for Mauser Jerry Can */}
                        {category.id === 2 && (
                          <div className="mt-4">
                            <h4 className="font-semibold text-lg mb-2 text-primary">Premium Color Options</h4>
                            <div className="flex flex-wrap gap-2 sm:gap-3">
                              <button 
                                onClick={() => setRocketDrumColor("blue")} 
                                className={`w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-3 ${rocketDrumColor === "blue" ? "border-white shadow-lg ring-2 ring-blue-300" : "border-transparent hover:border-blue-200"} transition-all duration-300 hover:scale-110`}
                                aria-label="Ocean Blue"
                                title="Ocean Blue"
                              />
                              <button 
                                onClick={() => setRocketDrumColor("green")} 
                                className={`w-6 h-6 rounded-full bg-gradient-to-br from-green-500 to-green-700 border-3 ${rocketDrumColor === "green" ? "border-white shadow-lg ring-2 ring-green-300" : "border-transparent hover:border-green-200"} transition-all duration-300 hover:scale-110`}
                                aria-label="Forest Green"
                                title="Forest Green"
                              />
                              <button 
                                onClick={() => setRocketDrumColor("orange")} 
                                className={`w-6 h-6 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 border-3 ${rocketDrumColor === "orange" ? "border-white shadow-lg ring-2 ring-orange-300" : "border-transparent hover:border-orange-200"} transition-all duration-300 hover:scale-110`}
                                aria-label="Amber Orange"
                                title="Amber Orange"
                              />
                              <button 
                                onClick={() => setRocketDrumColor("red")} 
                                className={`w-6 h-6 rounded-full bg-gradient-to-br from-red-500 to-red-700 border-3 ${rocketDrumColor === "red" ? "border-white shadow-lg ring-2 ring-red-300" : "border-transparent hover:border-red-200"} transition-all duration-300 hover:scale-110`}
                                aria-label="Crimson Red"
                                title="Crimson Red"
                              />
                              <button 
                                onClick={() => setRocketDrumColor("white")} 
                                className={`w-6 h-6 rounded-full bg-gradient-to-br from-gray-50 to-gray-200 border-3 ${rocketDrumColor === "white" ? "border-gray-600 shadow-lg ring-2 ring-gray-300" : "border-gray-300 hover:border-gray-400"} transition-all duration-300 hover:scale-110`}
                                aria-label="Pure White"
                                title="Pure White"
                              />
                            </div>
                          </div>
                        )}

                        {/* Color options for Rocket Drum */}
                        {category.id === 11 && (
                          <div className="mt-4">
                            <h4 className="font-semibold text-lg mb-2 text-primary">Premium Color Options</h4>
                            <div className="flex flex-wrap gap-2 sm:gap-3">
                              <button 
                                onClick={() => setRocketDrumColor("blue")} 
                                className={`w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-3 ${rocketDrumColor === "blue" ? "border-white shadow-lg ring-2 ring-blue-300" : "border-transparent hover:border-blue-200"} transition-all duration-300 hover:scale-110`}
                                aria-label="Ocean Blue"
                                title="Ocean Blue"
                              />
                              <button 
                                onClick={() => setRocketDrumColor("green")} 
                                className={`w-6 h-6 rounded-full bg-gradient-to-br from-green-500 to-green-700 border-3 ${rocketDrumColor === "green" ? "border-white shadow-lg ring-2 ring-green-300" : "border-transparent hover:border-green-200"} transition-all duration-300 hover:scale-110`}
                                aria-label="Forest Green"
                                title="Forest Green"
                              />
                              <button 
                                onClick={() => setRocketDrumColor("yellow")} 
                                className={`w-6 h-6 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 border-3 ${rocketDrumColor === "yellow" ? "border-white shadow-lg ring-2 ring-yellow-300" : "border-transparent hover:border-yellow-200"} transition-all duration-300 hover:scale-110`}
                                aria-label="Golden Yellow"
                                title="Golden Yellow"
                              />
                              <button 
                                onClick={() => setRocketDrumColor("red")} 
                                className={`w-6 h-6 rounded-full bg-gradient-to-br from-red-500 to-red-700 border-3 ${rocketDrumColor === "red" ? "border-white shadow-lg ring-2 ring-red-300" : "border-transparent hover:border-red-200"} transition-all duration-300 hover:scale-110`}
                                aria-label="Crimson Red"
                                title="Crimson Red"
                              />
                              <button 
                                onClick={() => setRocketDrumColor("white")} 
                                className={`w-6 h-6 rounded-full bg-gradient-to-br from-gray-50 to-gray-200 border-3 ${rocketDrumColor === "white" ? "border-gray-600 shadow-lg ring-2 ring-gray-300" : "border-gray-300 hover:border-gray-400"} transition-all duration-300 hover:scale-110`}
                                aria-label="Pure White"
                                title="Pure White"
                              />
                            </div>
                          </div>
                        )}
                        
                        {/* Color options for Taper Drum */}
                        {category.id === 4 && (
                          <div className="mt-4">
                            <h4 className="font-semibold text-lg mb-2 text-primary">Premium Color Options</h4>
                            <div className="flex flex-wrap gap-2 sm:gap-3">
                              <button 
                                onClick={() => setTaperDrumColor("blue")} 
                                className={`w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-3 ${taperDrumColor === "blue" ? "border-white shadow-lg ring-2 ring-blue-300" : "border-transparent hover:border-blue-200"} transition-all duration-300 hover:scale-110`}
                                aria-label="Ocean Blue"
                                title="Ocean Blue"
                              />
                              <button 
                                onClick={() => setTaperDrumColor("green")} 
                                className={`w-6 h-6 rounded-full bg-gradient-to-br from-green-500 to-green-700 border-3 ${taperDrumColor === "green" ? "border-white shadow-lg ring-2 ring-green-300" : "border-transparent hover:border-green-200"} transition-all duration-300 hover:scale-110`}
                                aria-label="Forest Green"
                                title="Forest Green"
                              />
                              <button 
                                onClick={() => setTaperDrumColor("orange")} 
                                className={`w-6 h-6 rounded-full bg-gradient-to-br from-orange-500 to-orange-700 border-3 ${taperDrumColor === "orange" ? "border-white shadow-lg ring-2 ring-orange-300" : "border-transparent hover:border-orange-200"} transition-all duration-300 hover:scale-110`}
                                aria-label="Sunset Orange"
                                title="Sunset Orange"
                              />
                              <button 
                                onClick={() => setTaperDrumColor("white")} 
                                className={`w-6 h-6 rounded-full bg-gradient-to-br from-gray-50 to-gray-200 border-3 ${taperDrumColor === "white" ? "border-gray-600 shadow-lg ring-2 ring-gray-300" : "border-gray-300 hover:border-gray-400"} transition-all duration-300 hover:scale-110`}
                                aria-label="Pure White"
                                title="Pure White"
                              />
                              <button 
                                onClick={() => setTaperDrumColor("yellow")} 
                                className={`w-6 h-6 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 border-3 ${taperDrumColor === "yellow" ? "border-white shadow-lg ring-2 ring-yellow-300" : "border-transparent hover:border-yellow-200"} transition-all duration-300 hover:scale-110`}
                                aria-label="Golden Yellow"
                                title="Golden Yellow"
                              />
                            </div>
                          </div>
                        )}
                        
                        {/* Color options for Double Mouth Drum */}
                        {category.id === 5 && (
                          <div className="mt-4">
                            <h4 className="font-semibold text-lg mb-2 text-primary">Premium Color Options</h4>
                            <div className="flex flex-wrap gap-2 sm:gap-3">
                              <button 
                                onClick={() => setDoubleMouthDrumColor("blue")} 
                                className={`w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-3 ${doubleMouthDrumColor === "blue" ? "border-white shadow-lg ring-2 ring-blue-300" : "border-transparent hover:border-blue-200"} transition-all duration-300 hover:scale-110`}
                                aria-label="Ocean Blue"
                                title="Ocean Blue"
                              />
                              <button 
                                onClick={() => setDoubleMouthDrumColor("green")} 
                                className={`w-6 h-6 rounded-full bg-gradient-to-br from-green-500 to-green-700 border-3 ${doubleMouthDrumColor === "green" ? "border-white shadow-lg ring-2 ring-green-300" : "border-transparent hover:border-green-200"} transition-all duration-300 hover:scale-110`}
                                aria-label="Forest Green"
                                title="Forest Green"
                              />
                              <button 
                                onClick={() => setDoubleMouthDrumColor("orange")} 
                                className={`w-6 h-6 rounded-full bg-gradient-to-br from-orange-500 to-orange-700 border-3 ${doubleMouthDrumColor === "orange" ? "border-white shadow-lg ring-2 ring-orange-300" : "border-transparent hover:border-orange-200"} transition-all duration-300 hover:scale-110`}
                                aria-label="Sunset Orange"
                                title="Sunset Orange"
                              />
                              <button 
                                onClick={() => setDoubleMouthDrumColor("red")} 
                                className={`w-6 h-6 rounded-full bg-gradient-to-br from-red-500 to-red-700 border-3 ${doubleMouthDrumColor === "red" ? "border-white shadow-lg ring-2 ring-red-300" : "border-transparent hover:border-red-200"} transition-all duration-300 hover:scale-110`}
                                aria-label="Crimson Red"
                                title="Crimson Red"
                              />
                            </div>
                          </div>
                        )}
                        
                        {/* Color options for Narrow Mouth Can */}
                        {category.id === 6 && (
                          <div className="mt-4">
                            <h4 className="font-semibold text-lg mb-2 text-primary">Premium Color Options</h4>
                            <div className="flex flex-wrap gap-2 sm:gap-3">
                              <button 
                                onClick={() => setNarrowMouthCanColor("green")} 
                                className={`w-6 h-6 rounded-full bg-gradient-to-br from-green-500 to-green-700 border-3 ${narrowMouthCanColor === "green" ? "border-white shadow-lg ring-2 ring-green-300" : "border-transparent hover:border-green-200"} transition-all duration-300 hover:scale-110`}
                                aria-label="Forest Green"
                                title="Forest Green"
                              />
                              <button 
                                onClick={() => setNarrowMouthCanColor("orange")} 
                                className={`w-6 h-6 rounded-full bg-gradient-to-br from-orange-500 to-orange-700 border-3 ${narrowMouthCanColor === "orange" ? "border-white shadow-lg ring-2 ring-orange-300" : "border-transparent hover:border-orange-200"} transition-all duration-300 hover:scale-110`}
                                aria-label="Sunset Orange"
                                title="Sunset Orange"
                              />
                              <button 
                                onClick={() => setNarrowMouthCanColor("pink")} 
                                className={`w-6 h-6 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 border-3 ${narrowMouthCanColor === "pink" ? "border-white shadow-lg ring-2 ring-pink-300" : "border-transparent hover:border-pink-200"} transition-all duration-300 hover:scale-110`}
                                aria-label="Soft Pink"
                                title="Soft Pink"
                              />
                              <button 
                                onClick={() => setNarrowMouthCanColor("red")} 
                                className={`w-6 h-6 rounded-full bg-gradient-to-br from-red-500 to-red-700 border-3 ${narrowMouthCanColor === "red" ? "border-white shadow-lg ring-2 ring-red-300" : "border-transparent hover:border-red-200"} transition-all duration-300 hover:scale-110`}
                                aria-label="Crimson Red"
                                title="Crimson Red"
                              />
                              <button 
                                onClick={() => setNarrowMouthCanColor("white")} 
                                className={`w-6 h-6 rounded-full bg-gradient-to-br from-gray-50 to-gray-200 border-3 ${narrowMouthCanColor === "white" ? "border-gray-600 shadow-lg ring-2 ring-gray-300" : "border-gray-300 hover:border-gray-400"} transition-all duration-300 hover:scale-110`}
                                aria-label="Pure White"
                                title="Pure White"
                              />
                              <button 
                                onClick={() => setNarrowMouthCanColor("yellow")} 
                                className={`w-6 h-6 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 border-3 ${narrowMouthCanColor === "yellow" ? "border-white shadow-lg ring-2 ring-yellow-300" : "border-transparent hover:border-yellow-200"} transition-all duration-300 hover:scale-110`}
                                aria-label="Golden Yellow"
                                title="Golden Yellow"
                              />
                            </div>
                          </div>
                        )}
                        
                        {/* Color options for Narrow Mouth Deluxe Can */}
                        {category.id === 7 && (
                          <div className="mt-4">
                            <h4 className="font-semibold text-lg mb-2 text-primary">Premium Color Options</h4>
                            <div className="flex flex-wrap gap-2 sm:gap-3">
                              <button 
                                onClick={() => setDeluxCanColor("blue")} 
                                className={`w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-3 ${deluxCanColor === "blue" ? "border-white shadow-lg ring-2 ring-blue-300" : "border-transparent hover:border-blue-200"} transition-all duration-300 hover:scale-110`}
                                aria-label="Ocean Blue"
                                title="Ocean Blue"
                              />
                              <button 
                                onClick={() => setDeluxCanColor("white")} 
                                className={`w-6 h-6 rounded-full bg-gradient-to-br from-gray-50 to-gray-200 border-3 ${deluxCanColor === "white" ? "border-gray-600 shadow-lg ring-2 ring-gray-300" : "border-gray-300 hover:border-gray-400"} transition-all duration-300 hover:scale-110`}
                                aria-label="Pure White"
                                title="Pure White"
                              />
                              <button 
                                onClick={() => setDeluxCanColor("red")} 
                                className={`w-6 h-6 rounded-full bg-gradient-to-br from-red-500 to-red-700 border-3 ${deluxCanColor === "red" ? "border-white shadow-lg ring-2 ring-red-300" : "border-transparent hover:border-red-200"} transition-all duration-300 hover:scale-110`}
                                aria-label="Crimson Red"
                                title="Crimson Red"
                              />
                              <button 
                                onClick={() => setDeluxCanColor("green")} 
                                className={`w-6 h-6 rounded-full bg-gradient-to-br from-green-500 to-green-700 border-3 ${deluxCanColor === "green" ? "border-white shadow-lg ring-2 ring-green-300" : "border-transparent hover:border-green-200"} transition-all duration-300 hover:scale-110`}
                                aria-label="Forest Green"
                                title="Forest Green"
                              />
                              <button 
                                onClick={() => setDeluxCanColor("orange")} 
                                className={`w-6 h-6 rounded-full bg-gradient-to-br from-orange-500 to-orange-700 border-3 ${deluxCanColor === "orange" ? "border-white shadow-lg ring-2 ring-orange-300" : "border-transparent hover:border-orange-200"} transition-all duration-300 hover:scale-110`}
                                aria-label="Vibrant Orange"
                                title="Vibrant Orange"
                              />
                              <button 
                                onClick={() => setDeluxCanColor("yellow")} 
                                className={`w-6 h-6 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 border-3 ${deluxCanColor === "yellow" ? "border-white shadow-lg ring-2 ring-yellow-300" : "border-transparent hover:border-yellow-200"} transition-all duration-300 hover:scale-110`}
                                aria-label="Bright Yellow"
                                title="Bright Yellow"
                              />
                            </div>
                          </div>
                        )}
                        
                        {/* Color options for Sauce Can */}
                        {category.id === 10 && (
                          <div className="mt-4">
                            <h4 className="font-semibold text-lg mb-2 text-primary">Premium Color Options</h4>
                            <div className="flex flex-wrap gap-2 sm:gap-3">
                              <button 
                                onClick={() => setPhenylCanColor("green")} 
                                className={`w-6 h-6 rounded-full bg-gradient-to-br from-green-500 to-green-700 border-3 ${phenylCanColor === "green" ? "border-white shadow-lg ring-2 ring-green-300" : "border-transparent hover:border-green-200"} transition-all duration-300 hover:scale-110`}
                                aria-label="Forest Green"
                                title="Forest Green"
                              />
                              <button 
                                onClick={() => setPhenylCanColor("orange")} 
                                className={`w-6 h-6 rounded-full bg-gradient-to-br from-orange-500 to-orange-700 border-3 ${phenylCanColor === "orange" ? "border-white shadow-lg ring-2 ring-orange-300" : "border-transparent hover:border-orange-200"} transition-all duration-300 hover:scale-110`}
                                aria-label="Sunset Orange"
                                title="Sunset Orange"
                              />
                              <button 
                                onClick={() => setPhenylCanColor("pink")} 
                                className={`w-6 h-6 rounded-full bg-gradient-to-br from-pink-500 to-pink-700 border-3 ${phenylCanColor === "pink" ? "border-white shadow-lg ring-2 ring-pink-300" : "border-transparent hover:border-pink-200"} transition-all duration-300 hover:scale-110`}
                                aria-label="Rose Pink"
                                title="Rose Pink"
                              />
                              <button 
                                onClick={() => setPhenylCanColor("yellow")} 
                                className={`w-6 h-6 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 border-3 ${phenylCanColor === "yellow" ? "border-white shadow-lg ring-2 ring-yellow-300" : "border-transparent hover:border-yellow-200"} transition-all duration-300 hover:scale-110`}
                                aria-label="Golden Yellow"
                                title="Golden Yellow"
                              />
                            </div>
                          </div>
                        )}
                        
                        {/* Color options for Glossy Open Mouth */}
                        {category.id === 8 && (
                          <div className="mt-4">
                            <h4 className="font-semibold text-lg mb-2 text-primary">Premium Color Options</h4>
                            <div className="flex flex-wrap gap-2 sm:gap-3">
                              <button 
                                onClick={() => setGlossyOpenMouthColor("blue")} 
                                className={`w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-3 ${glossyOpenMouthColor === "blue" ? "border-white shadow-lg ring-2 ring-blue-300" : "border-transparent hover:border-blue-200"} transition-all duration-300 hover:scale-110`}
                                aria-label="Ocean Blue"
                                title="Ocean Blue"
                              />
                              <button 
                                onClick={() => setGlossyOpenMouthColor("green")} 
                                className={`w-6 h-6 rounded-full bg-gradient-to-br from-green-500 to-green-700 border-3 ${glossyOpenMouthColor === "green" ? "border-white shadow-lg ring-2 ring-green-300" : "border-transparent hover:border-green-200"} transition-all duration-300 hover:scale-110`}
                                aria-label="Forest Green"
                                title="Forest Green"
                              />
                              <button 
                                onClick={() => setGlossyOpenMouthColor("orange")} 
                                className={`w-6 h-6 rounded-full bg-gradient-to-br from-orange-500 to-orange-700 border-3 ${glossyOpenMouthColor === "orange" ? "border-white shadow-lg ring-2 ring-orange-300" : "border-transparent hover:border-orange-200"} transition-all duration-300 hover:scale-110`}
                                aria-label="Sunset Orange"
                                title="Sunset Orange"
                              />
                              <button 
                                onClick={() => setGlossyOpenMouthColor("red")} 
                                className={`w-6 h-6 rounded-full bg-gradient-to-br from-red-500 to-red-700 border-3 ${glossyOpenMouthColor === "red" ? "border-white shadow-lg ring-2 ring-red-300" : "border-transparent hover:border-red-200"} transition-all duration-300 hover:scale-110`}
                                aria-label="Crimson Red"
                                title="Crimson Red"
                              />
                              <button 
                                onClick={() => setGlossyOpenMouthColor("white")} 
                                className={`w-6 h-6 rounded-full bg-gradient-to-br from-gray-50 to-gray-200 border-3 ${glossyOpenMouthColor === "white" ? "border-gray-600 shadow-lg ring-2 ring-gray-300" : "border-gray-300 hover:border-gray-400"} transition-all duration-300 hover:scale-110`}
                                aria-label="Pure White"
                                title="Pure White"
                              />
                              <button 
                                onClick={() => setGlossyOpenMouthColor("yellow")} 
                                className={`w-6 h-6 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 border-3 ${glossyOpenMouthColor === "yellow" ? "border-white shadow-lg ring-2 ring-yellow-300" : "border-transparent hover:border-yellow-200"} transition-all duration-300 hover:scale-110`}
                                aria-label="Bright Yellow"
                                title="Bright Yellow"
                              />
                            </div>
                          </div>
                        )}
                        
                        {/* Color options for Jerry Can */}
                        {category.id === 3 && (
                          <div className="mt-4">
                            <h4 className="font-semibold text-lg mb-2 text-primary">Premium Color Options</h4>
                            <div className="flex flex-wrap gap-2 sm:gap-3">
                              <button 
                                onClick={() => setJerryCanColor("blue")} 
                                className={`w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-3 ${jerryCanColor === "blue" ? "border-white shadow-lg ring-2 ring-blue-300" : "border-transparent hover:border-blue-200"} transition-all duration-300 hover:scale-110`}
                                aria-label="Ocean Blue"
                                title="Ocean Blue"
                              />
                              <button 
                                onClick={() => setJerryCanColor("white")} 
                                className={`w-6 h-6 rounded-full bg-gradient-to-br from-gray-50 to-gray-200 border-3 ${jerryCanColor === "white" ? "border-gray-600 shadow-lg ring-2 ring-gray-300" : "border-gray-300 hover:border-gray-400"} transition-all duration-300 hover:scale-110`}
                                aria-label="Pure White"
                                title="Pure White"
                              />
                              <button 
                                onClick={() => setJerryCanColor("red")} 
                                className={`w-6 h-6 rounded-full bg-gradient-to-br from-red-500 to-red-700 border-3 ${jerryCanColor === "red" ? "border-white shadow-lg ring-2 ring-red-300" : "border-transparent hover:border-red-200"} transition-all duration-300 hover:scale-110`}
                                aria-label="Crimson Red"
                                title="Crimson Red"
                              />
                              <button 
                                onClick={() => setJerryCanColor("green")} 
                                className={`w-6 h-6 rounded-full bg-gradient-to-br from-green-500 to-green-700 border-3 ${jerryCanColor === "green" ? "border-white shadow-lg ring-2 ring-green-300" : "border-transparent hover:border-green-200"} transition-all duration-300 hover:scale-110`}
                                aria-label="Forest Green"
                                title="Forest Green"
                              />
                              <button 
                                onClick={() => setJerryCanColor("yellow")} 
                                className={`w-6 h-6 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 border-3 ${jerryCanColor === "yellow" ? "border-white shadow-lg ring-2 ring-yellow-300" : "border-transparent hover:border-yellow-200"} transition-all duration-300 hover:scale-110`}
                                aria-label="Bright Yellow"
                                title="Bright Yellow"
                              />
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-lg mb-2">
                            Key Features
                          </h4>
                          {category.features.map((f, i) => (
                            <div
                              key={i}
                              className="flex items-center space-x-2 text-sm mb-1"
                            >
                              <CheckCircle className="w-4 h-4 text-primary" />
                              <span>{f}</span>
                            </div>
                          ))}
                        </div>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-lg mb-2">
                              Specifications
                            </h4>
                            {Object.entries(category.specifications).map(
                              ([k, v]) => (
                                <div
                                  key={k}
                                  className="flex justify-between py-1 border-b border-border/50 text-sm"
                              >
                                <span className="capitalize">{k}</span>
                                <span>{v}</span>
                              </div>
                            )
                          )}
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg mb-2">
                            Applications
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {category.applications.map((app, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
                              >
                                {app}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg mb-2">
                            Benefits
                          </h4>
                          {category.benefits.map((b, i) => (
                            <div
                              key={i}
                              className="flex items-center space-x-2 text-sm mb-1"
                            >
                              <Star className="w-4 h-4 text-primary" />
                              <span>{b}</span>
                            </div>
                          ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 pt-4">
                          <Button
                            variant="outline"
                            className="flex-1 text-sm w-full"
                            onClick={() => handleDownload(category.id)}
                          >
                            Download Specs
                          </Button>
                        </div>
                      </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </motion.div>
            ))}
          </div>

          {/* Right Arrow */}
          {canScrollRight && (
            <motion.button
              onClick={() => scroll("right")}
              className="absolute -right-6 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-primary/20 backdrop-blur-sm hover:bg-primary/40 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Scroll right"
            >
              <ArrowRight className="w-5 h-5 text-primary" />
            </motion.button>
          )}
        </div>

        {/* Neon Liquid Filling Scrollbar */}
        <style>{`
          .hide-scrollbar::-webkit-scrollbar {
            height: 16px;
          }
          .hide-scrollbar::-webkit-scrollbar-track {
            background: rgba(0, 0, 0, 0.3);
            border-radius: 25px;
            box-shadow: 
              inset 0 0 15px rgba(0, 0, 0, 0.5),
              0 0 20px rgba(255, 0, 110, 0.2);
            position: relative;
            overflow: hidden;
          }
          .hide-scrollbar::-webkit-scrollbar-thumb {
            background: linear-gradient(90deg, 
              #ff006e 0%, 
              #8338ec 20%, 
              #3a86ff 40%, 
              #06ffa5 60%, 
              #ffbe0b 80%, 
              #fb5607 100%);
            background-size: 300% 100%;
            border-radius: 25px;
            border: none;
            box-shadow: 
              0 0 30px rgba(255, 0, 110, 0.8),
              0 0 50px rgba(131, 56, 236, 0.6),
              0 0 70px rgba(58, 134, 255, 0.4),
              0 0 90px rgba(6, 255, 165, 0.3),
              inset 0 2px 8px rgba(255, 255, 255, 0.3),
              inset 0 -2px 8px rgba(0, 0, 0, 0.2);
            position: relative;
            overflow: hidden;
          }
          .hide-scrollbar::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(90deg, 
              #ff1a7a 0%, 
              #9d4edd 20%, 
              #4ea5ff 40%, 
              #1affb3 60%, 
              #ffc61f 80%, 
              #ff6b1a 100%);
            background-size: 300% 100%;
            box-shadow: 
              0 0 40px rgba(255, 0, 110, 1),
              0 0 60px rgba(131, 56, 236, 0.8),
              0 0 80px rgba(58, 134, 255, 0.6),
              0 0 100px rgba(6, 255, 165, 0.4),
              inset 0 3px 10px rgba(255, 255, 255, 0.4),
              inset 0 -3px 10px rgba(0, 0, 0, 0.3);
          }
          .hide-scrollbar::-webkit-scrollbar-thumb:active {
            box-shadow: 
              0 0 25px rgba(255, 0, 110, 1.2),
              0 0 45px rgba(131, 56, 236, 1),
              0 0 65px rgba(58, 134, 255, 0.8),
              0 0 85px rgba(6, 255, 165, 0.6),
              inset 0 1px 6px rgba(255, 255, 255, 0.5),
              inset 0 -1px 6px rgba(0, 0, 0, 0.4);
          }
          .hide-scrollbar {
            scrollbar-width: thin;
            scrollbar-color: #ff006e rgba(0, 0, 0, 0.3);
          }
          
          /* Liquid filling animation */
          @keyframes liquidFill {
            0% { 
              background-position: -100% 0%;
              filter: hue-rotate(0deg) brightness(1.3) saturate(1.8);
            }
            25% { 
              background-position: -50% 0%;
              filter: hue-rotate(90deg) brightness(1.5) saturate(2);
            }
            50% { 
              background-position: 0% 0%;
              filter: hue-rotate(180deg) brightness(1.7) saturate(2.2);
            }
            75% { 
              background-position: 50% 0%;
              filter: hue-rotate(270deg) brightness(1.5) saturate(2);
            }
            100% { 
              background-position: 100% 0%;
              filter: hue-rotate(360deg) brightness(1.3) saturate(1.8);
            }
          }
          
          /* Pulsing glow effect */
          @keyframes neonGlow {
            0%, 100% { 
              box-shadow: 
                0 0 30px rgba(255, 0, 110, 0.8),
                0 0 50px rgba(131, 56, 236, 0.6),
                0 0 70px rgba(58, 134, 255, 0.4),
                0 0 90px rgba(6, 255, 165, 0.3),
                inset 0 2px 8px rgba(255, 255, 255, 0.3),
                inset 0 -2px 8px rgba(0, 0, 0, 0.2);
            }
            50% { 
              box-shadow: 
                0 0 40px rgba(255, 0, 110, 1.2),
                0 0 70px rgba(131, 56, 236, 1),
                0 0 100px rgba(58, 134, 255, 0.8),
                0 0 130px rgba(6, 255, 165, 0.6),
                inset 0 3px 12px rgba(255, 255, 255, 0.4),
                inset 0 -3px 12px rgba(0, 0, 0, 0.3);
            }
          }
          
          /* Track glow effect */
          @keyframes trackGlow {
            0%, 100% { 
              box-shadow: 
                inset 0 0 15px rgba(0, 0, 0, 0.5),
                0 0 20px rgba(255, 0, 110, 0.2);
            }
            50% { 
              box-shadow: 
                inset 0 0 20px rgba(0, 0, 0, 0.7),
                0 0 30px rgba(255, 0, 110, 0.4);
            }
          }
          
          .hide-scrollbar::-webkit-scrollbar-thumb {
            animation: 
              liquidFill 5s linear infinite,
              neonGlow 2.5s ease-in-out infinite;
          }
          
          .hide-scrollbar::-webkit-scrollbar-track {
            animation: trackGlow 3s ease-in-out infinite;
          }
          
          /* Create filling effect with pseudo-element */
          .hide-scrollbar::-webkit-scrollbar-thumb::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(90deg, 
              transparent 0%,
              rgba(255, 255, 255, 0.3) 50%,
              transparent 100%);
            border-radius: 25px;
            animation: fillShine 2s linear infinite;
          }
          
          @keyframes fillShine {
            0% { transform: translateX(-100%); opacity: 0; }
            50% { opacity: 1; }
            100% { transform: translateX(100%); opacity: 0; }
          }
          
          /* Remove default scrollbar arrows and buttons */
          .hide-scrollbar::-webkit-scrollbar-button {
            display: none;
          }
          
          .hide-scrollbar::-webkit-scrollbar-corner {
            display: none;
          }
        `}</style>
      </div>
    </section>
  );
};

export default ProductCategories;
