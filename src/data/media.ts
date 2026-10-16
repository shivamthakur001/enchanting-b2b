export function pexels(id: number, width = 1400, ext: "jpeg" | "png" = "jpeg") {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.${ext}?auto=compress&cs=tinysrgb&w=${width}`;
}

export const media = {
  pachmarhi: pexels(36664317),
  waterfall: pexels(37040756),
  cascade: pexels(2005300),
  jabalpurLake: pexels(770392),
  khajuraho: pexels(36737766),
  orchhaTemple: pexels(36840026),
  sanchiCarvings: pexels(36588491),
  tigerKanhaRest: pexels(17374833),
  tigerKanhaWalk: pexels(17374914),
  tigerBandhavgarh: pexels(29193466),
  tigerYawn: pexels(10983165),
  sanchiStupa: pexels(36588603),
  sanchiWide: pexels(36588602),
  sanchiDetail: pexels(36832404),
  orchhaPalace: pexels(20000873),
  orchhaSunset: pexels(20000879),
  orchhaFort: pexels(20000878),
  bhedaghat: pexels(10483174),
  narmadaBoats: pexels(35378826),
  safari: pexels(29666812, 1400, "png"),
  safariRiver: pexels(29666809, 1400, "png"),
  maheshwar: pexels(35378813),
  heritageLobby: pexels(33803739),
  ujjainAarti: pexels(38087489),
} as const;
