const testData = {};

testData.NeTi = {
  option: 'Option NeTi',
  parent: testData.Ne,
  finalType: 'NeTi',
};

testData.NeFi = {
  option: 'Option NeFi',
  parent: testData.Ne,
  finalType: 'NeFi',
};

testData.Ne = {
  question: 'text of the question 3',
  option: 'option Ne',
  answers: [testData.NeTi, testData.NeFi],
  parent: testData.N,
};

testData.N = {
  question: 'text of the question 2',
  option: 'option N',
  answers: [testData.Ne, testData.Ni],
  parent: testData.inputData,
};

testData.Ni = {
  question: 'text of the question 3',
  option: 'Option Ni',
  answers: [testData.NiTe, testData.NiFe],
  parent: testData.N,
};

testData.NiTe = {
  option: 'Option NiTe',
  parent: testData.Ni,
  finalType: 'NiTe',
};

testData.NiFe = {
  option: 'Option NiFe',
  parent: testData.Ni,
  finalType: 'NiFe',
};

testData.S = {
  question: 'text of the question 2',
  answers: [testData.Se, testData.Si],
};

testData.Se = {
  question: 'text of the question 3',
  option: 'option Se',
  answers: [testData.SeTi, testData.SeFi],
  parent: testData.S,
};

testData.SeTi = {
  option: 'Option SeTi',
  parent: testData.Se,
  finalType: 'SeTi',
};

testData.SeFi = {
  option: 'Option SeFi',
  parent: testData.Se,
  finalType: 'SeFi',
};

testData.Si = {
  question: 'text of the question 3',
  option: 'Option Si',
  answers: [testData.SiTe, testData.SiFe],
  parent: testData.S,
};

testData.SiTe = {
  option: 'Option SiTe',
  parent: testData.Si,
  finalType: 'SiTe',
};

testData.SiFe = {
  option: 'Option SiFe',
  parent: testData.Si,
  finalType: 'SiFe',
};

testData.F = {
  question: 'text of the question 2',
  answers: [testData.Fe, testData.Fi],
};

testData.Fe = {
  question: 'text of the question 3',
  option: 'option Fe',
  answers: [testData.FeSi, testData.FeNi],
  parent: testData.F,
};

testData.FeSi = {
  option: 'Option FeSi',
  parent: testData.Fe,
  finalType: 'FeSi',
};

testData.FeNi = {
  option: 'Option FeNi',
  parent: testData.Fe,
  finalType: 'FeNi',
};

testData.Fi = {
  question: 'text of the question 3',
  option: 'Option Fi',
  answers: [testData.FiSe, testData.FiNe],
  parent: testData.F,
};

testData.FiSe = {
  option: 'Option FiSe',
  parent: testData.Fi,
  finalType: 'FiSe',
};

testData.FiNe = {
  option: 'Option FiNe',
  parent: testData.Fi,
  finalType: 'FiNe',
};

testData.T = {
  question: 'text of the question 2',
  answers: [testData.Te, testData.Ti],
};

testData.Te = {
  question: 'text of the question 3',
  option: 'option Te',
  answers: [testData.TeSi, testData.TeNi],
  parent: testData.T,
};

testData.TeSi = {
  option: 'Option TeSi',
  parent: testData.Te,
  finalType: 'TeSi',
};

testData.TeNi = {
  option: 'Option TeNi',
  parent: testData.Te,
  finalType: 'TeNi',
};

testData.Ti = {
  question: 'text of the question 3',
  option: 'Option Ti',
  answers: [testData.TiSe, testData.TiNe],
  parent: testData.T,
};

testData.TiSe = {
  option: 'Option TiSe',
  parent: testData.Ti,
  finalType: 'TiSe',
};

testData.TiNe = {
  option: 'Option TiNe',
  parent: testData.Ti,
  finalType: 'TiNe',
};

testData.inputData = {
  question: 'text of the question 1',
  answers: [testData.N, testData.S, testData.F, testData.T],
};

exports.default = testData;
