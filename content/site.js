// All page content. Edit text, colours and shapes here.
export const FEATURES = [
 {
  "slug": "live-twin",
  "name": "Live twin",
  "color": "#DBF5F0",
  "icon": "globe",
  "demo": "live-twin",
  "lead": "A live digital copy of every machine: where it is, how it’s doing and what it’s sending, updated as it happens.",
  "steps": [
   [
    "Connect",
    "A small agent or gateway links the machine to the platform over a secure channel."
   ],
   [
    "Mirror",
    "Sensor data streams in and the avatar updates in real time."
   ],
   [
    "Use",
    "Dashboards, alerts and other services read from the avatar, not the machine itself."
   ]
  ],
  "dtitle": "Crane 07, live",
  "dtext": "The numbers on the right move with the real crane. Press refresh to pull a new reading.",
  "btns": [
   [
    "ping",
    "Refresh reading"
   ]
  ]
 },
 {
  "slug": "ota-updates",
  "name": "OTA updates",
  "color": "#E6DEFF",
  "icon": "chip",
  "demo": "ota",
  "lead": "Send new software to machines in the field. Every update is signed, checked when it arrives, and rolled back by itself if something goes wrong.",
  "steps": [
   [
    "Sign",
    "Each release is signed, so a machine only installs software that really comes from you."
   ],
   [
    "Deliver",
    "Send it to one machine or a whole fleet, in stages you control."
   ],
   [
    "Verify or roll back",
    "The machine checks the update. If anything fails, it returns to the last good version."
   ]
  ],
  "dtitle": "Update a tractor",
  "dtext": "Push version 4.12 to the tractor, then try rolling it back.",
  "btns": [
   [
    "push",
    "Push v4.12"
   ],
   [
    "rollback",
    "Roll back"
   ]
  ]
 },
 {
  "slug": "remote-control",
  "name": "Remote control",
  "color": "#DCEBFA",
  "icon": "pad",
  "demo": "remote",
  "lead": "Operate a machine from somewhere safer, with very little delay between your hands and its movement.",
  "steps": [
   [
    "Ask for access",
    "Policy decides who may drive which machine, and when."
   ],
   [
    "Take control",
    "Live telemetry and video come to you; your commands go to the machine."
   ],
   [
    "Hand back",
    "Control returns to the machine or the next operator, and the session is logged."
   ]
  ],
  "dtitle": "Drive it yourself",
  "dtext": "Drag on the field or use the arrow keys to move the tractor.",
  "btns": []
 },
 {
  "slug": "edge-ai",
  "name": "Edge AI",
  "color": "#E3E3FF",
  "icon": "bolt",
  "demo": "edge-ai",
  "lead": "Small AI models run on the machine itself, so they react in time and spot wear before it turns into downtime.",
  "steps": [
   [
    "Train",
    "Models learn from fleet data in the cloud."
   ],
   [
    "Deploy",
    "They are shipped to the machine with a normal OTA update."
   ],
   [
    "Act locally",
    "The machine decides on the spot, even when the network is slow."
   ]
  ],
  "dtitle": "Feel the vibration",
  "dtext": "Slide the vibration up and watch the model’s service estimate change.",
  "btns": []
 },
 {
  "slug": "zero-trust",
  "name": "Zero Trust",
  "color": "#FFE3FB",
  "icon": "shield",
  "demo": "zero-trust",
  "lead": "Nothing is trusted by default. Every command is checked against your rules and written to a tamper-evident ledger.",
  "steps": [
   [
    "Identify",
    "Every person, service and device proves who it is."
   ],
   [
    "Check",
    "Each request is checked against policy before it reaches the machine."
   ],
   [
    "Record",
    "Actions are logged on Hyperledger, and personal data is handled under GDPR."
   ]
  ],
  "dtitle": "Try to get in",
  "dtext": "Send a signed command, then one from an unknown device.",
  "btns": [
   [
    "good",
    "Signed command"
   ],
   [
    "bad",
    "Unknown device"
   ]
  ]
 }
];
export const CASES = [
 {
  "slug": "heavy-equipment",
  "name": "Heavy equipment",
  "ind": "Construction",
  "color": "#DCEBFA",
  "shape": "crane",
  "lead": "Cranes and excavators, run from a safe office instead of the cab.",
  "ch": "Operators work in loud, risky places, often far from home.",
  "ap": "Each machine gets an avatar with live video and telemetry. An operator in an office takes control through Remote control, and Zero Trust checks every command.",
  "out": "Safer work, and one operator can support sites in different places.",
  "stat": [
   "40 km",
   "Example distance between operator and crane"
  ],
  "feats": [
   "remote-control",
   "zero-trust",
   "live-twin"
  ]
 },
 {
  "slug": "robotics",
  "name": "Robotics",
  "ind": "Manufacturing",
  "color": "#E3E3FF",
  "shape": "robot",
  "lead": "The service gets booked before the part actually breaks.",
  "ch": "Unplanned stops on a production line are expensive and hard to see coming.",
  "ap": "Edge AI on the robot watches vibration and temperature. The live twin shows the trend to the maintenance team.",
  "out": "Maintenance moves from reacting to planning.",
  "stat": [
   "212 h",
   "Example early warning before a joint fails"
  ],
  "feats": [
   "edge-ai",
   "live-twin",
   "ota-updates"
  ]
 },
 {
  "slug": "healthcare",
  "name": "Healthcare",
  "ind": "Hospitals",
  "color": "#FFE3FB",
  "shape": "cart",
  "lead": "Medical data people can trust, with every access written down.",
  "ch": "Connected medical devices handle sensitive data that has to stay private and auditable.",
  "ap": "Policy-based access decides who sees what. Each access is logged on a tamper-evident ledger, and data handling follows GDPR.",
  "out": "A clear answer whenever someone asks who touched the data.",
  "stat": [
   "100%",
   "Of data access logged"
  ],
  "feats": [
   "zero-trust",
   "live-twin",
   "ota-updates"
  ]
 },
 {
  "slug": "insurance",
  "name": "Insurance",
  "ind": "Mobility",
  "color": "#E6DEFF",
  "shape": "car",
  "lead": "Clear proof of who drove, when, and how carefully.",
  "ch": "With shared cars it’s hard to know who was driving when something happened.",
  "ap": "The vehicle’s avatar records trips and driver identity, signed and stored so nobody can change them later.",
  "out": "Faster and fairer claims.",
  "stat": [
   "1 tap",
   "To share proof of a trip"
  ],
  "feats": [
   "live-twin",
   "zero-trust",
   "edge-ai"
  ]
 },
 {
  "slug": "agriculture",
  "name": "Agriculture",
  "ind": "Farming",
  "color": "#E9FAC0",
  "shape": "tractor",
  "lead": "Tractors that only take orders they can verify.",
  "ch": "Connected farm machines are a target, and a hijacked tractor is a real danger.",
  "ap": "Every command and every update is signed. Unknown devices are blocked before they reach the machine.",
  "out": "Farmers get connected features without giving up control.",
  "stat": [
   "0",
   "Unverified commands accepted"
  ],
  "feats": [
   "zero-trust",
   "ota-updates",
   "remote-control"
  ]
 },
 {
  "slug": "security",
  "name": "Security",
  "ind": "Fleets",
  "color": "#DBF5F0",
  "shape": "shield",
  "lead": "Spot an intruder anywhere in the fleet, the moment it happens.",
  "ch": "Fleets have thousands of entry points, and attacks often look like normal traffic.",
  "ap": "Edge AI on each machine learns what normal looks like and flags anything odd, while Zero Trust blocks unknown devices.",
  "out": "Problems are caught at the edge, before they spread.",
  "stat": [
   "Edge",
   "Where anomalies are flagged first"
  ],
  "feats": [
   "edge-ai",
   "zero-trust",
   "live-twin"
  ]
 }
];
export const PROJECTS = [
 {
  "slug": "metacities",
  "name": "MetaCities",
  "start": 2023,
  "end": 2026,
  "color": "#E6DEFF",
  "shape": "globe",
  "desc": "Digital twins of urban life, from traffic to public services."
 },
 {
  "slug": "6g-icarus",
  "name": "6G-ICARUS",
  "start": 2024,
  "end": 2028,
  "color": "#DCEBFA",
  "shape": "chip",
  "desc": "Intelligent 6G networks that adapt to the machines they connect."
 },
 {
  "slug": "isac-newton",
  "name": "ISAC-NEWTON",
  "start": 2025,
  "end": 2029,
  "color": "#DBF5F0",
  "shape": "globe",
  "desc": "Networks that sense as well as talk, for safer shared spaces."
 },
 {
  "slug": "referee",
  "name": "REFEREE",
  "start": 2026,
  "end": 2029,
  "color": "#FFE3FB",
  "shape": "shield",
  "desc": "Verification and trust for autonomous systems."
 },
 {
  "slug": "ecoagent-6g",
  "name": "EcoAgent-6G",
  "start": 2026,
  "end": 2029,
  "color": "#E9FAC0",
  "shape": "bolt",
  "desc": "AI agents that cut the energy use of networks and fleets."
 },
 {
  "slug": "terahealth",
  "name": "TeraHealth",
  "start": 2027,
  "end": 2029,
  "color": "#E3E3FF",
  "shape": "cart",
  "desc": "Terahertz links and secure data for connected care."
 }
];
export const STEP_SHAPES = {'live-twin':['crane','avatar','globe'],'ota-updates':['chip','bolt','shield'],'remote-control':['shield','pad','car'],'edge-ai':['globe','chip','robot'],'zero-trust':['people','shield','chip']};
export const SITE = { name:'SmartAvatar', url:'https://smartavatar-site.vercel.app', email:'info@smartavatar.nl', description:'SmartAvatar gives real machines a live, trusted avatar. Watch them, update them and keep them safe from anywhere. Deep tech from Delft.' };
