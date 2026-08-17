const FALLBACK_RESULTS = [
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=900",
  "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?q=80&w=900",
  "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=900",
  "https://images.unsplash.com/photo-1539109136881-3be0616acf24?q=80&w=900",
];

const SEED = [
  {
    id: "iro-lagos-wrapper",
    userId: "*",
    personImage: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=700",
    clothesImage: "https://images.unsplash.com/photo-1558171813-4c088753af94?q=80&w=700",
    resultImage: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=900",
    prompt: "Aso-oke wrapper and blouse on a Lagos sitting, late-afternoon light, cloth weight honest on the hip.",
    aspectRatio: "3:4",
    requestId: "seed_lagos",
    status: "completed",
    creditCost: 18,
    createTime: "2026-07-12T10:20:00.000Z",
    updateTime: "2026-07-12T10:20:14.000Z",
  },
  {
    id: "iro-accra-kente",
    userId: "*",
    personImage: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=700",
    clothesImage: "https://images.unsplash.com/photo-1594938291221-94d38d920158?q=80&w=700",
    resultImage: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?q=80&w=900",
    prompt: "Kente stole over a tailored jacket. Accra studio, hard window light, keep the face and skin tone exact.",
    aspectRatio: "4:5",
    requestId: "seed_accra",
    status: "completed",
    creditCost: 18,
    createTime: "2026-07-18T15:02:00.000Z",
    updateTime: "2026-07-18T15:02:16.000Z",
  },
  {
    id: "iro-nairobi-street",
    userId: "*",
    personImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=700",
    clothesImage: "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=700",
    resultImage: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=900",
    prompt: "Westlands streetwear drop — oversized shirt, clean drape, Nairobi grey sky, no face change.",
    aspectRatio: "1:1",
    requestId: "seed_nairobi",
    status: "completed",
    creditCost: 18,
    createTime: "2026-07-22T08:41:00.000Z",
    updateTime: "2026-07-22T08:41:12.000Z",
  },
  {
    id: "iro-joburg-suit",
    userId: "*",
    personImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=700",
    clothesImage: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=700",
    resultImage: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=900",
    prompt: "Sandton boardroom suit on the same man. Keep posture, keep the watch, match the cloth sheen.",
    aspectRatio: "3:4",
    requestId: "seed_joburg",
    status: "completed",
    creditCost: 18,
    createTime: "2026-08-01T11:05:00.000Z",
    updateTime: "2026-08-01T11:05:11.000Z",
  },
  {
    id: "iro-dakar-boubou",
    userId: "*",
    personImage: "https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=700",
    clothesImage: "https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?q=80&w=700",
    resultImage: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?q=80&w=900",
    prompt: "Grand boubou, indigo, Dakar courtyard shade. Cloth falls to the ankle. Face untouched.",
    aspectRatio: "9:16",
    requestId: "seed_dakar",
    status: "completed",
    creditCost: 18,
    createTime: "2026-08-04T16:30:00.000Z",
    updateTime: "2026-08-04T16:30:13.000Z",
  },
  {
    id: "iro-kampala-lookbook",
    userId: "*",
    personImage: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=700",
    clothesImage: "https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=700",
    resultImage: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=900",
    prompt: "Kampala lookbook dress, linen, late light on Kololo. Keep hair and jewellery. Soft folds at the waist.",
    aspectRatio: "3:4",
    requestId: "seed_kampala",
    status: "completed",
    creditCost: 18,
    createTime: "2026-08-09T09:12:00.000Z",
    updateTime: "2026-08-09T09:12:15.000Z",
  },
];

const users = new Map();
const tryons = new Map(SEED.map((row) => [row.id, { ...row }]));

export function demoUser(id, email) {
  if (!users.has(id)) {
    users.set(id, {
      id,
      name: email ? email.split("@")[0] : "House member",
      email: email || `${id}@maisoniro.house`,
      credits: 2400,
      customApiKey: null,
      image: null,
    });
  }
  return users.get(id);
}

export function listTryons(userId) {
  return Array.from(tryons.values())
    .filter((row) => row.userId === "*" || row.userId === userId)
    .sort((a, b) => new Date(b.createTime) - new Date(a.createTime));
}

export function getTryon(id, userId) {
  const row = tryons.get(id);
  if (!row) return null;
  if (row.userId !== "*" && row.userId !== userId) return null;
  return row;
}

export function createTryon(data) {
  const now = new Date().toISOString();
  const row = {
    id: data.id || `iro_${Date.now()}`,
    userId: data.userId,
    personImage: data.personImage,
    clothesImage: data.clothesImage,
    resultImage: data.resultImage || FALLBACK_RESULTS[tryons.size % FALLBACK_RESULTS.length],
    prompt: data.prompt,
    aspectRatio: data.aspectRatio || "auto",
    requestId: data.requestId || `mock_${Date.now()}`,
    status: data.status || "completed",
    creditCost: data.creditCost ?? 18,
    createTime: now,
    updateTime: now,
  };
  tryons.set(row.id, row);
  return row;
}

export function updateTryon(id, data) {
  const row = tryons.get(id);
  if (!row) return null;
  const next = { ...row, ...data, updateTime: new Date().toISOString() };
  tryons.set(id, next);
  return next;
}

export function deleteTryon(id, userId) {
  const row = tryons.get(id);
  if (!row) return false;
  if (row.userId !== "*" && row.userId !== userId) return false;
  tryons.delete(id);
  return true;
}

export function pickResultImage() {
  return FALLBACK_RESULTS[Math.floor(Math.random() * FALLBACK_RESULTS.length)];
}
