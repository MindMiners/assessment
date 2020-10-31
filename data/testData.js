const testData = {};

testData.NeTi = {
  name: 'NeTi',
  option: 'Option NeTi',
  parent: testData.Ne,
  finalType: 'NeTi',
};

testData.NeFi = {
  name: 'NeFi',
  option: 'Option NeFi',
  parent: testData.Ne,
  finalType: 'NeFi',
};

testData.Ne = {
  name: 'Ne',
  question: 'text of the question 3',
  option: 'option Ne',
  answers: [testData.NeTi, testData.NeFi],
  parent: testData.N,
};
testData.Ni = {
  name: 'Ni',
  question: 'text of the question 3',
  option: 'Option Ni',
  answers: [testData.NiTe, testData.NiFe],
  parent: testData.N,
};

testData.N = {
  name: 'N',
  question: 'text of the question 2',
  option: 'option N',
  answers: [testData.Ne, testData.Ni],
  parent: testData.inputData,
};

testData.NiTe = {
  name: 'NeTe',
  option: 'Option NiTe',
  parent: testData.Ni,
  finalType: 'NiTe',
};

testData.NiFe = {
  name: 'NeFe',
  option: 'Option NiFe',
  parent: testData.Ni,
  finalType: 'NiFe',
};

testData.S = {
  name: 'S',
  option: 'Option S',
  question: 'text of the question 2',
  answers: [testData.Se, testData.Si],
};

testData.Se = {
  name: 'Se',
  question: 'text of the question 3',
  option: 'option Se',
  answers: [testData.SeTi, testData.SeFi],
  parent: testData.S,
};

testData.SeTi = {
  name: 'SeTi',
  option: 'Option SeTi',
  parent: testData.Se,
  finalType: 'SeTi',
};

testData.SeFi = {
  name: 'SeFi',
  option: 'Option SeFi',
  parent: testData.Se,
  finalType: 'SeFi',
};

testData.Si = {
  name: 'Si',
  question: 'text of the question 3',
  option: 'Option Si',
  answers: [testData.SiTe, testData.SiFe],
  parent: testData.S,
};

testData.SiTe = {
  name: 'SiTe',
  option: 'Option SiTe',
  parent: testData.Si,
  finalType: 'SiTe',
};

testData.SiFe = {
  name: 'SiFe',
  option: 'Option SiFe',
  parent: testData.Si,
  finalType: 'SiFe',
};

testData.F = {
  name: 'F',
  option: 'Option F',
  question: 'text of the question 2',
  answers: [testData.Fe, testData.Fi],
};

testData.Fe = {
  name: 'Fe',
  question: 'text of the question 3',
  option: 'option Fe',
  answers: [testData.FeSi, testData.FeNi],
  parent: testData.F,
};

testData.FeSi = {
  name: 'FeSi',
  option: 'Option FeSi',
  parent: testData.Fe,
  finalType: 'FeSi',
};

testData.FeNi = {
  name: 'FeNi',
  option: 'Option FeNi',
  parent: testData.Fe,
  finalType: 'FeNi',
};

testData.Fi = {
  name: 'Fi',
  question: 'text of the question 3',
  option: 'Option Fi',
  answers: [testData.FiSe, testData.FiNe],
  parent: testData.F,
};

testData.FiSe = {
  name: 'FiSe',
  option: 'Option FiSe',
  parent: testData.Fi,
  finalType: 'FiSe',
};

testData.FiNe = {
  name: 'FiNe',
  option: 'Option FiNe',
  parent: testData.Fi,
  finalType: 'FiNe',
};

testData.T = {
  name: 'T',
  option: 'Option T',
  question: 'text of the question 2',
  answers: [testData.Te, testData.Ti],
};

testData.Te = {
  name: 'Te',
  question: 'text of the question 3',
  option: 'option Te',
  answers: [testData.TeSi, testData.TeNi],
  parent: testData.T,
};

testData.TeSi = {
  name: 'TeSi',
  option: 'Option TeSi',
  parent: testData.Te,
  finalType: 'TeSi',
};

testData.TeNi = {
  name: 'TeNi',
  option: 'Option TeNi',
  parent: testData.Te,
  finalType: 'TeNi',
};

testData.Ti = {
  name: 'Ti',
  question: 'text of the question 3',
  option: 'Option Ti',
  answers: [testData.TiSe, testData.TiNe],
  parent: testData.T,
};

testData.TiSe = {
  name: 'TiSe',
  option: 'Option TiSe',
  parent: testData.Ti,
  finalType: 'TiSe',
};

testData.TiNe = {
  name: 'TiNe',
  option: 'Option TiNe',
  parent: testData.Ti,
  finalType: 'TiNe',
};

testData.inputData = {
  name: 'inputData',
  option: 'inputData',
  question: 'text of the question 1',
  answers: [testData.N, testData.S, testData.F, testData.T],
};

exports.default = testData;

// export.default testData = () => {
//   const NeTi = {
//     name: 'NeTi',
//     option: 'Option NeTi',
//     parent: testData.Ne,
//     finalType: 'NeTi',
//   };

//   testData.NeFi = {
//     name: 'NeFi',
//     option: 'Option NeFi',
//     parent: testData.Ne,
//     finalType: 'NeFi',
//   };

//   testData.Ne = {
//     name: 'Ne',
//     question: 'text of the question 3',
//     option: 'option Ne',
//     answers: [testData.NeTi, testData.NeFi],
//     parent: testData.N,
//   };
//   testData.Ni = {
//     name: 'Ni',
//     question: 'text of the question 3',
//     option: 'Option Ni',
//     answers: [testData.NiTe, testData.NiFe],
//     parent: testData.N,
//   };

//   testData.N = {
//     name: 'N',
//     question: 'text of the question 2',
//     option: 'option N',
//     answers: [testData.Ne, testData.Ni],
//     parent: testData.inputData,
//   };

//   testData.NiTe = {
//     name: 'NeTe',
//     option: 'Option NiTe',
//     parent: testData.Ni,
//     finalType: 'NiTe',
//   };

//   testData.NiFe = {
//     name: 'NeFe',
//     option: 'Option NiFe',
//     parent: testData.Ni,
//     finalType: 'NiFe',
//   };
// };
