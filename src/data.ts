/**
 * Describes how a craft will run and the requirements for the craft.
 * @param requirements [number, number][]: tuple of amount and item id; example [1, 1022]
 */
export type Craft = {
  result: [number, number][];
  type: "assembler" | "smelter" | "collider" | "refiner" | "chemical" | "miner";
  time: number;
  requirements: [number, number][];
};

export type CraftTree = {
  result: [number, number][];
  type: "assembler" | "smelter" | "collider" | "refiner" | "chemical" | "miner";
  time: number;
  requirements: CraftTree[];
};

export const dspCrafts: Craft[] = [
  {
    result: [[1, 1127]],
    type: "assembler",
    time: 8,
    requirements: [
      [2, 1206],
      [2, 1101],
      [10, 1121],
    ],
  },
  // Deuterium
  {
    result: [[5, 1121]],
    type: "collider",
    time: 5,
    requirements: [[10, 1120]],
  },
  // Hydrogen
  {
    result: [
      [2, 1114],
      [1, 1120],
    ],
    type: "refiner",
    time: 4,
    requirements: [[2, 1007]],
  },
	// Particle Container
  {
    result: [[1, 1206]],
    type: "assembler",
    time: 4,
    requirements: [
      [2, 1204],
      [2, 1104],
      [2, 1123],
    ],
  },
  {
    result: [[1, 1206]],
    type: "assembler",
    time: 4,
    requirements: [
      [10, 1016],
      [2, 1104],
    ],
  },
	// Electromagnetic turbine
  {
    result: [[1, 1204]],
    type: "assembler",
    time: 4,
    requirements: [
      [2, 1203],
      [2, 1202],
    ],
  },
  // Electric Motor
  {
    result: [[1, 1203]],
    type: "assembler",
    time: 2,
    requirements: [
      [2, 1101],
      [1, 1201],
      [1, 1202],
    ],
  },
  // Magnetic Coil
  {
    result: [[2, 1202]],
    type: "assembler",
    time: 1,
    requirements: [
      [2, 1102],
      [1, 1104],
    ],
  },
  // Magnet
  { result: [[1, 1102]], type: "smelter", time: 1, requirements: [[1, 1001]] },
  // Copper Ingot
  { result: [[1, 1104]], type: "smelter", time: 1, requirements: [[1, 1002]] },
  // Iron Ingot
  { result: [[1, 1101]], type: "smelter", time: 1, requirements: [[1, 1001]] },
  // High-purity silicon
  { result: [[1, 1105]], type: "smelter", time: 2, requirements: [[2, 1003]] },
  // Graviton Lens
  {
    result: [[1, 1209]],
    type: "assembler",
    time: 6,
    requirements: [
      [4, 1112],
      [1, 1127],
    ],
  },
  // Particle Broadband
  {
    result: [[1, 1402]],
    type: "assembler",
    time: 8,
    requirements: [
      [2, 1124],
      [2, 1113],
      [1, 1115],
    ],
  },
  // Space warper
  {
    result: [[1, 1210]],
    type: "assembler",
    time: 10,
    requirements: [[1, 1209]],
  },
  {
    result: [[8, 1210]],
    type: "assembler",
    time: 10,
    requirements: [[1, 6005]],
  },
  // Quantum Chip
  {
    result: [[1, 1305]],
    type: "assembler",
    time: 6,
    requirements: [
      [2, 1303],
      [2, 1304],
    ],
  },
	// Graphene
{ 
	result: [[2, 1123]],
		type: 'chemical',
		time: 3, 
	requirements: [
			[3, 1109],
			[1, 1116]
		],
	},
	// Sulfuric Acid
	{ result: [[4, 1116]],
		type: 'chemical', 
		time: 6,
	requirements: [
			[6, 1114],
			[8, 1005],
			[4, 1000]
		],
	},
  // Processor
  {
    result: [[1, 1303]],
    type: "assembler",
    time: 3,
    requirements: [
      [2, 1302],
      [2, 1301],
    ],
  },
  // Circuit Board
  {
    result: [[1, 1301]],
    type: "assembler",
    time: 3,
    requirements: [
      [2, 1101],
      [1, 1104],
    ],
  },
  // Microcrystaline component
  {
    result: [[1, 1302]],
    type: "assembler",
    time: 3,
    requirements: [
      [2, 1105],
      [1, 1104],
    ],
  },
  // Plane Filter
  {
    result: [[1, 1304]],
    type: "assembler",
    time: 12,
    requirements: [
      [1, 1126],
      [2, 1118],
    ],
  },
  // Titanium Glass
  {
    result: [[2, 1119]],
    type: "assembler",
    time: 5,
    requirements: [
      [2, 1110],
      [2, 1106],
      [2, 1000],
    ],
  },
  // Plastic
  {
    result: [[1, 1115]],
    type: "assembler",
    time: 3,
    requirements: [
      [2, 1114],
      [1, 1106],
    ],
  },
  // Energetic graphite
  {
    result: [[1, 1109]],
    type: "assembler",
    time: 2,
    requirements: [[2, 1006]],
  },

  // Casimir Crystal
  {
    result: [[1, 1126]],
    type: "assembler",
    time: 4,
    requirements: [
      [1, 1118],
      [2, 1123],
      [12, 1120],
    ],
  },
  // Titanium Crystal
  {
    result: [[1, 1118]],
    type: "assembler",
    time: 4,
    requirements: [
      [1, 1117],
      [2, 1106],
    ],
  },
  // Organic Crystal
  {
    result: [[1, 1117]],
    type: "chemical",
    time: 6,
    requirements: [
      [2, 1115],
      [1, 1114],
      [1, 1000],
    ],
  },
  {
    result: [[1, 1117]],
    type: "assembler",
    time: 6,
    requirements: [
      [20, 1030],
      [30, 1031],
      [10, 1000],
    ],
  },
  // Gravity Matrix
  {
    result: [[2, 6005]],
    type: "assembler",
    time: 24,
    requirements: [
      [1, 1209],
      [1, 1305],
    ],
  },
];

export type Item = {
  id: number;
  name: string;
  icon: string;
};

export const dspItems: Item[] = [
  {
    id: 1000,
    name: "Water",
    icon: "https://dsp-wiki.com/images/6/65/Icon_Water.png",
  },
  {
    id: 1001,
    name: "Iron ore",
    icon: "https://dsp-wiki.com/images/f/fc/Icon_Iron_Ore.png",
  },
  {
    id: 1002,
    name: "Copper ore",
    icon: "https://dsp-wiki.com/images/9/90/Icon_Copper_Ore.png",
  },
  {
    id: 1003,
    name: "Silicon ore",
    icon: "https://dsp-wiki.com/images/d/d4/Icon_Silicon_Ore.png",
  },
  {
    id: 1004,
    name: "Titanium ore",
    icon: "https://dsp-wiki.com/images/9/91/Icon_Titanium_Ore.png",
  },
	
  {
    id: 1005,
    name: "Stone",
    icon: "https://dsp-wiki.com/images/5/5a/Icon_Stone.png",
  },
	

  {
    id: 1007,
    name: "Crude Oil",
    icon: "https://dsp-wiki.com/images/8/8f/Icon_Crude_Oil.png",
  },
  {
    id: 1016,
    name: "Unipolar magnet",
    icon: "https://dsp-wiki.com/images/a/a9/Icon_Unipolar_Magnet.png",
  },
  {
    id: 1101,
    name: "Iron Ingot",
    icon: "https://dsp-wiki.com/images/f/f1/Icon_Iron_Ingot.png",
  },
  {
    id: 1102,
    name: "Magnet",
    icon: "https://dsp-wiki.com/images/c/c6/Icon_Magnet.png",
  },
  {
    id: 1104,
    name: "Copper Ingot",
    icon: "https://dsp-wiki.com/images/e/ec/Icon_Copper_Ingot.png",
  },
  {
    id: 1105,
    name: "High-purity silicon",
    icon: "https://dsp-wiki.com/images/8/8a/Icon_High-Purity_Silicon.png",
  },
{
		id: 1109,
		name: 'Energetic graphite',
		icon: "https://dsp-wiki.com/images/1/11/Icon_Energetic_Graphite.png"
		},
 {
    id: 1112,
    name: "Diamond",
    icon: "https://dsp-wiki.com/images/a/af/Icon_Diamond.png",
  },
  {
    id: 1106,
    name: "Titanium Ingot",
    icon: "https://dsp-wiki.com/images/f/f1/Icon_Titanium_Ingot.png",
  },
  {
    id: 1110,
    name: "Glass",
    icon: "https://dsp-wiki.com/images/7/76/Icon_Glass.png",
  },
  {
    id: 1113,
    name: "Crystal Silicon",
    icon: "https://dsp-wiki.com/images/2/2a/Icon_Crystal_Silicon.png",
  },
  {
    id: 1114,
    name: "Refined oil",
    icon: "https://dsp-wiki.com/images/f/f9/Icon_Refined_Oil.png",
  },
  {
    id: 1115,
    name: "Plastic",
    icon: "https://dsp-wiki.com/images/c/c8/Icon_Plastic.png",
  },
	{ id: 1116,
		name: "Sulfuric acid",
		icon: "https://dsp-wiki.com/images/5/53/Icon_Sulfuric_Acid.png"
		},
  {
    id: 1117,
    name: "Organic Crystal",
    icon: "https://dsp-wiki.com/images/9/96/Icon_Organic_Crystal.png",
  },
  {
    id: 1030,
    name: "Log",
    icon: "https://dsp-wiki.com/images/4/4a/Icon_Log.png",
  },
  {
    id: 1031,
    name: "Plant fuel",
    icon: "https://dsp-wiki.com/images/6/6a/Icon_Plant_Fuel.png",
  },
  {
    id: 1118,
    name: "Titanium crystal",
    icon: "https://dsp-wiki.com/images/5/5b/Icon_Titanium_Crystal.png",
  },
  {
    id: 1119,
    name: "Titanium glass",
    icon: "https://dsp-wiki.com/images/5/56/Icon_Titanium_Glass.png",
  },
  {
    id: 1120,
    name: "Hydrogen",
    icon: "https://dsp-wiki.com/images/4/42/Icon_Hydrogen.png",
  },
  {
    id: 1121,
    name: "Deuterium",
    icon: "https://dsp-wiki.com/images/4/4d/Icon_Deuterium.png",
  },
  {
    id: 1123,
    name: "Graphene",
    icon: "https://dsp-wiki.com/images/a/af/Icon_Graphene.png",
  },
  {
    id: 1124,
    name: "Carbon nanotube",
    icon: "https://dsp-wiki.com/images/7/7c/Icon_Carbon_Nanotube.png",
  },
  {
    id: 1126,
    name: "Casimir crystal",
    icon: "https://dsp-wiki.com/images/d/d7/Icon_Casimir_Crystal.png",
  },
  {
    id: 1127,
    name: "Strange Matter",
    icon: "https://dsp-wiki.com/images/8/8f/Icon_Strange_Matter.png",
  },
  {
    id: 1201,
    name: "Gear",
    icon: "https://dsp-wiki.com/images/8/87/Icon_Gear.png",
  },
  {
    id: 1202,
    name: "Magnetic Coil",
    icon: "https://dsp-wiki.com/images/e/e5/Icon_Magnetic_Coil.png",
  },
  {
    id: 1203,
    name: "Electric motor",
    icon: "https://dsp-wiki.com/images/8/84/Icon_Electric_Motor.png",
  },
  {
    id: 1204,
    name: "Electromagnetic turbine",
    icon: "https://dsp-wiki.com/images/5/53/Icon_Electromagnetic_Turbine.png",
  },
  {
    id: 1206,
    name: "Particle Container",
    icon: "https://dsp-wiki.com/images/f/fd/Icon_Particle_Container.png",
  },
  {
    id: 1209,
    name: "Graviton Lens",
    icon: "https://dsp-wiki.com/images/d/df/Icon_Graviton_Lens.png",
  },
  {
    id: 1210,
    name: "Space warper",
    icon: "https://dsp-wiki.com/images/c/cb/Icon_Space_Warper.png",
  },
  {
    id: 1302,
    name: "Microcrystaline component",
    icon: "https://dsp-wiki.com/images/f/f5/Icon_Microcrystalline_Component.png",
  },
  {
    id: 1301,
    name: "Circuit board",
    icon: "https://dsp-wiki.com/images/2/2f/Icon_Circuit_Board.png",
  },
  {
    id: 1303,
    name: "Processor",
    icon: "https://dsp-wiki.com/images/f/f1/Icon_Processor.png",
  },
  {
    id: 1304,
    name: "Plane filter",
    icon: "https://dsp-wiki.com/images/1/15/Icon_Plane_Filter.png",
  },
  {
    id: 1305,
    name: "Quantum Chip",
    icon: "https://dsp-wiki.com/images/2/2f/Icon_Quantum_Chip.png",
  },
  {
    id: 1402,
    name: "Particle Boardband",
    icon: "https://dsp-wiki.com/images/b/b6/Icon_Particle_Broadband.png",
  },
  {
    id: 6005,
    name: "Gravity Matrix",
    icon: "https://dsp-wiki.com/images/4/47/Icon_Gravity_Matrix.png",
  },
];


export const findName = (findId: number) =>
  dspItems.filter(({ id }) => id == findId).reduce((_, { name }) => name, "");

export const findIcon = (findId: number) =>
  dspItems.filter(({ id }) => id == findId).reduce((_, { icon }) => icon, "");

export const calculateRequirements = ([requestedAmount, requestedItemId]: [number, number]): Array<CraftTree> => {
  // look up all crafts that create this item

  const crafts = dspCrafts.filter(({ result }) => {
    return (
      result.filter(([_, id]) => {
        return id === requestedItemId;
      }).length > 0
    );
  });

	if (crafts.length === 0) {
		console.log('no crafts for ' + findName(requestedItemId))
		// Assuming if there are no crafts that we can source the material
	return [{
		result: [[requestedAmount, requestedItemId]],
		type: 'miner',
		time: 0,
		requirements: []
	}]
	}

  return crafts.map((craft) => {
		console.log(craft.requirements)
    return {
      ...craft,
      requirements: craft.requirements.flatMap(([requirementAmount, requirementItemId]) => {
        return calculateRequirements([requirementAmount, requirementItemId]);
      }),
    };
  });
};