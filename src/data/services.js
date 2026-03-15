import { Users, User, Home, Clock, Heart } from 'lucide-react';

export const SERVICES = [
  {
    id: 'child-care',
    title: 'Child Care & Babysitting',
    shortDesc: 'Nurturing care for your little ones.',
    icon: Users,
    description:
      "Professional, nurturing care for children of all ages. Our trained babysitters prioritize safety, educational development, and fun, giving you peace of mind while you work or rest.",
    features: [
      'Background-verified babysitters',
      'Age-appropriate educational play',
      'Newborn & infant specialization',
      'Homework help & tutoring',
      'Meal preparation & feeding',
      'Emergency safety trained',
    ],
    availability: '24/7, Weekends, Holidays',
    image: '/images/child-care.webp',
    imageAlt: 'Babysitter caring for a child at home in Bangalore',
    color: 'text-pink-600',
    bg: 'bg-pink-50',
    sections: {
      whatIs:
        'Child care service provides trained caregivers who support your child’s safety, learning, routine, and emotional wellbeing at home.',
      benefits: [
        'Safe supervision by verified caregivers',
        'Structured play and learning routines',
        'Support for working parents and busy families',
        'Flexible full-time, part-time, and emergency support',
      ],
      whoNeeds: [
        'Parents with newborns, infants, or toddlers',
        'Families needing after-school support',
        'Parents who need reliable backup care',
        'Families with both working parents',
      ],
      whyChoose: [
        'Trained and background-verified babysitters',
        '24/7 support and quick replacement assistance',
        'Care plans tailored to each child’s age and routine',
        'Trusted by families across Bangalore',
      ],
    },
    faqs: [
      {
        q: 'Do you provide newborn babysitting support?',
        a: 'Yes. We provide newborn and infant-focused babysitters trained in feeding, hygiene, and safe handling.',
      },
      {
        q: 'Can I hire a babysitter only for evenings?',
        a: 'Yes. We offer flexible scheduling including mornings, evenings, weekends, and emergency slots.',
      },
      {
        q: 'Are your babysitters verified?',
        a: 'Yes. Every babysitter goes through identity verification, background checks, and profile screening.',
      },
    ],
    relatedServiceIds: ['elder-care', 'patient-care', 'housekeeping'],
  },
  {
    id: 'elder-care',
    title: 'Elder Care Services',
    shortDesc: 'Dignified companionship for seniors.',
    icon: User,
    description:
      'Compassionate support for seniors allowing them to age gracefully at home. We assist with daily living activities, medication, and provide the companionship they deserve.',
    features: [
      'Personal hygiene & grooming',
      'Medication management',
      'Dementia & Alzheimer support',
      'Assisted mobility & walking',
      'Doctor appointment escort',
      'Emotional companionship',
    ],
    availability: 'Live-in (24hr) or Hourly',
    image: '/images/services/elder-care.jpg',
    imageAlt: 'Elderly caregiver assisting a senior citizen at home in Bangalore',
    color: 'text-teal-600',
    bg: 'bg-teal-50',
    sections: {
      whatIs:
        'Elder care service provides compassionate daily support to seniors, including personal care, mobility help, medication reminders, and companionship.',
      benefits: [
        'Improves senior comfort and dignity at home',
        'Reduces stress for family caregivers',
        'Supports medication and routine adherence',
        'Offers emotional companionship and social engagement',
      ],
      whoNeeds: [
        'Families with aging parents living at home',
        'Seniors requiring mobility or hygiene support',
        'Patients with memory-related care needs',
        'Families needing full-time or live-in elder support',
      ],
      whyChoose: [
        'Experienced caregivers trained in elder support',
        'Personalized routines based on health needs',
        'Reliable replacement and supervision support',
        'Compassion-first care with family updates',
      ],
    },
    faqs: [
      {
        q: 'Do you provide live-in elder care in Bangalore?',
        a: 'Yes. We provide both live-in and hourly elder care plans based on family needs.',
      },
      {
        q: 'Can caregivers help with hospital visits?',
        a: 'Yes. Caregivers can accompany seniors for doctor appointments and hospital follow-ups.',
      },
      {
        q: 'Do you support dementia patients?',
        a: 'Yes. We provide trained caregivers for dementia and memory-care support routines.',
      },
    ],
    relatedServiceIds: ['patient-care', 'housekeeping', 'child-care'],
  },
  {
    id: 'patient-care',
    title: 'Bedridden Patient Care',
    shortDesc: 'Medical-grade support for recovery.',
    icon: Heart,
    description:
      'Specialized care for patients recovering from surgery, stroke, or chronic illness. Our caretakers are trained in handling bedridden patients with medical precision and empathy.',
    features: [
      'Bedsore prevention (Turning)',
      'Catheter & diaper care',
      'Vital signs monitoring',
      'Sponge bath & hygiene',
      'Tube feeding assistance',
      'Post-operative support',
    ],
    availability: '24/7 Live-in Recommended',
    image: '/images/services/bed-ridden.jpg',
    imageAlt: 'Caregiver supporting bedridden patient recovery at home in Bangalore',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    sections: {
      whatIs:
        'Patient care service offers trained support for bedridden and recovering patients, focusing on hygiene, mobility handling, feeding, and recovery routines at home.',
      benefits: [
        'Helps prevent bedsores and infection risks',
        'Supports faster and safer home recovery',
        'Reduces caregiver burnout for family members',
        'Ensures consistent day and night care routines',
      ],
      whoNeeds: [
        'Bedridden patients requiring full-day support',
        'Post-surgery or stroke recovery patients',
        'Families managing chronic-care conditions',
        'Patients needing catheter, diaper, or feeding assistance',
      ],
      whyChoose: [
        'Trained staff for critical home care routines',
        '24/7 support options with monitoring discipline',
        'Care plans coordinated with family instructions',
        'Trusted support for long-term and short-term recovery',
      ],
    },
    faqs: [
      {
        q: 'Do you provide 24/7 patient attendants?',
        a: 'Yes. We provide full-time live-in attendants and shift-based plans for patient care.',
      },
      {
        q: 'Can you assist after surgery discharge?',
        a: 'Yes. Our caregivers support post-operative care including hygiene, feeding, and movement support.',
      },
      {
        q: 'Do caregivers handle bedridden hygiene care?',
        a: 'Yes. They are trained for sponge baths, diaper care, and bedsore prevention turning schedules.',
      },
    ],
    relatedServiceIds: ['elder-care', 'housekeeping', 'cooking'],
  },
  {
    id: 'housekeeping',
    title: 'Housekeeping & Cleaning',
    shortDesc: 'Spotless homes for healthy living.',
    icon: Home,
    description:
      'Comprehensive domestic help to keep your environment sanitary and organized. We handle the chores so you can focus on your family.',
    features: [
      'Deep cleaning & sanitization',
      'Laundry & ironing',
      'Kitchen organization',
      'Dusting & vacuuming',
      'Bathroom disinfection',
      'Custom cleaning schedules',
    ],
    availability: 'Daily, Weekly, Monthly',
    image:
      'https://images.unsplash.com/photo-1581578731117-104f2a41272c?auto=format&fit=crop&q=80&w=800',
    imageAlt: 'Professional housekeeper cleaning a family home in Bangalore',
    color: 'text-orange-600',
    bg: 'bg-orange-50',
    sections: {
      whatIs:
        'Housekeeping service provides regular or deep cleaning support to keep your home hygienic, organized, and comfortable for daily living.',
      benefits: [
        'Maintains a cleaner and healthier home environment',
        'Saves time for working families and caregivers',
        'Supports hygiene for children and seniors',
        'Flexible plans for daily and weekly cleaning needs',
      ],
      whoNeeds: [
        'Busy working families',
        'Homes with seniors or children needing hygiene care',
        'Families recovering after illness at home',
        'Households needing recurring deep-clean support',
      ],
      whyChoose: [
        'Trained staff with hygiene-focused cleaning routines',
        'Flexible schedules for daily, weekly, or monthly service',
        'Trusted support with quality supervision',
        'Reliable and consistent housekeeping outcomes',
      ],
    },
    faqs: [
      {
        q: 'Do you offer daily housekeeping service?',
        a: 'Yes. We provide daily, weekly, and customized housekeeping plans.',
      },
      {
        q: 'Do staff bring cleaning materials?',
        a: 'This can be arranged based on your preference and service package.',
      },
      {
        q: 'Can housekeeping be combined with cooking support?',
        a: 'Yes. We can tailor mixed domestic support packages for your home.',
      },
    ],
    relatedServiceIds: ['cooking', 'elder-care', 'child-care'],
  },
  {
    id: 'cooking',
    title: 'Home Cooking Services',
    shortDesc: 'Healthy meals, made with love.',
    icon: Clock,
    description:
      'Nutritious, home-cooked meals prepared in your kitchen. Our cooks accommodate dietary restrictions, regional preferences (North/South Indian), and family traditions.',
    features: [
      'Diet-specific meal planning',
      'North & South Indian cuisines',
      'Grocery management',
      'Hygienic preparation',
      'Party/Event cooking',
      'Kitchen cleanup included',
    ],
    availability: 'Breakfast, Lunch, Dinner',
    image:
      'https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&q=80&w=800',
    imageAlt: 'Home cook preparing healthy meals in a Bangalore kitchen',
    color: 'text-green-600',
    bg: 'bg-green-50',
    sections: {
      whatIs:
        'Home cooking service offers trained cooks who prepare hygienic, customized meals in your kitchen based on taste, diet, and routine.',
      benefits: [
        'Fresh homemade food tailored to your family',
        'Supports special diets for seniors and patients',
        'Saves daily meal planning and prep time',
        'Maintains kitchen hygiene and consistency',
      ],
      whoNeeds: [
        'Working families with limited cooking time',
        'Homes with seniors needing diet-specific meals',
        'Patients requiring soft or restricted diets',
        'Families wanting healthy home-cooked food daily',
      ],
      whyChoose: [
        'Experienced cooks for varied regional cuisines',
        'Meal plans based on preferences and restrictions',
        'Hygiene-first preparation standards',
        'Flexible timing for breakfast, lunch, and dinner',
      ],
    },
    faqs: [
      {
        q: 'Can cooks prepare diabetic or low-salt meals?',
        a: 'Yes. We support diet-specific cooking including diabetic, low-oil, and low-salt meal plans.',
      },
      {
        q: 'Do you offer one-time and monthly cooking plans?',
        a: 'Yes. We provide both recurring and short-term cooking support packages.',
      },
      {
        q: 'Can your cook prepare North and South Indian food?',
        a: 'Yes. Our cooks are experienced with multiple cuisines and household preferences.',
      },
    ],
    relatedServiceIds: ['housekeeping', 'patient-care', 'elder-care'],
  },
];

export const SERVICE_IDS = SERVICES.map((service) => service.id);

export function getServiceById(serviceId) {
  return SERVICES.find((service) => service.id === serviceId);
}
