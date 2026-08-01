// 자동 생성됨 — 바오밥매치 기초 국가 데이터
// 점수 칸(climateScore 등)은 AI 추천 단계에서 채워짐
// economy 항목: {usd, krw, year, source} / ODA 항목: {usd, krw, year, isNet}
// koicaHealthDetail: ODA 로데이터 기반 보건 세부 지원 현황 (없는 국가는 null)

export const COUNTRIES_BASE = {
  "가나": {
    "id": "가나",
    "name": "가나",
    "nameEn": "Ghana",
    "population": "32,400,000명 (2020년 기준)",
    "language": "영어(공용어), 아산테어, 에웨어 등",
    "capital": "아크라(Accra)",
    "climateScore": null,
    "mainClimateIssue": null,
    "diplomacyScore": null,
    "matchScore": null,
    "recommended": null,
    "priorityPartner": true,
    "koreaOdaHistory": true,
    "economy": {
      "gdpPerCapita": {
        "usd": "2,270 USD",
        "krw": "약 340만 원",
        "year": "2022",
        "source": "IMF/국제통화기금"
      },
      "gdpTotal": {
        "usd": "72,800,000,000 USD",
        "krw": "약 109조 2,000억 원",
        "year": "2022",
        "source": "IMF/국제통화기금"
      },
      "odaNetReceived": {
        "usd": "약 1억 USD",
        "krw": "약 2,143억 3,500만 원",
        "year": "2019",
        "isNet": false
      },
      "recipientOda": {
        "usd": "약 1,158백만 USD",
        "krw": "약 1조 7,370억 원",
        "year": "2019",
        "isNet": false
      },
      "bilateral": {
        "usd": "약 53백만 USD",
        "krw": "약 795억 원",
        "year": "2019",
        "isNet": false
      },
      "koreaOda": {
        "usd": "약 22백만 USD",
        "krw": "약 330억 원",
        "year": "2019",
        "isNet": false
      }
    },
    "koica": {
      "total": "92,500,000 원",
      "sectors": [
        {
          "name": "보건",
          "percent": 39.7,
          "amount": "36,700,000 원"
        },
        {
          "name": "교육",
          "percent": 18.2,
          "amount": "16,800,000 원"
        },
        {
          "name": "농림수산",
          "percent": 16.6,
          "amount": "15,400,000 원"
        },
        {
          "name": "기술환경에너지",
          "percent": 12.3,
          "amount": "11,400,000 원"
        },
        {
          "name": "공공행정",
          "percent": 11.4,
          "amount": "10,500,000 원"
        },
        {
          "name": "긴급구호",
          "percent": 0.2,
          "amount": "162,140 원"
        },
        {
          "name": "기타",
          "percent": 1.6,
          "amount": "1,504,963 원"
        }
      ]
    },
    "infrastructure": {
      "hospitalBeds": {
        "value": "0.7",
        "unit": "병상 / 1,000명",
        "year": "2015",
        "source": "World Bank"
      },
      "physicians": {
        "value": "0.3",
        "unit": "의사 / 1,000명",
        "year": "2023",
        "source": "World Bank"
      },
      "nursesMidwives": {
        "value": "4.1",
        "unit": "간호사·조산사 / 1,000명",
        "year": "2023",
        "source": "World Bank"
      },
      "electricityAccess": {
        "value": "91.9",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableEnergyShare": {
        "value": "34.9",
        "unit": "%",
        "year": "2021",
        "source": "World Bank"
      },
      "cleanCookingAccess": {
        "value": "32.8",
        "unit": "%",
        "year": "2023",
        "source": "World Bank"
      },
      "internetPenetration": {
        "value": "72.2",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "mobileSubscriptions": {
        "value": "113.6",
        "unit": "건 / 100명",
        "year": "2024",
        "source": "World Bank"
      },
      "basicWater": {
        "value": "89.9",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "basicSanitation": {
        "value": "31.6",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableWaterPerCapita": {
        "value": "914.1",
        "unit": "m³ / 인",
        "year": "2022",
        "source": "World Bank"
      },
      "pavedRoads": {
        "value": "12.6",
        "unit": "%",
        "year": "2009",
        "source": "World Bank"
      },
      "railLines": {
        "value": "953",
        "unit": "km",
        "year": "2006",
        "source": "World Bank"
      }
    },
    "koicaCumulative": {
      "total": "약 1,309억 8,947만 원",
      "latest": "약 152억 1,239만 원",
      "latestYear": "2023",
      "startYear": "1991"
    },
    "koicaHealthDetail": {
      "year": "2024",
      "sectors": [
        {
          "name": "보건정책 및 행정관리",
          "percent": 82.3,
          "amount": "1,592,607,000 원"
        },
        {
          "name": "의료서비스",
          "percent": 11.3,
          "amount": "217,702,500 원"
        },
        {
          "name": "보건인력개발",
          "percent": 3.3,
          "amount": "63,480,000 원"
        },
        {
          "name": "기초보건진료",
          "percent": 3.1,
          "amount": "60,666,000 원"
        }
      ]
    },
    "diplomaticContact": {
      "overseas": {
        "missionName": "주 가나 대한민국 대사관",
        "missionType": "대사관",
        "jointCoverage": false,
        "address": "No.10, Fifth Avenue Extension, Cantonments, P.O.Box GP 13700, Accra, Ghana,",
        "phone": "(233)302-771-705",
        "consularCenter": "(82)2-3210-0404",
        "tollFree": "080-020-0219",
        "emergency": "(233)244-321-858",
        "website": "http://overseas.mofa.go.kr/gh-ko/index.do",
        "lat": 5.575495,
        "lng": -0.185161
      },
      "domestic": {
        "ambassador": "Charis Margaretha E. Obetsebi-Lamptey Zwennes",
        "address": "서울특별시 용산구 독서당로 120, C.P.O Box 3887",
        "phone": "3785-1427 749-8982/3",
        "email": "ghanaembassy.seoul.kr@gmail.com",
        "fax": "3785-1428",
        "updatedAt": "2021-10-20"
      }
    },
    "marketEntry": {
      "companyCount": 3,
      "industries": [
        {
          "name": "금융 및 보험업",
          "count": 2
        },
        {
          "name": "광업",
          "count": 1
        }
      ],
      "startupCount": 5,
      "startupFields": [
        {
          "name": "금융&핀테크",
          "count": 2
        },
        {
          "name": "부동산",
          "count": 1
        },
        {
          "name": "헬스케어",
          "count": 1
        },
        {
          "name": "보험",
          "count": 1
        }
      ],
      "companies": [
        {
          "nameKo": "가나 상업은행",
          "nameEn": "Ghana Commercial Bank",
          "foundedYear": "1953",
          "parentCompany": null,
          "hq": "가나 아크라(Accra)",
          "industry": "금융 및 보험업",
          "subIndustry": "금융 서비스",
          "corpType": "사기업(주식회사)",
          "employees": "2304",
          "marketCap": {
            "usd": "205,000,000 USD",
            "krw": "약 3,075억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "74,000,000 USD",
            "krw": "약 1,110억 원",
            "year": "2020"
          },
          "website": "www.gcbbank.com.gh",
          "highlights": [
            "전국 184개의 지점을 보유한 가나에서 가장 규모가 큰 은행으로 가나 총 예치금의 14.2%를 차지",
            "1996년 가나 증권거래소 상장",
            "초기에는 가나 정부가 전체 지분을 소유했으나 2016년 기준 가나 정부는 약 기관 및 개인투자자가 소유"
          ]
        },
        {
          "nameKo": "스탠다그 차타드 가나",
          "nameEn": "Standard Chartered Ghana",
          "foundedYear": "1896",
          "parentCompany": "Standard Chartered",
          "hq": "가나 아크라(Accra)",
          "industry": "금융 및 보험업",
          "subIndustry": "금융 서비스",
          "corpType": "사기업(유한회사)",
          "employees": "2299",
          "marketCap": {
            "usd": "439,000,000 USD",
            "krw": "약 6,585억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "48,000,000 USD",
            "krw": "약 720억 원",
            "year": "2020"
          },
          "website": "www.sc.com/gh",
          "highlights": [
            "2020년 Euromoney의 Awards for Excellence 2020에서 Africa's Best Bank Transformation 2020수상",
            "2019년 BancAssurance Leader Award 수상",
            "2019년 Global Finance Award에서 가나 Best Digital Consumer Bank 수상(8년 연속  수상)"
          ]
        },
        {
          "nameKo": "털로우 오일",
          "nameEn": "Tullow Oil",
          "foundedYear": "2006",
          "parentCompany": null,
          "hq": "영국 런던(London)",
          "industry": "광업",
          "subIndustry": "원유, 천연가스 채굴",
          "corpType": "사기업(주식회사)",
          "employees": null,
          "marketCap": {
            "usd": "2,888,000,000 USD",
            "krw": "약 4조 3,320억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "-291,000,000 USD",
            "krw": "약 -4,365억 원",
            "year": "2020"
          },
          "website": "www.tullowil.com",
          "highlights": [
            "2007년 주빌리(Jubilee) 유전 탐사, 2010년부터 원류 채굴 및 생산",
            "2013년 텐(Ten) 유전 발견 및 심해개발 시작, 2016년부터 원유 채굴 및 생산"
          ]
        }
      ],
      "startups": [
        {
          "nameKo": "미까사",
          "field": "부동산",
          "foundedYear": "2013",
          "hq": "가나 아크라",
          "employees": "1~10명",
          "funding": {
            "usd": "500,000 USD",
            "krw": "약 7억 5,000만 원",
            "year": null
          },
          "topInvestor": "Frontier Digital Venture, Meltwater Entrepreneurial School of Technology (MEST)",
          "fundingStage": "Seed",
          "website": "http://Meqasa.com/"
        },
        {
          "nameKo": "엠파마",
          "field": "헬스케어",
          "foundedYear": "2013",
          "hq": "가나 아크라",
          "employees": "11~50명",
          "funding": {
            "usd": "55,500,000 USD",
            "krw": "약 832억 5,000만 원",
            "year": null
          },
          "topInvestor": "Golden palm Investments",
          "fundingStage": null,
          "website": "http://mpharma.com"
        },
        {
          "nameKo": "월드커버",
          "field": "보험",
          "foundedYear": "2015",
          "hq": "미국 뉴욕",
          "employees": "11~50명",
          "funding": {
            "usd": "6,100,000 USD",
            "krw": "약 91억 5,000만 원",
            "year": null
          },
          "topInvestor": "MS&AD Venture",
          "fundingStage": "Series A",
          "website": "http://worldcovr.com/"
        },
        {
          "nameKo": "치퍼 캐시",
          "field": "금융&핀테크",
          "foundedYear": "2017",
          "hq": "미국 샌프란시스코",
          "employees": "51~100명",
          "funding": {
            "usd": "52,200,000 USD",
            "krw": "약 783억 원",
            "year": null
          },
          "topInvestor": "Ribbit Capital",
          "fundingStage": "Series B",
          "website": "http://chippercash.com/"
        },
        {
          "nameKo": "쿠디고",
          "field": "금융&핀테크",
          "foundedYear": "2017",
          "hq": "가나 아크라",
          "employees": "1~10명",
          "funding": {
            "usd": "300,000 USD",
            "krw": "약 4억 5,000만 원",
            "year": null
          },
          "topInvestor": "Founders Factory Africa",
          "fundingStage": "Seed",
          "website": "http://www.kudigo.com/"
        }
      ]
    }
  },
  "가봉": {
    "id": "가봉",
    "name": "가봉",
    "nameEn": "Gabon",
    "population": "2,340,000명 (2020년 기준)",
    "language": "프랑스어(공용어), 팡어",
    "capital": "리브르빌(Libreville)",
    "climateScore": null,
    "mainClimateIssue": null,
    "diplomacyScore": null,
    "matchScore": null,
    "recommended": null,
    "priorityPartner": false,
    "koreaOdaHistory": true,
    "economy": {
      "gdpPerCapita": {
        "usd": "8,635 USD",
        "krw": "약 1,295만 원",
        "year": "2021",
        "source": "World Bank"
      },
      "gdpTotal": {
        "usd": "20,200,000,000 USD",
        "krw": "약 30조 3,000억 원",
        "year": "2021",
        "source": "World Bank"
      },
      "odaNetReceived": {
        "usd": "약 1억 USD",
        "krw": "약 1,128억 6,408만 원",
        "year": "2019",
        "isNet": false
      },
      "recipientOda": {
        "usd": "약 314백만 USD",
        "krw": "약 4,710억 원",
        "year": "2019",
        "isNet": false
      },
      "bilateral": {
        "usd": "약 93백만 USD",
        "krw": "약 1,395억 원",
        "year": "2019",
        "isNet": false
      },
      "koreaOda": {
        "usd": "약 0백만 USD",
        "krw": "약 0 원",
        "year": "2019",
        "isNet": false
      }
    },
    "koica": {
      "total": "1,752,523 원",
      "sectors": [
        {
          "name": "보건",
          "percent": 4.8,
          "amount": "84,846 원"
        },
        {
          "name": "교육",
          "percent": 10.9,
          "amount": "190,883 원"
        },
        {
          "name": "농림수산",
          "percent": 13.8,
          "amount": "242,322 원"
        },
        {
          "name": "기술환경에너지",
          "percent": 13.8,
          "amount": "241,112 원"
        },
        {
          "name": "공공행정",
          "percent": 53.9,
          "amount": "944,774 원"
        },
        {
          "name": "긴급구호",
          "percent": 0.6,
          "amount": "10,173 원"
        },
        {
          "name": "기타",
          "percent": 2.2,
          "amount": "38,414 원"
        }
      ]
    },
    "infrastructure": {
      "hospitalBeds": {
        "value": "1.9",
        "unit": "병상 / 1,000명",
        "year": "2011",
        "source": "World Bank"
      },
      "physicians": {
        "value": "0.5",
        "unit": "의사 / 1,000명",
        "year": "2022",
        "source": "World Bank"
      },
      "nursesMidwives": {
        "value": "2.4",
        "unit": "간호사·조산사 / 1,000명",
        "year": "2022",
        "source": "World Bank"
      },
      "electricityAccess": {
        "value": "95.1",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableEnergyShare": {
        "value": "31.6",
        "unit": "%",
        "year": "2021",
        "source": "World Bank"
      },
      "cleanCookingAccess": {
        "value": "91.4",
        "unit": "%",
        "year": "2023",
        "source": "World Bank"
      },
      "internetPenetration": {
        "value": "68.7",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "mobileSubscriptions": {
        "value": "125.3",
        "unit": "건 / 100명",
        "year": "2024",
        "source": "World Bank"
      },
      "basicWater": {
        "value": "88.6",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "basicSanitation": {
        "value": "57.4",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableWaterPerCapita": {
        "value": "67469.0",
        "unit": "m³ / 인",
        "year": "2022",
        "source": "World Bank"
      },
      "pavedRoads": {
        "value": "12",
        "unit": "%",
        "year": "2007",
        "source": "World Bank"
      },
      "railLines": {
        "value": "648",
        "unit": "km",
        "year": "2021",
        "source": "World Bank"
      }
    },
    "koicaCumulative": {
      "total": "약 21억 3,606만 원",
      "latest": null,
      "latestYear": "2023",
      "startYear": "1991"
    },
    "koicaHealthDetail": {
      "year": "2024",
      "sectors": [
        {
          "name": "보건정책 및 행정관리",
          "percent": 100.0,
          "amount": "82,500,000 원"
        }
      ]
    },
    "diplomaticContact": {
      "overseas": {
        "missionName": "주 가봉 대한민국 대사관",
        "missionType": "대사관",
        "jointCoverage": false,
        "address": "B.P.2620, Libreville, Gabon,",
        "phone": "(241)6530-1900",
        "consularCenter": "(82)2-3210-0404",
        "tollFree": "080-020-0219",
        "emergency": "(241)7750-7822",
        "website": "http://overseas.mofa.go.kr/ga-ko/index.do",
        "lat": 0.477587266,
        "lng": 9.393928461
      },
      "domestic": {
        "ambassador": "Carlos Victor BOUNGOU",
        "address": "서울특별시 용산구 이태원로 239, 유성빌딩 4층",
        "phone": "793-9575/6",
        "email": "amgabsel@unitel.co.kr",
        "fax": "793-9574",
        "updatedAt": "2019-08-02"
      }
    },
    "marketEntry": {
      "companyCount": 0,
      "industries": [],
      "startupCount": 0,
      "startupFields": [],
      "companies": [],
      "startups": []
    }
  },
  "감비아": {
    "id": "감비아",
    "name": "감비아",
    "nameEn": "Gambia",
    "population": "2,710,000명 (2020년 기준)",
    "language": "영어(공용어), 월로프어",
    "capital": "반줄(Banjul)",
    "climateScore": null,
    "mainClimateIssue": null,
    "diplomacyScore": null,
    "matchScore": null,
    "recommended": null,
    "priorityPartner": false,
    "koreaOdaHistory": true,
    "economy": {
      "gdpPerCapita": {
        "usd": "840 USD",
        "krw": "약 126만 원",
        "year": "2022",
        "source": "World Bank"
      },
      "gdpTotal": {
        "usd": "2,270,000,000 USD",
        "krw": "약 3조 4,050억 원",
        "year": "2022",
        "source": "World Bank"
      },
      "odaNetReceived": {
        "usd": "약 11억 USD",
        "krw": "약 1조 6,206억 4,800만 원",
        "year": "2019",
        "isNet": false
      },
      "recipientOda": {
        "usd": "약 284백만 USD",
        "krw": "약 4,260억 원",
        "year": "2019",
        "isNet": false
      },
      "bilateral": {
        "usd": "약 34백만 USD",
        "krw": "약 510억 원",
        "year": "2019",
        "isNet": false
      },
      "koreaOda": {
        "usd": "약 1백만 USD",
        "krw": "약 15억 원",
        "year": "2019",
        "isNet": false
      }
    },
    "koica": {
      "total": "3,751,288 원",
      "sectors": [
        {
          "name": "교육",
          "percent": 25.4,
          "amount": "953,791 원"
        },
        {
          "name": "농림수산",
          "percent": 1.4,
          "amount": "53,117 원"
        },
        {
          "name": "기술환경에너지",
          "percent": 5.6,
          "amount": "211,746 원"
        },
        {
          "name": "공공행정",
          "percent": 67.5,
          "amount": "2,532,633 원"
        }
      ]
    },
    "infrastructure": {
      "hospitalBeds": {
        "value": "1.1",
        "unit": "병상 / 1,000명",
        "year": "2023",
        "source": "World Bank"
      },
      "physicians": {
        "value": "0.1",
        "unit": "의사 / 1,000명",
        "year": "2023",
        "source": "World Bank"
      },
      "nursesMidwives": {
        "value": "0.7",
        "unit": "간호사·조산사 / 1,000명",
        "year": "2023",
        "source": "World Bank"
      },
      "electricityAccess": {
        "value": "69",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableEnergyShare": {
        "value": "1.6",
        "unit": "%",
        "year": "2021",
        "source": "World Bank"
      },
      "cleanCookingAccess": {
        "value": "1.6",
        "unit": "%",
        "year": "2023",
        "source": "World Bank"
      },
      "internetPenetration": {
        "value": "49.5",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "mobileSubscriptions": {
        "value": "126.2",
        "unit": "건 / 100명",
        "year": "2024",
        "source": "World Bank"
      },
      "basicWater": {
        "value": "87.1",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "basicSanitation": {
        "value": "48.2",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableWaterPerCapita": {
        "value": "1137.9",
        "unit": "m³ / 인",
        "year": "2022",
        "source": "World Bank"
      },
      "pavedRoads": {
        "value": "19.3",
        "unit": "%",
        "year": "2004",
        "source": "World Bank"
      },
      "railLines": {
        "value": null,
        "unit": "km",
        "year": null,
        "source": null
      }
    },
    "koicaCumulative": {
      "total": "약 63억 1,116만 원",
      "latest": "약 1,295만 원",
      "latestYear": "2023",
      "startYear": "1991"
    },
    "koicaHealthDetail": {
      "year": "2024",
      "sectors": [
        {
          "name": "보건정책 및 행정관리",
          "percent": 100.0,
          "amount": "15,870,000 원"
        }
      ]
    },
    "diplomaticContact": {
      "overseas": {
        "missionName": "주 세네갈 대한민국 대사관",
        "missionType": "대사관",
        "jointCoverage": true,
        "address": "Ambassade de la Republique de Coree, Villa Hamoudy, Rue Aime Cesaire, Fann Residence, B.P.5850, Dakar, Senegal,",
        "phone": "(221)33-824-06-72",
        "consularCenter": "(82)2-3210-0404",
        "tollFree": "080-020-0219",
        "emergency": "(221)77-639-5109",
        "website": "http://overseas.mofa.go.kr/sn-ko/index.do",
        "lat": 14.695506,
        "lng": -17.467318
      },
      "domestic": null
    },
    "marketEntry": {
      "companyCount": 0,
      "industries": [],
      "startupCount": 0,
      "startupFields": [],
      "companies": [],
      "startups": []
    }
  },
  "기니": {
    "id": "기니",
    "name": "기니",
    "nameEn": "Guinea",
    "population": "13,860,000명 (2020년 기준)",
    "language": "프랑스어(공용어)",
    "capital": "코나크리(Conakry)",
    "climateScore": null,
    "mainClimateIssue": null,
    "diplomacyScore": null,
    "matchScore": null,
    "recommended": null,
    "priorityPartner": false,
    "koreaOdaHistory": true,
    "economy": {
      "gdpPerCapita": {
        "usd": "1,532 USD",
        "krw": "약 229만 원",
        "year": "2022",
        "source": "World Bank"
      },
      "gdpTotal": {
        "usd": "21,200,000,000 USD",
        "krw": "약 31조 8,000억 원",
        "year": "2022",
        "source": "World Bank"
      },
      "odaNetReceived": {
        "usd": "약 5억 USD",
        "krw": "약 6,776억 3,565만 원",
        "year": "2019",
        "isNet": false
      },
      "recipientOda": {
        "usd": "약 900백만 USD",
        "krw": "약 1조 3,500억 원",
        "year": "2019",
        "isNet": false
      },
      "bilateral": {
        "usd": "약 34백만 USD",
        "krw": "약 510억 원",
        "year": "2019",
        "isNet": false
      },
      "koreaOda": {
        "usd": "약 1백만 USD",
        "krw": "약 15억 원",
        "year": "2019",
        "isNet": false
      }
    },
    "koica": {
      "total": "7,222,559 원",
      "sectors": [
        {
          "name": "보건",
          "percent": 1.5,
          "amount": "106,123 원"
        },
        {
          "name": "교육",
          "percent": 1.0,
          "amount": "69,687 원"
        },
        {
          "name": "농림수산",
          "percent": 12.3,
          "amount": "885,513 원"
        },
        {
          "name": "기술환경에너지",
          "percent": 0.4,
          "amount": "32,096 원"
        },
        {
          "name": "공공행정",
          "percent": 84.4,
          "amount": "6,097,823 원"
        },
        {
          "name": "긴급구호",
          "percent": 0.3,
          "amount": "22,655 원"
        },
        {
          "name": "기타",
          "percent": 0.1,
          "amount": "8,662 원"
        }
      ]
    },
    "infrastructure": {
      "hospitalBeds": {
        "value": "0.3",
        "unit": "병상 / 1,000명",
        "year": "2011",
        "source": "World Bank"
      },
      "physicians": {
        "value": "0.2",
        "unit": "의사 / 1,000명",
        "year": "2022",
        "source": "World Bank"
      },
      "nursesMidwives": {
        "value": "0.4",
        "unit": "간호사·조산사 / 1,000명",
        "year": "2022",
        "source": "World Bank"
      },
      "electricityAccess": {
        "value": "53.8",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableEnergyShare": {
        "value": "88.1",
        "unit": "%",
        "year": "2021",
        "source": "World Bank"
      },
      "cleanCookingAccess": {
        "value": "1",
        "unit": "%",
        "year": "2023",
        "source": "World Bank"
      },
      "internetPenetration": {
        "value": "33.3",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "mobileSubscriptions": {
        "value": "97.9",
        "unit": "건 / 100명",
        "year": "2023",
        "source": "World Bank"
      },
      "basicWater": {
        "value": "74.2",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "basicSanitation": {
        "value": "32.6",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableWaterPerCapita": {
        "value": "16079.5",
        "unit": "m³ / 인",
        "year": "2022",
        "source": "World Bank"
      },
      "pavedRoads": {
        "value": "9.8",
        "unit": "%",
        "year": "2003",
        "source": "World Bank"
      },
      "railLines": {
        "value": null,
        "unit": "km",
        "year": null,
        "source": null
      }
    },
    "koicaCumulative": {
      "total": "약 77억 5,438만 원",
      "latest": "약 7억 3,616만 원",
      "latestYear": "2023",
      "startYear": "1991"
    },
    "koicaHealthDetail": null,
    "diplomaticContact": {
      "overseas": {
        "missionName": "주 세네갈 대한민국 대사관",
        "missionType": "대사관",
        "jointCoverage": true,
        "address": "Ambassade de la Republique de Coree, Villa Hamoudy, Rue Aime Cesaire, Fann Residence, B.P.5850, Dakar, Senegal,",
        "phone": "(221)33-824-06-72",
        "consularCenter": "(82)2-3210-0404",
        "tollFree": "080-020-0219",
        "emergency": "(221)77-639-5109",
        "website": "http://overseas.mofa.go.kr/sn-ko/index.do",
        "lat": 14.695506,
        "lng": -17.467318
      },
      "domestic": null
    },
    "marketEntry": {
      "companyCount": 0,
      "industries": [],
      "startupCount": 0,
      "startupFields": [],
      "companies": [],
      "startups": []
    }
  },
  "기니비사우": {
    "id": "기니비사우",
    "name": "기니비사우",
    "nameEn": "Guinea-Bissau",
    "population": "2,110,000명 (2020년 기준)",
    "language": "포르투갈어(공용어)",
    "capital": "비사우(Bissau)",
    "climateScore": null,
    "mainClimateIssue": null,
    "diplomacyScore": null,
    "matchScore": null,
    "recommended": null,
    "priorityPartner": false,
    "koreaOdaHistory": true,
    "economy": {
      "gdpPerCapita": {
        "usd": "898 USD",
        "krw": "약 134만 원",
        "year": "2022",
        "source": "IMF/국제통화기금"
      },
      "gdpTotal": {
        "usd": "1,700,000,000 USD",
        "krw": "약 2조 5,500억 원",
        "year": "2022",
        "source": "IMF/국제통화기금"
      },
      "odaNetReceived": {
        "usd": "약 8억 USD",
        "krw": "약 1조 2,296억 7,840만 원",
        "year": "2019",
        "isNet": false
      },
      "recipientOda": {
        "usd": "약 171백만 USD",
        "krw": "약 2,565억 원",
        "year": "2019",
        "isNet": false
      },
      "bilateral": {
        "usd": "약 25백만 USD",
        "krw": "약 375억 원",
        "year": "2019",
        "isNet": false
      },
      "koreaOda": {
        "usd": "약 0백만 USD",
        "krw": "약 0 원",
        "year": "2019",
        "isNet": false
      }
    },
    "koica": {
      "total": "1,203,662 원",
      "sectors": [
        {
          "name": "보건",
          "percent": 15.3,
          "amount": "183,980 원"
        },
        {
          "name": "교육",
          "percent": 7.3,
          "amount": "88,161 원"
        },
        {
          "name": "농림수산",
          "percent": 7.1,
          "amount": "85,757 원"
        },
        {
          "name": "기술환경에너지",
          "percent": 1.4,
          "amount": "17,208 원"
        },
        {
          "name": "공공행정",
          "percent": 68.0,
          "amount": "818,410 원"
        },
        {
          "name": "기타",
          "percent": 0.8,
          "amount": "10,147 원"
        }
      ]
    },
    "infrastructure": {
      "hospitalBeds": {
        "value": "1",
        "unit": "병상 / 1,000명",
        "year": "2009",
        "source": "World Bank"
      },
      "physicians": {
        "value": "0.3",
        "unit": "의사 / 1,000명",
        "year": "2022",
        "source": "World Bank"
      },
      "nursesMidwives": {
        "value": "1.0",
        "unit": "간호사·조산사 / 1,000명",
        "year": "2022",
        "source": "World Bank"
      },
      "electricityAccess": {
        "value": "43.7",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableEnergyShare": {
        "value": "7.1",
        "unit": "%",
        "year": "2021",
        "source": "World Bank"
      },
      "cleanCookingAccess": {
        "value": "0.8",
        "unit": "%",
        "year": "2023",
        "source": "World Bank"
      },
      "internetPenetration": {
        "value": "29.8",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "mobileSubscriptions": {
        "value": "147.2",
        "unit": "건 / 100명",
        "year": "2024",
        "source": "World Bank"
      },
      "basicWater": {
        "value": "61.8",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "basicSanitation": {
        "value": "28.9",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableWaterPerCapita": {
        "value": "7599.0",
        "unit": "m³ / 인",
        "year": "2022",
        "source": "World Bank"
      },
      "pavedRoads": {
        "value": "27.9",
        "unit": "%",
        "year": "2002",
        "source": "World Bank"
      },
      "railLines": {
        "value": null,
        "unit": "km",
        "year": null,
        "source": null
      }
    },
    "koicaCumulative": {
      "total": "약 22억 7,460만 원",
      "latest": "약 8억 3,910만 원",
      "latestYear": "2023",
      "startYear": "1991"
    },
    "koicaHealthDetail": null,
    "diplomaticContact": {
      "overseas": {
        "missionName": "주 세네갈 대한민국 대사관",
        "missionType": "대사관",
        "jointCoverage": true,
        "address": "Ambassade de la Republique de Coree, Villa Hamoudy, Rue Aime Cesaire, Fann Residence, B.P.5850, Dakar, Senegal,",
        "phone": "(221)33-824-06-72",
        "consularCenter": "(82)2-3210-0404",
        "tollFree": "080-020-0219",
        "emergency": "(221)77-639-5109",
        "website": "http://overseas.mofa.go.kr/sn-ko/index.do",
        "lat": 14.695506,
        "lng": -17.467318
      },
      "domestic": null
    },
    "marketEntry": {
      "companyCount": 0,
      "industries": [],
      "startupCount": 0,
      "startupFields": [],
      "companies": [],
      "startups": []
    }
  },
  "나미비아": {
    "id": "나미비아",
    "name": "나미비아",
    "nameEn": "Namibia",
    "population": "2,690,000명 (2020년 기준)",
    "language": "영어, 아프리칸스어, 독일어, 오시밤보어 ",
    "capital": "빈트훅(Windhoek)",
    "climateScore": null,
    "mainClimateIssue": null,
    "diplomacyScore": null,
    "matchScore": null,
    "recommended": null,
    "priorityPartner": false,
    "koreaOdaHistory": true,
    "economy": {
      "gdpPerCapita": {
        "usd": "4,790 USD",
        "krw": "약 718만 원",
        "year": "2023",
        "source": "IMF/국제통화기금"
      },
      "gdpTotal": {
        "usd": "12,650,000,000 USD",
        "krw": "약 18조 9,750억 원",
        "year": "2023",
        "source": "IMF/국제통화기금"
      },
      "odaNetReceived": {
        "usd": "약 1억 USD",
        "krw": "약 1,816억 770만 원",
        "year": "2019",
        "isNet": false
      },
      "recipientOda": {
        "usd": "약 155백만 USD",
        "krw": "약 2,325억 원",
        "year": "2019",
        "isNet": false
      },
      "bilateral": {
        "usd": "약 73백만 USD",
        "krw": "약 1,095억 원",
        "year": "2019",
        "isNet": false
      },
      "koreaOda": {
        "usd": "약 0백만 USD",
        "krw": "약 0 원",
        "year": "2019",
        "isNet": false
      }
    },
    "koica": {
      "total": "1,562,655 원",
      "sectors": [
        {
          "name": "보건",
          "percent": 10.6,
          "amount": "165,885 원"
        },
        {
          "name": "교육",
          "percent": 0.9,
          "amount": "14,282 원"
        },
        {
          "name": "농림수산",
          "percent": 15.8,
          "amount": "246,528 원"
        },
        {
          "name": "기술환경에너지",
          "percent": 12.5,
          "amount": "194,672 원"
        },
        {
          "name": "공공행정",
          "percent": 58.0,
          "amount": "905,808 원"
        },
        {
          "name": "긴급구호",
          "percent": 1.9,
          "amount": "29,966 원"
        },
        {
          "name": "기타",
          "percent": 0.4,
          "amount": "5,515 원"
        }
      ]
    },
    "infrastructure": {
      "hospitalBeds": {
        "value": "2.7",
        "unit": "병상 / 1,000명",
        "year": "2009",
        "source": "World Bank"
      },
      "physicians": {
        "value": "0.6",
        "unit": "의사 / 1,000명",
        "year": "2022",
        "source": "World Bank"
      },
      "nursesMidwives": {
        "value": "5.4",
        "unit": "간호사·조산사 / 1,000명",
        "year": "2022",
        "source": "World Bank"
      },
      "electricityAccess": {
        "value": "59.3",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableEnergyShare": {
        "value": "93.4",
        "unit": "%",
        "year": "2021",
        "source": "World Bank"
      },
      "cleanCookingAccess": {
        "value": "48",
        "unit": "%",
        "year": "2023",
        "source": "World Bank"
      },
      "internetPenetration": {
        "value": "64.9",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "mobileSubscriptions": {
        "value": "85.2",
        "unit": "건 / 100명",
        "year": "2024",
        "source": "World Bank"
      },
      "basicWater": {
        "value": "86.5",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "basicSanitation": {
        "value": "38.7",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableWaterPerCapita": {
        "value": "2131.7",
        "unit": "m³ / 인",
        "year": "2022",
        "source": "World Bank"
      },
      "pavedRoads": {
        "value": "14.5",
        "unit": "%",
        "year": "2010",
        "source": "World Bank"
      },
      "railLines": {
        "value": null,
        "unit": "km",
        "year": null,
        "source": null
      }
    },
    "koicaCumulative": {
      "total": "약 19억 4,944만 원",
      "latest": "약 1억 6,449만 원",
      "latestYear": "2023",
      "startYear": "1991"
    },
    "koicaHealthDetail": null,
    "diplomaticContact": {
      "overseas": {
        "missionName": "주 앙골라 대한민국 대사관",
        "missionType": "대사관",
        "jointCoverage": true,
        "address": "Condominio Zenith, Torre 1, 7&ordm; Andar, Via AL 16, Luanda, Angola,",
        "phone": "(244)222-006-067",
        "consularCenter": "(82)2-3210-0404",
        "tollFree": "080-020-0219",
        "emergency": "(244)938-880-573",
        "website": "http://overseas.mofa.go.kr/ao-ko/index.do",
        "lat": -8.920868,
        "lng": 13.202023
      },
      "domestic": null
    },
    "marketEntry": {
      "companyCount": 5,
      "industries": [
        {
          "name": "금융 및 보험업",
          "count": 3
        },
        {
          "name": "제조업",
          "count": 1
        },
        {
          "name": "광업",
          "count": 1
        }
      ],
      "startupCount": 0,
      "startupFields": [],
      "companies": [
        {
          "nameKo": "나미비아 브루어리",
          "nameEn": "Namibia Breweries",
          "foundedYear": "1920",
          "parentCompany": "Ohlthaver & List Group\r-창립자: Herman ohlthaver, Carl List\r-창립연도: 1919년",
          "hq": "나미비아 빈크후크(Windhoek)",
          "industry": "제조업",
          "subIndustry": "주류, 소프트드링크 등 음료제조",
          "corpType": "사기업(주식회사)",
          "employees": "740",
          "marketCap": {
            "usd": "455,000,000 USD",
            "krw": "약 6,825억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "51,000,000 USD",
            "krw": "약 765억 원",
            "year": "2020"
          },
          "website": "www.nambrew.com",
          "highlights": [
            "1920년 나미비아 소규모 영세 양조장을 인수합병하여 설립되었고, 이후 1990년 나미비아가 독립하면서 기업명을 나미비아 브루어리로 변경함",
            "생산물량의 60%를 남아공을 비롯한 22개 국가로 수출",
            "대표 주류 브랜드로 Windhoek Lager, Windhoek Light, Hansa Pilsener, Tafel Lager 등이 있음",
            "모기업 Ohlthaver & List Group는 나미비아 최대의 민간기업으로 수산가공업, 호텔, 철강, IT 등 다양한 분야의 자회사 보유"
          ]
        },
        {
          "nameKo": "비투골드 코퍼레이션",
          "nameEn": "B2Gold Corp",
          "foundedYear": "2007",
          "parentCompany": null,
          "hq": "캐나다 밴쿠버(Vancouver)",
          "industry": "광업",
          "subIndustry": "금 채굴",
          "corpType": "사기업(유한회사)",
          "employees": "1927",
          "marketCap": {
            "usd": "3,790,000,000 USD",
            "krw": "약 5조 6,850억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "316,000,000 USD",
            "krw": "약 4,740억 원",
            "year": "2020"
          },
          "website": "www.b2gold.com",
          "highlights": [
            "비투골드는 캐나다 기반의 채굴기업으로 2012년 12월 나미비아 최대의 금 생산지역인 중북부 지역에 위치한 오트지코토(Otjikoto) 광산채굴사업에 대해 승인받음",
            "2020년 2분기에 43,496온스의 금을 생산하였으며 전년 동기간 생산량 대비 16% 증가",
            "2020년 165,000 ~ 175,000온스의 금을 생산할 것으로 전망"
          ]
        },
        {
          "nameKo": "애프앤비 나미비아",
          "nameEn": "FNB Namibia",
          "foundedYear": "1907",
          "parentCompany": null,
          "hq": "나미비아 빈크후크(Windhoek)",
          "industry": "금융 및 보험업",
          "subIndustry": "은행, 보험, 대출, 투자 등",
          "corpType": "사기업(주식회사)",
          "employees": "750",
          "marketCap": {
            "usd": "492,000,000 USD",
            "krw": "약 7,380억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "59,000,000 USD",
            "krw": "약 885억 원",
            "year": "2020"
          },
          "website": "www.fnbnamibia.com.na",
          "highlights": [
            "나미비아 독립 이전에 설립된 최조의 상업은행이며 현재 나미비아 최대의 상업은행",
            "영국의 금융잡지 The Banker에서 5년 연속 나미비아 최우수 은행으로 선정",
            "1997년 나미비아 증권거래소 상장됨"
          ]
        },
        {
          "nameKo": "카프리콘 인베스트먼트",
          "nameEn": "Capricon Investment",
          "foundedYear": "2000",
          "parentCompany": null,
          "hq": "나미비아 빈크후크(Windhoek)",
          "industry": "금융 및 보험업",
          "subIndustry": "은행, 보험, 투자, 자산관리",
          "corpType": "사기업(주식회사)",
          "employees": "2316",
          "marketCap": {
            "usd": "436,000,000 USD",
            "krw": "약 6,540억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "51,000,000 USD",
            "krw": "약 765억 원",
            "year": "2020"
          },
          "website": "www.capricorn.com.na",
          "highlights": [
            "50억 달러 이상의 자산을 운용하며 미국 뉴욕(New York), 팔로알토(PaloAlto) 등에서도 사무소 운영",
            "2004년부터 재생에너지, 재생에너지 인프라 건설, 청정기술, 에너지 효율성제고 등 미래에너지 분야 관련 다양한 투자협력 협정을 체결함",
            "대표 자회사인 Bank Windhoek는 나미비아 제 2의 상업은행으로 그룹사중 가장 수익성이 좋음",
            "Bank Windhoek, Bank Gaborone, Cavmont Bank, Capricorn Asset Management, Capricorn Capital, Capricorn Private Wealth, Entrepo, Namob Bou를 자회사로 소유"
          ]
        },
        {
          "nameKo": "트러스트코 크룹 홀딩스",
          "nameEn": "Trustco Group Holdings",
          "foundedYear": "1992",
          "parentCompany": null,
          "hq": "나미비아 빈크후크(Windhoek)",
          "industry": "금융 및 보험업",
          "subIndustry": "은행, 보험, 재무, 투자 등",
          "corpType": "사기업(유한회사)",
          "employees": "1635",
          "marketCap": {
            "usd": "276,000,000 USD",
            "krw": "약 4,140억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "34,000,000 USD",
            "krw": "약 510억 원",
            "year": "2020"
          },
          "website": "www.tgh.na",
          "highlights": [
            "나미비아 기반의 금융기업으로 Trustco Bank Namibia Limited, Trustco Finance Limited, Trustcon Capital Limited를 자회사로 두고 있음",
            "2013년 Employment Dilotte가 꼽은 일하기 가장 좋은 회사(Best Comapany to Work For)로 선정",
            "2016년 2018년, 2019년 비즈니스 신문을 발행하는 PMR Africa가 꼽은 가장 혁신적인 기업(Most Innovation Companies)으로 선정됨"
          ]
        }
      ],
      "startups": []
    }
  },
  "나이지리아": {
    "id": "나이지리아",
    "name": "나이지리아",
    "nameEn": "Nigeria",
    "population": "218,540,000명 (2020년 기준)",
    "language": "영어(공용어), 250개 토착어",
    "capital": "아부자(Abuja)",
    "climateScore": null,
    "mainClimateIssue": null,
    "diplomacyScore": null,
    "matchScore": null,
    "recommended": null,
    "priorityPartner": false,
    "koreaOdaHistory": true,
    "economy": {
      "gdpPerCapita": {
        "usd": "2,162 USD",
        "krw": "약 324만 원",
        "year": "2022",
        "source": "World Bank"
      },
      "gdpTotal": {
        "usd": "472,600,000,000 USD",
        "krw": "약 708조 9,000억 원",
        "year": "2022",
        "source": "World Bank"
      },
      "odaNetReceived": {
        "usd": "약 1억 USD",
        "krw": "약 1,217억 2,077만 원",
        "year": "2019",
        "isNet": false
      },
      "recipientOda": {
        "usd": "약 6,608백만 USD",
        "krw": "약 9조 9,120억 원",
        "year": "2019",
        "isNet": false
      },
      "bilateral": {
        "usd": "약 37백만 USD",
        "krw": "약 555억 원",
        "year": "2019",
        "isNet": false
      },
      "koreaOda": {
        "usd": "약 9백만 USD",
        "krw": "약 135억 원",
        "year": "2019",
        "isNet": false
      }
    },
    "koica": {
      "total": "54,400,000 원",
      "sectors": [
        {
          "name": "보건",
          "percent": 13.0,
          "amount": "7,052,742 원"
        },
        {
          "name": "교육",
          "percent": 42.3,
          "amount": "23,000,000 원"
        },
        {
          "name": "농림수산",
          "percent": 11.1,
          "amount": "6,063,964 원"
        },
        {
          "name": "기술환경에너지",
          "percent": 6.5,
          "amount": "3,538,279 원"
        },
        {
          "name": "공공행정",
          "percent": 25.7,
          "amount": "14,000,000 원"
        },
        {
          "name": "긴급구호",
          "percent": 0.3,
          "amount": "158,730 원"
        },
        {
          "name": "기타",
          "percent": 0.9,
          "amount": "510,624 원"
        }
      ]
    },
    "infrastructure": {
      "hospitalBeds": {
        "value": "0.5",
        "unit": "병상 / 1,000명",
        "year": "2004",
        "source": "World Bank"
      },
      "physicians": {
        "value": "0.4",
        "unit": "의사 / 1,000명",
        "year": "2023",
        "source": "World Bank"
      },
      "nursesMidwives": {
        "value": "1.6",
        "unit": "간호사·조산사 / 1,000명",
        "year": "2022",
        "source": "World Bank"
      },
      "electricityAccess": {
        "value": "62.5",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableEnergyShare": {
        "value": "22.2",
        "unit": "%",
        "year": "2021",
        "source": "World Bank"
      },
      "cleanCookingAccess": {
        "value": "26.2",
        "unit": "%",
        "year": "2023",
        "source": "World Bank"
      },
      "internetPenetration": {
        "value": "41.2",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "mobileSubscriptions": {
        "value": "70.8",
        "unit": "건 / 100명",
        "year": "2024",
        "source": "World Bank"
      },
      "basicWater": {
        "value": "82.2",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "basicSanitation": {
        "value": "47.9",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableWaterPerCapita": {
        "value": "990.4",
        "unit": "m³ / 인",
        "year": "2022",
        "source": "World Bank"
      },
      "pavedRoads": {
        "value": "15",
        "unit": "%",
        "year": "2004",
        "source": "World Bank"
      },
      "railLines": {
        "value": "3528",
        "unit": "km",
        "year": "2015",
        "source": "World Bank"
      }
    },
    "koicaCumulative": {
      "total": "약 748억 5,966만 원",
      "latest": "약 79억 4,892만 원",
      "latestYear": "2023",
      "startYear": "1991"
    },
    "koicaHealthDetail": {
      "year": "2024",
      "sectors": [
        {
          "name": "기초보건진료",
          "percent": 96.9,
          "amount": "9,584,469,000 원"
        },
        {
          "name": "보건정책 및 행정관리",
          "percent": 2.7,
          "amount": "262,597,500 원"
        },
        {
          "name": "보건인력개발",
          "percent": 0.5,
          "amount": "47,610,000 원"
        }
      ]
    },
    "diplomaticContact": {
      "overseas": {
        "missionName": "주 나이지리아 대한민국 대사관",
        "missionType": "대사관",
        "jointCoverage": false,
        "address": "No.9 Ovia cresent, Off Pope John Paul Ⅱ street, Off Gana street, Maitama, Abuja,",
        "phone": "(234)810-389-0991",
        "consularCenter": "(82)2-3210-0404",
        "tollFree": "080-020-0219",
        "emergency": "(234)809-998-1726",
        "website": "http://overseas.mofa.go.kr/ng-ko/index.do",
        "lat": 9.084108,
        "lng": 7.49347
      },
      "domestic": {
        "ambassador": "Ali Mohammed MAGASHI",
        "address": "서울특별시 용산구 장문로6길 13",
        "phone": "797-2370 / 3280",
        "email": "chancery@nigerianembassy.or.kr",
        "fax": "796-1848",
        "updatedAt": "2021-10-20"
      }
    },
    "marketEntry": {
      "companyCount": 19,
      "industries": [
        {
          "name": "금융 및 보험업",
          "count": 8
        },
        {
          "name": "제조업",
          "count": 7
        },
        {
          "name": "정보통신업",
          "count": 2
        },
        {
          "name": "건축 자재",
          "count": 1
        },
        {
          "name": "광업",
          "count": 1
        }
      ],
      "startupCount": 35,
      "startupFields": [
        {
          "name": "금융&핀테크",
          "count": 12
        },
        {
          "name": "헬스케어",
          "count": 11
        },
        {
          "name": "에듀테크",
          "count": 7
        },
        {
          "name": "에너지",
          "count": 4
        },
        {
          "name": "부동산",
          "count": 1
        }
      ],
      "companies": [
        {
          "nameKo": "개런티 트러스트 은행",
          "nameEn": "Guaranty Trust Bank",
          "foundedYear": "1990",
          "parentCompany": null,
          "hq": "나이지리아 라고스(Lagos)",
          "industry": "금융 및 보험업",
          "subIndustry": "투자 등 금융서비스",
          "corpType": "사기업",
          "employees": "819",
          "marketCap": {
            "usd": "1,444,000,000 USD",
            "krw": "약 2조 1,660억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "508,000,000 USD",
            "krw": "약 7,620억 원",
            "year": "2020"
          },
          "website": "www.gtbank.com",
          "highlights": [
            "나이지리아에서 시작하여 코트디부아르, 감비아, 가나, 라이베리아, 시에라리온, 우간다, 케냐, 르완다, 영국 등으로 확장",
            "2019년 글로벌 금융전문지 Euromoney에서 주관하는  Awards for Excellence 2019에서 아프리카 최우수 은행으로 선정"
          ]
        },
        {
          "nameKo": "나이지리아 브루어리",
          "nameEn": "Nigerian Breweries",
          "foundedYear": "1946",
          "parentCompany": null,
          "hq": "나이지리아 라고스(Lagos)",
          "industry": "제조업",
          "subIndustry": "맥주, 무알콜 음료 제조",
          "corpType": "사기업",
          "employees": "10000",
          "marketCap": {
            "usd": "462,000,000 USD",
            "krw": "약 6,930억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "42,000,000 USD",
            "krw": "약 630억 원",
            "year": "2020"
          },
          "website": "www.nbplc.com",
          "highlights": [
            "최대 주주는 하이네켄(Heineken Brouwerijen B.V)이며 전체의 약 38% 보유",
            "주요 제품은 Star Lager, Maltina 무알콜 보리 음료이며 나이지리아 및 서아프리카 국가에서 판매"
          ]
        },
        {
          "nameKo": "네슬레 나이지리아",
          "nameEn": "Nestle Nigeria",
          "foundedYear": "1961",
          "parentCompany": "Nestle S.A",
          "hq": "나이지리아 라고스(Lagos)",
          "industry": "제조업",
          "subIndustry": "커피, 유제품 등 식품 제조",
          "corpType": "사기업",
          "employees": "3195",
          "marketCap": {
            "usd": "1,712,000,000 USD",
            "krw": "약 2조 5,680억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "119,000,000 USD",
            "krw": "약 1,785억 원",
            "year": "2020"
          },
          "website": "www.nestle-cwa.com/en",
          "highlights": [
            "나이지리아에 3개 생산공장, 8개의 지사를 보유하고 있으며 2,300명 이상의 직영직원 고용",
            "Maggi, Milo, Golden, Morn, Nescafe, Nestle Pure Life 등 대표 식품 및 음료 브랜드 보유"
          ]
        },
        {
          "nameKo": "단고테 슈가 리파이너리",
          "nameEn": "Dangote Sugar Refinery",
          "foundedYear": "2000",
          "parentCompany": "Dangote Group \r- 창립자: Aliko Dangote\r- 창립연도: 1981년",
          "hq": "나이지리아 라고스(Lagos)",
          "industry": "제조업",
          "subIndustry": "설탕정제, 유통 등",
          "corpType": "사기업",
          "employees": "2201",
          "marketCap": {
            "usd": "334,000,000 USD",
            "krw": "약 5,010억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "58,000,000 USD",
            "krw": "약 870억 원",
            "year": "2020"
          },
          "website": "dangotesugar.com.ng",
          "highlights": [
            "Dangote Group은 시멘트 생산, 설탕 정제, 밀가루, 원유 정제, 철강 등으로 사업을 확장하며 나이지리아의 다국적 대기업이자 서아프리카 최대 기업으로 자리매김",
            "Dangote Group의 창립자 Aliko Dangote의 재산은 15조원이 넘어 포브스가 발표한 '2018년 세계 최고 부자 리스트'에서 아프리카 1위, 세계 100위를 차지",
            "Dangote Sugar Refinery는 연간 144만 톤의 설탕을 정제, 생산하고 있으며, 이는 사하라이남 최고 규모"
          ]
        },
        {
          "nameKo": "단고테 시멘트",
          "nameEn": "Dangote Cement",
          "foundedYear": "1992",
          "parentCompany": "Dangote Group \r- 창립자: Aliko Dangote\r- 창립연도: 1981년",
          "hq": "나이지리아 라고스(Lagos)",
          "industry": "제조업",
          "subIndustry": "시멘트 제조",
          "corpType": "사기업(주식회사)",
          "employees": "1592",
          "marketCap": {
            "usd": "5,188,000,000 USD",
            "krw": "약 7조 7,820억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "523,000,000 USD",
            "krw": "약 7,845억 원",
            "year": "2020"
          },
          "website": "www.dangotecement.com",
          "highlights": [
            "Dangote Group은 시멘트 생산, 설탕 정제, 밀가루, 원유 정제, 철강 등으로 사업을 확장하며 나이지리아의 다국적 대기업이자 서아프리카 최대 기업으로 자리매김",
            "Dangote Group의 창립자 Aliko Dangote의 재산은 15조원이 넘어 포브스가 발표한 '2018년 세계 최고 부자 리스트'에서 아프리카 1위, 세계 100위를 차지",
            "Dangote Cement는 사하라이남 아프리카 최대 규모의 시멘트 제조사로 아프리카 10개국(가나, 나이지리아, 남아공, 세네갈, 시에라리온, 에티오피아, 카메룬, 콩고, 탄자니아, 잠비아)에서 운영"
          ]
        },
        {
          "nameKo": "라파즈 아프리카",
          "nameEn": "Lafarge Africa",
          "foundedYear": "2015",
          "parentCompany": "Lafarge Holcim\r- 창립자: Jan Jenisch \r- 창립연도: 2015년",
          "hq": "나이지리아 라고스(Lagos)",
          "industry": "제조업",
          "subIndustry": "시멘트, 콘크리트 등  건설자재 생산, 건설 시공",
          "corpType": "사기업",
          "employees": "16793",
          "marketCap": {
            "usd": "530,000,000 USD",
            "krw": "약 7,950억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "300,000,000 USD",
            "krw": "약 4,500억 원",
            "year": "2020"
          },
          "website": "www.lafarge.com.ng",
          "highlights": [
            "lafarge Africa 는 시멘트, 건설 골재, 콘크리트의 세 가지 주요 제품을 전문으로 하는 프랑스 회사이며 세계적인 건축자재 기업인 스위스 LafargeHolcim의 자회사임",
            "Lafarge Africa는 시멘트 생산력이 연간 1,050만 톤에 달하며 나이지리아의 남부 지역에 공장 운영"
          ]
        },
        {
          "nameKo": "비유에이 시멘트",
          "nameEn": "BUA Cement",
          "foundedYear": "1988",
          "parentCompany": "BUA Group \r- 창립자: Abdul Samad \r- 창립연도: 1988년",
          "hq": "나이지리아 라고스(Lagos)",
          "industry": "건축 자재",
          "subIndustry": "시멘트 생산",
          "corpType": "공기업",
          "employees": "6300",
          "marketCap": {
            "usd": "3,110,000,000 USD",
            "krw": "약 4조 6,650억 원",
            "year": "2020"
          },
          "netProfit": null,
          "website": "www.buacement.com",
          "highlights": [
            "Dangote Cement에 이어 두번 째로 높은 나이지리아 시멘트 시장점유율을 기록",
            "2020년 1월, 32억 달러의 시가총액으로 나이지리아 증권거래소 상장"
          ]
        },
        {
          "nameKo": "세플랏 석유개발",
          "nameEn": "Seplat Petroleum Development",
          "foundedYear": "2009",
          "parentCompany": null,
          "hq": "나이지리아 라고스(Lagos)",
          "industry": "광업",
          "subIndustry": "석유, 원유, 천연 가스 등 생산",
          "corpType": "공기업",
          "employees": "230",
          "marketCap": {
            "usd": "758,000,000 USD",
            "krw": "약 1조 1,370억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "277,000,000 USD",
            "krw": "약 4,155억 원",
            "year": "2020"
          },
          "website": "seplatpetroleum.com",
          "highlights": [
            "니제르 델타(Niger Delta) 지역에서 천연가스와 원유를 생산, 가공된 가스를 국내 공급",
            "2014년 런던과 나이지리아 증권거래소 동시 상장"
          ]
        },
        {
          "nameKo": "스탠빅 아이비티씨 홀딩스",
          "nameEn": "Stanbic IBCT Holdings",
          "foundedYear": "1989",
          "parentCompany": "Standard Bank \r- 창립자: John Paterson \r- 창립연도: 1862년",
          "hq": "나이지리아 라고스(Lagos)",
          "industry": "금융 및 보험업",
          "subIndustry": "은행, 주식, 투자 자문, 모기지 등",
          "corpType": "사기업(유한회사)",
          "employees": "400",
          "marketCap": {
            "usd": "711,000,000 USD",
            "krw": "약 1조 665억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "189,000,000 USD",
            "krw": "약 2,835억 원",
            "year": "2020"
          },
          "website": "www.stanbicibct.com",
          "highlights": [
            "모회사인 Standard Bank는 남아공 요하네스버그 기반의 금융 지주회사로 아프리카, 유럽, 북미, 남비 등에 자사 운영",
            "2007년 Standard Bank Group의 자회사 Stanbic Bank Nigeria와 나이지리아 투자신탁기업 IBCT Chartered Bank가 합병되면서  Stanbic IBTC Holdings로 출범, Standard Bank Group이 대부분의 지분(50.1%)을 보유함",
            "Stanbic IBTC Holdings는 2018년 Laffery Banking 500 Global Benchmarking Study에서 4등급(최고 5등급)으로 평가받으며 우수한 경영을 인정받음"
          ]
        },
        {
          "nameKo": "액세스 은행",
          "nameEn": "Access Bank",
          "foundedYear": "1989",
          "parentCompany": null,
          "hq": "나이지리아 라고스(Lagos)",
          "industry": "금융 및 보험업",
          "subIndustry": "은행, 주식, 투자 자문, 모기지 등",
          "corpType": "사기업",
          "employees": "4200",
          "marketCap": {
            "usd": "615,000,000 USD",
            "krw": "약 9,225억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "251,000,000 USD",
            "krw": "약 3,765억 원",
            "year": "2020"
          },
          "website": "www.accessbank.com",
          "highlights": [
            "1989년 나이지리아 중앙은행으로부터 승인받았으며 1998년 나이지리아 증권거래소 상장",
            "나이지리아뿐만 아니라 사하라이남 아프리카 8개국과 서유럽에서 자회사를 운영함. 중국, 인도, 레바논, 아랍에미리트 등에 대표 사무소 운영",
            "Access Bank Nigeria는 Access Bank Group 자산의 75% 가량을 보유하고 있음. 2018년 나이지리아 현지 은행인 Diamond Bank를 인수했으며, 2020년 케냐에 28개 지점을 보유한 Transnational Bank Kenya Limited를 인수함"
          ]
        },
        {
          "nameKo": "에어텔 아프리카",
          "nameEn": "Airtel Africa",
          "foundedYear": "2001",
          "parentCompany": "Bharti Airtel Limited \r- 창립자: Sunil Mittal\r- 창립연도: 1995년",
          "hq": "나이지리아 라고스(Lagos)",
          "industry": "정보통신업",
          "subIndustry": "이동통신, 브로드밴드, 인터넷, 모바일머니 서비스",
          "corpType": "사기업",
          "employees": "28121",
          "marketCap": {
            "usd": "2,923,000,000 USD",
            "krw": "약 4조 3,845억 원",
            "year": "2020"
          },
          "netProfit": null,
          "website": "www.airtel.com.ng",
          "highlights": [
            "Airtel Africa는 인도 뉴델리(New Delhi)에 본사를 둔 통신기업 Bharti Airtel의 자회사로 아프리카 14개 국가에서 운영되고 있으며, 아프리카 국가 중 나이지리아 지사가 가장 많은 수익을 창출함",
            "모회사 Bharti Airtel의 창업자 Sunil Mittal은 인도의 억만장자 기업가이자 자선가이며, 통신 외에 보험, 부동산, 교육, 식품 등 다양한 사업을 진행",
            "선불/후불 휴대폰, 4G 등 이동통신 관련 서비스, 인터넷 및 브로드밴드, 모바일머니 서비스 제공"
          ]
        },
        {
          "nameKo": "에코뱅크 트랜스내셔널",
          "nameEn": "Ecobank Transnational",
          "foundedYear": "1989",
          "parentCompany": "Ecobank Transnational(토고)\r- 창립연도: 1985년",
          "hq": "나이지리아 라고스(Lagos)",
          "industry": "금융 및 보험업",
          "subIndustry": "기업/ 개인 금융서비스",
          "corpType": "사기업(유한책임회사)",
          "employees": "1000",
          "marketCap": {
            "usd": "299,000,000 USD",
            "krw": "약 4,485억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "275,000,000 USD",
            "krw": "약 4,125억 원",
            "year": "2020"
          },
          "website": "www.ecobank.com.ng",
          "highlights": [
            "Ecobank Transnational은, 1980년대 초 서브 아프리카 국가들이 국영은행과 외국계 은행밖에 없는 환경에 대한 보완책으로 민간은행을 설립하고자 1985년 서아프리카공동체(ECOWAS)의 지원을 받아 은행지주회사로 설립되었음",
            "1985년 토고 정부와의 본사 협정을 맺었으며, 미국 Citibank의 지원기술을 받아 서부 아프리카뿐만 아니라 아프리카 전역으로 지사 확대, 현재 아프리카 33개국에서 운영 중인 범아프리카 은행으로 성장함. 베이징, 두바이, 런던 등에서도 대표 사무소 운영",
            "가나, 나이지리아, 코트디부아르 증권거래소에 상장되어 있음"
          ]
        },
        {
          "nameKo": "에프비엔 홀딩스",
          "nameEn": "FBN Holdings",
          "foundedYear": "2010",
          "parentCompany": "Frist Bank of Nigeria Limited",
          "hq": "나이지리아 라고스(Lagos)",
          "industry": "금융 및 보험업",
          "subIndustry": "소매은행",
          "corpType": "사기업",
          "employees": "19568",
          "marketCap": {
            "usd": "439,000,000 USD",
            "krw": "약 6,585억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "182,000,000 USD",
            "krw": "약 2,730억 원",
            "year": "2020"
          },
          "website": "www.fbnholdings.com",
          "highlights": [
            "모회사인 Frist Bank of Nigeria Limited는 10여 개국에서 상업은행을 운영하며 FBN Holdings는 영업 외 지주회사임",
            "소매은행 업무를 전문으로 하며 나이지리아에서 가장 많은 소매 고객을 보유"
          ]
        },
        {
          "nameKo": "에프엠엔",
          "nameEn": "FMN(Flour Mills Nigeria)",
          "foundedYear": "1960",
          "parentCompany": "Excelsior Shipping Company Limited",
          "hq": "나이지리아 라고스(Lagos)",
          "industry": "제조업",
          "subIndustry": "식품 제조",
          "corpType": "사기업(주식회사)",
          "employees": "9016",
          "marketCap": {
            "usd": "229,000,000 USD",
            "krw": "약 3,435억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "11,000,000 USD",
            "krw": "약 165억 원",
            "year": "2020"
          },
          "website": "www.fmnplc.com",
          "highlights": [
            "농산물, 가축사료, 파스타 등을 생산하며 식품 유통 및 공급을 위한 자회사도 운영",
            "2013년 나이지리아 국립마케팅연구소에서 선정한 식품분야 나이지리아 최우수 혁신기업",
            "Excelsior Shipping Company Limited에서 FMN 최대지분(51.5%) 보유"
          ]
        },
        {
          "nameKo": "엠티엔 나이지리아",
          "nameEn": "MTN nigeria",
          "foundedYear": "2001",
          "parentCompany": "MTN Group",
          "hq": "나이지리아 라고스(Lagos)",
          "industry": "정보통신업",
          "subIndustry": "이동통신망, 브로드밴드, 모바일머니 서비스 등",
          "corpType": "사기업",
          "employees": "12000",
          "marketCap": {
            "usd": "4,767,000,000 USD",
            "krw": "약 7조 1,505억 원",
            "year": "2020"
          },
          "netProfit": null,
          "website": "www.mtnonline.com",
          "highlights": [
            "MTN은 남아공에 본사를 둔 다국적 이동통신사이며, 자회사 중 하나인 MTN Nigeria에서 전체 수입의 1/3 차지",
            "MTN Nigeria는 나이지리아 최대 통신 공급자로 가입자 수 약 6,100만 명 보유"
          ]
        },
        {
          "nameKo": "유나이티드 뱅크 포 아프리카",
          "nameEn": "United Bank For Africa",
          "foundedYear": "1949",
          "parentCompany": null,
          "hq": "나이지리아 라고스(Lagos)",
          "industry": "금융 및 보험업",
          "subIndustry": "투자, 송금 등",
          "corpType": "사기업",
          "employees": "17510",
          "marketCap": {
            "usd": "552,000,000 USD",
            "krw": "약 8,280억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "224,000,000 USD",
            "krw": "약 3,360억 원",
            "year": "2020"
          },
          "website": "www.ubagroup.com",
          "highlights": [
            "나이지리아 중앙은행에 상업은행으로 등록되어 있으며, 나이지리아 증권거래소에도 상장되어 있음",
            "카메룬, 부르키나파소, 차드, 코트디부아르, 가나, 세네갈, 탄자니아 등 아프리카 20개국과 영국, 프랑스, 미국 등에 자회사 운영",
            "부르키나파소의 최대 은행인 부르키나파소 국제은행의 51%의 지분을 보유"
          ]
        },
        {
          "nameKo": "유니언 뱅크 나이지리아",
          "nameEn": "Union Bank Nigeria",
          "foundedYear": "1917",
          "parentCompany": "Union Global Partners Limited",
          "hq": "나이지리아 라고스(Lagos)",
          "industry": "금융 및 보험업",
          "subIndustry": "기업/상업/소매은행",
          "corpType": "사기업(주식회사)",
          "employees": "13355",
          "marketCap": {
            "usd": "500,000,000 USD",
            "krw": "약 7,500억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "51,000,000 USD",
            "krw": "약 765억 원",
            "year": "2020"
          },
          "website": "www.unionbankng.com",
          "highlights": [
            "2018년 Environmental Excellence Award에서 우수기업으로 선정, 같은 해 Innovative Financial Brand of the Year로 선정",
            "1917년 나이지리아에서 영국의 식민지은행(Colonia Bank)으로 시작한 뒤 1917년 나이지리아 증권거래소에 상장되었으며, 투자회사인 Union Global Partners Limited가 소유권을 가지면서 이름을 Union Bank Nigeria로 변경함",
            "나이지리아 내 약 300개의 지점과 천여 개의 ATM 운영"
          ]
        },
        {
          "nameKo": "인터내셔널 브루어리",
          "nameEn": "International Breweries",
          "foundedYear": "1978",
          "parentCompany": "SABMiller",
          "hq": "나이지리아 라고스(Lagos)",
          "industry": "제조업",
          "subIndustry": "맥주, 음료 제조",
          "corpType": "사기업(주식회사)",
          "employees": "2593",
          "marketCap": {
            "usd": "349,000,000 USD",
            "krw": "약 5,235억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "-72,000,000 USD",
            "krw": "약 -1,080억 원",
            "year": "2020"
          },
          "website": "www.internationalbreweriesplc.com",
          "highlights": [
            "1995년 나이지리아 증권거래소 상장",
            "주요 브랜드로 버드와이저(Budweiser), 트로피(Trophy) 라거 등이 있음"
          ]
        },
        {
          "nameKo": "제니스 은행",
          "nameEn": "Zenith Bank",
          "foundedYear": "1990",
          "parentCompany": null,
          "hq": "나이지리아 라고스(Lagos)",
          "industry": "금융 및 보험업",
          "subIndustry": "기업금융, 투자 등",
          "corpType": "공공유한회사",
          "employees": "500",
          "marketCap": {
            "usd": "1,444,000,000 USD",
            "krw": "약 2조 1,660억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "543,000,000 USD",
            "krw": "약 8,145억 원",
            "year": "2020"
          },
          "website": "www.zenithbank.com",
          "highlights": [
            "2020년 Global Finance Magazine이 선정한 나이지리아 최우수은행",
            "영국, 아랍에미리트, 가나, 시에라리온, 감비아 들에 자회사 운영"
          ]
        }
      ],
      "startups": [
        {
          "nameKo": "54 진",
          "field": "헬스케어",
          "foundedYear": "2019",
          "hq": "미국 워싱턴 D.C",
          "employees": "11~50명",
          "funding": {
            "usd": "19,700,000 USD",
            "krw": "약 295억 5,000만 원",
            "year": null
          },
          "topInvestor": "Adjuvant Capital",
          "fundingStage": "Series A",
          "website": "http://www.54gene.com/"
        },
        {
          "nameKo": "게잘",
          "field": "에듀테크",
          "foundedYear": "2019",
          "hq": "나이지리아 라고스",
          "employees": null,
          "funding": null,
          "topInvestor": null,
          "fundingStage": null,
          "website": "http://thegesal.com/(접속불가)"
        },
        {
          "nameKo": "그레이들리",
          "field": "에듀테크",
          "foundedYear": "2019",
          "hq": "나이지리아 라고스",
          "employees": "1~10명",
          "funding": {
            "usd": "35,000 USD",
            "krw": "약 5,250만 원",
            "year": null
          },
          "topInvestor": "Microtraction, Facebook",
          "fundingStage": "Seed",
          "website": "http://www.gradely.ng/"
        },
        {
          "nameKo": "닥투라",
          "field": "헬스케어",
          "foundedYear": "2016",
          "hq": "나이지리아 라고스",
          "employees": "11~50명",
          "funding": {
            "usd": "49,000 USD",
            "krw": "약 7,350만 원",
            "year": null
          },
          "topInvestor": "Co-Creation Hub Nigeria",
          "fundingStage": null,
          "website": "http://www.doctoora.com/"
        },
        {
          "nameKo": "데이스타 파워 아프리카",
          "field": "에너지",
          "foundedYear": "2017",
          "hq": "나이지리아 라고스",
          "employees": "51~100명",
          "funding": {
            "usd": "30,600,000 USD",
            "krw": "약 459억 원",
            "year": null
          },
          "topInvestor": "Verod Capital Management",
          "fundingStage": "Series A",
          "website": "http://www.daystar-power.com/"
        },
        {
          "nameKo": "드러그스톡",
          "field": "헬스케어",
          "foundedYear": "2015",
          "hq": "나이지리아 라고스",
          "employees": "11~50명",
          "funding": {
            "usd": "65,000 USD",
            "krw": "약 9,750만 원",
            "year": null
          },
          "topInvestor": "Growth Capital Fund by Co-Hub, VestedWorld",
          "fundingStage": null,
          "website": "http://www.drugstoc.com/"
        },
        {
          "nameKo": "라이프뱅크",
          "field": "헬스케어",
          "foundedYear": "2015",
          "hq": "나이지리아 라고스",
          "employees": "11~50명",
          "funding": {
            "usd": "225,000 USD",
            "krw": "약 3억 3,750만 원",
            "year": null
          },
          "topInvestor": "Co-Creation Hub Nigeria",
          "fundingStage": "Series A",
          "website": "http://lifebank.ng/#/home"
        },
        {
          "nameKo": "리디야",
          "field": "금융&핀테크",
          "foundedYear": "2015",
          "hq": "나이지리아 라고스",
          "employees": "11~50명",
          "funding": {
            "usd": "8,200,000 USD",
            "krw": "약 123억 원",
            "year": null
          },
          "topInvestor": "Omidyar Network, Mastercard Start Path, Accion Venture Lab",
          "fundingStage": "Series A",
          "website": "http://www.lidya.co/home/"
        },
        {
          "nameKo": "리비",
          "field": "금융&핀테크",
          "foundedYear": "2016",
          "hq": "나이지리아 라고스",
          "employees": "11~50명",
          "funding": {
            "usd": "15,000 USD",
            "krw": "약 2,250만 원",
            "year": null
          },
          "topInvestor": "Microtraction",
          "fundingStage": null,
          "website": "http://riby.me/index.php"
        },
        {
          "nameKo": "마이메디신",
          "field": "헬스케어",
          "foundedYear": "2017",
          "hq": "나이지리아 라고스",
          "employees": "11~50명",
          "funding": null,
          "topInvestor": null,
          "fundingStage": "Seed",
          "website": "http://my-medicines.com/"
        },
        {
          "nameKo": "미고",
          "field": "금융&핀테크",
          "foundedYear": "2014",
          "hq": "미국 샌프란시스코",
          "employees": "51~100명",
          "funding": {
            "usd": "37,200,000 USD",
            "krw": "약 558억 원",
            "year": null
          },
          "topInvestor": "Valor Capital Group",
          "fundingStage": "Series B",
          "website": "http://www.mogo.money/"
        },
        {
          "nameKo": "뱅클리",
          "field": "금융&핀테크",
          "foundedYear": "2017",
          "hq": "나이지리아 라고스",
          "employees": "1~10명",
          "funding": {
            "usd": "10,000 USD",
            "krw": "약 1,500만 원",
            "year": null
          },
          "topInvestor": "The Epic Groundwater Challenge",
          "fundingStage": "Seed",
          "website": "http://www.bankly.ng/"
        },
        {
          "nameKo": "브이메트키트",
          "field": "헬스케어",
          "foundedYear": "2018",
          "hq": "나이지리아 라고스",
          "employees": "1~10명",
          "funding": null,
          "topInvestor": null,
          "fundingStage": null,
          "website": "www.vmedkit.com"
        },
        {
          "nameKo": "빈사이티",
          "field": "헬스케어",
          "foundedYear": "2016",
          "hq": "나이지리아 이바단",
          "employees": "1~10명",
          "funding": null,
          "topInvestor": null,
          "fundingStage": null,
          "website": "http://vinsighte.com.ng/index.php"
        },
        {
          "nameKo": "스투턴",
          "field": "에듀테크",
          "foundedYear": "2015",
          "hq": "나이지리아 라고스",
          "employees": "1~10명",
          "funding": {
            "usd": "5,000 USD",
            "krw": "약 750만 원",
            "year": null
          },
          "topInvestor": "Co-Creation Hub Nigeria",
          "fundingStage": "Seed",
          "website": "http://stusern.com"
        },
        {
          "nameKo": "심비 인터렉티브",
          "field": "에듀테크",
          "foundedYear": "2018",
          "hq": "나이지리아 라고스",
          "employees": "1~10명",
          "funding": {
            "usd": "30,000 USD",
            "krw": "약 4,500만 원",
            "year": null
          },
          "topInvestor": "Itanana",
          "fundingStage": "Seed",
          "website": "http://simbibot.com/#"
        },
        {
          "nameKo": "아너지",
          "field": "에너지",
          "foundedYear": "2003",
          "hq": "나이지리아 라고스",
          "employees": "11~50명",
          "funding": {
            "usd": "9,000,000 USD",
            "krw": "약 135억 원",
            "year": null
          },
          "topInvestor": "Breakthrough Energy Nenture",
          "fundingStage": "Series A",
          "website": "http://www.arnergy.com/index.html"
        },
        {
          "nameKo": "안델라",
          "field": "에듀테크",
          "foundedYear": "2014",
          "hq": "미국 뉴욕",
          "employees": "1,000~5,000명",
          "funding": {
            "usd": "181,000,000 USD",
            "krw": "약 2,715억 원",
            "year": null
          },
          "topInvestor": "Generation Investment Management",
          "fundingStage": "Series D",
          "website": "http://andela.com/"
        },
        {
          "nameKo": "에드브스",
          "field": "에듀테크",
          "foundedYear": "2016",
          "hq": "나이지리아 라고스",
          "employees": "11~50명",
          "funding": {
            "usd": "192,000 USD",
            "krw": "약 2억 8,800만 원",
            "year": null
          },
          "topInvestor": "Growth Capital, Chinook Capital Limited",
          "fundingStage": "Seed",
          "website": "http:/edves.net"
        },
        {
          "nameKo": "에어싱큐",
          "field": "에너지",
          "foundedYear": "2019",
          "hq": "나이지리아 라고스",
          "employees": "1~10명",
          "funding": null,
          "topInvestor": null,
          "fundingStage": null,
          "website": "http://www.airsynq.io/"
        },
        {
          "nameKo": "에일라 크레딧",
          "field": "금융&핀테크",
          "foundedYear": "2015",
          "hq": "나이지리아 라고스",
          "employees": "11~50명",
          "funding": {
            "usd": "1,300,000 USD",
            "krw": "약 19억 5,000만 원",
            "year": null
          },
          "topInvestor": "HQ Financial Group",
          "fundingStage": "Seed",
          "website": "www.aellacredit.com"
        },
        {
          "nameKo": "오페이",
          "field": "금융&핀테크",
          "foundedYear": "2018",
          "hq": "나이지리아 라고스",
          "employees": "251~500명",
          "funding": {
            "usd": "170,000,000 USD",
            "krw": "약 2,550억 원",
            "year": null
          },
          "topInvestor": "Source Code Capital",
          "fundingStage": "Series B",
          "website": "http://operapay.com/"
        },
        {
          "nameKo": "이에스웰",
          "field": "금융&핀테크",
          "foundedYear": "2013",
          "hq": "나이지리아 라고스",
          "employees": "11~50명",
          "funding": null,
          "topInvestor": "Venture Kinetic, Venture Garden Group, U-Africa",
          "fundingStage": "Seed",
          "website": "http://www.cashenvoy.com/"
        },
        {
          "nameKo": "이에스테이트",
          "field": "부동산",
          "foundedYear": "2017",
          "hq": "나이지리아 라고스",
          "employees": "1~10명",
          "funding": {
            "usd": "55,000 USD",
            "krw": "약 8,250만 원",
            "year": null
          },
          "topInvestor": "Itanna, Co-Creation Hub Nigeria",
          "fundingStage": "Seed",
          "website": "http://e-estatesapp.com/"
        },
        {
          "nameKo": "인터스위치",
          "field": "금융&핀테크",
          "foundedYear": "2002",
          "hq": "나이지리아 라고스",
          "employees": "251~500명",
          "funding": {
            "usd": "210,500,000 USD",
            "krw": "약 3,157억 5,000만 원",
            "year": null
          },
          "topInvestor": "Visa",
          "fundingStage": "Series A",
          "website": "http://www.interswitchgroup.com"
        },
        {
          "nameKo": "지알아이씨디",
          "field": "헬스케어",
          "foundedYear": "2019",
          "hq": "나이지리아 라고스",
          "employees": "1~10명",
          "funding": {
            "usd": "28,000,000 USD",
            "krw": "약 420억 원",
            "year": null
          },
          "topInvestor": "Greenhouse Lab",
          "fundingStage": null,
          "website": "http://gricd.com/"
        },
        {
          "nameKo": "카우리와이즈",
          "field": "금융&핀테크",
          "foundedYear": "2016",
          "hq": "나이지리아 라고스",
          "employees": "50~100명",
          "funding": {
            "usd": "120,000 USD",
            "krw": "약 1억 8,000만 원",
            "year": null
          },
          "topInvestor": null,
          "fundingStage": "Seed",
          "website": "http://www.cowrywise.com/"
        },
        {
          "nameKo": "캄솔라",
          "field": "에너지",
          "foundedYear": "2011",
          "hq": "이집트 기자",
          "employees": "11~50명",
          "funding": {
            "usd": "25,000,000 USD",
            "krw": "약 375억 원",
            "year": null
          },
          "topInvestor": "EDF Renewable Energy",
          "fundingStage": null,
          "website": "karmsolar.com"
        },
        {
          "nameKo": "큐라셀",
          "field": "헬스케어",
          "foundedYear": "2017",
          "hq": "나이지리아 라고스",
          "employees": "1~10명",
          "funding": null,
          "topInvestor": "Consconance Investment Manaagers",
          "fundingStage": "Seed",
          "website": "http://curacel.co/"
        },
        {
          "nameKo": "트랩 랩스",
          "field": "헬스케어",
          "foundedYear": "2017",
          "hq": "나이지리아 라고스",
          "employees": "1~10명",
          "funding": null,
          "topInvestor": null,
          "fundingStage": null,
          "website": "http://treplabs.co/"
        },
        {
          "nameKo": "트룹알",
          "field": "헬스케어",
          "foundedYear": "2014",
          "hq": "나이지리아 라고스",
          "employees": "1~10명",
          "funding": null,
          "topInvestor": "Co-creation Hub Nigeria",
          "fundingStage": "Seed",
          "website": "http://www.truppr.com"
        },
        {
          "nameKo": "팀앱트",
          "field": "금융&핀테크",
          "foundedYear": "2015",
          "hq": "나이지리아 라고스",
          "employees": "101~250명",
          "funding": {
            "usd": "5,500,000 USD",
            "krw": "약 82억 5,000만 원",
            "year": null
          },
          "topInvestor": "Quantum Capital Partners",
          "fundingStage": "Series A",
          "website": "http://teamapt.com/"
        },
        {
          "nameKo": "팜페이",
          "field": "금융&핀테크",
          "foundedYear": "2019",
          "hq": "나이지리아 라고스",
          "employees": "11~50명",
          "funding": {
            "usd": "40,000,000 USD",
            "krw": "약 600억 원",
            "year": null
          },
          "topInvestor": "Transsion",
          "fundingStage": "Seed",
          "website": "http://palmpay.co/"
        },
        {
          "nameKo": "페어머니",
          "field": "금융&핀테크",
          "foundedYear": "2017",
          "hq": "프랑스 파리",
          "employees": "11~50명",
          "funding": {
            "usd": "11,200,000 USD",
            "krw": "약 168억 원",
            "year": null
          },
          "topInvestor": "Flourish Ventures",
          "fundingStage": "Series A",
          "website": "http://fairmoney.ng/"
        },
        {
          "nameKo": "프랩클래스",
          "field": "에듀테크",
          "foundedYear": "2018",
          "hq": "나이지리아 라고스",
          "employees": "101~250명",
          "funding": {
            "usd": "250,000 USD",
            "krw": "약 3억 7,500만 원",
            "year": null
          },
          "topInvestor": "Rise Capital, GSMA Ecosystem Accelertor",
          "fundingStage": "Series A",
          "website": "http://prepclass.com.ng"
        }
      ]
    }
  },
  "남수단": {
    "id": "남수단",
    "name": "남수단",
    "nameEn": "South Sudan",
    "population": "12,110,000명 (2020년 기준)",
    "language": "영어, 아랍어, 딩카어, 누에르어 등 ",
    "capital": "주바(Juba)",
    "climateScore": null,
    "mainClimateIssue": null,
    "diplomacyScore": null,
    "matchScore": null,
    "recommended": null,
    "priorityPartner": false,
    "koreaOdaHistory": true,
    "economy": {
      "gdpPerCapita": {
        "usd": "993 USD",
        "krw": "약 148만 원",
        "year": "2023",
        "source": "IMF/국제통화기금"
      },
      "gdpTotal": {
        "usd": "8,550,000,000 USD",
        "krw": "약 12조 8,250억 원",
        "year": "2023",
        "source": "IMF/국제통화기금"
      },
      "odaNetReceived": {
        "usd": "약 16억 USD",
        "krw": "약 2조 3,874억 3,000만 원",
        "year": "2015",
        "isNet": false
      },
      "recipientOda": {
        "usd": "약 1,893백만 USD",
        "krw": "약 2조 8,395억 원",
        "year": "2019",
        "isNet": false
      },
      "bilateral": {
        "usd": "약 70백만 USD",
        "krw": "약 1,050억 원",
        "year": "2015",
        "isNet": false
      },
      "koreaOda": {
        "usd": "약 4백만 USD",
        "krw": "약 60억 원",
        "year": "2019",
        "isNet": false
      }
    },
    "koica": {
      "total": "8,604,471 원",
      "sectors": [
        {
          "name": "보건",
          "percent": 0.2,
          "amount": "19,307 원"
        },
        {
          "name": "교육",
          "percent": 59.8,
          "amount": "5,144,220 원"
        },
        {
          "name": "농림수산",
          "percent": 0.3,
          "amount": "22,976 원"
        },
        {
          "name": "기술환경에너지",
          "percent": 6.5,
          "amount": "560,124 원"
        },
        {
          "name": "공공행정",
          "percent": 33.2,
          "amount": "2,857,843 원"
        }
      ]
    },
    "infrastructure": {
      "hospitalBeds": {
        "value": null,
        "unit": "병상 / 1,000명",
        "year": null,
        "source": null
      },
      "physicians": {
        "value": "0.0",
        "unit": "의사 / 1,000명",
        "year": "2022",
        "source": "World Bank"
      },
      "nursesMidwives": {
        "value": "0.7",
        "unit": "간호사·조산사 / 1,000명",
        "year": "2022",
        "source": "World Bank"
      },
      "electricityAccess": {
        "value": "5.4",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableEnergyShare": {
        "value": "0.3",
        "unit": "%",
        "year": "2021",
        "source": "World Bank"
      },
      "cleanCookingAccess": {
        "value": "0",
        "unit": "%",
        "year": "2023",
        "source": "World Bank"
      },
      "internetPenetration": {
        "value": "6.7",
        "unit": "%",
        "year": "2019",
        "source": "World Bank"
      },
      "mobileSubscriptions": {
        "value": "46.6",
        "unit": "건 / 100명",
        "year": "2023",
        "source": "World Bank"
      },
      "basicWater": {
        "value": "39.7",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "basicSanitation": {
        "value": "14.4",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableWaterPerCapita": {
        "value": "2359.1",
        "unit": "m³ / 인",
        "year": "2022",
        "source": "World Bank"
      },
      "pavedRoads": {
        "value": null,
        "unit": "%",
        "year": null,
        "source": null
      },
      "railLines": {
        "value": null,
        "unit": "km",
        "year": null,
        "source": null
      }
    },
    "koicaCumulative": {
      "total": "약 161억 1,522만 원",
      "latest": "약 57억 4,080만 원",
      "latestYear": "2023",
      "startYear": "1991"
    },
    "koicaHealthDetail": null,
    "diplomaticContact": {
      "overseas": {
        "missionName": "주 우간다 대한민국 대사관",
        "missionType": "대사관",
        "jointCoverage": true,
        "address": "Plot 14 Ternan Avenue, Kampala, Uganda,",
        "phone": "(256)414-500-197",
        "consularCenter": "(82)2-3210-0404",
        "tollFree": "080-020-0219",
        "emergency": "(256)774-478-376",
        "website": null,
        "lat": 0.320245,
        "lng": 32.583
      },
      "domestic": null
    },
    "marketEntry": {
      "companyCount": 0,
      "industries": [],
      "startupCount": 0,
      "startupFields": [],
      "companies": [],
      "startups": []
    }
  },
  "남아프리카공화국": {
    "id": "남아프리카공화국",
    "name": "남아프리카공화국",
    "nameEn": "South Africa",
    "population": "62,030,000명 (2020년 기준)",
    "language": "영어, 아프리칸스어, 줄루어 등 총 12개",
    "capital": "프레토리아(행정), 케이프타운(입법), 블로엠폰테인(사법)",
    "climateScore": null,
    "mainClimateIssue": null,
    "diplomacyScore": null,
    "matchScore": null,
    "recommended": null,
    "priorityPartner": false,
    "koreaOdaHistory": true,
    "economy": {
      "gdpPerCapita": {
        "usd": "6,190 USD",
        "krw": "약 928만 원",
        "year": "2023",
        "source": "IMF/국제통화기금"
      },
      "gdpTotal": {
        "usd": "380,900,000,000 USD",
        "krw": "약 571조 3,500억 원",
        "year": "2023",
        "source": "IMF/국제통화기금"
      },
      "odaNetReceived": {
        "usd": "약 0억 USD",
        "krw": "약 426억 6,828만 원",
        "year": "2019",
        "isNet": false
      },
      "recipientOda": {
        "usd": "약 5,245백만 USD",
        "krw": "약 7조 8,675억 원",
        "year": "2019",
        "isNet": false
      },
      "bilateral": {
        "usd": "약 76백만 USD",
        "krw": "약 1,140억 원",
        "year": "2019",
        "isNet": false
      },
      "koreaOda": {
        "usd": "약 0백만 USD",
        "krw": "약 0 원",
        "year": "2019",
        "isNet": false
      }
    },
    "koica": {
      "total": "5,637,290 원",
      "sectors": [
        {
          "name": "보건",
          "percent": 0.1,
          "amount": "8,273 원"
        },
        {
          "name": "교육",
          "percent": 55.6,
          "amount": "3,135,959 원"
        },
        {
          "name": "농림수산",
          "percent": 23.3,
          "amount": "1,314,688 원"
        },
        {
          "name": "기술환경에너지",
          "percent": 3.2,
          "amount": "179,027 원"
        },
        {
          "name": "공공행정",
          "percent": 17.4,
          "amount": "978,876 원"
        },
        {
          "name": "기타",
          "percent": 0.4,
          "amount": "20,467 원"
        }
      ]
    },
    "infrastructure": {
      "hospitalBeds": {
        "value": "2.2",
        "unit": "병상 / 1,000명",
        "year": "2010",
        "source": "World Bank"
      },
      "physicians": {
        "value": "0.8",
        "unit": "의사 / 1,000명",
        "year": "2022",
        "source": "World Bank"
      },
      "nursesMidwives": {
        "value": "6.4",
        "unit": "간호사·조산사 / 1,000명",
        "year": "2022",
        "source": "World Bank"
      },
      "electricityAccess": {
        "value": "90.2",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableEnergyShare": {
        "value": "6.4",
        "unit": "%",
        "year": "2021",
        "source": "World Bank"
      },
      "cleanCookingAccess": {
        "value": "89.8",
        "unit": "%",
        "year": "2023",
        "source": "World Bank"
      },
      "internetPenetration": {
        "value": "78.4",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "mobileSubscriptions": {
        "value": "179.3",
        "unit": "건 / 100명",
        "year": "2024",
        "source": "World Bank"
      },
      "basicWater": {
        "value": "90.2",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "basicSanitation": {
        "value": "77.4",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableWaterPerCapita": {
        "value": "718.2",
        "unit": "m³ / 인",
        "year": "2022",
        "source": "World Bank"
      },
      "pavedRoads": {
        "value": "17.3",
        "unit": "%",
        "year": "2001",
        "source": "World Bank"
      },
      "railLines": {
        "value": "20953",
        "unit": "km",
        "year": "2021",
        "source": "World Bank"
      }
    },
    "koicaCumulative": {
      "total": "약 80억 3,688만 원",
      "latest": "약 10억 3,021만 원",
      "latestYear": "2023",
      "startYear": "1991"
    },
    "koicaHealthDetail": null,
    "diplomaticContact": {
      "overseas": {
        "missionName": "주 남아프리카공화국 대한민국 대사관",
        "missionType": "대사관",
        "jointCoverage": false,
        "address": "265 Melk Street, Nieuw Muckleneuk, Pretoria 0181, South Africa,",
        "phone": "(27)12-460-2508",
        "consularCenter": "(82)2-3210-0404",
        "tollFree": "080-020-0219",
        "emergency": "(27)66-332-5897",
        "website": "http://overseas.mofa.go.kr/za-ko/index.do",
        "lat": -25.773293,
        "lng": 28.226605
      },
      "domestic": {
        "ambassador": "Zenani Nosizwe DLAMINI",
        "address": "서울특별시 용산구 독서당로 104",
        "phone": "2077-5900",
        "email": "admin.seoul@dirco.gov.za / political.seoul@dirco.gov.za",
        "fax": "792-4856",
        "updatedAt": "2020-01-14"
      }
    },
    "marketEntry": {
      "companyCount": 100,
      "industries": [
        {
          "name": "금융 및 보험업",
          "count": 26
        },
        {
          "name": "도매 및 소매업",
          "count": 20
        },
        {
          "name": "제조업",
          "count": 18
        },
        {
          "name": "광업",
          "count": 16
        },
        {
          "name": "정보통신업",
          "count": 7
        },
        {
          "name": "보건 및 사회복지서비스업",
          "count": 3
        },
        {
          "name": "복합산업",
          "count": 3
        },
        {
          "name": "숙박 및 음식점업",
          "count": 2
        },
        {
          "name": "교육 서비스업",
          "count": 2
        },
        {
          "name": "부동산업",
          "count": 1
        },
        {
          "name": "전기, 가스, 증기 및 공기조절 공급업",
          "count": 1
        },
        {
          "name": "건설업",
          "count": 1
        }
      ],
      "startupCount": 13,
      "startupFields": [
        {
          "name": "금융&핀테크",
          "count": 8
        },
        {
          "name": "보험",
          "count": 3
        },
        {
          "name": "에듀테크",
          "count": 1
        },
        {
          "name": "헬스케어",
          "count": 1
        }
      ],
      "companies": [
        {
          "nameKo": "골드 필드",
          "nameEn": "Gold Fields",
          "foundedYear": "1998",
          "parentCompany": null,
          "hq": "남아프리카공화국 샌튼(Sandton)",
          "industry": "광업",
          "subIndustry": "금 채굴",
          "corpType": "사기업(주식회사)",
          "employees": "1020",
          "marketCap": {
            "usd": "5,494,000,000 USD",
            "krw": "약 8조 2,410억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "175,000,000 USD",
            "krw": "약 2,625억 원",
            "year": "2020"
          },
          "website": "www.goldfields.com",
          "highlights": [
            "남아공 기반의 세계적인 금 생산기업으로 호주, 페루, 남아공, 칠레, 가나, 등에 총 9개의 광산에서 사업을 진행하고 있음",
            "요하네스버그 증권거래소, 뉴욕 증권거래소 상장"
          ]
        },
        {
          "nameKo": "그로스포인트 프로퍼티",
          "nameEn": "Growthpoint Properties",
          "foundedYear": "1987",
          "parentCompany": null,
          "hq": "남아프리카공화국 샌튼(Sandton)",
          "industry": "부동산업",
          "subIndustry": "부동산",
          "corpType": "사기업",
          "employees": "17656",
          "marketCap": {
            "usd": "2,290,000,000 USD",
            "krw": "약 3조 4,350억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "348,000,000 USD",
            "krw": "약 5,220억 원",
            "year": "2020"
          },
          "website": "growthpoint.co.za",
          "highlights": [
            "2020년 6월 기준, 남아공 내 44개 부동산을 소유하고 있으며 GHPH(Growthpoint Healthcare Property Holdings Limited) 지분의 61.8%를 보유 (GHPH는 26억 달러 규모의 의료시설과 4개의 병원을 소유하고 있음)",
            "2018sus SAPOA (south Africa Property Owners' Association)의"
          ]
        },
        {
          "nameKo": "내스퍼스",
          "nameEn": "Naspers",
          "foundedYear": "1915",
          "parentCompany": "Public Investment Corporation",
          "hq": "남아프리카공화국 샌튼(Sandton)",
          "industry": "정보통신업",
          "subIndustry": "글로벌 투자, 미디어, 온라인 쇼핑",
          "corpType": "사기업(유하회사)",
          "employees": "601",
          "marketCap": {
            "usd": "62,259,000,000 USD",
            "krw": "약 93조 3,885억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "380,000,000 USD",
            "krw": "약 5,700억 원",
            "year": "2020"
          },
          "website": "www.naspers.com",
          "highlights": [
            "설립 100년 이상된 장수 미디어 그룹이자 글로벌 투자전문기업",
            "남아공 두 번째 도시 스텔렌보스(Stellenbosch)의 작은 신문사로 시작하여 아프리카 최대 기업으로 성장",
            "1997년 Koos Bekker CEO로 부임한 후 인터넷과 뉴미디어 관련 기업에 잇따라 투자하며 Naspers종합 미디어 그룹이자 글로벌 투자 전문기업으로 성장시켰으며, 자회사 Prosus, media24, Take a Iot으로 사업구조를 삼원화 함, 2014년부터 Koos Bekker는 이사회 의장직을 맡고 있으며 Bob van Dijk가 CEO로 부임",
            "Media24는 전통언론사와 디지털 뉴미디어 사업을 관장하며 테이크어랏은 남아공 최대 전자상거래 소매업체"
          ]
        },
        {
          "nameKo": "네드은행 그룹",
          "nameEn": "Nedbank Group",
          "foundedYear": "1882",
          "parentCompany": null,
          "hq": "남아프리카공화국 샌튼(Sandton)",
          "industry": "금융 및 보험업",
          "subIndustry": "소기업지원, 기업투자뱅킹, 보험, 카드, 대출 등",
          "corpType": "사기업(유한회사)",
          "employees": "20196",
          "marketCap": {
            "usd": "3,071,000,000 USD",
            "krw": "약 4조 6,065억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "705,000,000 USD",
            "krw": "약 1조 575억 원",
            "year": "2020"
          },
          "website": "www.nedback.co.za",
          "highlights": [
            "nedback Group은 아프리카에서 남아공에 처음 진출한 이후 다른 국가로 계속 확장해 나가고 있음",
            "아프리카 개발공동체(SADC)의 5개 국가(나미비아, 에스와티니, 모잠비크, 레소토, 짐바브웨)에 자회사와 은행을 소유하고 있으며 앙골라와 케냐에 대표사무소를 운영하고 있음",
            "Nedbank Corporate and Investment Bank, Nedbank Retail and Business Banking 등을 통해 뱅킹솔루션 제시",
            "카드, 및 대출, 위험관리, 업무용 카드결제 등",
            "아프리카에 약 4,388개의 현금자동인출기(ATM)운영 및 관리, 약 760만 명의 고객 보유",
            "아프리카 36개 국가, 약 2,000여개의 지점으르 보유하고 있는"
          ]
        },
        {
          "nameKo": "넷케어",
          "nameEn": "Netcare",
          "foundedYear": "1996",
          "parentCompany": null,
          "hq": "남아프리카공화국 샌튼(Sandton)",
          "industry": "보건 및 사회복지서비스업",
          "subIndustry": "병원 운영",
          "corpType": "사기업(주식회사)",
          "employees": "28697",
          "marketCap": {
            "usd": "1,327,000,000 USD",
            "krw": "약 1조 9,905억 원",
            "year": "2019"
          },
          "netProfit": {
            "usd": "135,000,000 USD",
            "krw": "약 2,025억 원",
            "year": "2020"
          },
          "website": "www.netcare.co.za",
          "highlights": [
            "남아공 최대 민간의료기업으로 영국과 남아공에서 운영, 2006년 영국의 제네럴 헬스케어 그룹의 지분을 사드림",
            "총 59개의 병원(약 1만여 개의 병상)을 운영하며 그 중 민관협력(PPP)방식으로 남아공에 4개, 레소토에 1개의 병원을 운영하고 있음, 그 외, 응급의료센터, 신장관리 네트워크 등을 운영",
            "2019/20년 Ask Africa Orange Index Award 민간병원 분야에서 우수서비스제공 병원으로 4년 연속 수상, 아프리카지역 의료기업으로는 처음으로 2019년 Sub-Sahara African Region Corporate Energy Management Award에서 수상"
          ]
        },
        {
          "nameKo": "노덤 플래티넘",
          "nameEn": "Northam Platinum",
          "foundedYear": "1977",
          "parentCompany": null,
          "hq": "남아프리카공화국 요하네스버그(Johannesburg)",
          "industry": "광업",
          "subIndustry": "백금 생산",
          "corpType": "사기업",
          "employees": "19915",
          "marketCap": {
            "usd": "2,301,000,000 USD",
            "krw": "약 3조 4,515억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "3,000,000 USD",
            "krw": "약 45억 원",
            "year": "2020"
          },
          "website": "www.northam.co.za",
          "highlights": [
            "Zondereinde, Booysendal 등의 광산을 통해 자동차 제조 등 산업분야에 꼭 필요한 백금, 팔라듐, 로듐을 생산",
            "Zondereinde 광산 채굴 가능 연한은 30년 이상, Booysendal 광산은 25년 이상임",
            "요하네스버스 증권거래소에 상장되어 있으며 2019년 주요 주주로는 Zambezi Platinum Limited(31%), Coronation Asset managemant(28%), Public Investment Corporation(10%)이 있음"
          ]
        },
        {
          "nameKo": "데이터텍",
          "nameEn": "Datatec",
          "foundedYear": "1986",
          "parentCompany": null,
          "hq": "남아프리카공화국 요하네스버그(Johannesburg)",
          "industry": "제조업",
          "subIndustry": "전기장비 제조, IT/컨설팅",
          "corpType": "사기업(유한회사)",
          "employees": "8950",
          "marketCap": {
            "usd": "311,000,000 USD",
            "krw": "약 4,665억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "1,000,000 USD",
            "krw": "약 15억 원",
            "year": "2020"
          },
          "website": "www.datatec.com",
          "highlights": [
            "남아공 기반의 다국적 IT기업으로, 아프리카, 북미, 남미, 유럽의 60여개국에서 사업 운영",
            "1996년, 인터넷 공급업체인 UUNET과 합자회사 UUNET Africa를 설립하였으나, 200년 WorldCom에 매각함"
          ]
        },
        {
          "nameKo": "디스쳄 파마시",
          "nameEn": "Dis-Chem Pharmacies",
          "foundedYear": "1987",
          "parentCompany": null,
          "hq": "남아프리카공화국 하우텡(Gauteng)",
          "industry": "도매 및 소매업",
          "subIndustry": "의약품 유통",
          "corpType": "사기업(주식회사)",
          "employees": "8000",
          "marketCap": {
            "usd": "1,137,000,000 USD",
            "krw": "약 1조 7,055억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "40,000,000 USD",
            "krw": "약 600억 원",
            "year": "2020"
          },
          "website": "www.dischem.co.za",
          "highlights": [
            "1978년 남아공 요하네스버그 남부의 몬데오르(Mondeor) 지역에서 할인약국 형태로 시작하여, 점차 의역외품 유통, 의약외품 브랜드 생산 등으로 사업을 확장함",
            "2020년 7월 기준 남아공에에 165개, 나미비아에 4개, 보츠나와에 1개의 매장을 운영"
          ]
        },
        {
          "nameKo": "디스커버리",
          "nameEn": "Discovery",
          "foundedYear": "1992",
          "parentCompany": "RMB Holdings",
          "hq": "남아프리카공화국 샌튼(Sandton)",
          "industry": "금융 및 보험업",
          "subIndustry": "의료지원, 카드, 보험, 투자 등",
          "corpType": "사기업(유한회사)",
          "employees": "13500",
          "marketCap": {
            "usd": "3,295,000,000 USD",
            "krw": "약 4조 9,425억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "364,000,000 USD",
            "krw": "약 5,460억 원",
            "year": "2020"
          },
          "website": "www.discovery.co.zaportal",
          "highlights": [
            "분야별 정보와 소식을 전해주는 디스커버리 매거진(Discovery Magazine)플랫폼 구축",
            "건강, 운동, 팟캐스트, 영양, 사업, 스마트머니, 커뮤니티, 코로나19 등 사회 다방면의 정보 제공",
            "남아공을 비롯하여 영국, 미국, 중국에 자회사 및 부분주식 소유",
            "영국: VitalityHealyh, VitalityLife, Vitality Corporate Services",
            "미국: The Vitality Group(75%주식보유), HumanaVitality(25%주식보유)",
            "싱가포르: AIA Vitality",
            "중국: Ping An Health(25%주식보유)",
            "남아공(100%주식보유) : Discovery Life, Discovery Health, Discovery Vitality, Discovery Life Collective Investments, Discovery Life Investment Services, Discovery Insure"
          ]
        },
        {
          "nameKo": "디스텔 그룹",
          "nameEn": "Distell Group",
          "foundedYear": "2000",
          "parentCompany": null,
          "hq": "남아프리카공화국 스텔렌보스(Stellenbosch)",
          "industry": "제조업",
          "subIndustry": "주류, 사이다 등 음료 제조",
          "corpType": "사기업(유한회사)",
          "employees": "45",
          "marketCap": {
            "usd": "899,000,000 USD",
            "krw": "약 1조 3,485억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "33,000,000 USD",
            "krw": "약 495억 원",
            "year": "2020"
          },
          "website": "www.distell.co.za",
          "highlights": [
            "증류주, 와인, 사이다, 음료 등을 생산하며 대표 브랜드로는 Amarula, Klipdrift Export, Richelieu 등이 있음",
            "Distell Group은 2000년 Distillers Corporation이 합병된 그룹이며 합병당시 두 회사는 각각 요하네스버그 증권거래소에 상장된 회사였음. 합병된 Distell Group은 2001년에 상장됨",
            "2015년 기준, Remgro-Capevin Investments Proprietaty Limited이 최대 지분 보유(53%)"
          ]
        },
        {
          "nameKo": "디알디골드",
          "nameEn": "DRDGold",
          "foundedYear": "1895",
          "parentCompany": "Sibanye-Stillwater\r-창립연도: 2012년",
          "hq": "남아프리카공화국 요하네스버그(Johannesburg)",
          "industry": "광업",
          "subIndustry": "금, 백금, 필라듐 생산",
          "corpType": "사기업(유한회사)",
          "employees": "4400",
          "marketCap": {
            "usd": "615,000,000 USD",
            "krw": "약 9,225억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "40,000,000 USD",
            "krw": "약 600억 원",
            "year": "2020"
          },
          "website": "www.drd.co.za",
          "highlights": [
            "1880년대 중반 요하네스버그에서 금이 발견된 이후 설립되었으며 요하네스버그 증권거래소에 상장된 회사 중 가장 오래된 광업회사임",
            "모회사 Sibanye-Stillwater는 남부 아프리카에서 가장 큰 금 생산기업으로. DRDGold의 50.1% 지분 보유"
          ]
        },
        {
          "nameKo": "라이프 헬스케어",
          "nameEn": "Life Healthcare",
          "foundedYear": "1983",
          "parentCompany": null,
          "hq": "남아프리카공화국 샌튼(Sandton)",
          "industry": "보건 및 사회복지서비스업",
          "subIndustry": "병원 운영",
          "corpType": "사기업",
          "employees": "878",
          "marketCap": {
            "usd": "1,645,000,000 USD",
            "krw": "약 2조 4,675억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "142,000,000 USD",
            "krw": "약 2,130억 원",
            "year": "2020"
          },
          "website": "www.lifehealthcare.co.za",
          "highlights": [
            "남아공에서 두 번째로 큰 개인병원으로 6,500여개의 병상을 보유하고 있으며 남아공과 보츠나와에서 총 49개의 병원 운영",
            "Brimstone Investment Corporation이 소유함",
            "2016년 11월, 영상의학서비스 회사인 Alliance Medical을 약 7억 2,700만 달러에 매입함"
          ]
        },
        {
          "nameKo": "랜드 머천트 인베스트먼트",
          "nameEn": "Rand Merchant Investment",
          "foundedYear": "1977",
          "parentCompany": null,
          "hq": "남아프리카공화국 샌튼(Sandton)",
          "industry": "금융 및 보험업",
          "subIndustry": "보험, 자산관리",
          "corpType": "사기업",
          "employees": "16376",
          "marketCap": {
            "usd": "1,991,000,000 USD",
            "krw": "약 2조 9,865억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "223,000,000 USD",
            "krw": "약 3,345억 원",
            "year": "2020"
          },
          "website": "www.rmih.co.za",
          "highlights": [
            "1977년 GT Ferreira, Laurie Dippenaar, Paul Harris가 설립한 이래 다양한 파트너십, 포트폴리오 창출과 운영을 통해 자산관리를 지속하고 있음. 요하네스버그 증권거래소 상장기업",
            "주요 주주로는 Remgro Ltd.(30.6%), Royal Bafokeng Holdings(14.5%), Allan Gray(7.8%), Public Investment Corporation(7.3%)이 있음",
            "2020년 기준, RMI는 Discovery Limited의 25%, Momentum Metropolitan Holdings의 27.3%, OUTsurance Holdings의 89.1%지분을 가지고 있음"
          ]
        },
        {
          "nameKo": "렘그로",
          "nameEn": "Remgro",
          "foundedYear": "1940",
          "parentCompany": null,
          "hq": "남아프리카공화국 스텔렌보스(Stellenbosch)",
          "industry": "금융 및 보험업",
          "subIndustry": "금융, 의료, 소비재, 보험 등",
          "corpType": "사기업(유한회사)",
          "employees": "6246",
          "marketCap": {
            "usd": "4,300,000,000 USD",
            "krw": "약 6조 4,500억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "403,000,000 USD",
            "krw": "약 6,045억 원",
            "year": "2020"
          },
          "website": "www.remgro.com",
          "highlights": [
            "Remgro는 남아공의 가장 잘 알려진 투자지주회사로, 창립 이후 다분야에 걸친 투자를 진행",
            "금융, 의료, 소비재, 보험 산업, 인프라, 미디어&스포츠 등 다양한 포트폴리오 보유",
            "금융: RMI(30.6%), First(4.0%)",
            "의류보건: Mediclinic(44.6%)",
            "소비재: RCL Foods(77.1%), Distell(31.8%), Siqalo Foods(100%)",
            "산업/공업: Air Products(50%), Total(24.9%), KTH(36.3%), Wispeco(100%), PGSI(37.6%)",
            "인프라: CINH(54.7%), Grindrod(23.3%), Grindrod Shipping(22.8%), SEACOM(30.0%)",
            "미디어: eMedia Investtents(32.3%)"
          ]
        },
        {
          "nameKo": "로열 바포켕 플래티넘",
          "nameEn": "Royal Bafokeng Platinum",
          "foundedYear": "2008",
          "parentCompany": null,
          "hq": "남아프리카공화국 샌튼(Sandton)",
          "industry": "광업",
          "subIndustry": "백금, 팔라듐, 니켈, 금 생산 등",
          "corpType": "사기업(유한회사)",
          "employees": "13000",
          "marketCap": {
            "usd": "456,000,000 USD",
            "krw": "약 6,840억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "40,000,000 USD",
            "krw": "약 600억 원",
            "year": "2020"
          },
          "website": "www.bafokengplatinum.co.za",
          "highlights": [
            "Royal Bafokeng Holdings와 American Platinum의 합자회사로 백금, 팔라듐, 등의 광물, 탐사, 생산, 판매 사업을 운영",
            "2010년 요하네스버그 증권거래소에 상장되었으며 2019년 광물자원으로부터 채굴권을 승인받음",
            "Bafokeng Rasimone Platnum 광산, Styldrift, Royal Bafokeng Platiunm Concentrator Complex, Maseve Concentrator Plant 등에서 사업을 전개",
            "Styldrift 동쪽에 위치한 Styldrift ll 채굴 프로젝트를 위한 사전 타당성조사를 완료함"
          ]
        },
        {
          "nameKo": "로즈 푸드 그룹",
          "nameEn": "Rhodes Food Group",
          "foundedYear": "1896",
          "parentCompany": null,
          "hq": "남아프리카공화국 웨스턴케이프(Western Cape)",
          "industry": "제조업",
          "subIndustry": "과일 통조림, 잼 등",
          "corpType": "사기업",
          "employees": "10087",
          "marketCap": {
            "usd": "208,000,000 USD",
            "krw": "약 3,120억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "12,000,000 USD",
            "krw": "약 180억 원",
            "year": "2020"
          },
          "website": "www.rfg.com",
          "highlights": [
            "Rhodes Fruit Farms으로 1896년 설립되어 1905년 과일통조림과 잼공장으로 사업을 시작",
            "남부 아프리카 전역 15개의 제조시설을 보유하고 있으며 사하라이남 아프리카 및 글로벌시장에 식품사업 전재",
            "Bull Brand Foods, Pacmar, Magpie, South Coating 등 다양한 식품브랜드 보유",
            "2014년 요하네스버그 증권거래소 상장"
          ]
        },
        {
          "nameKo": "루너트",
          "nameEn": "Reunet",
          "foundedYear": "1888",
          "parentCompany": null,
          "hq": "남아프리카공화국 샌튼(Sandton)",
          "industry": "복합산업",
          "subIndustry": "전기공학, ICT, 응용전기 등",
          "corpType": "사기업(유한회사)",
          "employees": "3490",
          "marketCap": {
            "usd": "469,000,000 USD",
            "krw": "약 7,035억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "44,000,000 USD",
            "krw": "약 660억 원",
            "year": "2020"
          },
          "website": "www.reunert.co.za",
          "highlights": [
            "사무실 자동화 장비 및 시스템, 보안설비 및 자산 추적 시스템을 제공하며 통신 케이블과 전력 케이블을 생산함. 금융서비스도 제공",
            "1948년 효하네스버그 증권거래소에 상장되었음",
            "남아공 외 미국, 호주, 레소토, 잠비아, 짐바브웨 등에서 사업 진행"
          ]
        },
        {
          "nameKo": "리버티 홀딩스",
          "nameEn": "Liberty Holdings",
          "foundedYear": "1957",
          "parentCompany": null,
          "hq": "남아프리카공화국 하우텡(Gauteng)",
          "industry": "금융 및 보험업",
          "subIndustry": "보험, 자산관리 등",
          "corpType": "사기업(유한회사)",
          "employees": "6220",
          "marketCap": {
            "usd": "1,106,000,000 USD",
            "krw": "약 1조 6,590억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "170,000,000 USD",
            "krw": "약 2,550억 원",
            "year": "2020"
          },
          "website": "www.libertyholdings.co.za",
          "highlights": [
            "1957년 Liberty Life Association of Africa로 설립되었음",
            "남아공 뿐 아니라 케냐, 나미비아 등 16개 아프리카 국가에서 사업을 전개",
            "남아공 스탠다드은행이 Liberty Holdings 지분의 55%를 소유",
            "주 수입원은 개인보험으로 총 매출의 72%를 차지"
          ]
        },
        {
          "nameKo": "립스타 홀딩스",
          "nameEn": "Libstar Holdings",
          "foundedYear": "2005",
          "parentCompany": null,
          "hq": "남아프리카공화국 요하네스버그(Johannesburg)",
          "industry": "금융 및 보험업",
          "subIndustry": "식품소비재 자회사 소유",
          "corpType": "사기업",
          "employees": "9184",
          "marketCap": {
            "usd": "206,000,000 USD",
            "krw": "약 3,090억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "11,000,000 USD",
            "krw": "약 165억 원",
            "year": "2020"
          },
          "website": "www.libstar.co.za",
          "highlights": [
            "투자지주회사로 운영되며, 자회사를 통해 식품, 음료, 가정 및 개인자산관리서비스를 제공",
            "북미, 아프리카, 유럽, 아시아, 중동, 오세아니아, 대륙 50여 국에서 사업을 전개",
            "전체 매출의 88%는 남아공 내수시장에서 발생하며 12%는 수출로 발생, 2019년 기준 수출기여도가 가장 큰 대륙은 북미"
          ]
        },
        {
          "nameKo": "매그마트 홀딩스",
          "nameEn": "Massmart Holdings",
          "foundedYear": "1990",
          "parentCompany": "Walmart\r-창립자: sam Walton \r-창립연도: 1962년",
          "hq": "남아프리카공화국 샌튼(Sandton)",
          "industry": "도매 및 소매업",
          "subIndustry": "슈퍼마켓",
          "corpType": "사기업",
          "employees": "7592",
          "marketCap": {
            "usd": "362,000,000 USD",
            "krw": "약 5,430억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "-48,000,000 USD",
            "krw": "약 -720억 원",
            "year": "2020"
          },
          "website": "www.massmart.co.za",
          "highlights": [
            "Game, Marko 등 대형 슈퍼마켓 체인을 보유한 남아공 기업으로 아프리카에서 두 번째로 큰 소비재 유통업체임. 2020년 7월 기준 남아공에 421개의 매장을, 사하라이남 아프리카국가에 12개의 매장을 운영하고 있음. 특히 Game은 남아공, 보츠나와, 가나, 모잠비크, 나미비아, 나이지리아, 케냐 등에서 운영되는 대표적인 유통업체임",
            "2010년 미국의 대형 체인기업 Walmart가 51%의 지분을 매입함"
          ]
        },
        {
          "nameKo": "멀티초이스",
          "nameEn": "Multichoice",
          "foundedYear": "1994",
          "parentCompany": "Naspers",
          "hq": "남아프리카공화국 랜드버그(Randburg)",
          "industry": "정보통신업",
          "subIndustry": "방송 제작 등",
          "corpType": "사기업",
          "employees": "51000",
          "marketCap": {
            "usd": "2,088,000,000 USD",
            "krw": "약 3조 1,320억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "127,000,000 USD",
            "krw": "약 1,905억 원",
            "year": "2020"
          },
          "website": "www.multichoice.com",
          "highlights": [
            "Dstv, Gotv, Showmax, Supersport, M-net 등의 브랜드를 통해 위성방송 사업을 전개하고 있으며 엔터테이먼트, 영화, 라이프스타일, 문화, 스포츠, 다큐멘터리, 뉴스, 음악, 종교, 등 다양한 채널을 제공함",
            "대표 서비스인 DStv (Digital Satellite Television)는 남아공 대부분 지역에 송출되고 있음. 남아공괴 나이지리아가 가장 중요한 시장임"
          ]
        },
        {
          "nameKo": "메디클리닉 인터내셔널",
          "nameEn": "Mediclinic International",
          "foundedYear": "1983",
          "parentCompany": null,
          "hq": "남아프리카공화국 스텔렌보스(Stellenbosch)",
          "industry": "보건 및 사회복지서비스업",
          "subIndustry": "병원 운영",
          "corpType": "사기업",
          "employees": "6894",
          "marketCap": {
            "usd": "2,565,000,000 USD",
            "krw": "약 3조 8,475억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "97,000,000 USD",
            "krw": "약 1,455억 원",
            "year": "2020"
          },
          "website": "www.mediclinic.com",
          "highlights": [
            "남아공 , 나미비아, 스위스, 아랍에미리트에서 병원을 운영하고 있음",
            "2020년 3월 기준 76개 병원, 11,612개 병상을 보유하고 있으며, 이 중 남아공과 나미비아에서 52개 병원과 8,792개 병상이 있음",
            "1986년 요하네스버그 증권거래소 상장, 런던 증권거래소 상장"
          ]
        },
        {
          "nameKo": "모투스 홀딩스",
          "nameEn": "Motus Holdings",
          "foundedYear": "2017",
          "parentCompany": "Imperial Holdings\r-창립자: Osman Arbee\r-창립연도: 1948년",
          "hq": "남아프리카공화국 하우텡(Gauteng)",
          "industry": "도매 및 소매업",
          "subIndustry": "자동차 수입, 판매 등",
          "corpType": "사기업",
          "employees": "15958",
          "marketCap": {
            "usd": "338,000,000 USD",
            "krw": "약 5,070억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "104,000,000 USD",
            "krw": "약 1,560억 원",
            "year": "2020"
          },
          "website": "www.motus.co.za",
          "highlights": [
            "현대, 기아, 르노, 미쓰비시 등의 자동차, 패널, 부품 등에 대한 수입권한을 가진 남아공 기업으로 남아공 및 주변 국가에서 렌터카 서비스 사업도 운영함",
            "2018년 요하네스버그 증권거래소에 상장"
          ]
        },
        {
          "nameKo": "몬디",
          "nameEn": "Mondi",
          "foundedYear": "1967",
          "parentCompany": null,
          "hq": "남아프리카공화국 하우텡(Gauteng)",
          "industry": "제조업",
          "subIndustry": "펄프, 재지, 용기용 골판지, 포장업 등",
          "corpType": "사기업",
          "employees": "18600",
          "marketCap": {
            "usd": "7,679,000,000 USD",
            "krw": "약 11조 5,185억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "880,000,000 USD",
            "krw": "약 1조 3,200억 원",
            "year": "2020"
          },
          "website": "www.mondigroup.com",
          "highlights": [
            "숲 관리, 펄프/종이/플라스틱 필름 포장업을 하고 있으며 농업, 자동차, 화학, 건설분야의 다양한 고객사 보유",
            "Anglo American 소유 회사였으나 2007년 분리되며 이중상장회사(Duallisted Company)로 런던 증권거래소, 요하네스버그 증권거래소에 각각 상장됨"
          ]
        },
        {
          "nameKo": "몬타우크 에너지 홀딩스",
          "nameEn": "Montauk Energy Holdings",
          "foundedYear": "2010",
          "parentCompany": null,
          "hq": "남아프리카공화국 케이프타운(Cape Town)",
          "industry": "전기, 가스, 증기 및 공기조절 공급업",
          "subIndustry": "재생에너지, 발전",
          "corpType": "사기업",
          "employees": "26000",
          "marketCap": {
            "usd": "304,000,000 USD",
            "krw": "약 4,560억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "1,000,000 USD",
            "krw": "약 15억 원",
            "year": "2020"
          },
          "website": "www.montauk.co.za",
          "highlights": [
            "남아공 기반의 투자지주회사로, 미국 내 매립가스를 활용한 재생에너지 관련 설계, 승인, 건설, 운영 등을 주로 함",
            "매립가스 채집시스템(landfill gas colletion system)을 최적화하여 지표면의 오염과 냄새의 원천을 제거하기 위한 노력을 지속",
            "친환경적 운영을 통해 매립 메탄가스를 30년 이상 생산가능한 재생에너지로 활용하고자 하는 목표를 갖고 있음"
          ]
        },
        {
          "nameKo": "미스터 프라이스 그룹",
          "nameEn": "Mr Price Group",
          "foundedYear": "1985",
          "parentCompany": null,
          "hq": "남아프리카공화국 더반(Duban)",
          "industry": "도매 및 소매업",
          "subIndustry": "의류",
          "corpType": "사기업",
          "employees": "68",
          "marketCap": {
            "usd": "2,036,000,000 USD",
            "krw": "약 3조 540억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "164,000,000 USD",
            "krw": "약 2,460억 원",
            "year": "2020"
          },
          "website": "www.mrpricegroup.com",
          "highlights": [
            "1985년 Laurie Chiappini, Stewart Cohen의 Mr Price Factory로 시작하여 현재 1,378개의 매장과 19,000명 이상의 직원 보유",
            "Mr Price Home, Mr Price Miladys, Sheet Street 등 다양한 브랜드를 통해 남아공 뿐 아니라 보츠나와, 가나, 케냐, 나미비아, 나이지리아, 에스와티니 등에도 진출",
            "2020년 7월 기준, 인스타그램 팔로워 100만 명 이상, 페이스북 구독자 220만 명 이상을 보유하고 있는 등 SNS 기반의 마케팅을 통해 지속적 성정"
          ]
        },
        {
          "nameKo": "믹스 텔레마틱스",
          "nameEn": "Mix Telematics",
          "foundedYear": "1996",
          "parentCompany": null,
          "hq": "남아프리카공화국 미드란드(Midrand)",
          "industry": "정보통신업",
          "subIndustry": "차량추적, 차량관리 솔루션 등",
          "corpType": "사기업(유한회사)",
          "employees": "19707",
          "marketCap": {
            "usd": "230,000,000 USD",
            "krw": "약 3,450억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "11,000,000 USD",
            "krw": "약 165억 원",
            "year": "2020"
          },
          "website": "www.mixtelematics.co.za",
          "highlights": [
            "남아공 기반의 기업차량 관리, 운전자 안전, 차량추적 솔루션 등을 제공",
            "남아공, 영국, 미국, 우간다, 브라질, 멕시코, 호주, 아랍에미리트에서 사무소 운영",
            "120개국 약 766,000명의 가입자 보유"
          ]
        },
        {
          "nameKo": "바를로월드",
          "nameEn": "Barloworld",
          "foundedYear": "1902",
          "parentCompany": null,
          "hq": "남아프리카공화국 샌튼(Sandton)",
          "industry": "도매 및 소매업",
          "subIndustry": "건축자재, 오토바이, 광업, IT 등",
          "corpType": "사기업",
          "employees": "1000",
          "marketCap": {
            "usd": "765,000,000 USD",
            "krw": "약 1조 1,475억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "134,000,000 USD",
            "krw": "약 2,010억 원",
            "year": "2020"
          },
          "website": "www.barloworld.com",
          "highlights": [
            "1902년 양모제품 판매업체로 시작하여 모터, 건축자재(시멘트, 페인트, 스테인리스) 생산기업으로 확장",
            "2016년 독일 기업 베이바(BayWa)와 합작회사를 설립하여 남부 아프리카에서 농업, 자재처리 사업까지 확대",
            "자회사로는 Barloworld Automotive, Barloworld Handling, Barloworld Logistics and Barloworld Equipment 등이 있음"
          ]
        },
        {
          "nameKo": "보다콤 그룹",
          "nameEn": "Vodacom Group",
          "foundedYear": "1994",
          "parentCompany": "보다폰",
          "hq": "남아프리카공화국 미드란드(Midrand)",
          "industry": "정보통신업",
          "subIndustry": "통신, 휴대폰산업",
          "corpType": "사기업(주식회사)",
          "employees": "110",
          "marketCap": {
            "usd": "12,483,000,000 USD",
            "krw": "약 18조 7,245억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "817,000,000 USD",
            "krw": "약 1조 2,255억 원",
            "year": "2020"
          },
          "website": "www.vodacom.com",
          "highlights": [
            "남아공, 탄자니아, 콩고민주공화국, 모잠비크, 레소토, 케냐에 통신망을 구축하고 아프리카대륙에서만 1억 1,600만 명 이상의 고객에게 통신서비스를 제공",
            "남부 아프리카 통신대기업 Telkom과 영국의 Vodafone이 50:50 비율의 파트너십으로 시작했으나 2008년 Vodafone이 지분을 늘리기 시작하면서 현재 Vodafone이 보다콤 지분의 60% 이상을 보유",
            "남아공 무선통신망 시장의 58% 이상을 점유"
          ]
        },
        {
          "nameKo": "브레이트",
          "nameEn": "Brait",
          "foundedYear": "1960",
          "parentCompany": "Brait",
          "hq": "몰타 신주안(San Gwann)",
          "industry": "금융 및 보험업",
          "subIndustry": "투자, 자산관리 등",
          "corpType": "사기업(유한회사)",
          "employees": "19745",
          "marketCap": {
            "usd": "267,000,000 USD",
            "krw": "약 4,005억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "-34,000,000 USD",
            "krw": "약 -510억 원",
            "year": "2020"
          },
          "website": "brait.investoreports.com",
          "highlights": [
            "투자지주회사로 소비재 및 의류 소매, 식품, 가구 등의 분야에 투자",
            "9개의 자회사 소유",
            "Premier FMCG, Brait South Africa Proprietary Limited, New look, Top Gun Midco Limited, Virgin Active International Limited, Virgin Active Health Clud Holdings Limited, Brait Mauritius Limited, Brait Malta Limited, Brait Malta Limited, Barit S.A Share Incentive Trust"
          ]
        },
        {
          "nameKo": "비드 코퍼레이션",
          "nameEn": "Bid Corp",
          "foundedYear": "1988",
          "parentCompany": null,
          "hq": "남아프리카공화국 요하네스버그(Johannesburg)",
          "industry": "도매 및 소매업",
          "subIndustry": "식품, 물류 등",
          "corpType": "사기업(유한회사)",
          "employees": "5197",
          "marketCap": {
            "usd": "4,586,000,000 USD",
            "krw": "약 6조 8,790억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "226,000,000 USD",
            "krw": "약 3,390억 원",
            "year": "2020"
          },
          "website": "www.bidcorpgroup.com",
          "highlights": [
            "Bidcorp는 기업가정신을 장려하는 동시에 지역확장형 비즈니스모델을 지향하고 있으며 오세아니아, 유럽, 중동, 남아메리카, 아시아대륙에서 활동하고 있음",
            "2017년 Guzman Gastronomia. Cuttings 인수 후 스페인 진출, Pire7인수 후 독일과 오스트리아 진출"
          ]
        },
        {
          "nameKo": "비드베스트 그룹",
          "nameEn": "Bidvest Group",
          "foundedYear": "1988",
          "parentCompany": null,
          "hq": "남아프리카공화국 요하네스버그(Johannesburg)",
          "industry": "복합산업",
          "subIndustry": "투자, 무역, 유통, 전자제품, 관광, 금융서비스 등",
          "corpType": "사기업(유한회사)",
          "employees": "31",
          "marketCap": {
            "usd": "2,906,000,000 USD",
            "krw": "약 4조 3,590억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "208,000,000 USD",
            "krw": "약 3,120억 원",
            "year": "2020"
          },
          "website": "www.bidvest.co.za",
          "highlights": [
            "남아공의 대형 제약회사인 Adcock Ingram의 지분 52%를 보유하고 있으며 국내노선 항공사인 Comair의 지분 27.2%를 보유하고 있음. 지속적으로 비상장 주식투자를 진행",
            "Bidvest는 경영에 직접적으로 참여하지 않고 투자수익만을 목적으로 하는 포트폴리오 투자를 통해 112개 부동산 점유",
            "약 175,000명의 고객에게 서비스를 제공 중이며, 서비스분야에서 65%거래이익, 무역과 유통분야에서 35% 이익을 창출",
            "2012년, 칠레의 Deli Meals를 인수하며 남미 시장에 진출"
          ]
        },
        {
          "nameKo": "비보 에너지",
          "nameEn": "Vivo Enenrgy",
          "foundedYear": "2011",
          "parentCompany": null,
          "hq": "영국 런던(London)",
          "industry": "광업",
          "subIndustry": "석유, 윤활유",
          "corpType": "사기업(주식회사)",
          "employees": "6014",
          "marketCap": {
            "usd": "1,115,000,000 USD",
            "krw": "약 1조 6,725억 원",
            "year": "2020"
          },
          "netProfit": null,
          "website": "www.vivoenergy.com",
          "highlights": [
            "Vitol Group과 스위스 기반의 다국적 에너지/생필품 무역회사인 Helios Investment Partners, 영국 기반의 사모펀드기업 등의 협력으로 설립",
            "아프리카 시장에서의 Shell 판매권을 가지고 있으며 아프리카 23개국에서 2천여 개의 서비스 지점을 운영하고 있음. 기업 및 소매고객을 대상으로 연료와 윤활유를 유통, 판매함",
            "런던 증권거래소에 상장되어 있으며, 2019년 12월 기준 지분보유율을 Vitol Group(36.1%), Helios Investment Partners(29.06%), Capital Group Companies Inc(5.25%), Engen Holdings (Pty) Ltd(5%)등임"
          ]
        },
        {
          "nameKo": "사솔",
          "nameEn": "Sasol",
          "foundedYear": "1950",
          "parentCompany": null,
          "hq": "남아프리카공화국 요하네스버그(Johannesburg)",
          "industry": "제조업",
          "subIndustry": "화학제품, 연료 생산",
          "corpType": "사기업(유한회사)",
          "employees": "132870",
          "marketCap": {
            "usd": "2,570,000,000 USD",
            "krw": "약 3조 8,550억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "237,000,000 USD",
            "krw": "약 3,555억 원",
            "year": "2020"
          },
          "website": "www.sasol.com",
          "highlights": [
            "요하네스버그 증권거래소, 뉴욕 증권거래소에 상장되어 있으며 아메리카, 유럽, 아프리카, 중동, 아시아대륙 30개국 시장에 진출해있음",
            "아메리카: 버뮤다(영국령), 브라질, 미국, 캐나다",
            "유럽: 네델란드, 독일, 벨기에, 스페인, 슬로바키아, 아일랜드, 영국, 오스트리아, 이탈리아, 폴란드, 프랑스",
            "아프리카: 가봉, 나미비아, 나이지리아, 남아공, 레소토, 모잠비크, 잠비아",
            "중동: 아랍에미리트, 카타르",
            "아시아: 대만, 러시아, 싱가포르, 우즈베키스탄, 인도, 일본, 중국",
            "2020년 6월, 남아공 세쿤다(Secunda)에 기반을 둔 스타트업 및 중소기업을 지원하기 위한 중소기업센터 개설",
            "인터넷 고속서비스, 회의실, 전문 소프트웨어 등 지원"
          ]
        },
        {
          "nameKo": "사우스32",
          "nameEn": "South32",
          "foundedYear": "2015",
          "parentCompany": null,
          "hq": "호주 퍼스(Perth)",
          "industry": "광업",
          "subIndustry": "알루미늄, 석탄, 은, 니켈 등 생산",
          "corpType": "사기업(공개유한회사)",
          "employees": "2300",
          "marketCap": {
            "usd": "8,355,000,000 USD",
            "krw": "약 12조 5,325억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "389,000,000 USD",
            "krw": "약 5,835억 원",
            "year": "2020"
          },
          "website": "www.south32.net",
          "highlights": [
            "알루미늄, 석탄, 니켈, 은, 납 등 다양한 광물을 채굴 및 생산하는 기업으로 아프리카, 북미, 남미, 호주에서 사업 전개",
            "Samancor AG, lllawarra Coal Holdings Pyt Ltd 등 다수의 자회사를 소유하고 있음"
          ]
        },
        {
          "nameKo": "사피",
          "nameEn": "SAPPI",
          "foundedYear": "1936",
          "parentCompany": null,
          "hq": "남아프리카공화국 요하네스버그(Johannesburg)",
          "industry": "금융 및 보험업",
          "subIndustry": "재지, 펄프 등",
          "corpType": "사기업(유한회사)",
          "employees": "30100",
          "marketCap": {
            "usd": "689,000,000 USD",
            "krw": "약 1조 335억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "12,000,000 USD",
            "krw": "약 180억 원",
            "year": "2020"
          },
          "website": "www.sappi.com",
          "highlights": [
            "South Africa Pulp and Paper Industries Limited의 약자로, 재지, 펄프, 임산물을 취급하며 2013년 용해펄프(dissolving pulp) 최대 생산기업으로 기록됨",
            "1993년 영국 Dickinson Robinson Group의 재지공장들(Nash Mills, Keynsham Paper Mlii and Fife Mllis)을 사들였고 2008년에는 M-real company의 핀란드와 스위스, 독일에 있는 재지공장을 매입하며 남부아프리카, 서유럽, 북미 등으로 사업을 확장함"
          ]
        },
        {
          "nameKo": "산람",
          "nameEn": "Sanlam",
          "foundedYear": "1918",
          "parentCompany": null,
          "hq": "남아프리카공화국 웨스턴케이프(Western Cape)",
          "industry": "금융 및 보험업",
          "subIndustry": "보험, 자산관리, 투자",
          "corpType": "사기업(주식회사)",
          "employees": "25784",
          "marketCap": {
            "usd": "7,110,000,000 USD",
            "krw": "약 10조 6,650억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "394,000,000 USD",
            "krw": "약 5,910억 원",
            "year": "2020"
          },
          "website": "www.sanlam.com",
          "highlights": [
            "1918년 보험회사로 시작, 현재 아프리카 최대의 보험회사이며 보험 외에도 다양한 금융서비스를 제공하고 있음",
            "남아공 뿐 아니라 가나, 나미비아, 나이지리아, 르완다, 보츠나와, 말라위, 모리셔스, 에스와티니, 우간다, 잠비아, 짐바브웨, 탄자니아, 케냐, 인도, 러시아, 영국에서 사업 전재",
            "요하네스버그 증권거래소, 나미비아 증권거래소, A2X 상장"
          ]
        },
        {
          "nameKo": "산탐",
          "nameEn": "santam",
          "foundedYear": "1918",
          "parentCompany": null,
          "hq": "남아프리카공화국 밸빌(Bellville)",
          "industry": "금융 및 보험업",
          "subIndustry": "단기 보험",
          "corpType": "사기업",
          "employees": "12800",
          "marketCap": {
            "usd": "1,755,000,000 USD",
            "krw": "약 2조 6,325억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "121,000,000 USD",
            "krw": "약 1,815억 원",
            "year": "2020"
          },
          "website": "www.santam.co.za",
          "highlights": [
            "산탐은 남아공 최대 규모의 단기보험 회사이며, 최대주주는 남아공의 최대 금융기업  Sanlam으로 기준 약 58.77%를 보유",
            "탄자니아, 잠비아, 짐바브웨 등에서도 사업 운영"
          ]
        },
        {
          "nameKo": "소호 썬",
          "nameEn": "Tsogo Sun",
          "foundedYear": "1969",
          "parentCompany": null,
          "hq": "남아프리카공화국 요하네스버그(Johannesburg)",
          "industry": "숙박 및 음식점업",
          "subIndustry": "호텔, 엔터테이먼트",
          "corpType": "공기업(공공지분 51%)",
          "employees": "4681",
          "marketCap": {
            "usd": "217,000,000 USD",
            "krw": "약 3,255억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "86,000,000 USD",
            "krw": "약 1,290억 원",
            "year": "2020"
          },
          "website": "www.tsogosun.com",
          "highlights": [
            "남아공 거대 호텔-카지노 체인으로 남아공, 세이셸, 중동지역 등에 걸쳐 100여개의 호텔을 소유",
            "요하네스버그 증권거래소 상장"
          ]
        },
        {
          "nameKo": "숍라이트 홀딩스",
          "nameEn": "Shoprite Holdings",
          "foundedYear": "1979",
          "parentCompany": null,
          "hq": "남아프리카공화국 케이프타운(Cape Town)",
          "industry": "도매 및 소매업",
          "subIndustry": "식품, 유통 등",
          "corpType": "사기업(유한회사)",
          "employees": "17000",
          "marketCap": {
            "usd": "4,054,000,000 USD",
            "krw": "약 6조 810억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "191,000,000 USD",
            "krw": "약 2,865억 원",
            "year": "2020"
          },
          "website": "www.shopriteholdings.co.za",
          "highlights": [
            "아프리카 최대 식품소매업체로, 27년에 걸친 지속적인 확장으로 아프리카15개국(가나, 나미비아, 나이지리아, 남아공, 레소토, 마다가스카르, 말라위, 모잠비크, 보츠나와, 앙골라, 에스와티니, 우간다, 잠비아, 케냐, 콩고민주공화국)에서 2,829개의 매장을 운영",
            "가구, 제약, 유통, 금융, 주류 등 9개 분야 15개 브랜드로 분류되며 매장 전체를 통틀어 매일 2,400만 명이상의 고객이 방문하는 것으로 측정됨",
            "Deloitte는 Shoprite를 2019년 Global Powers of Retalilng부문에서 세계86위 소매업체로 선정",
            "남아공 미디어그룹 Tiso Blackster와 영국 Sunday Times가 진행한 Top Brand Survey에서 최우수 식료품점으로 선정"
          ]
        },
        {
          "nameKo": "슈타인호프 인터내셔널",
          "nameEn": "Steinhoff International",
          "foundedYear": "1964",
          "parentCompany": null,
          "hq": "남아프리카공화국 스텔렌보스(Stellenbosch)",
          "industry": "도매 및 소매업",
          "subIndustry": "가구, 가정용품 등",
          "corpType": "사기업(유한회사)",
          "employees": "141000",
          "marketCap": {
            "usd": "291,000,000 USD",
            "krw": "약 4,365억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "-64,000,000 USD",
            "krw": "약 -960억 원",
            "year": "2020"
          },
          "website": "www.steinhoffinternational.com",
          "highlights": [
            "1964년 독일에서 창립하여 1998년 저렴한 생산비용의 이점을 가진 남아공으로 본사를 이전함. 유럽, 아프리카, 아시아와 미국 등에서 사업진행",
            "2011년에는 유럽의 대표적인 가구유통업체인 Conforama를 매입함. 현재 Conforma, Mattress Firm, Poundland, Pep&co 등의 자회사를 소유"
          ]
        },
        {
          "nameKo": "슈퍼 그룹",
          "nameEn": "Super Group",
          "foundedYear": "1986",
          "parentCompany": null,
          "hq": "남아프리카공화국 샌튼(Sandton)",
          "industry": "도매 및 소매업",
          "subIndustry": "운송, 창고업, 유통 등",
          "corpType": "사기업(유한회사)",
          "employees": "5749",
          "marketCap": {
            "usd": "322,000,000 USD",
            "krw": "약 4,830억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "72,000,000 USD",
            "krw": "약 1,080억 원",
            "year": "2020"
          },
          "website": "www.supergroup.co.za",
          "highlights": [
            "공급망, 유통, 물류보관, 차량 임대 및 기업 차량 관리 등을 주요 서비스로 하며 남부아프리카와 유럽 등지에서 사업 운영",
            "1996년 요하네스버그 증권거래소 상장됨"
          ]
        },
        {
          "nameKo": "스탠다드 은행 그룹",
          "nameEn": "Standard Bank Group",
          "foundedYear": "1862",
          "parentCompany": null,
          "hq": "남아프리카공화국 요하네스버그(Johannesburg)",
          "industry": "금융 및 보험업",
          "subIndustry": "은행업, 보험, 자산관리 등",
          "corpType": "사기업(유한회사)",
          "employees": "9540",
          "marketCap": {
            "usd": "10,122,000,000 USD",
            "krw": "약 15조 1,830억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "1,450,000,000 USD",
            "krw": "약 2조 1,750억 원",
            "year": "2020"
          },
          "website": "www.standardbank.co.za",
          "highlights": [
            "남아공 자산 1위 은행으로 아프리카 20개국에 네트워크 보유",
            "대한민국 우리은행이 2015년 스탠다드은행, 중국공산은행(Industrial and  Commercial Bank od China Ltd)과 3자간 업무제휴약정을 체결"
          ]
        },
        {
          "nameKo": "스파 그룹",
          "nameEn": "SPAR Group",
          "foundedYear": "1963",
          "parentCompany": "SPAR Group \r- 창립자: Adriaan van well\r- 창립연도: 1932년",
          "hq": "남아프리카공화국 콰줄루나탈(KawZulu-Natal)",
          "industry": "도매 및 소매업",
          "subIndustry": "식품 유통",
          "corpType": "사기업",
          "employees": "130000",
          "marketCap": {
            "usd": "1,919,000,000 USD",
            "krw": "약 2조 8,785억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "119,000,000 USD",
            "krw": "약 1,785억 원",
            "year": "2020"
          },
          "website": "www.spar.co.za",
          "highlights": [
            "SPAR Group은 1931년 설립된 네델란드 기반의 다국적 식품유통기업으로 유럽뿐만 아니라 아시아, 아프리카, 오세아니아의 48개국에 13,000여 개이상의 매장을 운영하고 있음",
            "네델란드어로 '공동협동으로 얻은 모든 이익'이라는 슬로건에서 착안하여 초기 이름은 DESPAR (Door Eendraching Samenwerken Profiteren Allen Regelmating)였으며 'De Spar'가 전나무를 로고로 사용함",
            "2017년 기준 남아공에 약 840개의 매장을 운영"
          ]
        },
        {
          "nameKo": "시바네-스틸워터스",
          "nameEn": "Sibanye-Stillwaters",
          "foundedYear": "2013",
          "parentCompany": null,
          "hq": "남아프리카공화국 요하네스버그(Johannesburg)",
          "industry": "광업",
          "subIndustry": "금, 우라늄, 플루토늄 등 생산",
          "corpType": "사기업(유한회사)",
          "employees": "8206",
          "marketCap": {
            "usd": "4,895,000,000 USD",
            "krw": "약 7조 3,425억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "-244,000,000 USD",
            "krw": "약 -3,660억 원",
            "year": "2020"
          },
          "website": "www.sibanyestillwater.com",
          "highlights": [
            "미국, 남아공에서 광산 및 관련시설 운영",
            "Stillwater&East Boulder, Columbus Metallurgical Complex, Rustenbug Mine, Marikana Mine, Kroondal Mine, Platinum Mine, Mimosa Mine",
            "비영리기관이자 남아공 내 주요 상장기업들의 기후변화대응 전략과 온실가스 배출량 정보, 감축노력 등을 공개하는 탄소공개프로젝트(Carbon Disclosure Project)로부터 기후변화 대응 및 공개에 대한 A등급 획득",
            "A등급을 받은 기업은 세계적으로 179개 기업이며 남아공에서는 유일하게 Sibanya-Stillwater사가 A등급으로 인정됨",
            "Bloomburg가 선정한 '2020 양성평등 지수( Gender-Equality Index)'에서 선정된 325개 글로벌 회사에 포함됨"
          ]
        },
        {
          "nameKo": "씨 하버스트 그룹",
          "nameEn": "Sea Harvest Group",
          "foundedYear": "1964",
          "parentCompany": null,
          "hq": "남아프리카공화국 케이프타운(Cape Town)",
          "industry": "제조업",
          "subIndustry": "수산 및 농산품",
          "corpType": "사기업",
          "employees": "30102",
          "marketCap": {
            "usd": "197,000,000 USD",
            "krw": "약 2,955억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "23,000,000 USD",
            "krw": "약 345억 원",
            "year": "2020"
          },
          "website": "www.seaharvestgroup.co.za",
          "highlights": [
            "FMCG(Fast-moving consumer goods)업계의 글로벌 기업으로 Sea Harvest, Viking Aquaculture, Landismith Cheese, Sea Harvest Australia를 자회사로 두고 있음",
            "남아공, 모잠비크, 호주 해안에서 자연산 해산물을 수확 후 냉장 및 냉동제춤으로 가공하여 판매하는 사업을 핵심사업으로 전개",
            "요하네스버그 증권거래소에 상장된 회사 중 수산분야에서 2018년 Most Empowered Company로 선정됨"
          ]
        },
        {
          "nameKo": "아비",
          "nameEn": "AVI",
          "foundedYear": "1933",
          "parentCompany": null,
          "hq": "남아프리카공화국 요하네스버그(Johannesburg)",
          "industry": "제조업",
          "subIndustry": "식품 생산",
          "corpType": "사기업(유한회사)",
          "employees": "4350",
          "marketCap": {
            "usd": "1,425,000,000 USD",
            "krw": "약 2조 1,375억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "88,000,000 USD",
            "krw": "약 1,320억 원",
            "year": "2020"
          },
          "website": "www.avi.co.za",
          "highlights": [
            "음료, 식품, 패션 등의 분야에 50여개가 넘는 브랜드를 보유하고 있으며, 대표적인 식품브랜드로 Five Roses(차), Freshpak(루이보스 차), House of Coffees(커피), Bakers(비스킷)가 있으며, 패션 브랜드로 Spitz(의류), Kurt Geiger(신발 및 의류), Gant(스포츠웨어), Green cross(신발)등이 있음",
            "요하네스버그 증권거래소에 식품 생산업으로 상장되어 있음"
          ]
        },
        {
          "nameKo": "아스트랄 식품",
          "nameEn": "Astral Foods",
          "foundedYear": "2001",
          "parentCompany": null,
          "hq": "남아프리카공화국 센추리언(Centurion)",
          "industry": "제조업",
          "subIndustry": "양계, 동물 사료 생산",
          "corpType": "사기업(유한회사)",
          "employees": "10000",
          "marketCap": {
            "usd": "471,000,000 USD",
            "krw": "약 7,065억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "35,000,000 USD",
            "krw": "약 525억 원",
            "year": "2020"
          },
          "website": "www.astralfoods.com",
          "highlights": [
            "남아공의 대표적인 달고기 생산기업 중 한 곳으로 사료제조 냉장/냉동 식육제품 생산과 유통을 주로하며 남아공을 비롯한 아프리카 4개국에 12개의 브랜드를 운영",
            "남아공 진츨 브랜드: Festive Golgi, Mountain Valley, County Fair, National Chicks, ROSS, MeadowFeeds.",
            "잠비아 진출 브랜드: Tiger Chicks, Tiger Animal Feeds",
            "모잠비크 진출 브랜드: Mozpintos, Meadow Mozambique",
            "에스와티니 진출 브랜드: National Chicks Swaziland",
            "Astral Foods는 약 2,100만 평(여의도의 약 24배) 토지를 관리하고 있음",
            "연간 2억 마리 이상의 식육용 닭을 처리",
            "동물사료 제조를 담당하는 Mesdow Feeds사는 연간 130만 톤 이상의 사료를 생산"
          ]
        },
        {
          "nameKo": "아스펜 파르마케어 홀딩스",
          "nameEn": "Aspen Pharmacare Holdings",
          "foundedYear": "1850",
          "parentCompany": null,
          "hq": "남아프리카공화국 더반(Duban)",
          "industry": "제조업",
          "subIndustry": "마취제, 혈전증 치료물질, 상업의약품 생산",
          "corpType": "사기업(유한회사)",
          "employees": "9824",
          "marketCap": {
            "usd": "2,744,000,000 USD",
            "krw": "약 4조 1,160억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "356,000,000 USD",
            "krw": "약 5,340억 원",
            "year": "2020"
          },
          "website": "www.aspenpharma.com",
          "highlights": [
            "Aspen은 미국 식품의약국(FDA), 호주 식품의약청(TGA), 유럽 의약품품질위원회(EDQM) 등 국제 규제기관으로부터 제조승인을 받아 23개의 제조시설을 운영하고 있음",
            "전 세계 55개국, 70개의 센터 및 대표사무소를 중심으로 150개국 이상에 제품을 공급"
          ]
        },
        {
          "nameKo": "아프리카 옥시젠",
          "nameEn": "Africa Oxygen",
          "foundedYear": "1927",
          "parentCompany": "BOC Holdings Limited \r- 창립연도: 1926년\r- 창립자: Arthur, Lein Brin",
          "hq": "남아프리카공화국 요하네스버그(Johannesburg)",
          "industry": "제조업",
          "subIndustry": "가스, 질소, 산소 화학물질 및 제품 생산",
          "corpType": "사기업(유한회사)",
          "employees": "10000",
          "marketCap": {
            "usd": "321,000,000 USD",
            "krw": "약 4,815억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "35,000,000 USD",
            "krw": "약 525억 원",
            "year": "2020"
          },
          "website": "www.afrox.co.za",
          "highlights": [
            "28개의 자회사 소유",
            "Lsas Trust, Industrial Research And Development (Pty) Ltd, Afrox Zambia Limited, PPE- lisizo(Pty) Ltd, BOC Gases Zambia Plc 등",
            "남아공 10개 지역 및 아프리카 11개 국가(나미비아, 나이지리아, 모리셔스, 모잠비크, 탄자니아, 케냐, 우간다, 콩고민주공화국, 잠비아, 짐바브웨)에서 지점 운영"
          ]
        },
        {
          "nameKo": "아프리칸 레인보우 미네랄",
          "nameEn": "African Rainbow Minerals",
          "foundedYear": "1933",
          "parentCompany": null,
          "hq": "남아프리카공화국 요하네스버그(Johannesburg)",
          "industry": "광업",
          "subIndustry": "구리, 석탄, 금 등 채굴",
          "corpType": "사기업",
          "employees": "11499",
          "marketCap": {
            "usd": "1,498,000,000 USD",
            "krw": "약 2조 2,470억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "196,000,000 USD",
            "krw": "약 2,940억 원",
            "year": "2020"
          },
          "website": "www.arm.co.za",
          "highlights": [
            "남아공 최초의 흑인 소유 광산회사로 세계 12위 금채굴기업인 Harmony Gold의 지분 20%를 보유함",
            "ARM은 2010년 Vale사와 공동으로 잠비아의 구리 광산을 개발하는데 투자한바 있으며, 파푸아뉴기니에 설립한 합자회사 Morobe Mining Joint Ventures의 50% 지분을 보유하며 전 세계로 사업을 확장함"
          ]
        },
        {
          "nameKo": "알렌산더 포브스",
          "nameEn": "Alexander Forbes",
          "foundedYear": "1935",
          "parentCompany": null,
          "hq": "남아프리카공화국 샌튼(Sandton)",
          "industry": "금융 및 보험업",
          "subIndustry": "보험, 자산/펀드관리 등",
          "corpType": "사기업(유한회사)",
          "employees": "24016",
          "marketCap": {
            "usd": "314,000,000 USD",
            "krw": "약 4,710억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "19,000,000 USD",
            "krw": "약 285억 원",
            "year": "2020"
          },
          "website": "www.alexanderforbes.co.za",
          "highlights": [
            "컨설팅, 자산관리, 보험관리 등 다양한 금융서비스 제공",
            "1935년 Price Forbes로 설립되었으며 1980년대에 Alexander Forbes Financial Service로 명칭을 변경함",
            "나미비아, 남아공, 보츠나와, 우간다, 잠비아, 짐바브웨 등 6개국에서 지점 운영",
            "Nelson Hurst plc, Lane Clark&Peacock 자회사 보유"
          ]
        },
        {
          "nameKo": "알씨엘 식품",
          "nameEn": "RCL foods",
          "foundedYear": "1960",
          "parentCompany": "TSB Sugal Holdings Limited \r- 창립자: JohnM Du Plessis\r- 창립연도: 1965년",
          "hq": "남아프리카공화국 웨스트빌(Westville)",
          "industry": "제조업",
          "subIndustry": "밀가루, 빵, 동물사료 등 식품 생산",
          "corpType": "사기업",
          "employees": "3000",
          "marketCap": {
            "usd": "523,000,000 USD",
            "krw": "약 7,845억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "-60,000,000 USD",
            "krw": "약 -900억 원",
            "year": "2020"
          },
          "website": "www.rclfood.com",
          "highlights": [
            "2013년 기업명을 Rainbow Chicken Limited에서 RCL Foods로 병경함",
            "남아공 투자기업 Remgro가 77.7%의 지분을 보유"
          ]
        },
        {
          "nameKo": "알엠비 홀딩스",
          "nameEn": "RMB Holdings",
          "foundedYear": "1977",
          "parentCompany": "FirstLand\r- 창립자: Laurie Dippenaar, GT Ferreira, Paul Harris\r-창립연도: 1998년",
          "hq": "남아프리카공화국 샌튼(Sandton)",
          "industry": "금융 및 보험업",
          "subIndustry": "위기관리, 투자, 부동산 등",
          "corpType": "사기업",
          "employees": "3092",
          "marketCap": {
            "usd": "4,105,000,000 USD",
            "krw": "약 6조 1,575억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "550,000,000 USD",
            "krw": "약 8,250억 원",
            "year": "2020"
          },
          "website": "www.rmb.co.za",
          "highlights": [
            "5개국(남아공, 나미비아, 나이지리아, 보츠나와, 영국)에 4개 계열사(RMB Corvest, RMB Private Bank, RMB Ventures, RMB Westport)보유",
            "모회사인 FirstRand는 남아공 기반의 금융회사로 사하라이남 아프리카지역의 주요 금융그룹임",
            "가나를 비롯한 레소토, 모잠비크, 에스와티니, 탄자니아에 FNB브랜드로 자회사 소유",
            "남아공을 비롯한 나미비아, 나이지리아, 보츠나와, 영국에 RMB브랜드로 자회사 소유"
          ]
        },
        {
          "nameKo": "압사 그룹",
          "nameEn": "Absa Group",
          "foundedYear": "1991",
          "parentCompany": null,
          "hq": "남아프리카공화국 요하네스버그(Johannesburg)",
          "industry": "금융 및 보험업",
          "subIndustry": "개인 및 기업 투자뱅킹, 투자관리, 증권중개 등",
          "corpType": "사기업(유한회사)",
          "employees": "21000",
          "marketCap": {
            "usd": "3,701,000,000 USD",
            "krw": "약 5조 5,515억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "981,000,000 USD",
            "krw": "약 1조 4,715억 원",
            "year": "2020"
          },
          "website": "www.absa.africa/absaafrica/",
          "highlights": [
            "남아공에 본사를 둔 금융서비스 그룹으로 아프리카 12개국(가나, 나미비아, 나이지리아, 남아공, 보츠나와, 모리셔스, 모잠비크, 세이셸, 우간다, 잠비아, 케냐, 탄자니아)에서 개인 및 기업 투자뱅킹, 신용카드, 투자관리 등 다양한 금융서비스 지원",
            "2020년 1월 세계경제포럼(World Economic Forum)의 전략적 파트너 기관으로서 '제 50회 세계경제 연례포럼'에 참여",
            "2020년 9월 10일 Absa의 사이버보안팀은 사이버보안 분야 최고의 성과를 평가하는 2020Cyber Security Awards에서 수상"
          ]
        },
        {
          "nameKo": "애드콕 인그램 홀딩스",
          "nameEn": "Adcock Ingram Holdings",
          "foundedYear": "1890",
          "parentCompany": "Tiger Brands\r- 창립자: Jacob Frankel\r- 창립연도: 1920년",
          "hq": "남아프리카공화국 미드란드(Midrand)",
          "industry": "제조업",
          "subIndustry": "의약품, 스킨케어제품 생산 및 판매",
          "corpType": "사기업",
          "employees": "38000",
          "marketCap": {
            "usd": "444,000,000 USD",
            "krw": "약 6,660억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "38,000,000 USD",
            "krw": "약 570억 원",
            "year": "2020"
          },
          "website": "www.adcock.co.za",
          "highlights": [
            "1890년대 EJ Adcock Pharmacy라는 이름의 약국으로 시작했으며 1990년대에 영국, 호주 등으로 사업확장",
            "2000년대에 남아공 최대 식품기업 Tiger Brands사에 34억 랜드에 매각되어 공식적으로 자회사가 됨",
            "대표 약품브랜드로 Panado, Propain Forte, Adco-Napacod 등이 있음"
          ]
        },
        {
          "nameKo": "앵글로 골드 아샨티",
          "nameEn": "AngloGold Ashanti",
          "foundedYear": "2004",
          "parentCompany": null,
          "hq": "남아프리카공화국 요하네스버그(Johannesburg)",
          "industry": "광업",
          "subIndustry": "금, 은 채굴 및 생산",
          "corpType": "사기업(주식회사)",
          "employees": "6941",
          "marketCap": {
            "usd": "8,760,000,000 USD",
            "krw": "약 13조 1,400억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "-7,000,000 USD",
            "krw": "약 -105억 원",
            "year": "2020"
          },
          "website": "www.anglogoldashanti.com",
          "highlights": [
            "2004년 AngloGold Ashanti Goldfields Corporation의 합병으로 설립",
            "남아공 금광업의 상징적 기업으로 2020년 요하네스버그 증권거래소의 시가총액 기준 상위 40개 업체 중 하나, 2019년 금 330만 온즈 생산",
            "요하네스버그, 뉴욕, 호주, 가나 증권거래소 상장",
            "2020년 2월 12일, 광업 외 고수익사업까지 확장을 목표로 런던과 토론토 증권거래소 상장을 위해 3억 가량의 광산 자산을 Harmony Gold에 매각할 것을 발표"
          ]
        },
        {
          "nameKo": "앵글로 아메리칸",
          "nameEn": "Anglo American",
          "foundedYear": "1917",
          "parentCompany": null,
          "hq": "영국 런던(London)",
          "industry": "광업",
          "subIndustry": "백금, 다이아몬드 등 채굴",
          "corpType": "사기업(공개유한회사)",
          "employees": "2600",
          "marketCap": {
            "usd": "22,618,000,000 USD",
            "krw": "약 33조 9,270억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "195,000,000 USD",
            "krw": "약 2,925억 원",
            "year": "2020"
          },
          "website": "southafrica.angloamerican.com",
          "highlights": [
            "다이아몬드, 백금 등 다양한 금속을 채굴하는 다국적 광산회사",
            "런던 증권거래소와 요하네스버그 증권거래소에 상장되어 있음"
          ]
        },
        {
          "nameKo": "앵글로 아메리칸 플래티넘",
          "nameEn": "Anglo American Platinum",
          "foundedYear": "1955",
          "parentCompany": "Anglo American",
          "hq": "남아프리카공화국 요하네스버그(Johannesburg)",
          "industry": "광업",
          "subIndustry": "황산코발트, 구리, 금, 이리듐, 니켈, 백금 등 생산",
          "corpType": "사기업(공개유한회사)",
          "employees": "34263",
          "marketCap": {
            "usd": "13,048,000,000 USD",
            "krw": "약 19조 5,720억 원",
            "year": null
          },
          "netProfit": {
            "usd": "1,019,000,000 USD",
            "krw": "약 1조 5,285억 원",
            "year": "2020"
          },
          "website": "www.angloanmericanplatinum.com",
          "highlights": [
            "전 사계 백금 생산량의 40%를 차지",
            "바나듐, 티탄, 철, 마그네타이트 및 백금족 금속을 포함한 다양한 광물이 있는 남아공 Bushveld Igneous Complex에서 많은 사업이 이루어지고 있음"
          ]
        },
        {
          "nameKo": "어소어",
          "nameEn": "Assore",
          "foundedYear": "1928",
          "parentCompany": null,
          "hq": "남아프리카공화국 요하네스버그(Johannesburg)",
          "industry": "광업",
          "subIndustry": "광물 채굴, 생산",
          "corpType": "사기업",
          "employees": "45218",
          "marketCap": {
            "usd": "2,426,000,000 USD",
            "krw": "약 3조 6,390억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "327,000,000 USD",
            "krw": "약 4,905억 원",
            "year": "2020"
          },
          "website": "www.assore.com",
          "highlights": [
            "Guido Sacco가 1928년에 설립한 Gloucester Manganese Mines(Postmasburg) Limited로 시작",
            "그룹 내 자회사를 통해 채굴업을 전개함. 자회사  Assmang Proprietary Limited는 African Rainbow Minerals Limited와 합작하여 철, 망간, 크롬 광석 등 채굴",
            "아프리카 신탁회사 Boleng Trust가 그룹 지분의 14.28%를, Fricker Road Trust가 11.7%를 보유",
            "요하네스버그 증권거래소에 상장"
          ]
        },
        {
          "nameKo": "얼라이드 일렉트로닉스",
          "nameEn": "Allied Electronics",
          "foundedYear": "1928",
          "parentCompany": "Electrocomponents\r- 창립자: J.H Waring, P.M. Sebestyen\r-창립연도: 1937년",
          "hq": "미국 텍사스(Texas)",
          "industry": "제조업",
          "subIndustry": "전기제품, 전력 장비, 케이블, 모터 등",
          "corpType": "사기업(유한회사)",
          "employees": "40000",
          "marketCap": {
            "usd": "441,000,000 USD",
            "krw": "약 6,615억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "39,000,000 USD",
            "krw": "약 585억 원",
            "year": "2020"
          },
          "website": "www.alliedelec.com",
          "highlights": [
            "미국 기반의 전기부품, 기계제품 유통업체로 80여개 국가와 거래",
            "Allied Electronics는 남아공에서 클라우드 컴퓨팅, 데이터 관리, 보안 등의 정보기술서비스를 제공"
          ]
        },
        {
          "nameKo": "에드브이테크",
          "nameEn": "Advtech",
          "foundedYear": "1978",
          "parentCompany": null,
          "hq": "남아프리카공화국 요하네스버그(Johannesburg)",
          "industry": "교육 서비스업",
          "subIndustry": "학교, 학습, 구직 등",
          "corpType": "사기업",
          "employees": "40230",
          "marketCap": {
            "usd": "277,000,000 USD",
            "krw": "약 4,155억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "26,000,000 USD",
            "krw": "약 390억 원",
            "year": "2020"
          },
          "website": "www.advtech.co.za",
          "highlights": [
            "남아공 최대 사립교육 제공기관이자 고등교육기관인 IIE(Independent Institute of Education)의 지주회사로 다수의 교육기관 및 구직기관 운영",
            "IIE는 아프리카대륙 내 30개 캠퍼스를 보유(요하네스버그 Vega School과 Rosebank College, 케이프타운 Varsity College, 하우텡 IIE MSA 등)",
            "82%의 교육과정 이수율 달성 및 45,000명 이상의 졸업생 배출",
            "남아공, 보츠나와, 케냐에서 109개의 학교운영"
          ]
        },
        {
          "nameKo": "에이이씨아이",
          "nameEn": "AECI",
          "foundedYear": "1924",
          "parentCompany": null,
          "hq": "남아프리카공화국 샌튼(Sandton)",
          "industry": "제조업",
          "subIndustry": "폭발물, 특수 화학물, 특수 섬유 등 화학제품 생산",
          "corpType": "사기업",
          "employees": "11494",
          "marketCap": {
            "usd": "494,000,000 USD",
            "krw": "약 7,410억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "71,000,000 USD",
            "krw": "약 1,065억 원",
            "year": "2020"
          },
          "website": "www.aeciworld.com",
          "highlights": [
            "1924년 AE&I(Africa Explosives and Industries)로 설립됨. AE&I는 남아공의 금과 다이아몬드 광산 개발에 필요한 폭발물을 생산했으며, 당시 남아공의 유일한 인산비료 생산기업이었음",
            "1944년 기업명을 AECI로 변경",
            "주요 공장은 요하네스버그(Johannesburg), 사솔버그(Sasolburg), 더반(Duban) 등에 있음"
          ]
        },
        {
          "nameKo": "엑사로 리소스",
          "nameEn": "Exxaro Resources",
          "foundedYear": "2006",
          "parentCompany": "Kumba Resources",
          "hq": "남아프리카공화국 센추리언(Centurion)",
          "industry": "광업",
          "subIndustry": "석탄, 백금, 선철 등 채굴",
          "corpType": "사기업",
          "employees": "5000",
          "marketCap": {
            "usd": "2,164,000,000 USD",
            "krw": "약 3조 2,460억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "541,000,000 USD",
            "krw": "약 8,115억 원",
            "year": "2020"
          },
          "website": "www.exxaro.com",
          "highlights": [
            "2006년 요하네스버그 증권거래소 일반 광산업 분야 상장",
            "석탄, 모래광물, 비금속 및 산업광물 등을 주로 채굴하며 남아공 뿐 아니라 아시아, 유럽, 호주 등 진출",
            "2020년 3월 기준, 3년 연속 무사고(중대사고 Zero) 달성",
            "2019년 Coal Safe Award과 Absa Business Day Supplier Deverlopment의 New Comer Award 수상"
          ]
        },
        {
          "nameKo": "엠티엔 그룹",
          "nameEn": "MTN Gorup",
          "foundedYear": "1994",
          "parentCompany": null,
          "hq": "남아프리카공화국 요하네스버그(Johannesburg)",
          "industry": "정보통신업",
          "subIndustry": "이동통신 서비스, 인터넷업",
          "corpType": "사기업",
          "employees": "6648",
          "marketCap": {
            "usd": "5,334,000,000 USD",
            "krw": "약 8조 10억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "494,000,000 USD",
            "krw": "약 7,410억 원",
            "year": "2020"
          },
          "website": "www.mtn.com",
          "highlights": [
            "1994년 남아공 정부의 지원으로 설립된 남아공 최대 통신업체이며 유럽, 아시아 국가에서도 사업을 전개하고 있음",
            "아프리카대륙 5억 6천만 고객 보유, 이동통신 서비스 외에도 모바일머니(MTN Modile Money), MTN Radio, MTN Afrinolly 서비스 제공"
          ]
        },
        {
          "nameKo": "오세아나 그룹",
          "nameEn": "Oceana Group",
          "foundedYear": "1918",
          "parentCompany": null,
          "hq": "남아프리카공화국 케이프타운(Cape Town)",
          "industry": "제조업",
          "subIndustry": "어업, 수산가공업",
          "corpType": "사기업(유한회사)",
          "employees": "173",
          "marketCap": {
            "usd": "424,000,000 USD",
            "krw": "약 6,360억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "34,000,000 USD",
            "krw": "약 510억 원",
            "year": "2020"
          },
          "website": "www.oceana.co.za",
          "highlights": [
            "통조림 제조, 생선기름 가공 등을 주로 하며, 남아공과 나미비아를 주요시장으로 하여 서아프리카 지역, 미국, 유럽, 호주 등으로도 수출함",
            "대표 브랜드로 Lucky Star(생선 통조림)가 있음"
          ]
        },
        {
          "nameKo": "올드 뮤튜얼",
          "nameEn": "Old Mutual",
          "foundedYear": "1845",
          "parentCompany": null,
          "hq": "남아프리카공화국 케이프타운(Cape Town)",
          "industry": "금융 및 보험업",
          "subIndustry": "투자, 보험, 대출 등",
          "corpType": "사기업(유한회사)",
          "employees": "19288",
          "marketCap": {
            "usd": "2,950,000,000 USD",
            "krw": "약 4조 4,250억 원",
            "year": "2020"
          },
          "netProfit": null,
          "website": "www.oldmutual.co.za",
          "highlights": [
            "아프리카 13개국과 중국시장에 진출, 개인 및 기업에게 금융 솔루션을 제시하며 약 1,390만 명 이상의 고객을 지원",
            "아프리카 국가로는 나미비아, 나이지리아, 남수단, 남아공, 르완다, 말라위, 보츠나와, 에스와티니, 우간다, 짐바브웨, 탄자니아에 진출해 있음",
            "요하네스버그 증권거래소에 상장되었으며 런던, 짐바브웨, 말라위, 나미비아 증권거래소에 상장됨"
          ]
        },
        {
          "nameKo": "올워스 홀딩스",
          "nameEn": "Woolworths Holding",
          "foundedYear": "1931",
          "parentCompany": null,
          "hq": "남아프리카공화국 케이프타운(Cape Town)",
          "industry": "도매 및 소매업",
          "subIndustry": "의류, 신발, 액세서리, 식품, 홈웨어 등 유통",
          "corpType": "사기업",
          "employees": "4425",
          "marketCap": {
            "usd": "1,748,000,000 USD",
            "krw": "약 2조 6,220억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "-60,000,000 USD",
            "krw": "약 -900억 원",
            "year": "2020"
          },
          "website": "www.woolworthsholdings.co.za",
          "highlights": [
            "남아공 기반의 다국적 소매유통기업으로 남아공에 Woolworths, 호주에 Country Road, David Jones의 유통체인을 운영",
            "남아공 전역에 430여개의 식품전문점과 200여개의 상점을 운영",
            "2007년부터 'Good Business Journey'를 기업의 지속가능을 위한 공익사업으로 정하고 에너지 절약, 재사용 쇼핑백, 제로 패키징 등 환경보호 방안을 매장에 도입함"
          ]
        },
        {
          "nameKo": "옴니아 홀딩스",
          "nameEn": "Omnia Holdings",
          "foundedYear": "1953",
          "parentCompany": null,
          "hq": "남아프리카공화국 하우텡(Gauteng)",
          "industry": "제조업",
          "subIndustry": "비료, 석유 등 생산",
          "corpType": "사기업(유한회사)",
          "employees": "4845",
          "marketCap": {
            "usd": "227,000,000 USD",
            "krw": "약 3,405억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "-23,000,000 USD",
            "krw": "약 -345억 원",
            "year": "2020"
          },
          "website": "www.omnia.co.za",
          "highlights": [
            "농업, 광업, 화학산업 분야를 중심으로 자제품 연구 및 개발, 생산하며, 회사는 Bulk Mining Explosives (Pty) Ltd, Omnia Group (Pty) Ltd 등이 있음",
            "남아공을 비롯한 아프리카 국가에서 사업을 전개하고 있으며 그 외 아메리카, 아시아, 유럽에서 광업과 농업 위주로 사업을 전개",
            "요하네스버그 증권거래소의 화학 부문에 상장되어 있음"
          ]
        },
        {
          "nameKo": "요하네스버그 증권거래소",
          "nameEn": "JSE",
          "foundedYear": "1887",
          "parentCompany": null,
          "hq": "남아프리카공화국 요하네스버그(Johannesburg)",
          "industry": "금융 및 보험업",
          "subIndustry": "주식, 투자 등",
          "corpType": "사기업",
          "employees": "30000",
          "marketCap": {
            "usd": "543,000,000 USD",
            "krw": "약 8,145억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "38,000,000 USD",
            "krw": "약 570억 원",
            "year": "2020"
          },
          "website": "www.jse.co.za",
          "highlights": [
            "아프리카 최대의 증권거래소로 약 400여개의 기업이 상장되어 있음",
            "1886년 남아공 위트워터스랜드(Witwatersrand) 지역에 금광이 발견되면서 채굴 및 금융기업들의 수요가 증대되자 양국 출신의 사업가인 Benjamin Minors Woollan이 요하네스버그 외환 및 상공회(Johannesburg Exchange & Chambers Company)를 설립함",
            "2003년 중소상장기업을 위한 대안거래소인 AltX를 개시함"
          ]
        },
        {
          "nameKo": "윌슨 베일리 홀름스",
          "nameEn": "Wilson Bayly Holmes",
          "foundedYear": "1970",
          "parentCompany": null,
          "hq": "남아프리카공화국 요하네스버그(Johannesburg)",
          "industry": "건설업",
          "subIndustry": "빌딩, 댐 등 건설",
          "corpType": "사기업(유한회사)",
          "employees": "700",
          "marketCap": {
            "usd": "288,000,000 USD",
            "krw": "약 4,320억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "27,000,000 USD",
            "krw": "약 405억 원",
            "year": "2020"
          },
          "website": "www.wbho.co.za",
          "highlights": [
            "남아공 포함 12개국에서 사업",
            "가나, 기니, 나미비아, 남아공, 레소토, 모잠비크, 부르키나파소, 보츠나와, 시에라리온, 스위스, 영국, 잠비아",
            "13개 계열사 및 자회사 소유",
            "Probuild Constructions, The Byrne Group, Byrne Bros, Ellmer, Russell WBHO, Edwin Construction (Pty) Ltd, Insitu Pipelines, Roadspan (Pty) Ltd, Kalcon (Pty) Ltd, Reinforcing & Mesh Solutions, VSL Construction Solutions (Pty) Ltd, Kusasa Rail, The Gigajoule Group"
          ]
        },
        {
          "nameKo": "이탈타일",
          "nameEn": "Italtile",
          "foundedYear": "1969",
          "parentCompany": "Rallen Proprietary Limited \r-창립자: Gianni Ravazzotti\r-창립연도: 1967년",
          "hq": "남아프리카공화국 하우텡(Gauteng)",
          "industry": "도매 및 소매업",
          "subIndustry": "세라믹 타일, 변기, 욕조 등 유통",
          "corpType": "사기업(유한회사)",
          "employees": "46000",
          "marketCap": {
            "usd": "980,000,000 USD",
            "krw": "약 1조 4,700억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "69,000,000 USD",
            "krw": "약 1,035억 원",
            "year": "2020"
          },
          "website": "www.italtile.com",
          "highlights": [
            "1969년 이탈리아에서 남아공 요하네스버그로 이주한 사업가 Gianni Ravazzotti가 창업함",
            "2017년 Ceramic Industries의 95.47% 지분을 매입함"
          ]
        },
        {
          "nameKo": "인베스텍",
          "nameEn": "Investec",
          "foundedYear": "1974",
          "parentCompany": null,
          "hq": "남아프리카공화국 샌튼(Sandton)",
          "industry": "금융 및 보험업",
          "subIndustry": "투자, 자산관리 등",
          "corpType": "사기업",
          "employees": "10319",
          "marketCap": {
            "usd": "2,095,000,000 USD",
            "krw": "약 3조 1,425억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "29,000,000 USD",
            "krw": "약 435억 원",
            "year": "2020"
          },
          "website": "www.investec.com",
          "highlights": [
            "1974년 설립되어 1992년 영국에 진출, 2002년 런던 증권거래소와 요하네스버그 증권거래소에 상장되었으며 2020년에 자산관리 분야를 별도 상장함",
            "2018년 Credit Awards 최우수 중소기업 대출기관, 최우수 상업산용, 신용리스크 우수상 3관왕 수상",
            "2018년 Business Moneyfacts Award 자산 기반 금융서비스 최우수상 5년 연속 수상"
          ]
        },
        {
          "nameKo": "임팔라 플래티넘 홀딩스",
          "nameEn": "Impala Platinum Holding",
          "foundedYear": "1966",
          "parentCompany": null,
          "hq": "남아프리카공화국 요하네스버그(Johannesburg)",
          "industry": "광업",
          "subIndustry": "백금, 팔라듐, 니켈 등",
          "corpType": "사기업(유한회사)",
          "employees": "2530",
          "marketCap": {
            "usd": "4,566,000,000 USD",
            "krw": "약 6조 8,490억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "81,000,000 USD",
            "krw": "약 1,215억 원",
            "year": "2020"
          },
          "website": "www.implats.co.za",
          "highlights": [
            "백금족 금속의 선두적인 생산회사인 IMPLATS는 남아공, 짐바브웨, 캐나다에서 광업단지 및 제련공장을 운영하는 광업회사의 지주회사",
            "남아공: Impala Rustenburg, The Marula Company, Impala Refineries",
            "짐바브웨: Zimplats, Mimosa Mining Company",
            "캐나다: Impala Canada"
          ]
        },
        {
          "nameKo": "임페리얼 홀딩스",
          "nameEn": "Imperial Holdings",
          "foundedYear": "1948",
          "parentCompany": null,
          "hq": "남아프리카공화국 하우텡(Gauteng)",
          "industry": "도매 및 소매업",
          "subIndustry": "자동차 렌트, 보험, 소매유통 등",
          "corpType": "사기업(유한회사)",
          "employees": "8700",
          "marketCap": {
            "usd": "338,000,000 USD",
            "krw": "약 5,070억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "190,000,000 USD",
            "krw": "약 2,850억 원",
            "year": "2020"
          },
          "website": "www.inperial.co.za",
          "highlights": [
            "1948년 요하네스버그에서 크라이슬러 판매를 시작으로 도요타, 기아, 벤츠자동차 등의 판매권을 획득하며 사업을 확장함",
            "남부 아프리카, 유럽 등에서 물류, 차량 및 금융서비스를 운영"
          ]
        },
        {
          "nameKo": "제더 인베스트먼트",
          "nameEn": "Zeder Investment",
          "foundedYear": "2006",
          "parentCompany": "PSG Group \r-창립자: Jannie Mouton\r-창립연도: 1970년",
          "hq": "남아프리카공화국 스텔렌보스(Stellenbosch)",
          "industry": "금융 및 보험업",
          "subIndustry": "농업 투자",
          "corpType": "사기업(유한회사)",
          "employees": "50000",
          "marketCap": {
            "usd": "414,000,000 USD",
            "krw": "약 6,210억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "50,000,000 USD",
            "krw": "약 750억 원",
            "year": "2020"
          },
          "website": "www.zeder.co.za",
          "highlights": [
            "상품성 농작물, 원재료 생산 등 기업화된 농업경영(Agribusiness) 분야에 대한 투자를 주사업으로 하며, PSG ,Group 임원진의 아이디어로 설립됨",
            "농업분야를 중심으로 Zaad Holdings (종자, 비료 등 개발, 수입 및 유통업체), The Logistics Group (남부 아프리카 지역 항만, 물류 유통업체), Capespan Group (과일 생간, 조달업체)등에 투자함"
          ]
        },
        {
          "nameKo": "카트랙 홀딩스",
          "nameEn": "Cartrack Holding",
          "foundedYear": "2001",
          "parentCompany": null,
          "hq": "남아프리카공화국 요하네스버그(Johannesburg)",
          "industry": "정보통신업",
          "subIndustry": "차량 복구 및 추적서비스 등",
          "corpType": "사기업(유한회사)",
          "employees": "18300",
          "marketCap": {
            "usd": "347,000,000 USD",
            "krw": "약 5,205억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "19,000,000 USD",
            "krw": "약 285억 원",
            "year": "2020"
          },
          "website": "www.cartrack.com",
          "highlights": [
            "남아공을 비롯하여 유럽, 아시아, 중동 등에 진출해 있으며, 소프트웨어 기반의 차량 및 기기 관리, 데이터 분석, 보안 및 안전시스템 등의 서비스를 제공",
            "모바일 애플리케이션을 통해 차량 추적이 가능하며, 도난 차량 회수 서비스, 연료사용량 보고서, 낙폭 추행 경고 등 다양한 기능을 제공",
            "요하네스버그 증권거래소 상장"
          ]
        },
        {
          "nameKo": "카피텍 은행 홀딩스",
          "nameEn": "Capitec Bank Holdings",
          "foundedYear": "2001",
          "parentCompany": null,
          "hq": "남아프리카공화국 스텔렌보스(Stellenbosch)",
          "industry": "금융 및 보험업",
          "subIndustry": "대출, 투자, 은행업",
          "corpType": "사기업(주식회사)",
          "employees": "57",
          "marketCap": {
            "usd": "6,824,000,000 USD",
            "krw": "약 10조 2,360억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "292,000,000 USD",
            "krw": "약 4,380억 원",
            "year": "2020"
          },
          "website": "www.capitecbank.co.za",
          "highlights": [
            "거래/저축/신용이 통합된 글로벌원(Global One) 은행서비스를 제공",
            "남아공 전국에 863개 지점을 보유하고 있으며 2020년 코로나19에도 불구하고 고객이 6% 증가하여 1,460만 고객 달성",
            "2002년 요하네스버그 증권거래소 상장"
          ]
        },
        {
          "nameKo": "캐쉬빌드",
          "nameEn": "Cashbuild",
          "foundedYear": "1978",
          "parentCompany": null,
          "hq": "남아프리카공화국 요하네스버그(Johannesburg)",
          "industry": "도매 및 소매업",
          "subIndustry": "건축자재, P&L 하드웨어 등",
          "corpType": "사기업",
          "employees": "45",
          "marketCap": {
            "usd": "211,000,000 USD",
            "krw": "약 3,165억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "24,000,000 USD",
            "krw": "약 360억 원",
            "year": "2020"
          },
          "website": "www.cashbuild.co.za",
          "highlights": [
            "남아공, 나미비아, 레소토, 보츠나와, 에스와티니, 잠비아에 자회사 형태로 매장 보유",
            "건축자재 및 관련 제품과 서비스를 제공",
            "1986년 요하네스버그 증권거래소 상장"
          ]
        },
        {
          "nameKo": "캡 인더스트리얼 홀딩스",
          "nameEn": "Kap Industrial Holdings",
          "foundedYear": "1978",
          "parentCompany": null,
          "hq": "남아프리카공화국 스텔렌보스(Stellenbosch)",
          "industry": "복합산업",
          "subIndustry": "목재, 침구류, 화학, 물류 등",
          "corpType": "사기업(유한회사)",
          "employees": "4738",
          "marketCap": {
            "usd": "302,000,000 USD",
            "krw": "약 4,530억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "57,000,000 USD",
            "krw": "약 855억 원",
            "year": "2020"
          },
          "website": "www.kap.co.za",
          "highlights": [
            "Top 100 Companies Awards에서 13위에 선정",
            "요하네스버그 증권거래소에 상장된 100개 기업 가운데 5년간 주주에게 가장 높은 수익을 안긴 기업 순위"
          ]
        },
        {
          "nameKo": "코로네이션 펀드 매니저",
          "nameEn": "Corination Fund Managers",
          "foundedYear": "1993",
          "parentCompany": null,
          "hq": "남아프리카공화국 케이프타운(Cape Town)",
          "industry": "금융 및 보험업",
          "subIndustry": "자산 운용, 펀드 관리",
          "corpType": "사기업",
          "employees": "14738",
          "marketCap": {
            "usd": "694,000,000 USD",
            "krw": "약 1조 410억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "66,000,000 USD",
            "krw": "약 990억 원",
            "year": "2020"
          },
          "website": "www.coronation.com",
          "highlights": [
            "Public Investment Coronation Limited가 최대 기분 보유자로 11%를 보유함",
            "오프쇼어 투자, 플래그십 펀드, 은퇴/노후자금 관리 등의 서비스 제공"
          ]
        },
        {
          "nameKo": "쿰바 철광석",
          "nameEn": "Kumba Iron Ore",
          "foundedYear": "2005",
          "parentCompany": "Anglo American",
          "hq": "남아프리카공화국 센추리언(Centurion)",
          "industry": "광업",
          "subIndustry": "철광석 채굴, 생산, 배송 등",
          "corpType": "사기업",
          "employees": "105",
          "marketCap": {
            "usd": "6,105,000,000 USD",
            "krw": "약 9조 1,575억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "896,000,000 USD",
            "krw": "약 1조 3,440억 원",
            "year": "2020"
          },
          "website": "www.angloamericankumba.com",
          "highlights": [
            "2006년 Kumba Resources가 개편되면서 석탄 및 중광물 생산부문이 Kumba Iron Ore로 분리",
            "2006년 요하네스버그 증권거래소 상장",
            "Andlo American PLC가 60% 이상의 지분 보유"
          ]
        },
        {
          "nameKo": "큐로 홀딩스",
          "nameEn": "Curro Holdings",
          "foundedYear": "1998",
          "parentCompany": "PSG Financial Services",
          "hq": "남아프리카공화국 더반빌(Dubanville)",
          "industry": "교육 서비스업",
          "subIndustry": "학교 운영 등",
          "corpType": "사기업(유한회사)",
          "employees": "19579",
          "marketCap": {
            "usd": "247,000,000 USD",
            "krw": "약 3,705억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "11,000,000 USD",
            "krw": "약 165억 원",
            "year": "2020"
          },
          "website": "www.curro.co.za",
          "highlights": [
            "남아공 민간교육 관련 기업으로, 남아공을 비롯하여 나미비아, 보츠나와에서 영유아 대상의 학교부터 사립대학교 등의 교육기관을 운영함",
            "아동친화 (Child-friendliness)긍정적 기강(Positive discipline), 윤리 및 도덕의 기독교 정신(Christian ethos, ethics and morals), 창조적 사고(Creative Thinking)를 주요 정신과 가치관으로 삼고 있음"
          ]
        },
        {
          "nameKo": "클릭스 그룹",
          "nameEn": "Clicks Group",
          "foundedYear": "1968",
          "parentCompany": null,
          "hq": "남아프리카공화국 케이프타운(Cape Town)",
          "industry": "도매 및 소매업",
          "subIndustry": "의약품, 건강보조제품, 뷰티제품 등",
          "corpType": "사기업(유한회사)",
          "employees": "4350",
          "marketCap": {
            "usd": "3,641,000,000 USD",
            "krw": "약 5조 4,615억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "94,000,000 USD",
            "krw": "약 1,410억 원",
            "year": "2020"
          },
          "website": "www.clicksgroup.co.za",
          "highlights": [
            "소매업 위주의 헬스케어 회사로 7개 자회사 소유",
            "CLICKS: 남아공 대표 뷰티/건강제품 매장 및 약국 운영",
            "General Nutrition Corporation (GNC): 건강보조제품 판매",
            "The Body Shop: 천연제품 및 뷰티제품 판매",
            "Claire's: 젊은층 여성을 대상으로 패션 주얼리 및 액세서리 판매",
            "Musica: 음악 및 관련 상품(DVD, 게임기 헤드폰 등) 판매",
            "UPD: 의약품 도매업체로 약국, 개인병원, 일반매장에 의약품 공급",
            "2019년 지속가능성 보고서 기준, 총 870개의 소매점을 소유하고 있으며 이웃국가인 나미비아를 비롯한 보츠나와, 에스와티니, 레소토에서 약 15,000명의 직원을 고용",
            "9곳의 유통센터와 545곳의 약국을 운영하고 있음"
          ]
        },
        {
          "nameKo": "타이거 브랜드",
          "nameEn": "Tiger Brands",
          "foundedYear": "1921",
          "parentCompany": null,
          "hq": "남아프리카공화국 하우텡(Gauteng)",
          "industry": "제조업",
          "subIndustry": "시리얼, 음료 등 생산",
          "corpType": "사기업",
          "employees": "12217",
          "marketCap": {
            "usd": "1,790,000,000 USD",
            "krw": "약 2조 6,850억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "213,000,000 USD",
            "krw": "약 3,195억 원",
            "year": "2020"
          },
          "website": "www.tigerbrands.com",
          "highlights": [
            "초기에 아침식사용 오트밀을 생산하는 Tiger Oats로 유명해졌으며, 1988년 SPAR 남아공기업을 자회사로 매입했었으나 2004년 분리",
            "남아공 외 칠레, 짐바브웨, 모잠비크, 나이지리아 등에서도 사업 진행"
          ]
        },
        {
          "nameKo": "텔콤",
          "nameEn": "Telkom",
          "foundedYear": "1991",
          "parentCompany": null,
          "hq": "남아프리카공화국 센추리언(Centurion)",
          "industry": "정보통신업",
          "subIndustry": "이동통신, 유선전화, 클라우드 서비스 등",
          "corpType": "사기업",
          "employees": "120",
          "marketCap": {
            "usd": "606,000,000 USD",
            "krw": "약 9,090억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "154,000,000 USD",
            "krw": "약 2,310억 원",
            "year": "2020"
          },
          "website": "www.telkom.co.za",
          "highlights": [
            "이동통신망, 유선전화, 클라우드 서비스 등을 제공하며 2019년 모바일 가입자 수 970만 명을 기록함",
            "1910년 우편통신부로 시작하였으며 현재 남아공 정부가 39%의 지분을 가지고 있음",
            "1994년 텔콤은 영국기업 Vodafone과 협력하여 이동통신사를 개시했으며 이 자회사는 Vodacom으로 성장하여 2008년에 매각함",
            "2020년 생명보험 및 금융서비스 사업도 시작"
          ]
        },
        {
          "nameKo": "트랜섹션 캐피탈",
          "nameEn": "Transaction Capital",
          "foundedYear": "2002",
          "parentCompany": null,
          "hq": "남아프리카공화국 요하네스버그(Johannesburg)",
          "industry": "금융 및 보험업",
          "subIndustry": "투자, 자산관리, 대출 등",
          "corpType": "사기업",
          "employees": "20591",
          "marketCap": {
            "usd": "517,000,000 USD",
            "krw": "약 7,755억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "40,000,000 USD",
            "krw": "약 600억 원",
            "year": "2020"
          },
          "website": "www.transactioncapital.co.za",
          "highlights": [
            "남아공과 호주에서 사업을 운영하며 수익 비율은 남아공 88.9%, 호주 11.1% 정도임",
            "중소기업 대출, 신용관리 등의 서비스 제공"
          ]
        },
        {
          "nameKo": "트루워스 인터내셔널",
          "nameEn": "Truworths International",
          "foundedYear": "1917",
          "parentCompany": null,
          "hq": "남아프리카공화국 케이프타운(Cape Town)",
          "industry": "도매 및 소매업",
          "subIndustry": "의류, 유통",
          "corpType": "사기업(유한회사)",
          "employees": "18286",
          "marketCap": {
            "usd": "762,000,000 USD",
            "krw": "약 1조 1,430억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "48,000,000 USD",
            "krw": "약 720억 원",
            "year": "2020"
          },
          "website": "www.truworths.co.za",
          "highlights": [
            "1917년 The Alliance Trading Company로 설립되었으며 Truworths Man, UZZI 등의 의류브랜드를 보유, 남아공에 약 700여개의 의류 매장을 운영하고 있음",
            "2015년 영국의 신발류 체인 Office Holdings를 매입함"
          ]
        },
        {
          "nameKo": "파이오니어 식품 그룹",
          "nameEn": "Pioneer Foods Group",
          "foundedYear": "1997",
          "parentCompany": "PepsiCo\r- 창립자: Caleb Bradham\r- 창립연도: 1920년",
          "hq": "남아프리카공화국 벨빌(Bellville)",
          "industry": "제조업",
          "subIndustry": "식품, 음료 등 생산",
          "corpType": "사기업",
          "employees": "11698",
          "marketCap": {
            "usd": "1,286,000,000 USD",
            "krw": "약 1조 9,290억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "50,000,000 USD",
            "krw": "약 750억 원",
            "year": "2020"
          },
          "website": "www.pioneerfoods.co.za",
          "highlights": [
            "1997년 남아공의 식품기업인 SASKO와 Bokomo가 합병하면서 설립된 기업으로 파스타, 씨리얼, 건조과일, 견과류, 과일주스 등을 생산하고 베이커리도 운영",
            "남아공과 나이지리아, 영국 등에서 지점을 운영하고 80여개 국가로 수출하며 수출 수익이 전체 수익의 약 21%를 차지함. 주요 브랜드로는 Bokomo cereals, Liqui-Fruit, Ceres Fruit Juice, SASKO bread, Safari dried fruit, Spekko, and White Star maize 등이 있음",
            "2020년 3월, 미국의 식품음료기업 펜시(PepsiCo.)가 약 17억 달러의 Pioneer Foods Group 지분을 사들이면서 펜시의 단독추자 자회사가 됨"
          ]
        },
        {
          "nameKo": "퍼스트랜드",
          "nameEn": "Firstrand",
          "foundedYear": "1838",
          "parentCompany": null,
          "hq": "남아프리카공화국 요하네스버그(Johannesburg)",
          "industry": "금융 및 보험업",
          "subIndustry": "은행업, 투자",
          "corpType": "사기업",
          "employees": "8600",
          "marketCap": {
            "usd": "12,553,000,000 USD",
            "krw": "약 18조 8,295억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "1,701,000,000 USD",
            "krw": "약 2조 5,515억 원",
            "year": "2020"
          },
          "website": "www.firstrand.co.za",
          "highlights": [
            "남아공에서 가장 큰 금융기관 중 하나이며 남아공을 비롯한 사하라이남 아프리카 국가 및 영국, 인도에서 사업을 진행",
            "요하네스버그 증권거래소, 나미비아 증권거래소에 상장되어 있으며 2020년 시가총액 기준 아프리카에서 가장 규모가 큰 금융기관"
          ]
        },
        {
          "nameKo": "페레그린 홀딩스",
          "nameEn": "Peregrine Holdings",
          "foundedYear": "1996",
          "parentCompany": null,
          "hq": "남아프리카공화국 샌튼(Sandton)",
          "industry": "금융 및 보험업",
          "subIndustry": "자산관리, 펀드 등",
          "corpType": "사기업(유한회사)",
          "employees": "40233",
          "marketCap": {
            "usd": "230,000,000 USD",
            "krw": "약 3,450억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "23,000,000 USD",
            "krw": "약 345억 원",
            "year": "2020"
          },
          "website": "www.peregrine.co.za",
          "highlights": [
            "캐피탈, 자산관리 관련 7개의 자회사 소유",
            "Citadel Johannesburg, Peregrine Capital Johannesburg, Prergrine Guernsey Limited., Stenham Asset Management London, Stenham Trustees Guernsey, Java Capital Johannesburg, Peregrine Treasury Solutions Pretoria"
          ]
        },
        {
          "nameKo": "페이머스 브랜드",
          "nameEn": "Famous Brands",
          "foundedYear": "1960",
          "parentCompany": null,
          "hq": "남아프리카공화국 요하네스버그(Johannesburg)",
          "industry": "숙박 및 음식점업",
          "subIndustry": "식품, 물류, 제조",
          "corpType": "사기업",
          "employees": "704",
          "marketCap": {
            "usd": "204,000,000 USD",
            "krw": "약 3,060억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "-26,000,000 USD",
            "krw": "약 -390억 원",
            "year": "2020"
          },
          "website": "www.famousbrands.co.za",
          "highlights": [
            "Steers, Debonairs Pizza 등 22개 식품 브랜드를 기반으로 남아공을 비롯한 아프리카 및 중동 지역, 영국 등에 322개 매장을 보유",
            "식품 브랜드(매장), 물류, 제조로 삼원화하여 사업을 운영",
            "1994년 요하네스버그 증권거래소 상장"
          ]
        },
        {
          "nameKo": "펩코르",
          "nameEn": "Pepkor",
          "foundedYear": "1901",
          "parentCompany": null,
          "hq": "남아프리카공화국 케이프타운(Cape Town)",
          "industry": "도매 및 소매업",
          "subIndustry": "의류, 소매, 잡화 등 가정용 내구재 유통",
          "corpType": "사기업",
          "employees": "4813",
          "marketCap": {
            "usd": "1,979,000,000 USD",
            "krw": "약 2조 9,685억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "119,000,000 USD",
            "krw": "약 1,785억 원",
            "year": "2020"
          },
          "website": "www.pekor.co.za",
          "highlights": [
            "아프리카 11개국에 5,400개 이상의 매장을 운영하며, Pep, Ackermans, Dunns, Shoecity 등 20여개 브랜드 보유",
            "의류 및 잡화, 가구 및 전자제품, 건축자재, 핀테크 네 가지로 분류하여 사업 전개"
          ]
        },
        {
          "nameKo": "포스치니 그룹",
          "nameEn": "The Foschini Group",
          "foundedYear": "1925",
          "parentCompany": null,
          "hq": "남아프리카공화국 케이프타운(Cape Town)",
          "industry": "도매 및 소매업",
          "subIndustry": "유통",
          "corpType": "사기업",
          "employees": "56100",
          "marketCap": {
            "usd": "1,067,000,000 USD",
            "krw": "약 1조 6,005억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "145,000,000 USD",
            "krw": "약 2,175억 원",
            "year": "2020"
          },
          "website": "www.tfg.co.za",
          "highlights": [
            "TFG Africa Retail, TFG London, TFG Australia 등 지점을 통해 운영하며 24개국에 약 2,500여 개의 매장과 온라인 쇼핑몰을 운영",
            "보석, 액세서리, 아웃도어 의류 및 장비, 홈웨어, 가구 등을 주로 유통"
          ]
        },
        {
          "nameKo": "프로서스",
          "nameEn": "Prosus",
          "foundedYear": "2019",
          "parentCompany": "Naspers",
          "hq": "네델란드 암스테르담(Amsterdam)",
          "industry": "금융 및 보험업",
          "subIndustry": "기술 투자",
          "corpType": "사기업(공개유한회사)",
          "employees": "29121",
          "marketCap": {
            "usd": "119,141,000,000 USD",
            "krw": "약 178조 7,115억 원",
            "year": "2020"
          },
          "netProfit": null,
          "website": "www.prosus.com",
          "highlights": [
            "Nasper 그룹의 핵심 계열사이며 2019년 분리된 세계 최대 기술 투자회사",
            "인터넷 기업, 파인테크, 식품 배달시스템 등에 투자하는 글로벌 투자전문기업이며 2019년 9월 암스테르담 증권거래소와 요하네스버그 증권거래소에 상장됨",
            "최근 중국 최대 IT플랫폼 기업 Tencent와 독일의 배달앱 기업 Delivery Hero의 최대 주주로 성장"
          ]
        },
        {
          "nameKo": "피낭시에르 리시몽",
          "nameEn": "Financiere Richemont",
          "foundedYear": "1988",
          "parentCompany": null,
          "hq": "스위스 제네바(Geneva)",
          "industry": "도매 및 소매업",
          "subIndustry": "명품 유통",
          "corpType": "사기업(합자회사)",
          "employees": "20524",
          "marketCap": {
            "usd": "28,000,000,000 USD",
            "krw": "약 42조 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "149,000,000 USD",
            "krw": "약 2,235억 원",
            "year": "2020"
          },
          "website": "www.richemont.com",
          "highlights": [
            "Buccellati, Cartier, Chloe, Dunhill, Montblanc, Piaget, Vacheron, Constantin, Van Cleef & Arpels 등 다양한 명품브랜드를 소유",
            "LVMH, Estee Lauder Companies를 잇는 세계 3위의 명품 지주회사"
          ]
        },
        {
          "nameKo": "피에스지 그룹",
          "nameEn": "PSG Group",
          "foundedYear": "1970",
          "parentCompany": null,
          "hq": "남아프리카공화국 스텔렌보스(Stellenbosch)",
          "industry": "금융 및 보험업",
          "subIndustry": "투자, 자산관리",
          "corpType": "사기업",
          "employees": "35657",
          "marketCap": {
            "usd": "1,939,000,000 USD",
            "krw": "약 2조 9,085억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "106,000,000 USD",
            "krw": "약 1,590억 원",
            "year": "2020"
          },
          "website": "www.psggroup.co.za",
          "highlights": [
            "PSG 그룹 내 PSG konsult가 가장 많은 자산을 보유함",
            "남아공과 나미비아에서 활동하며 자회사로 PSG Asset Management(자산관리), PSG Insure(단기보험) 등이 있음"
          ]
        },
        {
          "nameKo": "피에스지 컨설트",
          "nameEn": "PSG Konsult",
          "foundedYear": "1998",
          "parentCompany": "PSG Group \r-창립자: Jannie Mouton\r-창립연도: 1970년",
          "hq": "남아프리카공화국 벨빌(Bellville)",
          "industry": "금융 및 보험업",
          "subIndustry": "자산관리, 보험 등",
          "corpType": "사기업(유한회사)",
          "employees": "13333",
          "marketCap": {
            "usd": "576,000,000 USD",
            "krw": "약 8,640억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "33,000,000 USD",
            "krw": "약 495억 원",
            "year": "2020"
          },
          "website": "www.psg.co.za",
          "highlights": [
            "자산관리, 보험 등의 서비스 제공",
            "PSG Konsult의 지분 62.6%를 PSG 그룹이 소유하고 있으며 PSG Konsult는 PSG Wealth (온라인 보안, 직원 복지, 자산분배). PSG Asset Manangement (자산관리), PSG Insure (보험)로 나뉨"
          ]
        },
        {
          "nameKo": "픽앤페이 스토어",
          "nameEn": "Pick n Pay Stores",
          "foundedYear": "1967",
          "parentCompany": null,
          "hq": "남아프리카공화국 케이프타운(Cape Town)",
          "industry": "도매 및 소매업",
          "subIndustry": "슈퍼마 체인",
          "corpType": "사기업",
          "employees": "2435",
          "marketCap": {
            "usd": "1,636,000,000 USD",
            "krw": "약 2조 4,540억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "80,000,000 USD",
            "krw": "약 1,200억 원",
            "year": "2020"
          },
          "website": "www.picknpay.co.za",
          "highlights": [
            "남아공뿐만 아니라 나미비아, 레소토, 보츠나와, 에스와티니, 잠비아, 짐바브웨 등에서도 운영(2018년 기준 남부 아프리카 7개국에 1,600여개의 매장 보유)",
            "최근 온라인 의류쇼핑몰 런칭(www.picknpayclothing.co.za)"
          ]
        },
        {
          "nameKo": "하모니 골드 마이닝",
          "nameEn": "Harmony Gold Mining",
          "foundedYear": "1950",
          "parentCompany": null,
          "hq": "남아프리카공화국 요하네스버그(Johannesburg)",
          "industry": "광업",
          "subIndustry": "금 채굴 등",
          "corpType": "사기업",
          "employees": "85000",
          "marketCap": {
            "usd": "1,413,000,000 USD",
            "krw": "약 2조 1,195억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "-144,000,000 USD",
            "krw": "약 -2,160억 원",
            "year": "2020"
          },
          "website": "www.harnony.co.za",
          "highlights": [
            "세계 5대 금 생산기업으로 남아공과 파푸아뉴기니에서 사업을 진행함. 남아공에는 9개의 지하광과 한 개의 노천광 등을 운영",
            "요하네스버그 증권거래소와 뉴욕 증권거래소에 상장되어 있음",
            "금 채굴, 가공, 영업 및 재정관리, 채굴 이후 관리 및 폐광까지 금 채굴 전반에 걸친 시스템"
          ]
        }
      ],
      "startups": [
        {
          "nameKo": "룰라랜드",
          "field": "금융&핀테크",
          "foundedYear": "2014",
          "hq": "남아프리카공화국 케이프타운",
          "employees": "11~50명",
          "funding": {
            "usd": "6,500,000 USD",
            "krw": "약 97억 5,000만 원",
            "year": null
          },
          "topInvestor": "IFC, Quona Capital, Accion, Newid Capital",
          "fundingStage": "Series A",
          "website": "www.lilalend.co.za/"
        },
        {
          "nameKo": "리테일 캐피탈",
          "field": "금융&핀테크",
          "foundedYear": "2010",
          "hq": "남아프리카공화국 케이프타운",
          "employees": "101~250명",
          "funding": {
            "usd": "41,700,000 USD",
            "krw": "약 625억 5,000만 원",
            "year": null
          },
          "topInvestor": "Crossfin Technology",
          "fundingStage": null,
          "website": "http://www.retailcapital.co.za/"
        },
        {
          "nameKo": "맥시캐시",
          "field": "금융&핀테크",
          "foundedYear": "2015",
          "hq": "남아프리카공화국 요하네스버그",
          "employees": "1~10명",
          "funding": null,
          "topInvestor": null,
          "fundingStage": "Seed",
          "website": "http://maxicashapp.com/"
        },
        {
          "nameKo": "모비라이프",
          "field": "보험",
          "foundedYear": "2015",
          "hq": "남아프리카공화국 요하네스버그",
          "employees": "11~50명",
          "funding": {
            "usd": "100,000 USD",
            "krw": "약 1억 5,000만 원",
            "year": null
          },
          "topInvestor": "Catalyst Fund",
          "fundingStage": "Seed",
          "website": "http://mobi.co.za/Landing/"
        },
        {
          "nameKo": "비지빌리티 인사이트",
          "field": "금융&핀테크",
          "foundedYear": "2016",
          "hq": "남아프리카공화국 요하네스버그",
          "employees": null,
          "funding": null,
          "topInvestor": null,
          "fundingStage": "Series B",
          "website": "http://vizibiliti-insight.co.za"
        },
        {
          "nameKo": "스터들리",
          "field": "에듀테크",
          "foundedYear": "2016",
          "hq": "프랑스 클리시",
          "employees": "11~50명",
          "funding": null,
          "topInvestor": null,
          "fundingStage": "Series B",
          "website": "http://www.Studely.com/"
        },
        {
          "nameKo": "슬라이드 파이낸셜",
          "field": "금융&핀테크",
          "foundedYear": "2017",
          "hq": "남아프리카공화국 케이프타운",
          "employees": "1~10명",
          "funding": null,
          "topInvestor": null,
          "fundingStage": "Seed",
          "website": "http://getslideapp.com"
        },
        {
          "nameKo": "얄루",
          "field": "보험",
          "foundedYear": "2017",
          "hq": "남아프리카공화국 요하네스버그",
          "employees": "11~50명",
          "funding": null,
          "topInvestor": "PIC, Alter",
          "fundingStage": null,
          "website": "http://www.yalu.co.za/"
        },
        {
          "nameKo": "요코",
          "field": "금융&핀테크",
          "foundedYear": "2013",
          "hq": "남아프리카공화국 케이프타운",
          "employees": "101~250명",
          "funding": {
            "usd": "23,000,000 USD",
            "krw": "약 345억 원",
            "year": null
          },
          "topInvestor": "Partech, Quona Capital, Velocity Capital Fintech Ventures",
          "fundingStage": "Series B",
          "website": "http://www.yoco.co.za/za/"
        },
        {
          "nameKo": "컨트롤",
          "field": "보험",
          "foundedYear": "2017",
          "hq": "남아프리카공화국 파를",
          "employees": "1~10명",
          "funding": null,
          "topInvestor": "Santam Insurance",
          "fundingStage": "Seed",
          "website": "www.takectrl.co.za"
        },
        {
          "nameKo": "타임뱅크",
          "field": "금융&핀테크",
          "foundedYear": "2012",
          "hq": "남아프리카공화국 요하네스버그",
          "employees": "251~500명",
          "funding": {
            "usd": "6,200,000 USD",
            "krw": "약 93억 원",
            "year": null
          },
          "topInvestor": "African Rainbow Capital, Ethos Private Equity",
          "fundingStage": "Seed",
          "website": "www.tymebank.co.za/"
        },
        {
          "nameKo": "핀챗봇",
          "field": "금융&핀테크",
          "foundedYear": "2016",
          "hq": "남아프리카공화국 요하네스버그",
          "employees": "11~50명",
          "funding": {
            "usd": "1,100,000 USD",
            "krw": "약 16억 5,000만 원",
            "year": null
          },
          "topInvestor": "Kalon Ventures Partners, Compass Capital",
          "fundingStage": "Seed",
          "website": "http://finchatbot.com/"
        },
        {
          "nameKo": "히어엑스 그룹",
          "field": "헬스케어",
          "foundedYear": "2015",
          "hq": "남아프리카공화국 프레토리아",
          "employees": "11~50명",
          "funding": {
            "usd": "33,300,000 USD",
            "krw": "약 499억 5,000만 원",
            "year": null
          },
          "topInvestor": "Bose Ventues",
          "fundingStage": "Series A",
          "website": "http://www.hearxgroup.com/"
        }
      ]
    }
  },
  "니제르": {
    "id": "니제르",
    "name": "니제르",
    "nameEn": "Niger",
    "population": "27,200,000명 (2020년 기준)",
    "language": "프랑스어(공용어), 토착어",
    "capital": "니아메(Niamey)",
    "climateScore": null,
    "mainClimateIssue": null,
    "diplomacyScore": null,
    "matchScore": null,
    "recommended": null,
    "priorityPartner": false,
    "koreaOdaHistory": true,
    "economy": {
      "gdpPerCapita": {
        "usd": "594 USD",
        "krw": "약 89만 원",
        "year": "2022",
        "source": "IMF/국제통화기금"
      },
      "gdpTotal": {
        "usd": "15,220,000,000 USD",
        "krw": "약 22조 8,300억 원",
        "year": "2022",
        "source": "IMF/국제통화기금"
      },
      "odaNetReceived": {
        "usd": "약 11억 USD",
        "krw": "약 1조 6,584억 9,450만 원",
        "year": "2019",
        "isNet": false
      },
      "recipientOda": {
        "usd": "약 1,498백만 USD",
        "krw": "약 2조 2,470억 원",
        "year": "2019",
        "isNet": false
      },
      "bilateral": {
        "usd": "약 37백만 USD",
        "krw": "약 555억 원",
        "year": "2019",
        "isNet": false
      },
      "koreaOda": {
        "usd": "약 1백만 USD",
        "krw": "약 15억 원",
        "year": "2019",
        "isNet": false
      }
    },
    "koica": {
      "total": "9,268,033 원",
      "sectors": [
        {
          "name": "보건",
          "percent": 49.0,
          "amount": "4,545,816 원"
        },
        {
          "name": "교육",
          "percent": 1.6,
          "amount": "144,359 원"
        },
        {
          "name": "농림수산",
          "percent": 29.0,
          "amount": "2,690,303 원"
        },
        {
          "name": "기술환경에너지",
          "percent": 2.5,
          "amount": "227,677 원"
        },
        {
          "name": "공공행정",
          "percent": 16.9,
          "amount": "1,564,810 원"
        },
        {
          "name": "긴급구호",
          "percent": 1.0,
          "amount": "95,069 원"
        }
      ]
    },
    "infrastructure": {
      "hospitalBeds": {
        "value": "0.3",
        "unit": "병상 / 1,000명",
        "year": "2020",
        "source": "World Bank"
      },
      "physicians": {
        "value": "0.0",
        "unit": "의사 / 1,000명",
        "year": "2023",
        "source": "World Bank"
      },
      "nursesMidwives": {
        "value": "0.4",
        "unit": "간호사·조산사 / 1,000명",
        "year": "2023",
        "source": "World Bank"
      },
      "electricityAccess": {
        "value": "21.3",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableEnergyShare": {
        "value": "7.8",
        "unit": "%",
        "year": "2021",
        "source": "World Bank"
      },
      "cleanCookingAccess": {
        "value": "5.1",
        "unit": "%",
        "year": "2023",
        "source": "World Bank"
      },
      "internetPenetration": {
        "value": "15.6",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "mobileSubscriptions": {
        "value": "60.6",
        "unit": "건 / 100명",
        "year": "2024",
        "source": "World Bank"
      },
      "basicWater": {
        "value": "53.4",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "basicSanitation": {
        "value": "16.3",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableWaterPerCapita": {
        "value": "138.3",
        "unit": "m³ / 인",
        "year": "2022",
        "source": "World Bank"
      },
      "pavedRoads": {
        "value": "20.6",
        "unit": "%",
        "year": "2008",
        "source": "World Bank"
      },
      "railLines": {
        "value": null,
        "unit": "km",
        "year": null,
        "source": null
      }
    },
    "koicaCumulative": {
      "total": "약 69억 8,447만 원",
      "latest": "약 1억 3,772만 원",
      "latestYear": "2023",
      "startYear": "1991"
    },
    "koicaHealthDetail": null,
    "diplomaticContact": {
      "overseas": {
        "missionName": "주 코트디부아르 대한민국 대사관",
        "missionType": "대사관",
        "jointCoverage": true,
        "address": "01BP 3950 Abidjan 01, Rue Sainte Marie Lot 18-19, Cocody Sud, Abidjan, Cote d&rsquo;Ivoire,",
        "phone": "(225)2248-6701",
        "consularCenter": "(82)2-3210-0404",
        "tollFree": "080-020-0219",
        "emergency": "(225)8827-3480",
        "website": "http://overseas.mofa.go.kr/ci-ko/index.do",
        "lat": 5.331987,
        "lng": -3.996877
      },
      "domestic": null
    },
    "marketEntry": {
      "companyCount": 0,
      "industries": [],
      "startupCount": 0,
      "startupFields": [],
      "companies": [],
      "startups": []
    }
  },
  "라이베리아": {
    "id": "라이베리아",
    "name": "라이베리아",
    "nameEn": "Liberia",
    "population": "5,300,000명 (2020년 기준)",
    "language": "영어(공용어), 토착어",
    "capital": "몬로비아(Monrovia)",
    "climateScore": null,
    "mainClimateIssue": null,
    "diplomacyScore": null,
    "matchScore": null,
    "recommended": null,
    "priorityPartner": false,
    "koreaOdaHistory": true,
    "economy": {
      "gdpPerCapita": {
        "usd": "755 USD",
        "krw": "약 113만 원",
        "year": "2022",
        "source": "World Bank"
      },
      "gdpTotal": {
        "usd": "4,000,000,000 USD",
        "krw": "약 6조 원",
        "year": "2022",
        "source": "World Bank"
      },
      "odaNetReceived": {
        "usd": "약 22억 USD",
        "krw": "약 3조 2,969억 850만 원",
        "year": "2019",
        "isNet": false
      },
      "recipientOda": {
        "usd": "약 819백만 USD",
        "krw": "약 1조 2,285억 원",
        "year": "2019",
        "isNet": false
      },
      "bilateral": {
        "usd": "약 54백만 USD",
        "krw": "약 810억 원",
        "year": "2019",
        "isNet": false
      },
      "koreaOda": {
        "usd": "약 0백만 USD",
        "krw": "약 0 원",
        "year": "2019",
        "isNet": false
      }
    },
    "koica": {
      "total": "4,030,512 원",
      "sectors": [
        {
          "name": "보건",
          "percent": 63.6,
          "amount": "2,562,235 원"
        },
        {
          "name": "교육",
          "percent": 3.1,
          "amount": "124,683 원"
        },
        {
          "name": "농림수산",
          "percent": 22.2,
          "amount": "893,084 원"
        },
        {
          "name": "기술환경에너지",
          "percent": 2.6,
          "amount": "105,136 원"
        },
        {
          "name": "공공행정",
          "percent": 8.4,
          "amount": "336,771 원"
        },
        {
          "name": "기타",
          "percent": 0.2,
          "amount": "8,604 원"
        }
      ]
    },
    "infrastructure": {
      "hospitalBeds": {
        "value": "1.6",
        "unit": "병상 / 1,000명",
        "year": "2021",
        "source": "World Bank"
      },
      "physicians": {
        "value": "0.2",
        "unit": "의사 / 1,000명",
        "year": "2022",
        "source": "World Bank"
      },
      "nursesMidwives": {
        "value": "1.0",
        "unit": "간호사·조산사 / 1,000명",
        "year": "2022",
        "source": "World Bank"
      },
      "electricityAccess": {
        "value": "34.9",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableEnergyShare": {
        "value": "57.4",
        "unit": "%",
        "year": "2021",
        "source": "World Bank"
      },
      "cleanCookingAccess": {
        "value": "0.8",
        "unit": "%",
        "year": "2023",
        "source": "World Bank"
      },
      "internetPenetration": {
        "value": "32.2",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "mobileSubscriptions": {
        "value": "32.1",
        "unit": "건 / 100명",
        "year": "2022",
        "source": "World Bank"
      },
      "basicWater": {
        "value": "78.8",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "basicSanitation": {
        "value": "23.3",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableWaterPerCapita": {
        "value": "37221.1",
        "unit": "m³ / 인",
        "year": "2022",
        "source": "World Bank"
      },
      "pavedRoads": {
        "value": "6.2",
        "unit": "%",
        "year": "2001",
        "source": "World Bank"
      },
      "railLines": {
        "value": null,
        "unit": "km",
        "year": null,
        "source": null
      }
    },
    "koicaCumulative": {
      "total": "약 40억 6,227만 원",
      "latest": "약 4억 9,047만 원",
      "latestYear": "2023",
      "startYear": "1991"
    },
    "koicaHealthDetail": {
      "year": "2024",
      "sectors": [
        {
          "name": "보건정책 및 행정관리",
          "percent": 100.0,
          "amount": "29,457,000 원"
        }
      ]
    },
    "diplomaticContact": {
      "overseas": {
        "missionName": "주 나이지리아 대한민국 대사관",
        "missionType": "대사관",
        "jointCoverage": true,
        "address": "No.9 Ovia cresent, Off Pope John Paul Ⅱ street, Off Gana street, Maitama, Abuja,",
        "phone": "(234)810-389-0991",
        "consularCenter": "(82)2-3210-0404",
        "tollFree": "080-020-0219",
        "emergency": "(234)809-998-1726",
        "website": "http://overseas.mofa.go.kr/ng-ko/index.do",
        "lat": 9.084108,
        "lng": 7.49347
      },
      "domestic": null
    },
    "marketEntry": {
      "companyCount": 0,
      "industries": [],
      "startupCount": 0,
      "startupFields": [],
      "companies": [],
      "startups": []
    }
  },
  "레소토": {
    "id": "레소토",
    "name": "레소토",
    "nameEn": "Lesotho",
    "population": "2,300,000명 (2020년 기준)",
    "language": "영어(공용어), 세소토어",
    "capital": "Maseru",
    "climateScore": null,
    "mainClimateIssue": null,
    "diplomacyScore": null,
    "matchScore": null,
    "recommended": null,
    "priorityPartner": false,
    "koreaOdaHistory": true,
    "economy": {
      "gdpPerCapita": {
        "usd": "1,170 USD",
        "krw": "약 175만 원",
        "year": "2023",
        "source": "IMF/국제통화기금"
      },
      "gdpTotal": {
        "usd": "2,520,000,000 USD",
        "krw": "약 3조 7,800억 원",
        "year": "2023",
        "source": "IMF/국제통화기금"
      },
      "odaNetReceived": {
        "usd": "약 5억 USD",
        "krw": "약 8,138억 9,625만 원",
        "year": "2019",
        "isNet": false
      },
      "recipientOda": {
        "usd": "약 128백만 USD",
        "krw": "약 1,920억 원",
        "year": "2019",
        "isNet": false
      },
      "bilateral": {
        "usd": "약 36백만 USD",
        "krw": "약 540억 원",
        "year": "2019",
        "isNet": false
      },
      "koreaOda": {
        "usd": "약 0백만 USD",
        "krw": "약 0 원",
        "year": "2019",
        "isNet": false
      }
    },
    "koica": {
      "total": "2,051,398 원",
      "sectors": [
        {
          "name": "보건",
          "percent": 27.8,
          "amount": "570,560 원"
        },
        {
          "name": "교육",
          "percent": 15.9,
          "amount": "326,984 원"
        },
        {
          "name": "농림수산",
          "percent": 23.8,
          "amount": "488,775 원"
        },
        {
          "name": "기술환경에너지",
          "percent": 8.5,
          "amount": "173,955 원"
        },
        {
          "name": "공공행정",
          "percent": 23.0,
          "amount": "471,154 원"
        },
        {
          "name": "긴급구호",
          "percent": 1.0,
          "amount": "19,970 원"
        }
      ]
    },
    "infrastructure": {
      "hospitalBeds": {
        "value": "1.3",
        "unit": "병상 / 1,000명",
        "year": "2006",
        "source": "World Bank"
      },
      "physicians": {
        "value": "0.2",
        "unit": "의사 / 1,000명",
        "year": "2022",
        "source": "World Bank"
      },
      "nursesMidwives": {
        "value": "1.8",
        "unit": "간호사·조산사 / 1,000명",
        "year": "2022",
        "source": "World Bank"
      },
      "electricityAccess": {
        "value": "60.6",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableEnergyShare": {
        "value": "99.8",
        "unit": "%",
        "year": "2021",
        "source": "World Bank"
      },
      "cleanCookingAccess": {
        "value": "53.8",
        "unit": "%",
        "year": "2023",
        "source": "World Bank"
      },
      "internetPenetration": {
        "value": "51.8",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "mobileSubscriptions": {
        "value": "70.3",
        "unit": "건 / 100명",
        "year": "2024",
        "source": "World Bank"
      },
      "basicWater": {
        "value": "78.1",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "basicSanitation": {
        "value": "47.9",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableWaterPerCapita": {
        "value": "2287.7",
        "unit": "m³ / 인",
        "year": "2022",
        "source": "World Bank"
      },
      "pavedRoads": {
        "value": "53",
        "unit": "%",
        "year": "2005",
        "source": "World Bank"
      },
      "railLines": {
        "value": null,
        "unit": "km",
        "year": null,
        "source": null
      }
    },
    "koicaCumulative": {
      "total": "약 35억 2,081만 원",
      "latest": "약 13억 4,281만 원",
      "latestYear": "2023",
      "startYear": "1991"
    },
    "koicaHealthDetail": null,
    "diplomaticContact": {
      "overseas": {
        "missionName": "주 남아프리카공화국 대한민국 대사관",
        "missionType": "대사관",
        "jointCoverage": true,
        "address": "265 Melk Street, Nieuw Muckleneuk, Pretoria 0181, South Africa,",
        "phone": "(27)12-460-2508",
        "consularCenter": "(82)2-3210-0404",
        "tollFree": "080-020-0219",
        "emergency": "(27)66-332-5897",
        "website": "http://overseas.mofa.go.kr/za-ko/index.do",
        "lat": -25.773293,
        "lng": 28.226605
      },
      "domestic": null
    },
    "marketEntry": {
      "companyCount": 0,
      "industries": [],
      "startupCount": 0,
      "startupFields": [],
      "companies": [],
      "startups": []
    }
  },
  "르완다": {
    "id": "르완다",
    "name": "르완다",
    "nameEn": "Rwanda",
    "population": "13,240,000명 (2020년 기준)",
    "language": "영어, 키냐르완다어, 프랑스어, 스와힐리어 ",
    "capital": "키갈리 (Kigali)",
    "climateScore": null,
    "mainClimateIssue": null,
    "diplomacyScore": null,
    "matchScore": null,
    "recommended": null,
    "priorityPartner": true,
    "koreaOdaHistory": true,
    "economy": {
      "gdpPerCapita": {
        "usd": "1,030 USD",
        "krw": "약 154만 원",
        "year": "2023",
        "source": "IMF/국제통화기금"
      },
      "gdpTotal": {
        "usd": "13,900,000,000 USD",
        "krw": "약 20조 8,500억 원",
        "year": "2023",
        "source": "IMF/국제통화기금"
      },
      "odaNetReceived": {
        "usd": "약 12억 USD",
        "krw": "약 1조 7,852억 2,200만 원",
        "year": "2019",
        "isNet": false
      },
      "recipientOda": {
        "usd": "약 1,332백만 USD",
        "krw": "약 1조 9,980억 원",
        "year": "2019",
        "isNet": false
      },
      "bilateral": {
        "usd": "약 47백만 USD",
        "krw": "약 705억 원",
        "year": "2019",
        "isNet": false
      },
      "koreaOda": {
        "usd": "약 24백만 USD",
        "krw": "약 360억 원",
        "year": "2019",
        "isNet": false
      }
    },
    "koica": {
      "total": "139,000,000 원",
      "sectors": [
        {
          "name": "보건",
          "percent": 8.8,
          "amount": "12,200,000 원"
        },
        {
          "name": "교육",
          "percent": 28.7,
          "amount": "39,900,000 원"
        },
        {
          "name": "농림수산",
          "percent": 30.1,
          "amount": "41,900,000 원"
        },
        {
          "name": "기술환경에너지",
          "percent": 8.8,
          "amount": "12,300,000 원"
        },
        {
          "name": "공공행정",
          "percent": 22.3,
          "amount": "31,000,000 원"
        },
        {
          "name": "긴급구호",
          "percent": 0.1,
          "amount": "162,176 원"
        },
        {
          "name": "기타",
          "percent": 1.4,
          "amount": "1,981,107 원"
        }
      ]
    },
    "infrastructure": {
      "hospitalBeds": {
        "value": "0.8",
        "unit": "병상 / 1,000명",
        "year": "2023",
        "source": "World Bank"
      },
      "physicians": {
        "value": "0.1",
        "unit": "의사 / 1,000명",
        "year": "2022",
        "source": "World Bank"
      },
      "nursesMidwives": {
        "value": "1.1",
        "unit": "간호사·조산사 / 1,000명",
        "year": "2022",
        "source": "World Bank"
      },
      "electricityAccess": {
        "value": "72",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableEnergyShare": {
        "value": "59.9",
        "unit": "%",
        "year": "2021",
        "source": "World Bank"
      },
      "cleanCookingAccess": {
        "value": "9.3",
        "unit": "%",
        "year": "2023",
        "source": "World Bank"
      },
      "internetPenetration": {
        "value": "31.7",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "mobileSubscriptions": {
        "value": "93.2",
        "unit": "건 / 100명",
        "year": "2024",
        "source": "World Bank"
      },
      "basicWater": {
        "value": "61.4",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "basicSanitation": {
        "value": "81.3",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableWaterPerCapita": {
        "value": "695.9",
        "unit": "m³ / 인",
        "year": "2022",
        "source": "World Bank"
      },
      "pavedRoads": {
        "value": "19",
        "unit": "%",
        "year": "2004",
        "source": "World Bank"
      },
      "railLines": {
        "value": null,
        "unit": "km",
        "year": null,
        "source": null
      }
    },
    "koicaCumulative": {
      "total": "약 1,839억 3,017만 원",
      "latest": "약 203억 5,478만 원",
      "latestYear": "2023",
      "startYear": "1991"
    },
    "koicaHealthDetail": {
      "year": "2024",
      "sectors": [
        {
          "name": "의료서비스",
          "percent": 64.5,
          "amount": "115,266,000 원"
        },
        {
          "name": "보건정책 및 행정관리",
          "percent": 35.5,
          "amount": "63,480,000 원"
        }
      ]
    },
    "diplomaticContact": {
      "overseas": {
        "missionName": "주 르완다 대한민국 대사관",
        "missionType": "대사관",
        "jointCoverage": false,
        "address": "P.O. Box 6404, 34 KG 13 Ave(Golf Course Road), Nyarutarama, Kigali, Rwanda,",
        "phone": "(250)252-577-577",
        "consularCenter": "(82)2-3210-0404",
        "tollFree": "080-020-0219",
        "emergency": "(250)780-493-746",
        "website": "http://overseas.mofa.go.kr/rw-ko/index.do",
        "lat": -1.938502,
        "lng": 30.10031
      },
      "domestic": {
        "ambassador": "Dalila Yasmin AMRI SUED",
        "address": "서울특별시 용산구 한남대로20길 13 수영빌딩 503호",
        "phone": "798-1052",
        "email": "infoseoul@embassy.gov.rw",
        "fax": "798-1054",
        "updatedAt": "2019-11-15"
      }
    },
    "marketEntry": {
      "companyCount": 0,
      "industries": [],
      "startupCount": 3,
      "startupFields": [
        {
          "name": "금융&핀테크",
          "count": 1
        },
        {
          "name": "에듀테크",
          "count": 1
        },
        {
          "name": "헬스케어",
          "count": 1
        }
      ],
      "companies": [],
      "startups": [
        {
          "nameKo": "AC 그룹",
          "field": "금융&핀테크",
          "foundedYear": "2015",
          "hq": "르완다 키갈리",
          "employees": "11~50명",
          "funding": {
            "usd": "1,660,000 USD",
            "krw": "약 24억 9,000만 원",
            "year": null
          },
          "topInvestor": null,
          "fundingStage": "Series C",
          "website": "http://www.acgroup.rw/ (접속불가)"
        },
        {
          "nameKo": "아카데믹 브릿지",
          "field": "에듀테크",
          "foundedYear": "2015",
          "hq": "르완다 키갈리",
          "employees": "11~50명",
          "funding": null,
          "topInvestor": "Spring Accelerator",
          "fundingStage": "Seed",
          "website": "http://academicbridge.xyz/"
        },
        {
          "nameKo": "집라인",
          "field": "헬스케어",
          "foundedYear": "2014",
          "hq": "미국 샌프란시스코",
          "employees": "101~250명",
          "funding": {
            "usd": "233,000,000 USD",
            "krw": "약 3,495억 원",
            "year": null
          },
          "topInvestor": null,
          "fundingStage": "Series D",
          "website": "http://flyzipline.com/"
        }
      ]
    }
  },
  "리비아": {
    "id": "리비아",
    "name": "리비아",
    "nameEn": "Libya",
    "population": "6,780,000명 (2020년 기준)",
    "language": "아랍어",
    "capital": "트리폴리(Tripoli)",
    "climateScore": null,
    "mainClimateIssue": null,
    "diplomacyScore": null,
    "matchScore": null,
    "recommended": null,
    "priorityPartner": false,
    "koreaOdaHistory": true,
    "economy": {
      "gdpPerCapita": {
        "usd": "6,716 USD",
        "krw": "약 1,007만 원",
        "year": "2023",
        "source": null
      },
      "gdpTotal": {
        "usd": "45,800,000,000 USD",
        "krw": "약 68조 7,000억 원",
        "year": "2023",
        "source": null
      },
      "odaNetReceived": {
        "usd": "약 1억 USD",
        "krw": "약 894억 835만 원",
        "year": "2019",
        "isNet": false
      },
      "recipientOda": {
        "usd": "약 801백만 USD",
        "krw": "약 1조 2,015억 원",
        "year": "2019",
        "isNet": false
      },
      "bilateral": {
        "usd": "약 60백만 USD",
        "krw": "약 900억 원",
        "year": "2019",
        "isNet": false
      },
      "koreaOda": {
        "usd": "약 2백만 USD",
        "krw": "약 30억 원",
        "year": "2019",
        "isNet": false
      }
    },
    "koica": {
      "total": "6,988,368 원",
      "sectors": [
        {
          "name": "보건",
          "percent": 2.7,
          "amount": "185,319 원"
        },
        {
          "name": "교육",
          "percent": 48.3,
          "amount": "3,375,454 원"
        },
        {
          "name": "농림수산",
          "percent": 1.0,
          "amount": "66,931 원"
        },
        {
          "name": "기술환경에너지",
          "percent": 13.0,
          "amount": "905,556 원"
        },
        {
          "name": "공공행정",
          "percent": 7.5,
          "amount": "524,236 원"
        },
        {
          "name": "긴급구호",
          "percent": 27.4,
          "amount": "1,916,397 원"
        },
        {
          "name": "기타",
          "percent": 0.2,
          "amount": "14,475 원"
        }
      ]
    },
    "infrastructure": {
      "hospitalBeds": {
        "value": "3.5",
        "unit": "병상 / 1,000명",
        "year": "2022",
        "source": "World Bank"
      },
      "physicians": {
        "value": "2.0",
        "unit": "의사 / 1,000명",
        "year": "2017",
        "source": "World Bank"
      },
      "nursesMidwives": {
        "value": "6.4",
        "unit": "간호사·조산사 / 1,000명",
        "year": "2017",
        "source": "World Bank"
      },
      "electricityAccess": {
        "value": "77.4",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableEnergyShare": {
        "value": "0.0",
        "unit": "%",
        "year": "2021",
        "source": "World Bank"
      },
      "cleanCookingAccess": {
        "value": null,
        "unit": "%",
        "year": null,
        "source": null
      },
      "internetPenetration": {
        "value": "82.0",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "mobileSubscriptions": {
        "value": "193.0",
        "unit": "건 / 100명",
        "year": "2022",
        "source": "World Bank"
      },
      "basicWater": {
        "value": "96.4",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "basicSanitation": {
        "value": "88.5",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableWaterPerCapita": {
        "value": "96.9",
        "unit": "m³ / 인",
        "year": "2022",
        "source": "World Bank"
      },
      "pavedRoads": {
        "value": "57.2",
        "unit": "%",
        "year": "2001",
        "source": "World Bank"
      },
      "railLines": {
        "value": null,
        "unit": "km",
        "year": null,
        "source": null
      }
    },
    "koicaCumulative": {
      "total": "약 73억 5,501만 원",
      "latest": "약 4억 4,169만 원",
      "latestYear": "2023",
      "startYear": "1991"
    },
    "koicaHealthDetail": null,
    "diplomaticContact": {
      "overseas": {
        "missionName": "주 리비아 대한민국 대사관",
        "missionType": "대사관",
        "jointCoverage": false,
        "address": "P. O. Box 4781/5160, Abounawas Area, Gargaresh St., Tripoli, Libya,",
        "phone": "(216)71-274-759",
        "consularCenter": "(82)2-3210-0404",
        "tollFree": "080-020-0219",
        "emergency": "(216)22-575-924",
        "website": "http://overseas.mofa.go.kr/ly-ko/index.do",
        "lat": 32.866323,
        "lng": 13.091041
      },
      "domestic": {
        "ambassador": "Hosameddin M.M. ELNAELI",
        "address": "서울특별시 용산구 장문로 51",
        "phone": "797-6001/2",
        "email": "libya.o.home@gmail.com",
        "fax": "797-6007",
        "updatedAt": "2021-07-05"
      }
    },
    "marketEntry": {
      "companyCount": 0,
      "industries": [],
      "startupCount": 0,
      "startupFields": [],
      "companies": [],
      "startups": []
    }
  },
  "마다가스카르": {
    "id": "마다가스카르",
    "name": "마다가스카르",
    "nameEn": "Madagascar",
    "population": "28,430,000명 (2020년 기준)",
    "language": "말라가시어 및 프랑스어(공용어)",
    "capital": "안타나나리보(Antananarivo)",
    "climateScore": null,
    "mainClimateIssue": null,
    "diplomacyScore": null,
    "matchScore": null,
    "recommended": null,
    "priorityPartner": false,
    "koreaOdaHistory": true,
    "economy": {
      "gdpPerCapita": {
        "usd": "505 USD",
        "krw": "약 75만 원",
        "year": "2022",
        "source": "World Bank"
      },
      "gdpTotal": {
        "usd": "15,000,000,000 USD",
        "krw": "약 22조 5,000억 원",
        "year": "2022",
        "source": "World Bank"
      },
      "odaNetReceived": {
        "usd": "약 6억 USD",
        "krw": "약 8,342억 4,165만 원",
        "year": "2019",
        "isNet": false
      },
      "recipientOda": {
        "usd": "약 1,200백만 USD",
        "krw": "약 1조 8,000억 원",
        "year": "2019",
        "isNet": false
      },
      "bilateral": {
        "usd": "약 37백만 USD",
        "krw": "약 555억 원",
        "year": "2019",
        "isNet": false
      },
      "koreaOda": {
        "usd": "약 4백만 USD",
        "krw": "약 60억 원",
        "year": "2019",
        "isNet": false
      }
    },
    "koica": {
      "total": "16,600,000 원",
      "sectors": [
        {
          "name": "보건",
          "percent": 20.1,
          "amount": "3,344,417 원"
        },
        {
          "name": "교육",
          "percent": 41.2,
          "amount": "6,841,259 원"
        },
        {
          "name": "농림수산",
          "percent": 14.2,
          "amount": "2,356,671 원"
        },
        {
          "name": "기술환경에너지",
          "percent": 9.4,
          "amount": "1,558,837 원"
        },
        {
          "name": "공공행정",
          "percent": 12.5,
          "amount": "2,076,124 원"
        },
        {
          "name": "긴급구호",
          "percent": 2.7,
          "amount": "447,302 원"
        }
      ]
    },
    "infrastructure": {
      "hospitalBeds": {
        "value": "0.3",
        "unit": "병상 / 1,000명",
        "year": "2014",
        "source": "World Bank"
      },
      "physicians": {
        "value": "0.2",
        "unit": "의사 / 1,000명",
        "year": "2022",
        "source": "World Bank"
      },
      "nursesMidwives": {
        "value": "0.3",
        "unit": "간호사·조산사 / 1,000명",
        "year": "2022",
        "source": "World Bank"
      },
      "electricityAccess": {
        "value": "42.5",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableEnergyShare": {
        "value": "34.1",
        "unit": "%",
        "year": "2021",
        "source": "World Bank"
      },
      "cleanCookingAccess": {
        "value": "1.6",
        "unit": "%",
        "year": "2023",
        "source": "World Bank"
      },
      "internetPenetration": {
        "value": "18.7",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "mobileSubscriptions": {
        "value": "75.5",
        "unit": "건 / 100명",
        "year": "2023",
        "source": "World Bank"
      },
      "basicWater": {
        "value": "55.3",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "basicSanitation": {
        "value": "15.4",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableWaterPerCapita": {
        "value": "11072.0",
        "unit": "m³ / 인",
        "year": "2022",
        "source": "World Bank"
      },
      "pavedRoads": {
        "value": "16.3",
        "unit": "%",
        "year": "2010",
        "source": "World Bank"
      },
      "railLines": {
        "value": "673",
        "unit": "km",
        "year": "2021",
        "source": "World Bank"
      }
    },
    "koicaCumulative": {
      "total": "약 233억 132만 원",
      "latest": "약 48억 4,419만 원",
      "latestYear": "2023",
      "startYear": "1991"
    },
    "koicaHealthDetail": null,
    "diplomaticContact": {
      "overseas": {
        "missionName": "주 마다가스카르 대한민국 대사관",
        "missionType": "대사관",
        "jointCoverage": false,
        "address": "Immeuble Fitaratra-9eme Etage Nord, Ankorondrano, 101 Antananarivo, Madagascar,",
        "phone": "(261)20-222-2933",
        "consularCenter": "(82)2-3210-0404",
        "tollFree": "080-020-0219",
        "emergency": "(261)32-781-0874",
        "website": "http://overseas.mofa.go.kr/mg-ko/index.do",
        "lat": -18.884792,
        "lng": 47.522183
      },
      "domestic": null
    },
    "marketEntry": {
      "companyCount": 0,
      "industries": [],
      "startupCount": 0,
      "startupFields": [],
      "companies": [],
      "startups": []
    }
  },
  "말라위": {
    "id": "말라위",
    "name": "말라위",
    "nameEn": "Malawi",
    "population": "19,650,000명 (2020년 기준)",
    "language": "영어(공용어), 치체와어",
    "capital": "릴롱궤(Lilongwe)",
    "climateScore": null,
    "mainClimateIssue": null,
    "diplomacyScore": null,
    "matchScore": null,
    "recommended": null,
    "priorityPartner": false,
    "koreaOdaHistory": true,
    "economy": {
      "gdpPerCapita": {
        "usd": "566 USD",
        "krw": "약 84만 원",
        "year": "2022",
        "source": "IMF/국제통화기금"
      },
      "gdpTotal": {
        "usd": "12,510,000,000 USD",
        "krw": "약 18조 7,650억 원",
        "year": "2022",
        "source": "IMF/국제통화기금"
      },
      "odaNetReceived": {
        "usd": "약 11억 USD",
        "krw": "약 1조 6,939억 8,750만 원",
        "year": "2019",
        "isNet": false
      },
      "recipientOda": {
        "usd": "약 1,194백만 USD",
        "krw": "약 1조 7,910억 원",
        "year": "2019",
        "isNet": false
      },
      "bilateral": {
        "usd": "약 50백만 USD",
        "krw": "약 750억 원",
        "year": "2019",
        "isNet": false
      },
      "koreaOda": {
        "usd": "약 4백만 USD",
        "krw": "약 60억 원",
        "year": "2019",
        "isNet": false
      }
    },
    "koica": {
      "total": "15,400,000 원",
      "sectors": [
        {
          "name": "보건",
          "percent": 42.5,
          "amount": "6,547,306 원"
        },
        {
          "name": "교육",
          "percent": 13.7,
          "amount": "2,102,532 원"
        },
        {
          "name": "농림수산",
          "percent": 27.2,
          "amount": "4,191,722 원"
        },
        {
          "name": "기술환경에너지",
          "percent": 0.9,
          "amount": "131,593 원"
        },
        {
          "name": "공공행정",
          "percent": 14.0,
          "amount": "2,150,295 원"
        },
        {
          "name": "긴급구호",
          "percent": 1.7,
          "amount": "268,856 원"
        },
        {
          "name": "기타",
          "percent": 0.1,
          "amount": "10,467 원"
        }
      ]
    },
    "infrastructure": {
      "hospitalBeds": {
        "value": "1.3",
        "unit": "병상 / 1,000명",
        "year": "2011",
        "source": "World Bank"
      },
      "physicians": {
        "value": "0.1",
        "unit": "의사 / 1,000명",
        "year": "2022",
        "source": "World Bank"
      },
      "nursesMidwives": {
        "value": "0.5",
        "unit": "간호사·조산사 / 1,000명",
        "year": "2022",
        "source": "World Bank"
      },
      "electricityAccess": {
        "value": "15.6",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableEnergyShare": {
        "value": "80.1",
        "unit": "%",
        "year": "2021",
        "source": "World Bank"
      },
      "cleanCookingAccess": {
        "value": "1.5",
        "unit": "%",
        "year": "2023",
        "source": "World Bank"
      },
      "internetPenetration": {
        "value": "19.0",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "mobileSubscriptions": {
        "value": "69.3",
        "unit": "건 / 100명",
        "year": "2024",
        "source": "World Bank"
      },
      "basicWater": {
        "value": "73.1",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "basicSanitation": {
        "value": "49.2",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableWaterPerCapita": {
        "value": "784.7",
        "unit": "m³ / 인",
        "year": "2022",
        "source": "World Bank"
      },
      "pavedRoads": {
        "value": "45.0",
        "unit": "%",
        "year": "2003",
        "source": "World Bank"
      },
      "railLines": {
        "value": "797",
        "unit": "km",
        "year": "2007",
        "source": "World Bank"
      }
    },
    "koicaCumulative": {
      "total": "약 297억 3,640만 원",
      "latest": "약 49억 3,645만 원",
      "latestYear": "2023",
      "startYear": "1991"
    },
    "koicaHealthDetail": {
      "year": "2024",
      "sectors": [
        {
          "name": "보건정책 및 행정관리",
          "percent": 100.0,
          "amount": "63,480,000 원"
        }
      ]
    },
    "diplomaticContact": {
      "overseas": {
        "missionName": "주 짐바브웨 대한민국 대사관",
        "missionType": "대사관",
        "jointCoverage": true,
        "address": "3rd floor(Bridge-Red light side), Eastgate Building, 3rd Street/Robert Mugabe Rolad, Harare, Zimbavwe(P.O.Box 4970),",
        "phone": "(263-242)756-541",
        "consularCenter": "(82)2-3210-0404",
        "tollFree": "080-020-0219",
        "emergency": "(263)782-840-787",
        "website": "http://overseas.mofa.go.kr/zw-ko/index.do",
        "lat": -17.831424,
        "lng": 31.052597
      },
      "domestic": null
    },
    "marketEntry": {
      "companyCount": 3,
      "industries": [
        {
          "name": "금융 및 보험업",
          "count": 1
        },
        {
          "name": "정보통신업",
          "count": 1
        },
        {
          "name": "복합산업",
          "count": 1
        }
      ],
      "startupCount": 0,
      "startupFields": [],
      "companies": [
        {
          "nameKo": "말라위 국립은행",
          "nameEn": "National Bank of Malawi",
          "foundedYear": "1971",
          "parentCompany": null,
          "hq": "말라위 블랜타이어(Blantyre)",
          "industry": "금융 및 보험업",
          "subIndustry": "예금, 대출, 투자 등",
          "corpType": "공기업",
          "employees": "39773",
          "marketCap": {
            "usd": "344,000,000 USD",
            "krw": "약 5,160억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "23,000,000 USD",
            "krw": "약 345억 원",
            "year": "2020"
          },
          "website": "natbank.co.mw",
          "highlights": [
            "1971년 바클리스 은행(Barclays Bank)와 스탠다드 은행(Standard Chartered Bank)의 합병으로 설립되었으며 국가은행 규제기관으로서의 역할도 함",
            "Press Corp (51.5%), Old Mutual Group (25.1%) 등이 지분 소유",
            "2000년 말라위 증권거래소에 상장되었으며 말라위 전역에 33개의 서비스센터 운영"
          ]
        },
        {
          "nameKo": "텔레콤 네트웍스 말라위",
          "nameEn": "Telekom Networks Malawi",
          "foundedYear": "1995",
          "parentCompany": "Press Corporation Limited \r- 창립연도 1961년",
          "hq": "말라위 블랜타이어(Blantyre)",
          "industry": "정보통신업",
          "subIndustry": "3G, 4G서비스, 클라우드, Wifi, 데이터센터 등",
          "corpType": "사기업",
          "employees": null,
          "marketCap": {
            "usd": "350,000,000 USD",
            "krw": "약 5,250억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "23,000,000 USD",
            "krw": "약 345억 원",
            "year": "2020"
          },
          "website": "www.tnm.co.mw",
          "highlights": [
            "Telekom Networks Malawi는 말라위 전역의 74%에 달하는 지역에 서비스를 제공하는 모바일 서비스 제공사이며, 말라위 내 약 3백만 명의 고객 보유",
            "2008년 상장되었으며, 최대 주주는 Press Corporation Ltd.로 41.31%의 지분 보유"
          ]
        },
        {
          "nameKo": "프레스 코퍼레이션",
          "nameEn": "Press Corp",
          "foundedYear": "1961",
          "parentCompany": "Press Group Limited",
          "hq": "말라위 블랜타이어(Blantyre)",
          "industry": "복합산업",
          "subIndustry": "투자, 통신, 에너지, 유통, 부동산 등",
          "corpType": "사기업(유한회사)",
          "employees": "1000",
          "marketCap": {
            "usd": "203,000,000 USD",
            "krw": "약 3,045억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "25,000,000 USD",
            "krw": "약 375억 원",
            "year": "2020"
          },
          "website": "www.presscorp.com",
          "highlights": [
            "말라위 최대의 복합기업으로 금융, 통신, 에너지, 소비재, 식음료, 자산투자, 관광 등 다양한 분야에 투자하며 8개의 자회사, 4개의 합작회사, 1개의 제휴회사 등 보유",
            "지분은 Press Trust가 46.23%, Old Mutual Life Aeeurance Ltd 14.29% 등을 보유함"
          ]
        }
      ],
      "startups": []
    }
  },
  "말리": {
    "id": "말리",
    "name": "말리",
    "nameEn": "Mali",
    "population": "22,590,000명 (2020년 기준)",
    "language": "프랑스어(공용어), 밤바라어 등",
    "capital": "바마코(Bamako)",
    "climateScore": null,
    "mainClimateIssue": null,
    "diplomacyScore": null,
    "matchScore": null,
    "recommended": null,
    "priorityPartner": false,
    "koreaOdaHistory": true,
    "economy": {
      "gdpPerCapita": {
        "usd": "833 USD",
        "krw": "약 124만 원",
        "year": "2021",
        "source": "World Bank"
      },
      "gdpTotal": {
        "usd": "18,800,000,000 USD",
        "krw": "약 28조 2,000억 원",
        "year": "2021",
        "source": "World Bank"
      },
      "odaNetReceived": {
        "usd": "약 11억 USD",
        "krw": "약 1조 6,764억 8,250만 원",
        "year": "2019",
        "isNet": false
      },
      "recipientOda": {
        "usd": "약 1,896백만 USD",
        "krw": "약 2조 8,440억 원",
        "year": "2019",
        "isNet": false
      },
      "bilateral": {
        "usd": "약 55백만 USD",
        "krw": "약 825억 원",
        "year": "2019",
        "isNet": false
      },
      "koreaOda": {
        "usd": "약 6백만 USD",
        "krw": "약 90억 원",
        "year": "2019",
        "isNet": false
      }
    },
    "koica": {
      "total": "17,000,000 원",
      "sectors": [
        {
          "name": "보건",
          "percent": 5.0,
          "amount": "857,357 원"
        },
        {
          "name": "교육",
          "percent": 70.0,
          "amount": "11,900,000 원"
        },
        {
          "name": "농림수산",
          "percent": 18.0,
          "amount": "3,061,933 원"
        },
        {
          "name": "기술환경에너지",
          "percent": 0.5,
          "amount": "80,563 원"
        },
        {
          "name": "공공행정",
          "percent": 5.7,
          "amount": "961,057 원"
        },
        {
          "name": "긴급구호",
          "percent": 0.5,
          "amount": "90,894 원"
        },
        {
          "name": "기타",
          "percent": 0.0,
          "amount": "5,040 원"
        }
      ]
    },
    "infrastructure": {
      "hospitalBeds": {
        "value": "0.2",
        "unit": "병상 / 1,000명",
        "year": "2018",
        "source": "World Bank"
      },
      "physicians": {
        "value": "0.2",
        "unit": "의사 / 1,000명",
        "year": "2023",
        "source": "World Bank"
      },
      "nursesMidwives": {
        "value": "0.3",
        "unit": "간호사·조산사 / 1,000명",
        "year": "2023",
        "source": "World Bank"
      },
      "electricityAccess": {
        "value": "49.5",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableEnergyShare": {
        "value": "62.3",
        "unit": "%",
        "year": "2021",
        "source": "World Bank"
      },
      "cleanCookingAccess": {
        "value": "1.3",
        "unit": "%",
        "year": "2023",
        "source": "World Bank"
      },
      "internetPenetration": {
        "value": "36.8",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "mobileSubscriptions": {
        "value": "112.1",
        "unit": "건 / 100명",
        "year": "2022",
        "source": "World Bank"
      },
      "basicWater": {
        "value": "86.4",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "basicSanitation": {
        "value": "47.8",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableWaterPerCapita": {
        "value": "2600.5",
        "unit": "m³ / 인",
        "year": "2022",
        "source": "World Bank"
      },
      "pavedRoads": {
        "value": "24.6",
        "unit": "%",
        "year": "2009",
        "source": "World Bank"
      },
      "railLines": {
        "value": "733",
        "unit": "km",
        "year": "2002",
        "source": "World Bank"
      }
    },
    "koicaCumulative": {
      "total": "약 83억 4,416만 원",
      "latest": "약 3억 8,490만 원",
      "latestYear": "2023",
      "startYear": "1991"
    },
    "koicaHealthDetail": null,
    "diplomaticContact": {
      "overseas": {
        "missionName": "주 세네갈 대한민국 대사관",
        "missionType": "대사관",
        "jointCoverage": true,
        "address": "Ambassade de la Republique de Coree, Villa Hamoudy, Rue Aime Cesaire, Fann Residence, B.P.5850, Dakar, Senegal,",
        "phone": "(221)33-824-06-72",
        "consularCenter": "(82)2-3210-0404",
        "tollFree": "080-020-0219",
        "emergency": "(221)77-639-5109",
        "website": "http://overseas.mofa.go.kr/sn-ko/index.do",
        "lat": 14.695506,
        "lng": -17.467318
      },
      "domestic": null
    },
    "marketEntry": {
      "companyCount": 0,
      "industries": [],
      "startupCount": 0,
      "startupFields": [],
      "companies": [],
      "startups": []
    }
  },
  "모로코": {
    "id": "모로코",
    "name": "모로코",
    "nameEn": "Morocco",
    "population": "37,020,000명 (2020년 기준)",
    "language": "아랍어, 아마지그어, 프랑스어(상용어)",
    "capital": "라바트(Rabat)",
    "climateScore": null,
    "mainClimateIssue": null,
    "diplomacyScore": null,
    "matchScore": null,
    "recommended": null,
    "priorityPartner": false,
    "koreaOdaHistory": true,
    "economy": {
      "gdpPerCapita": {
        "usd": "3,890 USD",
        "krw": "약 583만 원",
        "year": "2023",
        "source": "IMF/국제통화기금"
      },
      "gdpTotal": {
        "usd": "143,960,000,000 USD",
        "krw": "약 215조 9,400억 원",
        "year": "2023",
        "source": "IMF/국제통화기금"
      },
      "odaNetReceived": {
        "usd": "약 1억 USD",
        "krw": "약 968억 5,842만 원",
        "year": "2019",
        "isNet": false
      },
      "recipientOda": {
        "usd": "약 2,877백만 USD",
        "krw": "약 4조 3,155억 원",
        "year": "2019",
        "isNet": false
      },
      "bilateral": {
        "usd": "약 57백만 USD",
        "krw": "약 855억 원",
        "year": "2019",
        "isNet": false
      },
      "koreaOda": {
        "usd": "약 6백만 USD",
        "krw": "약 90억 원",
        "year": "2019",
        "isNet": false
      }
    },
    "koica": {
      "total": "73,500,000 원",
      "sectors": [
        {
          "name": "보건",
          "percent": 7.7,
          "amount": "5,687,014 원"
        },
        {
          "name": "교육",
          "percent": 42.6,
          "amount": "31,300,000 원"
        },
        {
          "name": "농림수산",
          "percent": 1.9,
          "amount": "1,402,857 원"
        },
        {
          "name": "기술환경에너지",
          "percent": 20.1,
          "amount": "14,800,000 원"
        },
        {
          "name": "공공행정",
          "percent": 26.0,
          "amount": "19,100,000 원"
        },
        {
          "name": "긴급구호",
          "percent": 0.2,
          "amount": "180,259 원"
        },
        {
          "name": "기타",
          "percent": 1.4,
          "amount": "1,022,007 원"
        }
      ]
    },
    "infrastructure": {
      "hospitalBeds": {
        "value": "0.7",
        "unit": "병상 / 1,000명",
        "year": "2023",
        "source": "World Bank"
      },
      "physicians": {
        "value": "0.7",
        "unit": "의사 / 1,000명",
        "year": "2021",
        "source": "World Bank"
      },
      "nursesMidwives": {
        "value": "0.9",
        "unit": "간호사·조산사 / 1,000명",
        "year": "2023",
        "source": "World Bank"
      },
      "electricityAccess": {
        "value": "100",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableEnergyShare": {
        "value": "19.3",
        "unit": "%",
        "year": "2021",
        "source": "World Bank"
      },
      "cleanCookingAccess": {
        "value": "98.1",
        "unit": "%",
        "year": "2023",
        "source": "World Bank"
      },
      "internetPenetration": {
        "value": "91.2",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "mobileSubscriptions": {
        "value": "153.1",
        "unit": "건 / 100명",
        "year": "2024",
        "source": "World Bank"
      },
      "basicWater": {
        "value": "92.2",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "basicSanitation": {
        "value": "87.8",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableWaterPerCapita": {
        "value": "776.9",
        "unit": "m³ / 인",
        "year": "2022",
        "source": "World Bank"
      },
      "pavedRoads": {
        "value": "70.4",
        "unit": "%",
        "year": "2010",
        "source": "World Bank"
      },
      "railLines": {
        "value": "2295",
        "unit": "km",
        "year": "2021",
        "source": "World Bank"
      }
    },
    "koicaCumulative": {
      "total": "약 960억 8,043만 원",
      "latest": "약 57억 1,129만 원",
      "latestYear": "2023",
      "startYear": "1991"
    },
    "koicaHealthDetail": {
      "year": "2024",
      "sectors": [
        {
          "name": "의료교육 및 훈련",
          "percent": 74.2,
          "amount": "45,760,500 원"
        },
        {
          "name": "보건정책 및 행정관리",
          "percent": 25.8,
          "amount": "15,870,000 원"
        }
      ]
    },
    "diplomaticContact": {
      "overseas": {
        "missionName": "주 모로코 대한민국 대사관",
        "missionType": "대사관",
        "jointCoverage": false,
        "address": "41 Av. Mehdi Ben Barka, Souissi, Rabat, Morocco,",
        "phone": "(212)537-75-1767",
        "consularCenter": "(82)2-3210-0404",
        "tollFree": "080-020-0219",
        "emergency": "(212)66-277-2408",
        "website": "http://overseas.mofa.go.kr/ma-ko/index.do",
        "lat": 33.978091,
        "lng": -6.840522
      },
      "domestic": {
        "ambassador": "Chafik RACHADI",
        "address": "서울특별시 용산구 장문로 32, 1층",
        "phone": "793-6249/1479/7097",
        "email": "info@moroccoembassy.kr",
        "fax": "792-8178",
        "updatedAt": "2020-01-14"
      }
    },
    "marketEntry": {
      "companyCount": 30,
      "industries": [
        {
          "name": "금융 및 보험업",
          "count": 8
        },
        {
          "name": "제조업",
          "count": 8
        },
        {
          "name": "광업",
          "count": 4
        },
        {
          "name": "도매 및 소매업",
          "count": 3
        },
        {
          "name": "정보통신업",
          "count": 2
        },
        {
          "name": "건설업",
          "count": 1
        },
        {
          "name": "부동산업",
          "count": 1
        },
        {
          "name": "수도, 하수 및 폐기물 처리, 원료재생업",
          "count": 1
        },
        {
          "name": "운수 및 창고업",
          "count": 1
        },
        {
          "name": "에너지",
          "count": 1
        }
      ],
      "startupCount": 1,
      "startupFields": [
        {
          "name": "금융&핀테크",
          "count": 1
        }
      ],
      "companies": [
        {
          "nameKo": "국민중앙은행",
          "nameEn": "Banque Centrale Populaire",
          "foundedYear": "1926",
          "parentCompany": null,
          "hq": "모로코 카사블랑카(Casablanca)",
          "industry": "금융 및 보험업",
          "subIndustry": "은행서비스",
          "corpType": "사기업",
          "employees": "1742",
          "marketCap": {
            "usd": "4,067,000,000 USD",
            "krw": "약 6조 1,005억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "293,000,000 USD",
            "krw": "약 4,395억 원",
            "year": "2020"
          },
          "website": "www.groupebcp.com",
          "highlights": [
            "아프리카, 유럽, 중동, 미주에 지점을 운영 중이며 2020년 7월부터 세계각지에서 활동 중인 모로코인들의 온라인 계좌개설 시작",
            "독일, 영국, 캐나다, 스페인, 프랑스, 지브롤터, 벨기에 및 네델란드에 해외사무소를 두고 있음",
            "2020년 7월 중국의 화웨이(Huawei)와 기술 솔루션 분야에서의 전략적 협력을 강화하기 위한 MOU체결"
          ]
        },
        {
          "nameKo": "다논 공장",
          "nameEn": "Centrale Danone",
          "foundedYear": "1919",
          "parentCompany": "Compagine Gervais Danone S.A\r- 창립연도: 2006년",
          "hq": "모로코 카사블랑카(Casablanca)",
          "industry": "제조업",
          "subIndustry": "우유, 버터, 요커트 등 식품 제조",
          "corpType": "사기업",
          "employees": "17320",
          "marketCap": {
            "usd": "543,000,000 USD",
            "krw": "약 8,145억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "-53,000,000 USD",
            "krw": "약 -795억 원",
            "year": "2020"
          },
          "website": "corporate.danone.ma",
          "highlights": [
            "모회사인 Danone은 세계적인 유제품 제조사로 전 세계 120개국에서 판매되고 있으며 55개국에 약 100,000명 이상의 직원을 고용"
          ]
        },
        {
          "nameKo": "델타 홀딩",
          "nameEn": "Delta Holding",
          "foundedYear": "1974",
          "parentCompany": null,
          "hq": "모로코 스키라트(Skhirat)",
          "industry": "건설업",
          "subIndustry": "건축, 도로, 화학, 금속 등",
          "corpType": "사기업",
          "employees": null,
          "marketCap": {
            "usd": "247,000,000 USD",
            "krw": "약 3,705억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "22,000,000 USD",
            "krw": "약 330억 원",
            "year": "2020"
          },
          "website": "www.deltaholding.ma",
          "highlights": [
            "산업 다각화(인프라, 물&환경, 야금업, 화학)를 통해 아프리카, 유럽, 북미, 아시아 지역으로 사업 확대",
            "아프리카, 유럽 등지에 34개의 자회사, 약 3,600명 직원 고용"
          ]
        },
        {
          "nameKo": "두자 프로모션 아도하",
          "nameEn": "Duuja Promotion Addoha",
          "foundedYear": "1988",
          "parentCompany": null,
          "hq": "모로코 카사블랑카(Casablanca)",
          "industry": "부동산업",
          "subIndustry": "아파트, 빌라, 토지 등",
          "corpType": "사기업(주식회사)",
          "employees": "3600",
          "marketCap": {
            "usd": "264,000,000 USD",
            "krw": "약 3,960억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "37,000,000 USD",
            "krw": "약 555억 원",
            "year": "2020"
          },
          "website": "www.groupeaddoha.com",
          "highlights": [
            "1990년대부터 2000년 초까지 공영주택(logement social)을 위주로 사업을 전개 2006년 7월 상장됨.",
            "스페인 회사 Marinsa-Fadesa 모로코 지사 지분의 50%를 매수하여 모로코 사이디아(Saidia) 지역에서 700헥타르에 달하는 지중해사업 시행",
            "30년 이상 부동산 분야의 전문기업으로 인정받아왔으며, 서아프리카국게에서의 부동산 개발도 확대하고 있음. 최근 코트디부아르, 기니 시장에 맞춘 홈페이지 개설"
          ]
        },
        {
          "nameKo": "라벨비",
          "nameEn": "LabelVie",
          "foundedYear": "2001",
          "parentCompany": "Retail Holding\r-창립연도: 2005년",
          "hq": "모로코 라바트(Rabat)",
          "industry": "도매 및 소매업",
          "subIndustry": "대형 종합마켓",
          "corpType": "사기업",
          "employees": "310",
          "marketCap": {
            "usd": "771,000,000 USD",
            "krw": "약 1조 1,565억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "28,000,000 USD",
            "krw": "약 420억 원",
            "year": "2020"
          },
          "website": "www.labelvie.ma",
          "highlights": [
            "Carrefour, Carrefour market Gourmet 등의 브랜드를 통해 종합마켓 서비스 사업을 전개, 2007년 카사블랑카 증권거래소 상장",
            "코로나19에 대응하고 고객서비스를 개선하기 위해, 2020년 7월 모로코 전 매장에 모바일 지불시스템을 도입하고, 기존 홈딜리버리 서비스에 이어 나이지리아 Jumia와 파트너십을 맺고 Jumia Food 홈페이지와 애플리케이션을 통한 무료 딜리버리 서비스 시작"
          ]
        },
        {
          "nameKo": "라파즈 홀심 모로코",
          "nameEn": "LafargeHolcim Moroc",
          "foundedYear": "2016",
          "parentCompany": "Lafagehocim\r- 창립연도: 2015년",
          "hq": "알제리 알제",
          "industry": "제조업",
          "subIndustry": "시멘트, 콘크리트, 골재 등",
          "corpType": "사기업",
          "employees": "19754",
          "marketCap": {
            "usd": "2,810,000,000 USD",
            "krw": "약 4조 2,150억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "155,000,000 USD",
            "krw": "약 2,325억 원",
            "year": "2020"
          },
          "website": "www.lafageholcim.ma",
          "highlights": [
            "2016년 Lafage와 Holcim의 합병으로 설립된 건설 원자재 회사이며 카사블랑카 증권거래소에 상장",
            "모로코 내 22개의 공장 및 센터를 보유하고 있으며 모회사인 LafageHolcim은 전 세계 80여 국가에서 약 90,000명의 직원 고용",
            "2017년 3월 스마트 건설 연구소(Smart Construction Lab)개소"
          ]
        },
        {
          "nameKo": "레지에르 크리스탈",
          "nameEn": "Lesieur Cristal",
          "foundedYear": "1941",
          "parentCompany": "Group Avril",
          "hq": "모로코 카사블랑카(Casablanca)",
          "industry": "제조업",
          "subIndustry": "식료품 생산 등",
          "corpType": "사기업",
          "employees": "4700",
          "marketCap": {
            "usd": "355,000,000 USD",
            "krw": "약 5,325억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "9,000,000 USD",
            "krw": "약 135억 원",
            "year": "2020"
          },
          "website": "www.lesieur-cristal.ma",
          "highlights": [
            "올리브오일, 위생용품, 주방용품 등을 생산하는 기업이며 1941년 Lesieur프랑스 그룹에 의해 설립되어 1980년대 ONA 국영그룹에게 매각됨",
            "2017년 미국에 자회사를 (Lesieur Cristal, lnc)설립하여 올리브오일 기반으로 상품 판매",
            "2019년, 마가린 취급회사인 Indusalim 인수"
          ]
        },
        {
          "nameKo": "리덱",
          "nameEn": "Lydec",
          "foundedYear": "1995",
          "parentCompany": "Suez\r- 창립연도: 2008년",
          "hq": "모로코 카사블랑카(Casablanca)",
          "industry": "수도, 하수 및 폐기물 처리, 원료재생업",
          "subIndustry": "전기, 물, 정화 등",
          "corpType": "사기업",
          "employees": null,
          "marketCap": {
            "usd": "281,000,000 USD",
            "krw": "약 4,215억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "20,000,000 USD",
            "krw": "약 300억 원",
            "year": "2020"
          },
          "website": "client.lydec.ma",
          "highlights": [
            "카사블랑카의 수도 및 전기 시설을 관리하는 Lydec(Lyonnaise des Eaux de Casablanca)은 2020년 초 수도 및 전기 시설에서 발생하는 폐기물을 직접관리하도록 모로코 환경부로부터 승인받음",
            "2020년 4월, 코로나 19로 인한 국가재난상황에 대한 대응기금으로 1,000만 디르함 기부, 동년2/4분기 매출은 전년동기 대비 1.2% 증가"
          ]
        },
        {
          "nameKo": "마나잼",
          "nameEn": "Managem",
          "foundedYear": "1928",
          "parentCompany": "Al Mada",
          "hq": "모로코 카사블랑카(Casablanca)",
          "industry": "광업",
          "subIndustry": "금, 은, 구리, 코발트 등",
          "corpType": "사기업(주식회사)",
          "employees": "553",
          "marketCap": {
            "usd": "391,000,000 USD",
            "krw": "약 5,865억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "36,000,000 USD",
            "krw": "약 540억 원",
            "year": "2020"
          },
          "website": "www.managemgroup.com",
          "highlights": [
            "모로코 내 7개의 광산기지를 운영하고 있으며, 기니, 가봉, 콩고민주공화국, 수단 등에서도 개발 및 채굴 프로젝트를 진행"
          ]
        },
        {
          "nameKo": "마르사 모로코",
          "nameEn": "Marsa Maroc",
          "foundedYear": "2006",
          "parentCompany": null,
          "hq": "모로코 카사블랑카(Casablanca)",
          "industry": "운수 및 창고업",
          "subIndustry": "물류",
          "corpType": "사기업",
          "employees": "1500",
          "marketCap": {
            "usd": "1,117,000,000 USD",
            "krw": "약 1조 6,755억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "54,000,000 USD",
            "krw": "약 810억 원",
            "year": "2020"
          },
          "website": "www.marsamaroc.co.ma",
          "highlights": [
            "2006년 모로코 항만개발청(Office d'Exploitation des port)이 SODEP(Marsa Maroc의 전신)과 ANP(Agence Nationale des Port)로 분리되었으며 2016년 모로코 정부가 지분의 42%를 매각",
            "입찰 및 관련자료를 전담하는 포털사이트 운영"
          ]
        },
        {
          "nameKo": "모로코 시멘트",
          "nameEn": "Ciment du Maroc",
          "foundedYear": "1951",
          "parentCompany": "HeidelbergCement Group \r- 창립자: Johann Philipp Schifferdecker\r- 창립연도: 1894년",
          "hq": "모로코 카사블랑카(Casablanca)",
          "industry": "제조업",
          "subIndustry": "시멘트, 골재 등",
          "corpType": "사기업",
          "employees": "480",
          "marketCap": {
            "usd": "1,693,000,000 USD",
            "krw": "약 2조 5,395억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "99,000,000 USD",
            "krw": "약 1,485억 원",
            "year": "2020"
          },
          "website": "www.cimentsdumaroc.com",
          "highlights": [
            "독일 기업 HedelbergCement의 자회사로 설립된 모로코 건설 원자재 기업으로 모로코 내에서 두 번째로 시멘트 생산량이 많음",
            "모로코 내 34개의 공장, 채석장 및 발전소 운영",
            "2020년 5월, Atlantic Ciment사와 Cimsud 인수",
            "2020년 1/4분기 매출은 전년동기 대비 -9.8% 감소하였지만 동기간 투자액은 전년동기 대비 43.4% 증가"
          ]
        },
        {
          "nameKo": "모로코 양조사",
          "nameEn": "Societe des Brasseries du Maroc",
          "foundedYear": "1919",
          "parentCompany": "Castel Group \r- 창립자: Pierre Castel\r- 창립연도: 1949년",
          "hq": "모로코 카사블랑카(Casablanca)",
          "industry": "제조업",
          "subIndustry": "음료 등 제조",
          "corpType": "사기업",
          "employees": "321",
          "marketCap": {
            "usd": "558,000,000 USD",
            "krw": "약 8,370억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "31,000,000 USD",
            "krw": "약 465억 원",
            "year": "2020"
          },
          "website": "www.boissons-maroc.com",
          "highlights": [
            "1919년 BIG그룹이 설립한 맥아 및 양조 회사이며, 이후 Castel Group에 인수됨",
            "4개의 자회사를 운영하고 있으며 4개의 저장시설, 2개의 양조시설, 3개의 와인 온도 조절실, 1개의 올리브 저장 및 분쇄시설을 운영 중임",
            "글로벌 대표맥주 Heineken, 모로코 대표맥주 Casablanca 등을 포함한 6종의 맥주(Flag Speciale, 33Export, Strork, Flag PILS)를 취급함"
          ]
        },
        {
          "nameKo": "모로코 크레디",
          "nameEn": "Credit du Moroc",
          "foundedYear": "1929",
          "parentCompany": "Groupe Credit Agricole\r- 창립연도: 1894년",
          "hq": "모로코 카사블랑카(Casablanca)",
          "industry": "금융 및 보험업",
          "subIndustry": "은행, 보험 서비스",
          "corpType": "사기업",
          "employees": null,
          "marketCap": {
            "usd": "500,000,000 USD",
            "krw": "약 7,500억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "58,000,000 USD",
            "krw": "약 870억 원",
            "year": "2020"
          },
          "website": "www.credutdumaroc.ma",
          "highlights": [
            "2020년 2월, 유럽부흥개발은행과 모로코의 녹색경제와 가치사슬 고도화를 위한 협약 체결, 유럽부흥개발은행은 중소기업을 지원하는 '녹색가치사슬 프로그램'의 일환으로 2,000만 유로를 융자함"
          ]
        },
        {
          "nameKo": "모로코 텔레콤",
          "nameEn": "Maroc Telecom",
          "foundedYear": "1988",
          "parentCompany": "Etisalat",
          "hq": "모로코 라바트(Rabat)",
          "industry": "정보통신업",
          "subIndustry": "인터넷 서비스, 로밍 등",
          "corpType": "사기업",
          "employees": "5000",
          "marketCap": {
            "usd": "11,082,000,000 USD",
            "krw": "약 16조 6,230억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "266,000,000 USD",
            "krw": "약 3,990억 원",
            "year": "2020"
          },
          "website": "www.iam.ma",
          "highlights": [
            "AM이라는 이름으로 1998년 설립되었으며 2001년 부문민영화를 거쳐 Vivendi의 자회사가 된 이후, 2013년 Vivendi와 Etisalat의 협상에 따라 2014년부터 Etisalat의 자회사가 됨",
            "모로코 내 8개의 지사와 440개의 영업소를 운영하고 있음. 이외에도 약 80,000명의 소매상인을 통해 제품 판매 및 서비스 제공",
            "2020년 1/4분기 기준, 고객 수 6,840만명 달성"
          ]
        },
        {
          "nameKo": "비엠씨이",
          "nameEn": "BMCE",
          "foundedYear": "1959",
          "parentCompany": null,
          "hq": "모로코 카사블랑카(Casablanca)",
          "industry": "금융 및 보험업",
          "subIndustry": "자산관리, 임대, 보험 등",
          "corpType": "사기업",
          "employees": "4600",
          "marketCap": {
            "usd": "697,000,000 USD",
            "krw": "약 1조 455억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "55,000,000 USD",
            "krw": "약 825억 원",
            "year": "2020"
          },
          "website": "www.bankofafrica.ma",
          "highlights": [
            "모로코의 대형 상업은행으로 모로코에서 697개, 이외 아프리카 국가에서 560개의 지점을 운영하고 있으며, 프랑스, 스페인, 영국, 벨기에, 이탈리아, 독일, 아랍에미리트, 캐나다, 네델란드에서도 지점을 운영하고 있음",
            "2020년 7월, 유럽부흥개발은행은 '모로코 내 가장 활동적인 파트너은행'으로 BMCE를 지정"
          ]
        },
        {
          "nameKo": "사함 보험",
          "nameEn": "Saham Assurance",
          "foundedYear": "1949",
          "parentCompany": "Groupe Sanlam \r- 창립연도: 1918년",
          "hq": "모로코 카사블랑카(Casablanca)",
          "industry": "금융 및 보험업",
          "subIndustry": "보험 등",
          "corpType": "사기업",
          "employees": "500",
          "marketCap": {
            "usd": "425,000,000 USD",
            "krw": "약 6,375억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "44,000,000 USD",
            "krw": "약 660억 원",
            "year": "2020"
          },
          "website": "sahamassurance.ma",
          "highlights": [
            "1949년 설립이래, 앙골라, 모리셔스, 케냐 등 아프리카 대륙을 비롯하여 레바논, 사우디아라비아 등에도 진출함",
            "2020년 6월, 코로나19 확산방지를 위한 예방 및 기능조치 가이드북 발간"
          ]
        },
        {
          "nameKo": "소데마",
          "nameEn": "Sothema",
          "foundedYear": "1976",
          "parentCompany": null,
          "hq": "모로코 부스쿠라(Bouskoura)",
          "industry": "제조업",
          "subIndustry": "의약품 및 의료기기 제조",
          "corpType": "사기업",
          "employees": null,
          "marketCap": {
            "usd": "381,000,000 USD",
            "krw": "약 5,715억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "21,000,000 USD",
            "krw": "약 315억 원",
            "year": "2020"
          },
          "website": "sothema.com",
          "highlights": [
            "모로코 지분 100%의 의약품회사로 Bicon, Aspen, Genpharm 등 전 세계 35개의 연구소를 고객으로 보유하고 있으며 모로코 및 사하라이남 아프리카인에게 적절한 치료를 제공하는 것을 기업의 미션으로 삼고 있음",
            "설립 이후 40년 동안 300여개의 제품 출시, 시장점유율 9%를 차지하고 있음. 2005년 카사블랑카 주식거래소 상장",
            "프랑스, 포르투갈, 세네갈, 말리, 부르키나파소, 니제르, 토고, 베냉, 가봉, 르완다, 예멘, 오만 등 12개국에 35개의 제약연구소 운영"
          ]
        },
        {
          "nameKo": "씨아이에이치 은행",
          "nameEn": "CIH",
          "foundedYear": "1920",
          "parentCompany": "Group CDG\r-  창립연도: 1959년",
          "hq": "모로코 카사블랑카(Casablanca)",
          "industry": "금융 및 보험업",
          "subIndustry": "은행, 금융 서비스",
          "corpType": "사기업(주식회사)",
          "employees": "6900",
          "marketCap": {
            "usd": "637,000,000 USD",
            "krw": "약 9,555억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "42,000,000 USD",
            "krw": "약 630억 원",
            "year": "2020"
          },
          "website": "www.cihbank.ma",
          "highlights": [
            "1920년 부동산대출은행(Caisse de prets immobiliers du maroc)으로 설립되었으며 이후 호텔업까지 확장, 현재는 은행업 전반에 걸친 사업을 전개하고 있음",
            "독일의 은행그룹인 Commerzbank로부터 STP Award 2019 수상"
          ]
        },
        {
          "nameKo": "아틀란타",
          "nameEn": "Atlanta",
          "foundedYear": "1947",
          "parentCompany": "Groupe Holmarcom\r- 창립자: Mohamed Hassan BENSALAH\r- 창립연도: 1978년",
          "hq": "모로코 카사블랑카(Casablanca)",
          "industry": "금융 및 보험업",
          "subIndustry": "자동차 보험, 주거 보험 등",
          "corpType": "사기업",
          "employees": "20000",
          "marketCap": {
            "usd": "347,000,000 USD",
            "krw": "약 5,205억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "36,000,000 USD",
            "krw": "약 540억 원",
            "year": "2020"
          },
          "website": "www.atlanta.ma",
          "highlights": [
            "348개의 지점, 321개의 파트너사를 보유한 금융기업으로 혁신, 투명성, 엄정성, 전문성, 고객지향성을 주요 가치로 삼고 있음",
            "2019년 총매출이 전년도에 비해 9.1% 상승한 48억 8천만 디르함을 기록",
            "2020년 6월, 모회사 Holmarcom의 도 다른 자회사인 SANAD와 합병되어 사명이 AtlantaSanad로 변경됨"
          ]
        },
        {
          "nameKo": "아티자리와파 은행",
          "nameEn": "Attijariwafa Bank",
          "foundedYear": "1904",
          "parentCompany": "Societe Nationale d' Investissement: SNI\r- 창립자: 모로코 왕실\r- 창립연도: 1966년",
          "hq": "모로코 카사블랑카(Casablanca)",
          "industry": "금융 및 보험업",
          "subIndustry": "은행서비스",
          "corpType": "사기업",
          "employees": "450",
          "marketCap": {
            "usd": "6,993,000,000 USD",
            "krw": "약 10조 4,895억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "568,000,000 USD",
            "krw": "약 8,520억 원",
            "year": "2020"
          },
          "website": "www.attijariwafabank.com",
          "highlights": [
            "모로코 왕실이 소유한 대규모 지주회사 SNI의 자회사이며 2016년 아프리카 제4위의 대형 은행으로 기록됨. SNI는 은행, 통신, 재생에너지, 식품 등의 분야에 자회사를 운영함",
            "아프리카 14개국 외 유럽과 중동 등 총 25개국에 지점을 운영하며, 약 1,000만 명의 개인 및 기업고객을 보유",
            "SNI가 47.77%의 지분을 보유한 최대주주임"
          ]
        },
        {
          "nameKo": "아프리키아 가즈",
          "nameEn": "Afriquia Gaz",
          "foundedYear": "1932",
          "parentCompany": "Akwa Group \r- 창립자: Ahmed Ouldhadj Akhannouch\r- 창립연도: 1932년",
          "hq": "모로코 카사블랑카(Casablanca)",
          "industry": "광업",
          "subIndustry": "LPG, 부탄, 프로판",
          "corpType": "사기업(주식회사)",
          "employees": "700",
          "marketCap": {
            "usd": "1,173,000,000 USD",
            "krw": "약 1조 7,595억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "68,000,000 USD",
            "krw": "약 1,020억 원",
            "year": "2020"
          },
          "website": "www.afriquiagaz.com",
          "highlights": [
            "Afriquia Gaz는 모로코 기반의 LPG정제 및 판매기업으로 모로코 내 400여개의 주유소를 운영하며, 주요 브랜드로는  Afriquia Gaz, Tissir Gaz, Ultragaz, National Gaz, Campingaz등이 있음",
            "2019년 1/4분기에 비해 2020년 ㅊㅇ 투자액 3.9% 증가했으며, 온라인 판매량 증가로 2020년 1/4분기 매출은 2019년 동 기간에 비해 1.1% 상승"
          ]
        },
        {
          "nameKo": "에스엠아이",
          "nameEn": "SMI",
          "foundedYear": "1969",
          "parentCompany": "Managem\r- 창립자: Jean Epint\r- 창립연도: 1930년",
          "hq": "모로코 카사블랑카(Casablanca)",
          "industry": "광업",
          "subIndustry": "은 채굴",
          "corpType": "사기업(주식회사)",
          "employees": "10000",
          "marketCap": {
            "usd": "236,000,000 USD",
            "krw": "약 3,540억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "-17,000,000 USD",
            "krw": "약 -255억 원",
            "year": "2020"
          },
          "website": "www.smicompany.ma",
          "highlights": [
            "모회사 Managem은 모로코 왕실가족이 운영하는 기업으로 귀금속, 코발트, 금속 등의 채굴 및 사업을 진행",
            "Managem의 다른 자회사로는 Compagnie de Tifnout Tighanimine(CTT), Akka Gold Mining, Compagnie Miniere de Guemassa(CMgG), SAMINE 등이 있음"
          ]
        },
        {
          "nameKo": "오토 네이마",
          "nameEn": "Auto Nejma",
          "foundedYear": "1963",
          "parentCompany": null,
          "hq": "모로코 카사블랑카(Casablanca)",
          "industry": "도매 및 소매업",
          "subIndustry": "자동차, 차량 부속품 유통",
          "corpType": "사기업",
          "employees": "3000",
          "marketCap": {
            "usd": "233,000,000 USD",
            "krw": "약 3,495억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "11,000,000 USD",
            "krw": "약 165억 원",
            "year": "2020"
          },
          "website": "www.autonejma.ma",
          "highlights": [
            "라바트, 카사블랑카, 탕헤르(Tangier), 마라케시(Marrakech), 아가디르(Agadir)등 13개 도시에ㅓ 23개 지점 운영",
            "메르세데스 벤트(Mercedes-Benz), 쌍용(Ssangyoun), 마힌드라(Mahindre) 브랜드의 모로코 판매권 보유",
            "2020년 7월' Mercedes-Benz Service Maroc' 애플리케이션 도입"
          ]
        },
        {
          "nameKo": "오토 홀",
          "nameEn": "Auto Hall",
          "foundedYear": "1907",
          "parentCompany": null,
          "hq": "모로코 카사블랑카(Casablanca)",
          "industry": "도매 및 소매업",
          "subIndustry": "자동차 유통",
          "corpType": "사기업(주식회사)",
          "employees": null,
          "marketCap": {
            "usd": "307,000,000 USD",
            "krw": "약 4,605억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "15,000,000 USD",
            "krw": "약 225억 원",
            "year": "2020"
          },
          "website": "www.autohall.ma",
          "highlights": [
            "모로코에서 포드 자동차(Ford) 유통을 시작으로 사업 확장, 1942년 카사블랑카 증권거래소 상장",
            "라바트, 카사블랑카, 마라케시, 탕헤르, 아가디르 등 27개 도시에 60개 지점 운영",
            "포드 자동차 외 미쓰비시(Mitsubishi), 둥펑(Dongfeng), 뉴홀랜드(NewHolland), 벨라즈(Belaz), 닛산(Nissan), 오펠(Opel), 발보린(Valvoline) 등과 제휴"
          ]
        },
        {
          "nameKo": "와파 보험",
          "nameEn": "Wafa Assurance",
          "foundedYear": "1972",
          "parentCompany": "Attijariwafa Bank - 창립연도: 1904sus",
          "hq": "모로코 카사블랑카(Casablanca)",
          "industry": "금융 및 보험업",
          "subIndustry": "보험 등",
          "corpType": "사기업(주식회사)",
          "employees": "1032",
          "marketCap": {
            "usd": "1,146,000,000 USD",
            "krw": "약 1조 7,190억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "63,000,000 USD",
            "krw": "약 945억 원",
            "year": "2020"
          },
          "website": "www.wafaassurance.ma",
          "highlights": [
            "모로코, 튀니지, 세네갈, 코트디부아르, 카메운 등 아프리카 5개국에 7개의 자회사 운영",
            "2019년 'My Wafa'애플리케이션 출시",
            "가상공간에서 자동차 계약 및 견적 상담서비스 제공, 사고 및 고장의 경우 위치기반 서비스를 활용한 고객지원 등"
          ]
        },
        {
          "nameKo": "울메스 에타",
          "nameEn": "Oulmes Etat",
          "foundedYear": "1933",
          "parentCompany": "Groupe Holmarcom",
          "hq": "모로코 카사블랑카(Casablanca)",
          "industry": "제조업",
          "subIndustry": "미네랄워터, 탄산수, 주스 음료 제조 등",
          "corpType": "사기업",
          "employees": "15161",
          "marketCap": {
            "usd": "253,000,000 USD",
            "krw": "약 3,795억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "1,000,000 USD",
            "krw": "약 15억 원",
            "year": "2020"
          },
          "website": "www.oulmes.ma",
          "highlights": [
            "'Lalla Haya, 'Sidi Ali Cherif, Hamou Agamgam'세 곳의 수원지를 기반으로 하는 음료 제조 기업",
            "부르키나파소에 식음료공장을 설립 중에 있으며, 이를 기반으로 서부아프리카 국가로의 사업 확대 모색"
          ]
        },
        {
          "nameKo": "코수마르",
          "nameEn": "Cosumar",
          "foundedYear": "1929",
          "parentCompany": null,
          "hq": "모로코 카사블랑카(Casablanca)",
          "industry": "제조업",
          "subIndustry": "백설탕, 각설탕, 시럽 등 제당",
          "corpType": "사기업",
          "employees": "2797",
          "marketCap": {
            "usd": "1,570,000,000 USD",
            "krw": "약 2조 3,550억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "87,000,000 USD",
            "krw": "약 1,305억 원",
            "year": "2020"
          },
          "website": "www.cosumar.co.ma",
          "highlights": [
            "80,000헥타르의 농지를 소유하여 165만 톤의 백설탕을 생산할 수 있으며 2018년 기준 약 107만톤 생산",
            "라바트, 카사블랑카, 아가디르 등 8개의 공장과 1개의 정제소를 운영하고 있으며 13곳의 직판장 운영",
            "직영고객사 1,000여개, 공급사 2,000여개 보유"
          ]
        },
        {
          "nameKo": "타카 모로코",
          "nameEn": "Taqa Morocco",
          "foundedYear": "1997",
          "parentCompany": "TAQA 그룹",
          "hq": "모로코 카사블랑카(Casablanca)",
          "industry": "에너지",
          "subIndustry": "화력발전",
          "corpType": "사기업",
          "employees": "3000",
          "marketCap": {
            "usd": "1,959,000,000 USD",
            "krw": "약 2조 9,385억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "103,000,000 USD",
            "krw": "약 1,545억 원",
            "year": "2020"
          },
          "website": "www.taqamorocco.ma",
          "highlights": [
            "Taqa Morocco는 국가 전력생산의 약 50%를 차지하고 있으며 카사블랑카 증권거래소 상장",
            "2014년 가동을 시작한 5&6발전기는 16억 달러의 투자를 받았으며 이중 '프로젝트 파이낸싱'계약 방식으로 한국(한국수출입은행)과 일본을 포함한 여러 신용수출기관으로부터 14억 달러 상당의 투자 유치",
            "한국의 대우건설, 일본의 미쓰이물산 컨소시엄 수주",
            "2014년 11월 TAQA Morocco의 모든 활동에 대한 품질인증 ISO9001, 직업안전보건인증 OHSAS 18001. 환경인증 ISO14001획득"
          ]
        },
        {
          "nameKo": "토탈 모로코",
          "nameEn": "Total",
          "foundedYear": "1927",
          "parentCompany": "Le Groupe Total \r- 창립자: Patrick Pouyanne \r- 창립연도: 1924년",
          "hq": "프랑스 파리(Paris)",
          "industry": "광업",
          "subIndustry": "석유 공급, 유통",
          "corpType": "사기업",
          "employees": "5692",
          "marketCap": {
            "usd": "718,000,000 USD",
            "krw": "약 1조 770억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "76,000,000 USD",
            "krw": "약 1,140억 원",
            "year": "2020"
          },
          "website": "www.total.ma",
          "highlights": [
            "모로코 전국 300개 이상의 주유소를 보유하고 있음 매년 150만 톤의 석유제품 판매(석유 제품 및 서비스 관련 시장점유율 15% 차지)",
            "모바일 애플리케이션을 통해 주유소 위치, 가스통 주문서비스 등 다양한 서비스 제공",
            "현대(Hyundai), 기아(Kia), 푸조(Peugeot), 시트로엔(Citroen), 타타모터스(Tata Motors), 르노(Renault Trucks), 스카니아(Scania), ZF, DAF 등과 파트너십"
          ]
        },
        {
          "nameKo": "하이테크 페이먼트 시스템",
          "nameEn": "Hightech Payment System",
          "foundedYear": "1995",
          "parentCompany": null,
          "hq": "모로코 카사블랑카(Casablanca)",
          "industry": "정보통신업",
          "subIndustry": "모바일결제, 포스시스템 등 결제 솔루션",
          "corpType": "사기업",
          "employees": "460",
          "marketCap": {
            "usd": "231,000,000 USD",
            "krw": "약 3,465억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "9,000,000 USD",
            "krw": "약 135억 원",
            "year": "2020"
          },
          "website": "www.hps-worldwide.com",
          "highlights": [
            "아프리카, 유럽, 중동, 아시아에 비즈니스 센터를 두고 있으며 90개 국가 400개 이상의 기관에서 HPS의 솔루션 제품군 이용",
            "2020년 7월 7일, 모로코 기업 IPRC 인수",
            "IPRC는 모로코를 비롯한 아프리카국가 내 5,500개 이상의 현금자동인출기(ATM) 관리 및 700만 건 이상의 카드사기 감독"
          ]
        }
      ],
      "startups": [
        {
          "nameKo": "캐시플러스",
          "field": "금융&핀테크",
          "foundedYear": "2004",
          "hq": "모로코 카사블랑카",
          "employees": "2,000명",
          "funding": null,
          "topInvestor": "Mediterrania Capital Partners",
          "fundingStage": null,
          "website": "http://www.cashplus.ma/fr/"
        }
      ]
    }
  },
  "모리셔스": {
    "id": "모리셔스",
    "name": "모리셔스",
    "nameEn": "Mauritius",
    "population": "1,309,000명 (2020년 기준)",
    "language": "영어·프랑스어(공용어), 크레올어, 힌두어",
    "capital": "포트루이스(Port Louis)",
    "climateScore": null,
    "mainClimateIssue": null,
    "diplomacyScore": null,
    "matchScore": null,
    "recommended": null,
    "priorityPartner": false,
    "koreaOdaHistory": true,
    "economy": {
      "gdpPerCapita": {
        "usd": "10,256 USD",
        "krw": "약 1,538만 원",
        "year": "2022",
        "source": "World Bank"
      },
      "gdpTotal": {
        "usd": "12,900,000,000 USD",
        "krw": "약 19조 3,500억 원",
        "year": "2022",
        "source": "World Bank"
      },
      "odaNetReceived": {
        "usd": "약 0억 USD",
        "krw": "약 210억 7,285만 원",
        "year": "2019",
        "isNet": false
      },
      "recipientOda": {
        "usd": "약 5,651백만 USD",
        "krw": "약 8조 4,765억 원",
        "year": "2019",
        "isNet": false
      },
      "bilateral": {
        "usd": "약 65백만 USD",
        "krw": "약 975억 원",
        "year": "2019",
        "isNet": false
      },
      "koreaOda": {
        "usd": "약 0백만 USD",
        "krw": "약 0 원",
        "year": "2019",
        "isNet": false
      }
    },
    "koica": {
      "total": "792,944 원",
      "sectors": [
        {
          "name": "보건",
          "percent": 7.8,
          "amount": "61,576 원"
        },
        {
          "name": "교육",
          "percent": 1.0,
          "amount": "8,252 원"
        },
        {
          "name": "농림수산",
          "percent": 29.1,
          "amount": "230,479 원"
        },
        {
          "name": "기술환경에너지",
          "percent": 12.7,
          "amount": "100,794 원"
        },
        {
          "name": "공공행정",
          "percent": 46.1,
          "amount": "365,631 원"
        },
        {
          "name": "긴급구호",
          "percent": 2.5,
          "amount": "20,000 원"
        },
        {
          "name": "기타",
          "percent": 0.8,
          "amount": "6,212 원"
        }
      ]
    },
    "infrastructure": {
      "hospitalBeds": {
        "value": "3.8",
        "unit": "병상 / 1,000명",
        "year": "2023",
        "source": "World Bank"
      },
      "physicians": {
        "value": "1.4",
        "unit": "의사 / 1,000명",
        "year": "2022",
        "source": "World Bank"
      },
      "nursesMidwives": {
        "value": "4.0",
        "unit": "간호사·조산사 / 1,000명",
        "year": "2022",
        "source": "World Bank"
      },
      "electricityAccess": {
        "value": "100",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableEnergyShare": {
        "value": "21.7",
        "unit": "%",
        "year": "2021",
        "source": "World Bank"
      },
      "cleanCookingAccess": {
        "value": "99.1",
        "unit": "%",
        "year": "2023",
        "source": "World Bank"
      },
      "internetPenetration": {
        "value": "73.3",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "mobileSubscriptions": {
        "value": "172.7",
        "unit": "건 / 100명",
        "year": "2024",
        "source": "World Bank"
      },
      "basicWater": {
        "value": "99.9",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "basicSanitation": {
        "value": "97.4",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableWaterPerCapita": {
        "value": "2179.0",
        "unit": "m³ / 인",
        "year": "2022",
        "source": "World Bank"
      },
      "pavedRoads": {
        "value": "98",
        "unit": "%",
        "year": "2009",
        "source": "World Bank"
      },
      "railLines": {
        "value": null,
        "unit": "km",
        "year": null,
        "source": null
      }
    },
    "koicaCumulative": {
      "total": "약 9억 8,319만 원",
      "latest": "약 2억 5,851만 원",
      "latestYear": "2023",
      "startYear": "1991"
    },
    "koicaHealthDetail": null,
    "diplomaticContact": {
      "overseas": {
        "missionName": "주 마다가스카르 대한민국 대사관",
        "missionType": "대사관",
        "jointCoverage": true,
        "address": "Immeuble Fitaratra-9eme Etage Nord, Ankorondrano, 101 Antananarivo, Madagascar,",
        "phone": "(261)20-222-2933",
        "consularCenter": "(82)2-3210-0404",
        "tollFree": "080-020-0219",
        "emergency": "(261)32-781-0874",
        "website": "http://overseas.mofa.go.kr/mg-ko/index.do",
        "lat": -18.884792,
        "lng": 47.522183
      },
      "domestic": null
    },
    "marketEntry": {
      "companyCount": 8,
      "industries": [
        {
          "name": "금융 및 보험업",
          "count": 5
        },
        {
          "name": "부동산업",
          "count": 2
        },
        {
          "name": "제조업",
          "count": 1
        }
      ],
      "startupCount": 0,
      "startupFields": [],
      "companies": [
        {
          "nameKo": "라이트하우스 캐피탈",
          "nameEn": "Lighthouse Capital",
          "foundedYear": "2014",
          "parentCompany": null,
          "hq": "모리셔스 그랑베이(Grand-Baie)",
          "industry": "부동산업",
          "subIndustry": "자산관리",
          "corpType": "사기업(유한회사)",
          "employees": "1286",
          "marketCap": {
            "usd": "197,000,000 USD",
            "krw": "약 2,955억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "-24,000,000 USD",
            "krw": "약 -360억 원",
            "year": "2020"
          },
          "website": "www.lighthousecapital.mu",
          "highlights": [
            "부동산 투자회사로 인프라, 소매업 등 다양한 분야에 투자",
            "호주, 캐나다, 유럽, 영국, 싱카포르, 홍콩, 미국 등 해외진출 활발",
            "모리셔스 증권거래소 상장"
          ]
        },
        {
          "nameKo": "씨엘",
          "nameEn": "Ciel",
          "foundedYear": "1912",
          "parentCompany": null,
          "hq": "모리셔스 에벤느(Ebene)",
          "industry": "금융 및 보험업",
          "subIndustry": "섬유, 숙박, 금융 등",
          "corpType": "사기업(주식회사)",
          "employees": "108",
          "marketCap": {
            "usd": "234,000,000 USD",
            "krw": "약 3,510억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "-22,000,000 USD",
            "krw": "약 -330억 원",
            "year": "2020"
          },
          "website": "www.cielgroup.com",
          "highlights": [
            "1912년 설탕공장으로 시작하여 농업, 섬유, 숙박, 금융 등으로 사업 확대",
            "모리셔스 뿐 아니라 마다가스카르, 탄자니아 등 아프리카와 방글라데시, 인도 등 아시아 지역에서 사업 진행",
            "모리셔스 증권거래소 상장"
          ]
        },
        {
          "nameKo": "아쎈시아",
          "nameEn": "Ascencia",
          "foundedYear": "2007",
          "parentCompany": "Rogers & co. Ltd\r- 창립자: Walter Rogers \r- 창립연도: 1899년",
          "hq": "모리셔스 모카(Moka)",
          "industry": "부동산업",
          "subIndustry": "부동산, 투자, 관리",
          "corpType": "사기업(유한회사)",
          "employees": "33000",
          "marketCap": {
            "usd": "233,000,000 USD",
            "krw": "약 3,495억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "24,000,000 USD",
            "krw": "약 360억 원",
            "year": "2020"
          },
          "website": "www.ascenciamalls.com",
          "highlights": [
            "Ascencia는 모리셔스 최대 부동산 투자기업 중 하나로 2008년 모리셔스 증권거래소에 상장되었으며, 주요 사업은 부동산 매입, 투자 및 관리",
            "모리셔스 내 7개의 대형 쇼핑몰에 대한 포트폴리오를 보유하고 있으며 해당 쇼핑몰에는 250개 이상의 매장이 유치되어 매년 약 2,200만 명의 고객이 방문",
            "Bagatell Mall (월 평균 방문자 약 70만명), Phoenix Mall (약 75개 매장유치, 월 평균 방문자 약 48만명), Riche-Terre Mall (55개 매장유치, 월 평균 방문자 약 31만명), So'flo (월 평균 방문자 약 18만명), Kendra (월 평균 방문자 약 21만명), Les Allees, Bo'Valon Mall",
            "모기업인 Rogers & Co. Ltd는 핀테크, 물류, 부동산, 항공 등 국제적으로 다양한 분야에 투자하는 기업으로 약 5,028명의 직원을 고용하고 있으며 아프리카, 유럽, 아시아 등지에서 사업을 진행하고 있음"
          ]
        },
        {
          "nameKo": "아프리카 수출입은행",
          "nameEn": "African Export-Import Bank",
          "foundedYear": "1993",
          "parentCompany": null,
          "hq": "이집트 카이로(Cairo)",
          "industry": "금융 및 보험업",
          "subIndustry": "은행, 투자 등",
          "corpType": "PPP(Public-Private Partnership)",
          "employees": "26900",
          "marketCap": {
            "usd": "1,978,000,000 USD",
            "krw": "약 2조 9,670억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "276,000,000 USD",
            "krw": "약 4,140억 원",
            "year": "2020"
          },
          "website": "www.afreximbank.com",
          "highlights": [
            "1993년 설립된 아프리카 대륙차원의 다자 무역금융기관으로 이집트 카이로(Cairo)에 본부를 두고 있음. 아프리카 및 글로벌 수출신용기관, 개발금융기관, 상업은행, 여타 다자기관과 협력하여 아프리카의 무역금융활동을 지원",
            "2019년 7월 모리셔스 증권거래소에 상장되어 [아프리카 비즈니스 매거진(African Business Magazine)]의 '2020년 아프리카 250대 주요 기업(Africa's Top 250 Companies in 2020)' 국가분류에서는 모리셔스로 분류되어 있음. 2019년 모리셔스 증권거래소가 꼽은 연간 실적 우수기업 3위 기록"
          ]
        },
        {
          "nameKo": "에스비엠 홀딩스",
          "nameEn": "SBM Holdings",
          "foundedYear": "1973",
          "parentCompany": null,
          "hq": "모리셔스 포트루이스(Port Louis)",
          "industry": "금융 및 보험업",
          "subIndustry": "은행, 보험 등",
          "corpType": "사기업(주식회사)",
          "employees": "336",
          "marketCap": {
            "usd": "386,000,000 USD",
            "krw": "약 5,790억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "32,000,000 USD",
            "krw": "약 480억 원",
            "year": "2020"
          },
          "website": "www.sbmgroup.mu",
          "highlights": [
            "모리셔스에 43개, 케냐 52개, 마다가스카르 5개, 인도 4개 등, 총 104개의 지점 보유",
            "2019년 기준, 매출의 43,2%가 모리셔스에서 발생"
          ]
        },
        {
          "nameKo": "엠씨비 그룹",
          "nameEn": "MCB Group",
          "foundedYear": "1838",
          "parentCompany": null,
          "hq": "모리셔스 포트루이스(Port Louis)",
          "industry": "금융 및 보험업",
          "subIndustry": "은행, 금융서비스",
          "corpType": "사기업(유한책임주식회사)",
          "employees": "1532",
          "marketCap": {
            "usd": "1,429,000,000 USD",
            "krw": "약 2조 1,435억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "241,000,000 USD",
            "krw": "약 3,615억 원",
            "year": "2020"
          },
          "website": "www.mcbgroup.com",
          "highlights": [
            "은행으로 시작하여 약 130억 달러의 자산 가치를 지닌 모리셔스 대표 금융서비스 그룹으로 성장, 모리셔스 전역에 60개의 지점 및 키오스크를 보유하고 있음",
            "은행의 경우 마다가스카르, 모잠비크, 레위니옹, 마요트, 프랑스, 세이셸, 몰디브 등에 진출, 전 세계 775개의 제휴은행 보유"
          ]
        },
        {
          "nameKo": "이이비엘",
          "nameEn": "IBL",
          "foundedYear": "1830",
          "parentCompany": null,
          "hq": "모리셔스 포트루이스(Port Louis)",
          "industry": "금융 및 보험업",
          "subIndustry": "은행, 자산관리 등",
          "corpType": "사기업(유한회사)",
          "employees": "200",
          "marketCap": {
            "usd": "899,000,000 USD",
            "krw": "약 1조 3,485억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "11,000,000 USD",
            "krw": "약 165억 원",
            "year": "2020"
          },
          "website": "www.iblgroup.com",
          "highlights": [
            "모리셔스에 기반을 둔 다국적 그룹으로 전 세계 22개국 진출",
            "모리셔스 증권거래소 상장"
          ]
        },
        {
          "nameKo": "피닉스 음료",
          "nameEn": "Phoenix Beverages",
          "foundedYear": "1931",
          "parentCompany": null,
          "hq": "모리셔스 포트루이스(Port Louis)",
          "industry": "제조업",
          "subIndustry": "탄산음료, 맥주 등 제조",
          "corpType": "사기업(유한회사)",
          "employees": "3598",
          "marketCap": {
            "usd": "235,000,000 USD",
            "krw": "약 3,525억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "16,000,000 USD",
            "krw": "약 240억 원",
            "year": "2020"
          },
          "website": "www.phoenixbev.mu",
          "highlights": [
            "환타, 코카콜라, 스프라이트 등 글로벌기업의 음료 공급",
            "1963년 자체 브랜드의 맥주(Phoenix)를 출시, 2005년 경쟁사 Universal Breweries의 맥주 출시 전까지 모리셔스 맥주 시장을 독점"
          ]
        }
      ],
      "startups": []
    }
  },
  "모리타니아": {
    "id": "모리타니아",
    "name": "모리타니아",
    "nameEn": "Mauritania",
    "population": "4,430,000명 (2020년 기준)",
    "language": "아랍어(국어), 프랑스어, 아프리카어(월로프, 소닌케 등)",
    "capital": "Nouakchott",
    "climateScore": null,
    "mainClimateIssue": null,
    "diplomacyScore": null,
    "matchScore": null,
    "recommended": null,
    "priorityPartner": false,
    "koreaOdaHistory": true,
    "economy": {
      "gdpPerCapita": {
        "usd": "2,480 USD",
        "krw": "약 372만 원",
        "year": "2023",
        "source": "IMF/국제통화기금"
      },
      "gdpTotal": {
        "usd": "10,900,000,000 USD",
        "krw": "약 16조 3,500억 원",
        "year": "2023",
        "source": "IMF/국제통화기금"
      },
      "odaNetReceived": {
        "usd": "약 5억 USD",
        "krw": "약 8,238억 7,410만 원",
        "year": "2019",
        "isNet": false
      },
      "recipientOda": {
        "usd": "약 -327백만 USD",
        "krw": "약 -4,905억 원",
        "year": "2019",
        "isNet": true
      },
      "bilateral": {
        "usd": "약 27백만 USD",
        "krw": "약 405억 원",
        "year": "2019",
        "isNet": false
      },
      "koreaOda": {
        "usd": "약 0백만 USD",
        "krw": "약 0 원",
        "year": "2019",
        "isNet": false
      }
    },
    "koica": {
      "total": "3,713,182 원",
      "sectors": [
        {
          "name": "보건",
          "percent": 60.0,
          "amount": "2,227,918 원"
        },
        {
          "name": "교육",
          "percent": 0.3,
          "amount": "12,475 원"
        },
        {
          "name": "농림수산",
          "percent": 3.8,
          "amount": "140,302 원"
        },
        {
          "name": "기술환경에너지",
          "percent": 1.2,
          "amount": "46,285 원"
        },
        {
          "name": "공공행정",
          "percent": 31.4,
          "amount": "1,164,939 원"
        },
        {
          "name": "긴급구호",
          "percent": 2.7,
          "amount": "99,518 원"
        },
        {
          "name": "기타",
          "percent": 0.6,
          "amount": "21,744 원"
        }
      ]
    },
    "infrastructure": {
      "hospitalBeds": {
        "value": "0.4",
        "unit": "병상 / 1,000명",
        "year": "2006",
        "source": "World Bank"
      },
      "physicians": {
        "value": "0.3",
        "unit": "의사 / 1,000명",
        "year": "2022",
        "source": "World Bank"
      },
      "nursesMidwives": {
        "value": "1.6",
        "unit": "간호사·조산사 / 1,000명",
        "year": "2022",
        "source": "World Bank"
      },
      "electricityAccess": {
        "value": "52.2",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableEnergyShare": {
        "value": "19.4",
        "unit": "%",
        "year": "2021",
        "source": "World Bank"
      },
      "cleanCookingAccess": {
        "value": "49.4",
        "unit": "%",
        "year": "2023",
        "source": "World Bank"
      },
      "internetPenetration": {
        "value": "45.8",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "mobileSubscriptions": {
        "value": "92.1",
        "unit": "건 / 100명",
        "year": "2024",
        "source": "World Bank"
      },
      "basicWater": {
        "value": "77.3",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "basicSanitation": {
        "value": "58.7",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableWaterPerCapita": {
        "value": "82.0",
        "unit": "m³ / 인",
        "year": "2022",
        "source": "World Bank"
      },
      "pavedRoads": {
        "value": "29.7",
        "unit": "%",
        "year": "2010",
        "source": "World Bank"
      },
      "railLines": {
        "value": "728",
        "unit": "km",
        "year": "2021",
        "source": "World Bank"
      }
    },
    "koicaCumulative": {
      "total": "약 44억 9,343만 원",
      "latest": "약 5억 7,154만 원",
      "latestYear": "2023",
      "startYear": "1991"
    },
    "koicaHealthDetail": null,
    "diplomaticContact": {
      "overseas": {
        "missionName": "주 모로코 대한민국 대사관",
        "missionType": "대사관",
        "jointCoverage": true,
        "address": "41 Av. Mehdi Ben Barka, Souissi, Rabat, Morocco,",
        "phone": "(212)537-75-1767",
        "consularCenter": "(82)2-3210-0404",
        "tollFree": "080-020-0219",
        "emergency": "(212)66-277-2408",
        "website": "http://overseas.mofa.go.kr/ma-ko/index.do",
        "lat": 33.978091,
        "lng": -6.840522
      },
      "domestic": null
    },
    "marketEntry": {
      "companyCount": 0,
      "industries": [],
      "startupCount": 0,
      "startupFields": [],
      "companies": [],
      "startups": []
    }
  },
  "모잠비크": {
    "id": "모잠비크",
    "name": "모잠비크",
    "nameEn": "Mazambique",
    "population": "30,060,000명 (2020년 기준)",
    "language": "포르투갈어(공용어), 여러 토착어 ",
    "capital": "마푸투(Maputo)",
    "climateScore": null,
    "mainClimateIssue": null,
    "diplomacyScore": null,
    "matchScore": null,
    "recommended": null,
    "priorityPartner": false,
    "koreaOdaHistory": true,
    "economy": {
      "gdpPerCapita": {
        "usd": "544 USD",
        "krw": "약 81만 원",
        "year": "2022",
        "source": "IMF/국제통화기금"
      },
      "gdpTotal": {
        "usd": "17,940,000,000 USD",
        "krw": "약 26조 9,100억 원",
        "year": "2022",
        "source": "IMF/국제통화기금"
      },
      "odaNetReceived": {
        "usd": "약 13억 USD",
        "krw": "약 1조 9,083억 5,550만 원",
        "year": "2019",
        "isNet": false
      },
      "recipientOda": {
        "usd": "약 2,227백만 USD",
        "krw": "약 3조 3,405억 원",
        "year": "2019",
        "isNet": false
      },
      "bilateral": {
        "usd": "약 56백만 USD",
        "krw": "약 840억 원",
        "year": "2019",
        "isNet": false
      },
      "koreaOda": {
        "usd": "약 24백만 USD",
        "krw": "약 360억 원",
        "year": "2019",
        "isNet": false
      }
    },
    "koica": {
      "total": "34,000,000 원",
      "sectors": [
        {
          "name": "보건",
          "percent": 4.0,
          "amount": "1,368,359 원"
        },
        {
          "name": "교육",
          "percent": 47.6,
          "amount": "16,200,000 원"
        },
        {
          "name": "농림수산",
          "percent": 7.2,
          "amount": "2,435,885 원"
        },
        {
          "name": "기술환경에너지",
          "percent": 18.1,
          "amount": "6,170,756 원"
        },
        {
          "name": "공공행정",
          "percent": 21.3,
          "amount": "7,234,370 원"
        },
        {
          "name": "긴급구호",
          "percent": 0.6,
          "amount": "209,519 원"
        },
        {
          "name": "기타",
          "percent": 1.3,
          "amount": "443,830 원"
        }
      ]
    },
    "infrastructure": {
      "hospitalBeds": {
        "value": "0.7",
        "unit": "병상 / 1,000명",
        "year": "2021",
        "source": "World Bank"
      },
      "physicians": {
        "value": "0.2",
        "unit": "의사 / 1,000명",
        "year": "2022",
        "source": "World Bank"
      },
      "nursesMidwives": {
        "value": "0.9",
        "unit": "간호사·조산사 / 1,000명",
        "year": "2022",
        "source": "World Bank"
      },
      "electricityAccess": {
        "value": "36.9",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableEnergyShare": {
        "value": "82.7",
        "unit": "%",
        "year": "2021",
        "source": "World Bank"
      },
      "cleanCookingAccess": {
        "value": "7.4",
        "unit": "%",
        "year": "2023",
        "source": "World Bank"
      },
      "internetPenetration": {
        "value": "20.5",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "mobileSubscriptions": {
        "value": "49.5",
        "unit": "건 / 100명",
        "year": "2024",
        "source": "World Bank"
      },
      "basicWater": {
        "value": "66.6",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "basicSanitation": {
        "value": "38.6",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableWaterPerCapita": {
        "value": "3071.4",
        "unit": "m³ / 인",
        "year": "2022",
        "source": "World Bank"
      },
      "pavedRoads": {
        "value": "20.8",
        "unit": "%",
        "year": "2009",
        "source": "World Bank"
      },
      "railLines": {
        "value": "3116",
        "unit": "km",
        "year": "2011",
        "source": "World Bank"
      }
    },
    "koicaCumulative": {
      "total": "약 647억 9,511만 원",
      "latest": "약 104억 4,320만 원",
      "latestYear": "2023",
      "startYear": "1991"
    },
    "koicaHealthDetail": {
      "year": "2024",
      "sectors": [
        {
          "name": "보건정책 및 행정관리",
          "percent": 100.0,
          "amount": "11,484,204,000 원"
        }
      ]
    },
    "diplomaticContact": {
      "overseas": {
        "missionName": "주 모잠비크공화국 대한민국 대사관",
        "missionType": "대사관",
        "jointCoverage": false,
        "address": "138, Rua D. Maria II , Maputo, Mozambique,",
        "phone": "(258)21-495-625",
        "consularCenter": "(82)2-3210-0404",
        "tollFree": "080-020-0219",
        "emergency": "(258)84-518-1272",
        "website": "http://overseas.mofa.go.kr/mz-ko/index.do",
        "lat": -25.957806,
        "lng": 32.602585
      },
      "domestic": null
    },
    "marketEntry": {
      "companyCount": 0,
      "industries": [],
      "startupCount": 0,
      "startupFields": [],
      "companies": [],
      "startups": []
    }
  },
  "베냉": {
    "id": "베냉",
    "name": "베냉",
    "nameEn": "Benin",
    "population": "12,990,000명 (2020년 기준)",
    "language": "프랑스어(공용어) 및 토착어",
    "capital": "포르토 노보(Porto Novo) ※ 경제수도 : 코토누(Cotonou)",
    "climateScore": null,
    "mainClimateIssue": null,
    "diplomacyScore": null,
    "matchScore": null,
    "recommended": null,
    "priorityPartner": false,
    "koreaOdaHistory": true,
    "economy": {
      "gdpPerCapita": {
        "usd": "1,370 USD",
        "krw": "약 205만 원",
        "year": "2022",
        "source": "IMF/국제통화기금"
      },
      "gdpTotal": {
        "usd": "17,550,000,000 USD",
        "krw": "약 26조 3,250억 원",
        "year": "2022",
        "source": "IMF/국제통화기금"
      },
      "odaNetReceived": {
        "usd": "약 4억 USD",
        "krw": "약 6,339억 8,535만 원",
        "year": "2019",
        "isNet": false
      },
      "recipientOda": {
        "usd": "약 361백만 USD",
        "krw": "약 5,415억 원",
        "year": "2019",
        "isNet": false
      },
      "bilateral": {
        "usd": "약 44백만 USD",
        "krw": "약 660억 원",
        "year": "2019",
        "isNet": false
      },
      "koreaOda": {
        "usd": "약 0백만 USD",
        "krw": "약 0 원",
        "year": "2019",
        "isNet": false
      }
    },
    "koica": {
      "total": "5,386,114 원",
      "sectors": [
        {
          "name": "보건",
          "percent": 1.3,
          "amount": "71,083 원"
        },
        {
          "name": "교육",
          "percent": 4.0,
          "amount": "214,432 원"
        },
        {
          "name": "농림수산",
          "percent": 5.1,
          "amount": "275,300 원"
        },
        {
          "name": "기술환경에너지",
          "percent": 3.8,
          "amount": "206,920 원"
        },
        {
          "name": "공공행정",
          "percent": 83.1,
          "amount": "4,475,329 원"
        },
        {
          "name": "긴급구호",
          "percent": 2.7,
          "amount": "143,050 원"
        }
      ]
    },
    "infrastructure": {
      "hospitalBeds": {
        "value": "0.4",
        "unit": "병상 / 1,000명",
        "year": "2021",
        "source": "World Bank"
      },
      "physicians": {
        "value": "0.2",
        "unit": "의사 / 1,000명",
        "year": "2023",
        "source": "World Bank"
      },
      "nursesMidwives": {
        "value": "0.6",
        "unit": "간호사·조산사 / 1,000명",
        "year": "2023",
        "source": "World Bank"
      },
      "electricityAccess": {
        "value": "59",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableEnergyShare": {
        "value": "0.3",
        "unit": "%",
        "year": "2021",
        "source": "World Bank"
      },
      "cleanCookingAccess": {
        "value": "6",
        "unit": "%",
        "year": "2023",
        "source": "World Bank"
      },
      "internetPenetration": {
        "value": "34.0",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "mobileSubscriptions": {
        "value": "125.9",
        "unit": "건 / 100명",
        "year": "2024",
        "source": "World Bank"
      },
      "basicWater": {
        "value": "69.6",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "basicSanitation": {
        "value": "22.2",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableWaterPerCapita": {
        "value": "748.6",
        "unit": "m³ / 인",
        "year": "2022",
        "source": "World Bank"
      },
      "pavedRoads": {
        "value": "9.5",
        "unit": "%",
        "year": "2004",
        "source": "World Bank"
      },
      "railLines": {
        "value": "758",
        "unit": "km",
        "year": "2006",
        "source": "World Bank"
      }
    },
    "koicaCumulative": {
      "total": "약 62억 6,061만 원",
      "latest": "약 6억 3,842만 원",
      "latestYear": "2023",
      "startYear": "1991"
    },
    "koicaHealthDetail": null,
    "diplomaticContact": {
      "overseas": {
        "missionName": "주 가나 대한민국 대사관",
        "missionType": "대사관",
        "jointCoverage": true,
        "address": "No.10, Fifth Avenue Extension, Cantonments, P.O.Box GP 13700, Accra, Ghana,",
        "phone": "(233)302-771-705",
        "consularCenter": "(82)2-3210-0404",
        "tollFree": "080-020-0219",
        "emergency": "(233)244-321-858",
        "website": "http://overseas.mofa.go.kr/gh-ko/index.do",
        "lat": 5.575495,
        "lng": -0.185161
      },
      "domestic": null
    },
    "marketEntry": {
      "companyCount": 0,
      "industries": [],
      "startupCount": 0,
      "startupFields": [],
      "companies": [],
      "startups": []
    }
  },
  "보츠와나": {
    "id": "보츠와나",
    "name": "보츠와나",
    "nameEn": "Botswana",
    "population": "2,630,000명 (2020년 기준)",
    "language": "영어(공용어), 세츠와나어(상용어)",
    "capital": "가보로네 (Gaborone)",
    "climateScore": null,
    "mainClimateIssue": null,
    "diplomacyScore": null,
    "matchScore": null,
    "recommended": null,
    "priorityPartner": false,
    "koreaOdaHistory": true,
    "economy": {
      "gdpPerCapita": {
        "usd": "7,760 USD",
        "krw": "약 1,164만 원",
        "year": "2023",
        "source": "IMF/국제통화기금"
      },
      "gdpTotal": {
        "usd": "20,760,000,000 USD",
        "krw": "약 31조 1,400억 원",
        "year": "2023",
        "source": "IMF/국제통화기금"
      },
      "odaNetReceived": {
        "usd": "약 0억 USD",
        "krw": "약 608억 7,031만 원",
        "year": "2019",
        "isNet": false
      },
      "recipientOda": {
        "usd": "약 -74백만 USD",
        "krw": "약 -1,110억 원",
        "year": "2019",
        "isNet": true
      },
      "bilateral": {
        "usd": "약 70백만 USD",
        "krw": "약 1,050억 원",
        "year": "2019",
        "isNet": false
      },
      "koreaOda": {
        "usd": "약 1백만 USD",
        "krw": "약 15억 원",
        "year": "2019",
        "isNet": false
      }
    },
    "koica": {
      "total": "850,148 원",
      "sectors": [
        {
          "name": "보건",
          "percent": 9.7,
          "amount": "82,800 원"
        },
        {
          "name": "교육",
          "percent": 24.3,
          "amount": "206,647 원"
        },
        {
          "name": "농림수산",
          "percent": 15.2,
          "amount": "128,988 원"
        },
        {
          "name": "기술환경에너지",
          "percent": 30.2,
          "amount": "256,439 원"
        },
        {
          "name": "공공행정",
          "percent": 15.9,
          "amount": "135,317 원"
        },
        {
          "name": "긴급구호",
          "percent": 4.7,
          "amount": "39,958 원"
        }
      ]
    },
    "infrastructure": {
      "hospitalBeds": {
        "value": "2.4",
        "unit": "병상 / 1,000명",
        "year": "2022",
        "source": "World Bank"
      },
      "physicians": {
        "value": "0.4",
        "unit": "의사 / 1,000명",
        "year": "2023",
        "source": "World Bank"
      },
      "nursesMidwives": {
        "value": "3.0",
        "unit": "간호사·조산사 / 1,000명",
        "year": "2023",
        "source": "World Bank"
      },
      "electricityAccess": {
        "value": "80.2",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableEnergyShare": {
        "value": "0.2",
        "unit": "%",
        "year": "2021",
        "source": "World Bank"
      },
      "cleanCookingAccess": {
        "value": "66.4",
        "unit": "%",
        "year": "2023",
        "source": "World Bank"
      },
      "internetPenetration": {
        "value": "57.5",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "mobileSubscriptions": {
        "value": "164.0",
        "unit": "건 / 100명",
        "year": "2024",
        "source": "World Bank"
      },
      "basicWater": {
        "value": "91.8",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "basicSanitation": {
        "value": "72.1",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableWaterPerCapita": {
        "value": "983.7",
        "unit": "m³ / 인",
        "year": "2022",
        "source": "World Bank"
      },
      "pavedRoads": {
        "value": "32.6",
        "unit": "%",
        "year": "2005",
        "source": "World Bank"
      },
      "railLines": {
        "value": "886",
        "unit": "km",
        "year": "2021",
        "source": "World Bank"
      }
    },
    "koicaCumulative": {
      "total": "약 20억 6,717만 원",
      "latest": "약 8억 9,659만 원",
      "latestYear": "2023",
      "startYear": "1991"
    },
    "koicaHealthDetail": {
      "year": "2024",
      "sectors": [
        {
          "name": "기초의료설비",
          "percent": 92.8,
          "amount": "377,151,000 원"
        },
        {
          "name": "보건정책 및 행정관리",
          "percent": 7.2,
          "amount": "29,457,000 원"
        }
      ]
    },
    "diplomaticContact": {
      "overseas": {
        "missionName": "주 남아프리카공화국 대한민국 대사관",
        "missionType": "대사관",
        "jointCoverage": true,
        "address": "265 Melk Street, Nieuw Muckleneuk, Pretoria 0181, South Africa,",
        "phone": "(27)12-460-2508",
        "consularCenter": "(82)2-3210-0404",
        "tollFree": "080-020-0219",
        "emergency": "(27)66-332-5897",
        "website": "http://overseas.mofa.go.kr/za-ko/index.do",
        "lat": -25.773293,
        "lng": 28.226605
      },
      "domestic": null
    },
    "marketEntry": {
      "companyCount": 4,
      "industries": [
        {
          "name": "금융 및 보험업",
          "count": 2
        },
        {
          "name": "광업",
          "count": 1
        },
        {
          "name": "제조업",
          "count": 1
        }
      ],
      "startupCount": 0,
      "startupFields": [],
      "companies": [
        {
          "nameKo": "루카라 다이아몬드 코퍼레이션",
          "nameEn": "Lucara Diamond Corp",
          "foundedYear": "2009",
          "parentCompany": "Lundin Group\r- 창립자: Adolf H. Lundin\r-창립연도: 1971년",
          "hq": "캐나다 밴쿠버(Vancouver)",
          "industry": "광업",
          "subIndustry": "다이아몬드 채굴",
          "corpType": "사기업",
          "employees": "706",
          "marketCap": {
            "usd": "224,000,000 USD",
            "krw": "약 3,360억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "1,000,000 USD",
            "krw": "약 15억 원",
            "year": "2020"
          },
          "website": "www.lucaradiamond.com",
          "highlights": [
            "모회사인 Lundin Group은 캐나다 소재의 에너지/광물 개발 기업으로 브라질, 칠레, 포르투갈, 보츠나와 등에서 광물(금, 은, 다이아몬드, 동 등) 채굴, 석유가스 탐사 및 개발, 태양광 발전소 등의 사업을 진행 중이며 자회사인 Lucara Diamond Corp 은 보츠나와 카로웨(Karowe) 광산의 채굴 및 개발권을 보유하고 있음",
            "보츠나와 북부에 위치한 카로웨 광산은 2019년 1,758캐럿짜리 대형 다이아몬드 원석이 발견되어 주목을 받기 시작했으며 1,000캐럿이 넘는 다이아몬드는 2회, 300캐럿 이상은 15회 이상 채굴되어 향후에도 고품질의 대형 원석을 발견할 가능성이 높은 것으로 평가됨"
          ]
        },
        {
          "nameKo": "보츠나와 보험",
          "nameEn": "Botswana Insueance",
          "foundedYear": "1975",
          "parentCompany": "TA Holdings Ltd.",
          "hq": "보츠나와 하보로네(Gaborone)",
          "industry": "금융 및 보험업",
          "subIndustry": "개인, 기업, 특수 보험",
          "corpType": "사기업(주식회사)",
          "employees": "335",
          "marketCap": {
            "usd": "416,000,000 USD",
            "krw": "약 6,240억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "37,000,000 USD",
            "krw": "약 555억 원",
            "year": "2020"
          },
          "website": "bic.co.bw",
          "highlights": [
            "짐바브웨 기반의 투자지주회사 TA Holdings Ltd. 가 Botswana Insurance의 최대 지분 보유",
            "남아공의 신용평가 기업 Global Credit Ratings (GCR)는 2018년 Botswana Insurance를 AA- 등급으로 안정적(stable)인 것으로 평가"
          ]
        },
        {
          "nameKo": "보츠나와 퍼스트 내셔널 은행",
          "nameEn": "First National Bank Botswana",
          "foundedYear": "1991",
          "parentCompany": "FirstRand \r- 창립연도:  1828년",
          "hq": "보츠나와 하보로네(Gaborone)",
          "industry": "금융 및 보험업",
          "subIndustry": "개인/기업 은행 서비스",
          "corpType": "사기업",
          "employees": "1100",
          "marketCap": {
            "usd": "578,000,000 USD",
            "krw": "약 8,670억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "62,000,000 USD",
            "krw": "약 930억 원",
            "year": "2020"
          },
          "website": "www.fnbbotswana.co.bw",
          "highlights": [
            "남아공 기반의 금융회사 FirstRand는 사하라이남 아프리카지역의 주요 금융그룹이며, 보츠나와를 비롯하여 나미비아, 레소토, 모잠비크, 에스와티니 등에 자회사 운영",
            "2011년 보츠나와 증권거래소에서 최대 시가총액 기업으로 기록되며 보츠나와 대표 은행으로 자리매김함"
          ]
        },
        {
          "nameKo": "세차바 브루어리 홀딩스",
          "nameEn": "Sechaba Breweries Holdings",
          "foundedYear": null,
          "parentCompany": null,
          "hq": "보츠나와 하보로네(Gaborone)",
          "industry": "제조업",
          "subIndustry": "맥주 등 주류 제조",
          "corpType": "사기업",
          "employees": "357",
          "marketCap": {
            "usd": "206,000,000 USD",
            "krw": "약 3,090억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "15,000,000 USD",
            "krw": "약 225억 원",
            "year": "2020"
          },
          "website": null,
          "highlights": [
            "Sechba Breweries Holdings는 보츠나와의 주류 기업 Kgalagadi Breweries의 지분 60%를 보유하고 있음(Kgalagadi Breweries의 나머지 40%는 영국의 다국적 주류 기업 SABMiller가 보유)"
          ]
        }
      ],
      "startups": []
    }
  },
  "부룬디": {
    "id": "부룬디",
    "name": "부룬디",
    "nameEn": "Burundi",
    "population": "12,890,000명 (2020년 기준)",
    "language": "영어, 프랑스어 및 키룬디어",
    "capital": "기테가(Gitega)",
    "climateScore": null,
    "mainClimateIssue": null,
    "diplomacyScore": null,
    "matchScore": null,
    "recommended": null,
    "priorityPartner": false,
    "koreaOdaHistory": true,
    "economy": {
      "gdpPerCapita": {
        "usd": "245 USD",
        "krw": "약 36만 원",
        "year": "2023",
        "source": "IMF/국제통화기금"
      },
      "gdpTotal": {
        "usd": "3,200,000,000 USD",
        "krw": "약 4조 8,000억 원",
        "year": "2023",
        "source": "IMF/국제통화기금"
      },
      "odaNetReceived": {
        "usd": "약 20억 USD",
        "krw": "약 2조 9,256억 7,050만 원",
        "year": "2019",
        "isNet": false
      },
      "recipientOda": {
        "usd": "약 702백만 USD",
        "krw": "약 1조 530억 원",
        "year": "2019",
        "isNet": false
      },
      "bilateral": {
        "usd": "약 33백만 USD",
        "krw": "약 495억 원",
        "year": "2019",
        "isNet": false
      },
      "koreaOda": {
        "usd": "약 1백만 USD",
        "krw": "약 15억 원",
        "year": "2019",
        "isNet": false
      }
    },
    "koica": {
      "total": "3,303,932 원",
      "sectors": [
        {
          "name": "보건",
          "percent": 19.3,
          "amount": "638,862 원"
        },
        {
          "name": "교육",
          "percent": 8.6,
          "amount": "284,568 원"
        },
        {
          "name": "농림수산",
          "percent": 0.7,
          "amount": "23,252 원"
        },
        {
          "name": "기술환경에너지",
          "percent": 6.0,
          "amount": "196,873 원"
        },
        {
          "name": "공공행정",
          "percent": 57.8,
          "amount": "1,908,874 원"
        },
        {
          "name": "긴급구호",
          "percent": 7.6,
          "amount": "251,504 원"
        }
      ]
    },
    "infrastructure": {
      "hospitalBeds": {
        "value": "0.7",
        "unit": "병상 / 1,000명",
        "year": "2014",
        "source": "World Bank"
      },
      "physicians": {
        "value": "0.1",
        "unit": "의사 / 1,000명",
        "year": "2022",
        "source": "World Bank"
      },
      "nursesMidwives": {
        "value": "0.8",
        "unit": "간호사·조산사 / 1,000명",
        "year": "2023",
        "source": "World Bank"
      },
      "electricityAccess": {
        "value": "20.1",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableEnergyShare": {
        "value": "61.3",
        "unit": "%",
        "year": "2021",
        "source": "World Bank"
      },
      "cleanCookingAccess": {
        "value": "0.1",
        "unit": "%",
        "year": "2023",
        "source": "World Bank"
      },
      "internetPenetration": {
        "value": "8.6",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "mobileSubscriptions": {
        "value": "63.2",
        "unit": "건 / 100명",
        "year": "2023",
        "source": "World Bank"
      },
      "basicWater": {
        "value": "65.9",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "basicSanitation": {
        "value": "44.6",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableWaterPerCapita": {
        "value": "755.2",
        "unit": "m³ / 인",
        "year": "2022",
        "source": "World Bank"
      },
      "pavedRoads": {
        "value": "10.4",
        "unit": "%",
        "year": "2004",
        "source": "World Bank"
      },
      "railLines": {
        "value": null,
        "unit": "km",
        "year": null,
        "source": null
      }
    },
    "koicaCumulative": {
      "total": "약 85억 7,980만 원",
      "latest": "약 39억 475만 원",
      "latestYear": "2023",
      "startYear": "1991"
    },
    "koicaHealthDetail": {
      "year": "2024",
      "sectors": [
        {
          "name": "보건정책 및 행정관리",
          "percent": 100.0,
          "amount": "63,480,000 원"
        }
      ]
    },
    "diplomaticContact": {
      "overseas": {
        "missionName": "주 르완다 대한민국 대사관",
        "missionType": "대사관",
        "jointCoverage": true,
        "address": "P.O. Box 6404, 34 KG 13 Ave(Golf Course Road), Nyarutarama, Kigali, Rwanda,",
        "phone": "(250)252-577-577",
        "consularCenter": "(82)2-3210-0404",
        "tollFree": "080-020-0219",
        "emergency": "(250)780-493-746",
        "website": "http://overseas.mofa.go.kr/rw-ko/index.do",
        "lat": -1.938502,
        "lng": 30.10031
      },
      "domestic": null
    },
    "marketEntry": {
      "companyCount": 0,
      "industries": [],
      "startupCount": 0,
      "startupFields": [],
      "companies": [],
      "startups": []
    }
  },
  "부르키나파소": {
    "id": "부르키나파소",
    "name": "부르키나파소",
    "nameEn": "Burkina Faso",
    "population": "22,100,000명 (2020년 기준)",
    "language": "프랑스어(공용어), 토착어",
    "capital": "와가두구(Ouagadougou)",
    "climateScore": null,
    "mainClimateIssue": null,
    "diplomacyScore": null,
    "matchScore": null,
    "recommended": null,
    "priorityPartner": false,
    "koreaOdaHistory": true,
    "economy": {
      "gdpPerCapita": {
        "usd": "815 USD",
        "krw": "약 122만 원",
        "year": "2020",
        "source": "World Bank"
      },
      "gdpTotal": {
        "usd": "17,300,000,000 USD",
        "krw": "약 25조 9,500억 원",
        "year": "2020",
        "source": "World Bank"
      },
      "odaNetReceived": {
        "usd": "약 7억 USD",
        "krw": "약 1조 1,243억 3,895만 원",
        "year": "2019",
        "isNet": false
      },
      "recipientOda": {
        "usd": "약 1,220백만 USD",
        "krw": "약 1조 8,300억 원",
        "year": "2019",
        "isNet": false
      },
      "bilateral": {
        "usd": "약 45백만 USD",
        "krw": "약 675억 원",
        "year": "2019",
        "isNet": false
      },
      "koreaOda": {
        "usd": "약 1백만 USD",
        "krw": "약 15억 원",
        "year": "2019",
        "isNet": false
      }
    },
    "koica": {
      "total": "5,063,454 원",
      "sectors": [
        {
          "name": "보건",
          "percent": 35.5,
          "amount": "1,798,639 원"
        },
        {
          "name": "교육",
          "percent": 6.7,
          "amount": "338,273 원"
        },
        {
          "name": "농림수산",
          "percent": 7.6,
          "amount": "385,173 원"
        },
        {
          "name": "기술환경에너지",
          "percent": 2.8,
          "amount": "139,747 원"
        },
        {
          "name": "공공행정",
          "percent": 40.2,
          "amount": "2,036,914 원"
        },
        {
          "name": "긴급구호",
          "percent": 2.4,
          "amount": "119,935 원"
        },
        {
          "name": "기타",
          "percent": 4.8,
          "amount": "244,773 원"
        }
      ]
    },
    "infrastructure": {
      "hospitalBeds": {
        "value": "0.2",
        "unit": "병상 / 1,000명",
        "year": "2020",
        "source": "World Bank"
      },
      "physicians": {
        "value": "0.1",
        "unit": "의사 / 1,000명",
        "year": "2022",
        "source": "World Bank"
      },
      "nursesMidwives": {
        "value": "0.9",
        "unit": "간호사·조산사 / 1,000명",
        "year": "2023",
        "source": "World Bank"
      },
      "electricityAccess": {
        "value": "34",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableEnergyShare": {
        "value": "13.9",
        "unit": "%",
        "year": "2021",
        "source": "World Bank"
      },
      "cleanCookingAccess": {
        "value": "17",
        "unit": "%",
        "year": "2023",
        "source": "World Bank"
      },
      "internetPenetration": {
        "value": "28.3",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "mobileSubscriptions": {
        "value": "116.6",
        "unit": "건 / 100명",
        "year": "2024",
        "source": "World Bank"
      },
      "basicWater": {
        "value": "50.0",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "basicSanitation": {
        "value": "31.8",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableWaterPerCapita": {
        "value": "555.3",
        "unit": "m³ / 인",
        "year": "2022",
        "source": "World Bank"
      },
      "pavedRoads": {
        "value": "4.2",
        "unit": "%",
        "year": "2004",
        "source": "World Bank"
      },
      "railLines": {
        "value": "518",
        "unit": "km",
        "year": "2021",
        "source": "World Bank"
      }
    },
    "koicaCumulative": {
      "total": "약 84억 5,307만 원",
      "latest": "약 20억 7,795만 원",
      "latestYear": "2023",
      "startYear": "1991"
    },
    "koicaHealthDetail": null,
    "diplomaticContact": {
      "overseas": {
        "missionName": "주 코트디부아르 대한민국 대사관",
        "missionType": "대사관",
        "jointCoverage": true,
        "address": "01BP 3950 Abidjan 01, Rue Sainte Marie Lot 18-19, Cocody Sud, Abidjan, Cote d&rsquo;Ivoire,",
        "phone": "(225)2248-6701",
        "consularCenter": "(82)2-3210-0404",
        "tollFree": "080-020-0219",
        "emergency": "(225)8827-3480",
        "website": "http://overseas.mofa.go.kr/ci-ko/index.do",
        "lat": 5.331987,
        "lng": -3.996877
      },
      "domestic": null
    },
    "marketEntry": {
      "companyCount": 2,
      "industries": [
        {
          "name": "정보통신업",
          "count": 1
        },
        {
          "name": "금융 및 보험업",
          "count": 1
        }
      ],
      "startupCount": 0,
      "startupFields": [],
      "companies": [
        {
          "nameKo": "오나텔",
          "nameEn": "Onatel",
          "foundedYear": "1987",
          "parentCompany": null,
          "hq": "부르키나파소 와가두구(Ouagadougou)",
          "industry": "정보통신업",
          "subIndustry": "모바일서비스, 유선망, 전자상거래, 전자청구서 등",
          "corpType": "공기업(주식회사)",
          "employees": "5982",
          "marketCap": {
            "usd": "363,000,000 USD",
            "krw": "약 5,445억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "53,000,000 USD",
            "krw": "약 795억 원",
            "year": "2020"
          },
          "website": "www.onatel.bf",
          "highlights": [
            "1987년 OPT (Office des Postes et Telecommunications)로부터 분리되어 창립",
            "Maroc Telecom이 61%, 부르키나파소 정부가 13% 지분을 소유",
            "부르키나파소의 13개 지역, 45개 주에 유선통신망을 구축하고 있으며 700만 명 이상의 고객을 보유"
          ]
        },
        {
          "nameKo": "코리스 은행",
          "nameEn": "Coris Bank",
          "foundedYear": "2008",
          "parentCompany": "Coris Bank International",
          "hq": "부르키나파소 와가두구(Ouagadougou)",
          "industry": "금융 및 보험업",
          "subIndustry": "카드, 환전, 온라인 계좌 등",
          "corpType": "사기업",
          "employees": "900",
          "marketCap": {
            "usd": "404,000,000 USD",
            "krw": "약 6,060억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "41,000,000 USD",
            "krw": "약 615억 원",
            "year": "2020"
          },
          "website": "burkina.coris.bank",
          "highlights": [
            "부르키나파소 은행 분야의 20%이상을 점유",
            "Coris Money라는 모바일거래 애플리케이션을 출시하여 부르키나파소의 디지털 금융거래 발전 주도"
          ]
        }
      ],
      "startups": []
    }
  },
  "상투메프린시페": {
    "id": "상투메프린시페",
    "name": "상투메프린시페",
    "nameEn": "Sao Tome and Principe",
    "population": "220,000명 (2020년 기준)",
    "language": "포르투칼어, 토착어",
    "capital": "상투메(Sao Tome)",
    "climateScore": null,
    "mainClimateIssue": null,
    "diplomacyScore": null,
    "matchScore": null,
    "recommended": null,
    "priorityPartner": false,
    "koreaOdaHistory": true,
    "economy": {
      "gdpPerCapita": {
        "usd": "2,360 USD",
        "krw": "약 354만 원",
        "year": "2021",
        "source": "World Bank"
      },
      "gdpTotal": {
        "usd": "500,000,000 USD",
        "krw": "약 7,500억 원",
        "year": "2021",
        "source": "World Bank"
      },
      "odaNetReceived": {
        "usd": "약 12억 USD",
        "krw": "약 1조 8,091억 2,150만 원",
        "year": "2019",
        "isNet": false
      },
      "recipientOda": {
        "usd": "약 51백만 USD",
        "krw": "약 765억 원",
        "year": "2019",
        "isNet": false
      },
      "bilateral": {
        "usd": "약 32백만 USD",
        "krw": "약 480억 원",
        "year": "2019",
        "isNet": false
      },
      "koreaOda": {
        "usd": "약 0백만 USD",
        "krw": "약 0 원",
        "year": "2019",
        "isNet": false
      }
    },
    "koica": {
      "total": "412,787 원",
      "sectors": [
        {
          "name": "보건",
          "percent": 13.4,
          "amount": "55,257 원"
        },
        {
          "name": "농림수산",
          "percent": 5.1,
          "amount": "21,038 원"
        },
        {
          "name": "기술환경에너지",
          "percent": 2.0,
          "amount": "8,080 원"
        },
        {
          "name": "공공행정",
          "percent": 79.6,
          "amount": "328,413 원"
        }
      ]
    },
    "infrastructure": {
      "hospitalBeds": {
        "value": "2.9",
        "unit": "병상 / 1,000명",
        "year": "2019",
        "source": "World Bank"
      },
      "physicians": {
        "value": "0.5",
        "unit": "의사 / 1,000명",
        "year": "2022",
        "source": "World Bank"
      },
      "nursesMidwives": {
        "value": "2.2",
        "unit": "간호사·조산사 / 1,000명",
        "year": "2022",
        "source": "World Bank"
      },
      "electricityAccess": {
        "value": "77.7",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableEnergyShare": {
        "value": "6.1",
        "unit": "%",
        "year": "2021",
        "source": "World Bank"
      },
      "cleanCookingAccess": {
        "value": "4.6",
        "unit": "%",
        "year": "2023",
        "source": "World Bank"
      },
      "internetPenetration": {
        "value": "59.1",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "mobileSubscriptions": {
        "value": "62.4",
        "unit": "건 / 100명",
        "year": "2024",
        "source": "World Bank"
      },
      "basicWater": {
        "value": "78.0",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "basicSanitation": {
        "value": "48.7",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableWaterPerCapita": {
        "value": "9633.0",
        "unit": "m³ / 인",
        "year": "2022",
        "source": "World Bank"
      },
      "pavedRoads": {
        "value": "68.1",
        "unit": "%",
        "year": "2001",
        "source": "World Bank"
      },
      "railLines": {
        "value": null,
        "unit": "km",
        "year": null,
        "source": null
      }
    },
    "koicaCumulative": {
      "total": "약 12억 2,133만 원",
      "latest": "약 4억 2,928만 원",
      "latestYear": "2023",
      "startYear": "1991"
    },
    "koicaHealthDetail": null,
    "diplomaticContact": {
      "overseas": {
        "missionName": "주 가봉 대한민국 대사관",
        "missionType": "대사관",
        "jointCoverage": true,
        "address": "B.P.2620, Libreville, Gabon,",
        "phone": "(241)6530-1900",
        "consularCenter": "(82)2-3210-0404",
        "tollFree": "080-020-0219",
        "emergency": "(241)7750-7822",
        "website": "http://overseas.mofa.go.kr/ga-ko/index.do",
        "lat": 0.477587266,
        "lng": 9.393928461
      },
      "domestic": null
    },
    "marketEntry": {
      "companyCount": 0,
      "industries": [],
      "startupCount": 0,
      "startupFields": [],
      "companies": [],
      "startups": []
    }
  },
  "세네갈": {
    "id": "세네갈",
    "name": "세네갈",
    "nameEn": "Senegal",
    "population": "17,320,000명 (2020년 기준)",
    "language": "프랑스어(공용어) 및 월로프어",
    "capital": "다카르(Dakar)",
    "climateScore": null,
    "mainClimateIssue": null,
    "diplomacyScore": null,
    "matchScore": null,
    "recommended": null,
    "priorityPartner": true,
    "koreaOdaHistory": true,
    "economy": {
      "gdpPerCapita": {
        "usd": "1,599 USD",
        "krw": "약 239만 원",
        "year": "2022",
        "source": "World Bank"
      },
      "gdpTotal": {
        "usd": "27,680,000,000 USD",
        "krw": "약 41조 5,200억 원",
        "year": "2022",
        "source": "World Bank"
      },
      "odaNetReceived": {
        "usd": "약 6억 USD",
        "krw": "약 9,561억 7,710만 원",
        "year": "2019",
        "isNet": false
      },
      "recipientOda": {
        "usd": "약 2,000백만 USD",
        "krw": "약 3조 원",
        "year": "2019",
        "isNet": false
      },
      "bilateral": {
        "usd": "약 46백만 USD",
        "krw": "약 690억 원",
        "year": "2019",
        "isNet": false
      },
      "koreaOda": {
        "usd": "약 31백만 USD",
        "krw": "약 465억 원",
        "year": "2019",
        "isNet": false
      }
    },
    "koica": {
      "total": "88,700,000 원",
      "sectors": [
        {
          "name": "보건",
          "percent": 22.2,
          "amount": "19,700,000 원"
        },
        {
          "name": "교육",
          "percent": 36.4,
          "amount": "32,300,000 원"
        },
        {
          "name": "농림수산",
          "percent": 26.4,
          "amount": "23,400,000 원"
        },
        {
          "name": "기술환경에너지",
          "percent": 7.0,
          "amount": "6,216,334 원"
        },
        {
          "name": "공공행정",
          "percent": 5.7,
          "amount": "5,092,620 원"
        },
        {
          "name": "긴급구호",
          "percent": 0.6,
          "amount": "504,605 원"
        },
        {
          "name": "기타",
          "percent": 1.6,
          "amount": "1,455,792 원"
        }
      ]
    },
    "infrastructure": {
      "hospitalBeds": {
        "value": "0.7",
        "unit": "병상 / 1,000명",
        "year": "2019",
        "source": "World Bank"
      },
      "physicians": {
        "value": "0.1",
        "unit": "의사 / 1,000명",
        "year": "2023",
        "source": "World Bank"
      },
      "nursesMidwives": {
        "value": "0.4",
        "unit": "간호사·조산사 / 1,000명",
        "year": "2023",
        "source": "World Bank"
      },
      "electricityAccess": {
        "value": "82.9",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableEnergyShare": {
        "value": "13.3",
        "unit": "%",
        "year": "2021",
        "source": "World Bank"
      },
      "cleanCookingAccess": {
        "value": "34.8",
        "unit": "%",
        "year": "2023",
        "source": "World Bank"
      },
      "internetPenetration": {
        "value": "60.1",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "mobileSubscriptions": {
        "value": "123.9",
        "unit": "건 / 100명",
        "year": "2024",
        "source": "World Bank"
      },
      "basicWater": {
        "value": "88.0",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "basicSanitation": {
        "value": "62.5",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableWaterPerCapita": {
        "value": "1461.7",
        "unit": "m³ / 인",
        "year": "2022",
        "source": "World Bank"
      },
      "pavedRoads": {
        "value": "35.5",
        "unit": "%",
        "year": "2010",
        "source": "World Bank"
      },
      "railLines": {
        "value": "906",
        "unit": "km",
        "year": "2004",
        "source": "World Bank"
      }
    },
    "koicaCumulative": {
      "total": "약 1,300억 1,264만 원",
      "latest": "약 108억 2,415만 원",
      "latestYear": "2023",
      "startYear": "1991"
    },
    "koicaHealthDetail": {
      "year": "2024",
      "sectors": [
        {
          "name": "보건인력개발",
          "percent": 99.2,
          "amount": "18,750,000,000 원"
        },
        {
          "name": "기초보건진료",
          "percent": 0.8,
          "amount": "155,998,500 원"
        }
      ]
    },
    "diplomaticContact": {
      "overseas": {
        "missionName": "주 세네갈 대한민국 대사관",
        "missionType": "대사관",
        "jointCoverage": false,
        "address": "Ambassade de la Republique de Coree, Villa Hamoudy, Rue Aime Cesaire, Fann Residence, B.P.5850, Dakar, Senegal,",
        "phone": "(221)33-824-06-72",
        "consularCenter": "(82)2-3210-0404",
        "tollFree": "080-020-0219",
        "emergency": "(221)77-639-5109",
        "website": "http://overseas.mofa.go.kr/sn-ko/index.do",
        "lat": 14.695506,
        "lng": -17.467318
      },
      "domestic": {
        "ambassador": "Mamadou Gueye FAYE",
        "address": "서울특별시 중구 퇴계로 97 대연각 타워 501호",
        "phone": "745-5554",
        "email": "senegalembassyseoul@gmail.com",
        "fax": "745-5524",
        "updatedAt": "2020-01-14"
      }
    },
    "marketEntry": {
      "companyCount": 1,
      "industries": [
        {
          "name": "정보통신업",
          "count": 1
        }
      ],
      "startupCount": 5,
      "startupFields": [
        {
          "name": "금융&핀테크",
          "count": 4
        },
        {
          "name": "헬스케어",
          "count": 1
        }
      ],
      "companies": [
        {
          "nameKo": "소나텔",
          "nameEn": "Sonatel",
          "foundedYear": "1985",
          "parentCompany": "Orange",
          "hq": "세네갈 다카르(Darkar)",
          "industry": "정보통신업",
          "subIndustry": "통신",
          "corpType": "사기업",
          "employees": "542",
          "marketCap": {
            "usd": "2,166,000,000 USD",
            "krw": "약 3조 2,490억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "28,000,000 USD",
            "krw": "약 420억 원",
            "year": "2020"
          },
          "website": "sonatel.sn",
          "highlights": [
            "1985년부터 1991년까지 세네갈 전역의 통신망을 구축, 1996년 서비스를 개시하였으며 1998년 서아프리카 증권거래소(BRVM)에 상장됨",
            "Alize 브랜드를 소유한 Sonatel Mobile, Sentoo 브랜드를 소유한 Sonatel Multim'dia를 자회사로 소유",
            "세네갈 외에도 말리 바마코(Bamako) 등에 진출하여 백만 명 이상의 해외고객을 보유"
          ]
        }
      ],
      "startups": [
        {
          "nameKo": "마톤틴",
          "field": "금융&핀테크",
          "foundedYear": "2015",
          "hq": "세네갈 다카르",
          "employees": "1~10명",
          "funding": null,
          "topInvestor": "GSMA Ecosystem Accelerator",
          "fundingStage": "Seed",
          "website": "http://matontine.com/"
        },
        {
          "nameKo": "서드페이",
          "field": "금융&핀테크",
          "foundedYear": "2014",
          "hq": "세네갈 다카르",
          "employees": "11~50명",
          "funding": {
            "usd": "392,000 USD",
            "krw": "약 5억 8,800만 원",
            "year": null
          },
          "topInvestor": "GSMA",
          "fundingStage": "Seed",
          "website": "http://sudpay.com/"
        },
        {
          "nameKo": "싸리스",
          "field": "금융&핀테크",
          "foundedYear": "2017",
          "hq": "프랑스 파리",
          "employees": "1~10명",
          "funding": {
            "usd": "365,000,000 USD",
            "krw": "약 5,475억 원",
            "year": null
          },
          "topInvestor": "Paris & Co Incubateurs",
          "fundingStage": "Seed",
          "website": "http://www.xaalys.com"
        },
        {
          "nameKo": "아이원",
          "field": "헬스케어",
          "foundedYear": "2015",
          "hq": "세네갈 다카르",
          "employees": null,
          "funding": null,
          "topInvestor": null,
          "fundingStage": "Seed",
          "website": "http://www.eyone.net"
        },
        {
          "nameKo": "에이엠에이",
          "field": "금융&핀테크",
          "foundedYear": "2018",
          "hq": "세네갈 다카르",
          "employees": "11~50명",
          "funding": null,
          "topInvestor": null,
          "fundingStage": "Seed",
          "website": "http://www.ama.finance"
        }
      ]
    }
  },
  "세이셸": {
    "id": "세이셸",
    "name": "세이셸",
    "nameEn": "Seychelles",
    "population": "99,202명",
    "language": "크리올어(공용어), 영어(공용어), 프랑스어(공용어)",
    "capital": "빅토리아(Victoria)",
    "climateScore": null,
    "mainClimateIssue": null,
    "diplomacyScore": null,
    "matchScore": null,
    "recommended": null,
    "priorityPartner": false,
    "koreaOdaHistory": false,
    "economy": {
      "gdpPerCapita": {
        "usd": "13,307 USD",
        "krw": "약 1,996만 원",
        "year": "2021",
        "source": "KITA/한국무역협회"
      },
      "gdpTotal": {
        "usd": "1,320,000,000 USD",
        "krw": "약 1조 9,800억 원",
        "year": "2021",
        "source": "KITA/한국무역협회"
      },
      "odaNetReceived": {
        "usd": null,
        "krw": null,
        "year": null,
        "isNet": false
      },
      "recipientOda": {
        "usd": null,
        "krw": null,
        "year": null,
        "isNet": false
      },
      "bilateral": {
        "usd": null,
        "krw": null,
        "year": null,
        "isNet": false
      },
      "koreaOda": {
        "usd": null,
        "krw": null,
        "year": null,
        "isNet": false
      }
    },
    "koica": {
      "total": null,
      "sectors": []
    },
    "infrastructure": {
      "hospitalBeds": {
        "value": "2.6",
        "unit": "병상 / 1,000명",
        "year": "2023",
        "source": "World Bank"
      },
      "physicians": {
        "value": "6.6",
        "unit": "의사 / 1,000명",
        "year": "2022",
        "source": "World Bank"
      },
      "nursesMidwives": {
        "value": "7.3",
        "unit": "간호사·조산사 / 1,000명",
        "year": "2023",
        "source": "World Bank"
      },
      "electricityAccess": {
        "value": "100",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableEnergyShare": {
        "value": "4.5",
        "unit": "%",
        "year": "2021",
        "source": "World Bank"
      },
      "cleanCookingAccess": {
        "value": "100",
        "unit": "%",
        "year": "2023",
        "source": "World Bank"
      },
      "internetPenetration": {
        "value": "87.8",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "mobileSubscriptions": {
        "value": "125.6",
        "unit": "건 / 100명",
        "year": "2024",
        "source": "World Bank"
      },
      "basicWater": {
        "value": "97.7",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "basicSanitation": {
        "value": "99.7",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableWaterPerCapita": {
        "value": null,
        "unit": "m³ / 인",
        "year": null,
        "source": null
      },
      "pavedRoads": {
        "value": "96.5",
        "unit": "%",
        "year": "2010",
        "source": "World Bank"
      },
      "railLines": {
        "value": null,
        "unit": "km",
        "year": null,
        "source": null
      }
    },
    "koicaCumulative": {
      "total": "약 5억 4,649만 원",
      "latest": null,
      "latestYear": "2023",
      "startYear": "1991"
    },
    "koicaHealthDetail": null,
    "diplomaticContact": {
      "overseas": {
        "missionName": "주 에티오피아 대한민국 대사관",
        "missionType": "대사관",
        "jointCoverage": true,
        "address": "Embassy of the Repulic of Korea House No. 856, Kebele 04, Nefas Silk Lafto, Addis Ababa, Ethiopia,",
        "phone": "(251)113-72-81-11",
        "consularCenter": "(82)2-3210-0404",
        "tollFree": "080-020-0219",
        "emergency": "(251)92-217-4741",
        "website": "http://overseas.mofa.go.kr/et-ko/index.do",
        "lat": 9.051879,
        "lng": 38.727486
      },
      "domestic": null
    },
    "marketEntry": {
      "companyCount": 0,
      "industries": [],
      "startupCount": 0,
      "startupFields": [],
      "companies": [],
      "startups": []
    }
  },
  "소말리아": {
    "id": "소말리아",
    "name": "소말리아",
    "nameEn": "Somalia",
    "population": "15,610,000명 (2020년 기준)",
    "language": "소말리아어(공용어), 아랍어, 이탈리아어(남부), 영어(북부)",
    "capital": "모가디슈(Mogadishu)",
    "climateScore": null,
    "mainClimateIssue": null,
    "diplomacyScore": null,
    "matchScore": null,
    "recommended": null,
    "priorityPartner": false,
    "koreaOdaHistory": true,
    "economy": {
      "gdpPerCapita": {
        "usd": "757 USD",
        "krw": "약 113만 원",
        "year": "2023",
        "source": "IMF/국제통화기금"
      },
      "gdpTotal": {
        "usd": "32,100,000,000 USD",
        "krw": "약 48조 1,500억 원",
        "year": "2023",
        "source": "IMF/국제통화기금"
      },
      "odaNetReceived": {
        "usd": "약 38억 USD",
        "krw": "약 5조 7,032억 4,450만 원",
        "year": "2019",
        "isNet": false
      },
      "recipientOda": {
        "usd": "약 1,865백만 USD",
        "krw": "약 2조 7,975억 원",
        "year": "2019",
        "isNet": false
      },
      "bilateral": {
        "usd": "약 72백만 USD",
        "krw": "약 1,080억 원",
        "year": "2019",
        "isNet": false
      },
      "koreaOda": {
        "usd": "약 1백만 USD",
        "krw": "약 15억 원",
        "year": "2019",
        "isNet": false
      }
    },
    "koica": {
      "total": "4,268,507 원",
      "sectors": [
        {
          "name": "교육",
          "percent": 49.3,
          "amount": "2,104,021 원"
        },
        {
          "name": "농림수산",
          "percent": 12.4,
          "amount": "530,466 원"
        },
        {
          "name": "기술환경에너지",
          "percent": 0.3,
          "amount": "12,263 원"
        },
        {
          "name": "공공행정",
          "percent": 21.9,
          "amount": "934,229 원"
        },
        {
          "name": "긴급구호",
          "percent": 16.1,
          "amount": "687,529 원"
        }
      ]
    },
    "infrastructure": {
      "hospitalBeds": {
        "value": "0.9",
        "unit": "병상 / 1,000명",
        "year": "2019",
        "source": "World Bank"
      },
      "physicians": {
        "value": "0.0",
        "unit": "의사 / 1,000명",
        "year": "2014",
        "source": "World Bank"
      },
      "nursesMidwives": {
        "value": "0.3",
        "unit": "간호사·조산사 / 1,000명",
        "year": "2014",
        "source": "World Bank"
      },
      "electricityAccess": {
        "value": "54.4",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableEnergyShare": {
        "value": "11.2",
        "unit": "%",
        "year": "2021",
        "source": "World Bank"
      },
      "cleanCookingAccess": {
        "value": "5.4",
        "unit": "%",
        "year": "2023",
        "source": "World Bank"
      },
      "internetPenetration": {
        "value": "27.9",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "mobileSubscriptions": {
        "value": "54.0",
        "unit": "건 / 100명",
        "year": "2023",
        "source": "World Bank"
      },
      "basicWater": {
        "value": "75.3",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "basicSanitation": {
        "value": "44.5",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableWaterPerCapita": {
        "value": "337.0",
        "unit": "m³ / 인",
        "year": "2022",
        "source": "World Bank"
      },
      "pavedRoads": {
        "value": "11.8",
        "unit": "%",
        "year": "2001",
        "source": "World Bank"
      },
      "railLines": {
        "value": null,
        "unit": "km",
        "year": null,
        "source": null
      }
    },
    "koicaCumulative": {
      "total": "약 15억 1,756만 원",
      "latest": "약 1억 5,435만 원",
      "latestYear": "2023",
      "startYear": "1991"
    },
    "koicaHealthDetail": null,
    "diplomaticContact": {
      "overseas": {
        "missionName": "주 케냐 대한민국 대사관",
        "missionType": "대사관",
        "jointCoverage": true,
        "address": "Misha Towers, Westlands Road, Nairobi, Kenya,",
        "phone": "(254)20-361-5109",
        "consularCenter": "(82)2-3210-0404",
        "tollFree": "080-020-0219",
        "emergency": "(254)708-984-891",
        "website": "http://overseas.mofa.go.kr/ke-ko/index.do",
        "lat": -1.270147,
        "lng": 36.810002
      },
      "domestic": null
    },
    "marketEntry": {
      "companyCount": 0,
      "industries": [],
      "startupCount": 0,
      "startupFields": [],
      "companies": [],
      "startups": []
    }
  },
  "수단": {
    "id": "수단",
    "name": "수단",
    "nameEn": "Sudan",
    "population": "43,850,000명 (2020년 기준)",
    "language": "아랍어(공용어), 영어 등 총 114개 언어",
    "capital": "카르툼(Khartoum)",
    "climateScore": null,
    "mainClimateIssue": null,
    "diplomacyScore": null,
    "matchScore": null,
    "recommended": null,
    "priorityPartner": false,
    "koreaOdaHistory": true,
    "economy": {
      "gdpPerCapita": {
        "usd": "533 USD",
        "krw": "약 79만 원",
        "year": "2023",
        "source": "IMF/국제통화기금"
      },
      "gdpTotal": {
        "usd": "25,570,000,000 USD",
        "krw": "약 38조 3,550억 원",
        "year": "2023",
        "source": "IMF/국제통화기금"
      },
      "odaNetReceived": {
        "usd": "약 5억 USD",
        "krw": "약 7,956억 3,585만 원",
        "year": "2019",
        "isNet": false
      },
      "recipientOda": {
        "usd": "약 1,595백만 USD",
        "krw": "약 2조 3,925억 원",
        "year": "2019",
        "isNet": false
      },
      "bilateral": {
        "usd": "약 76백만 USD",
        "krw": "약 1,140억 원",
        "year": "2019",
        "isNet": false
      },
      "koreaOda": {
        "usd": "약 6백만 USD",
        "krw": "약 90억 원",
        "year": "2019",
        "isNet": false
      }
    },
    "koica": {
      "total": "45,500,000 원",
      "sectors": [
        {
          "name": "보건",
          "percent": 34.5,
          "amount": "15,700,000 원"
        },
        {
          "name": "교육",
          "percent": 16.6,
          "amount": "7,552,741 원"
        },
        {
          "name": "농림수산",
          "percent": 17.1,
          "amount": "7,775,862 원"
        },
        {
          "name": "기술환경에너지",
          "percent": 11.1,
          "amount": "5,052,967 원"
        },
        {
          "name": "공공행정",
          "percent": 16.0,
          "amount": "7,279,109 원"
        },
        {
          "name": "긴급구호",
          "percent": 2.6,
          "amount": "1,162,698 원"
        },
        {
          "name": "기타",
          "percent": 2.1,
          "amount": "958,065 원"
        }
      ]
    },
    "infrastructure": {
      "hospitalBeds": {
        "value": "0.7",
        "unit": "병상 / 1,000명",
        "year": "2021",
        "source": "World Bank"
      },
      "physicians": {
        "value": "0.2",
        "unit": "의사 / 1,000명",
        "year": "2017",
        "source": "World Bank"
      },
      "nursesMidwives": {
        "value": "1.1",
        "unit": "간호사·조산사 / 1,000명",
        "year": "2018",
        "source": "World Bank"
      },
      "electricityAccess": {
        "value": "66",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableEnergyShare": {
        "value": "58.0",
        "unit": "%",
        "year": "2021",
        "source": "World Bank"
      },
      "cleanCookingAccess": {
        "value": "70.5",
        "unit": "%",
        "year": "2023",
        "source": "World Bank"
      },
      "internetPenetration": {
        "value": "18.6",
        "unit": "%",
        "year": "2017",
        "source": "World Bank"
      },
      "mobileSubscriptions": {
        "value": "70.2",
        "unit": "건 / 100명",
        "year": "2022",
        "source": "World Bank"
      },
      "basicWater": {
        "value": "64.9",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "basicSanitation": {
        "value": "65.7",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableWaterPerCapita": {
        "value": "81.0",
        "unit": "m³ / 인",
        "year": "2022",
        "source": "World Bank"
      },
      "pavedRoads": {
        "value": "36.3",
        "unit": "%",
        "year": "2001",
        "source": "World Bank"
      },
      "railLines": {
        "value": "2747",
        "unit": "km",
        "year": "2020",
        "source": "World Bank"
      }
    },
    "koicaCumulative": {
      "total": "약 612억 2,876만 원",
      "latest": "약 67억 8,146만 원",
      "latestYear": "2023",
      "startYear": "1991"
    },
    "koicaHealthDetail": null,
    "diplomaticContact": {
      "overseas": {
        "missionName": "주 수단 대한민국 대사관",
        "missionType": "대사관",
        "jointCoverage": false,
        "address": "House No.55, Al-Jazira Street 56, Khartoum 2, P.O.Box 2414, Khartoum, Sudan,",
        "phone": "(249)1-8358-0031",
        "consularCenter": "(82)2-3210-0404",
        "tollFree": "080-020-0219",
        "emergency": "(249)9-1217-2813",
        "website": "http://overseas.mofa.go.kr/sd-ko/index.do",
        "lat": 15.501577,
        "lng": 32.572596
      },
      "domestic": {
        "ambassador": "Elham Kamal Ahmed",
        "address": "서울특별시 용산구 서빙고로51길 52 비비안 빌딩 3층",
        "phone": "793-8692 / 749-1090",
        "email": "embsudankr@gmail.com",
        "fax": "793-8693",
        "updatedAt": "2021-02-23"
      }
    },
    "marketEntry": {
      "companyCount": 0,
      "industries": [],
      "startupCount": 0,
      "startupFields": [],
      "companies": [],
      "startups": []
    }
  },
  "시에라리온": {
    "id": "시에라리온",
    "name": "시에라리온",
    "nameEn": "Sierra Leone",
    "population": "8,610,000명 (2020년 기준)",
    "language": "영어(공용어), 토착어",
    "capital": "프리타운(Freetown)",
    "climateScore": null,
    "mainClimateIssue": null,
    "diplomacyScore": null,
    "matchScore": null,
    "recommended": null,
    "priorityPartner": false,
    "koreaOdaHistory": true,
    "economy": {
      "gdpPerCapita": {
        "usd": "474 USD",
        "krw": "약 71만 원",
        "year": "2022",
        "source": "IMF/국제통화기금"
      },
      "gdpTotal": {
        "usd": "4,400,000,000 USD",
        "krw": "약 6조 6,000억 원",
        "year": "2022",
        "source": "IMF/국제통화기금"
      },
      "odaNetReceived": {
        "usd": "약 15억 USD",
        "krw": "약 2조 1,913억 6,800만 원",
        "year": "2019",
        "isNet": false
      },
      "recipientOda": {
        "usd": "약 760백만 USD",
        "krw": "약 1조 1,400억 원",
        "year": "2019",
        "isNet": false
      },
      "bilateral": {
        "usd": "약 43백만 USD",
        "krw": "약 645억 원",
        "year": "2019",
        "isNet": false
      },
      "koreaOda": {
        "usd": "약 15백만 USD",
        "krw": "약 225억 원",
        "year": "2019",
        "isNet": false
      }
    },
    "koica": {
      "total": "5,387,065 원",
      "sectors": [
        {
          "name": "보건",
          "percent": 37.6,
          "amount": "2,027,502 원"
        },
        {
          "name": "교육",
          "percent": 2.9,
          "amount": "155,631 원"
        },
        {
          "name": "농림수산",
          "percent": 29.4,
          "amount": "1,583,336 원"
        },
        {
          "name": "기술환경에너지",
          "percent": 0.7,
          "amount": "37,484 원"
        },
        {
          "name": "공공행정",
          "percent": 29.4,
          "amount": "1,583,113 원"
        }
      ]
    },
    "infrastructure": {
      "hospitalBeds": {
        "value": "0.4",
        "unit": "병상 / 1,000명",
        "year": "2006",
        "source": "World Bank"
      },
      "physicians": {
        "value": "0.1",
        "unit": "의사 / 1,000명",
        "year": "2022",
        "source": "World Bank"
      },
      "nursesMidwives": {
        "value": "1.2",
        "unit": "간호사·조산사 / 1,000명",
        "year": "2022",
        "source": "World Bank"
      },
      "electricityAccess": {
        "value": "39.2",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableEnergyShare": {
        "value": "75.3",
        "unit": "%",
        "year": "2021",
        "source": "World Bank"
      },
      "cleanCookingAccess": {
        "value": "0.9",
        "unit": "%",
        "year": "2023",
        "source": "World Bank"
      },
      "internetPenetration": {
        "value": "25.1",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "mobileSubscriptions": {
        "value": "107.9",
        "unit": "건 / 100명",
        "year": "2022",
        "source": "World Bank"
      },
      "basicWater": {
        "value": "68.1",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "basicSanitation": {
        "value": "24.9",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableWaterPerCapita": {
        "value": "19331.1",
        "unit": "m³ / 인",
        "year": "2022",
        "source": "World Bank"
      },
      "pavedRoads": {
        "value": "8",
        "unit": "%",
        "year": "2002",
        "source": "World Bank"
      },
      "railLines": {
        "value": null,
        "unit": "km",
        "year": null,
        "source": null
      }
    },
    "koicaCumulative": {
      "total": "약 61억 5,370만 원",
      "latest": "약 12억 3,541만 원",
      "latestYear": "2023",
      "startYear": "1991"
    },
    "koicaHealthDetail": {
      "year": "2024",
      "sectors": [
        {
          "name": "기초보건진료",
          "percent": 91.4,
          "amount": "339,040,500 원"
        },
        {
          "name": "보건인력개발",
          "percent": 8.6,
          "amount": "31,740,000 원"
        }
      ]
    },
    "diplomaticContact": {
      "overseas": {
        "missionName": "주 나이지리아 대한민국 대사관",
        "missionType": "대사관",
        "jointCoverage": true,
        "address": "No.9 Ovia cresent, Off Pope John Paul Ⅱ street, Off Gana street, Maitama, Abuja,",
        "phone": "(234)810-389-0991",
        "consularCenter": "(82)2-3210-0404",
        "tollFree": "080-020-0219",
        "emergency": "(234)809-998-1726",
        "website": "http://overseas.mofa.go.kr/ng-ko/index.do",
        "lat": 9.084108,
        "lng": 7.49347
      },
      "domestic": {
        "ambassador": "Kathos Jibao MATTAI",
        "address": "서울특별시 용산구 이태원로 54길 63-3",
        "phone": "792-8911/2",
        "email": "info@sierra-leone.or.kr",
        "fax": "792-7781",
        "updatedAt": "2020-01-14"
      }
    },
    "marketEntry": {
      "companyCount": 0,
      "industries": [],
      "startupCount": 0,
      "startupFields": [],
      "companies": [],
      "startups": []
    }
  },
  "알제리": {
    "id": "알제리",
    "name": "알제리",
    "nameEn": "Algeria",
    "population": "45,970,000명 (2020년 기준)",
    "language": "아랍어, 베르베르어(공용어), 프랑스어(상용어)",
    "capital": "알제(Algiers)",
    "climateScore": null,
    "mainClimateIssue": null,
    "diplomacyScore": null,
    "matchScore": null,
    "recommended": null,
    "priorityPartner": false,
    "koreaOdaHistory": true,
    "economy": {
      "gdpPerCapita": {
        "usd": "4,480 USD",
        "krw": "약 672만 원",
        "year": "2023",
        "source": "IMF/국제통화기금"
      },
      "gdpTotal": {
        "usd": "206,000,000,000 USD",
        "krw": "약 309조 원",
        "year": "2023",
        "source": "IMF/국제통화기금"
      },
      "odaNetReceived": {
        "usd": "약 0억 USD",
        "krw": "약 157억 8,738만 원",
        "year": "2019",
        "isNet": false
      },
      "recipientOda": {
        "usd": "약 -18백만 USD",
        "krw": "약 -270억 원",
        "year": "2019",
        "isNet": true
      },
      "bilateral": {
        "usd": "약 73백만 USD",
        "krw": "약 1,095억 원",
        "year": "2019",
        "isNet": false
      },
      "koreaOda": {
        "usd": "약 2백만 USD",
        "krw": "약 30억 원",
        "year": "2019",
        "isNet": false
      }
    },
    "koica": {
      "total": "35,800,000 원",
      "sectors": [
        {
          "name": "보건",
          "percent": 0.3,
          "amount": "114,439 원"
        },
        {
          "name": "교육",
          "percent": 4.4,
          "amount": "1,575,963 원"
        },
        {
          "name": "농림수산",
          "percent": 57.3,
          "amount": "20,500,000 원"
        },
        {
          "name": "기술환경에너지",
          "percent": 20.5,
          "amount": "7,322,870 원"
        },
        {
          "name": "공공행정",
          "percent": 15.9,
          "amount": "5,690,650 원"
        },
        {
          "name": "긴급구호",
          "percent": 0.4,
          "amount": "151,916 원"
        },
        {
          "name": "기타",
          "percent": 1.3,
          "amount": "455,937 원"
        }
      ]
    },
    "infrastructure": {
      "hospitalBeds": {
        "value": "1.6",
        "unit": "병상 / 1,000명",
        "year": "2017",
        "source": "World Bank"
      },
      "physicians": {
        "value": "1.7",
        "unit": "의사 / 1,000명",
        "year": "2022",
        "source": "World Bank"
      },
      "nursesMidwives": {
        "value": "2.5",
        "unit": "간호사·조산사 / 1,000명",
        "year": "2022",
        "source": "World Bank"
      },
      "electricityAccess": {
        "value": "100",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableEnergyShare": {
        "value": "0.9",
        "unit": "%",
        "year": "2021",
        "source": "World Bank"
      },
      "cleanCookingAccess": {
        "value": "99.7",
        "unit": "%",
        "year": "2023",
        "source": "World Bank"
      },
      "internetPenetration": {
        "value": "77.4",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "mobileSubscriptions": {
        "value": "115.5",
        "unit": "건 / 100명",
        "year": "2024",
        "source": "World Bank"
      },
      "basicWater": {
        "value": "92.4",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "basicSanitation": {
        "value": "85.9",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableWaterPerCapita": {
        "value": "247.3",
        "unit": "m³ / 인",
        "year": "2022",
        "source": "World Bank"
      },
      "pavedRoads": {
        "value": "77.1",
        "unit": "%",
        "year": "2010",
        "source": "World Bank"
      },
      "railLines": {
        "value": "4000.5",
        "unit": "km",
        "year": "2021",
        "source": "World Bank"
      }
    },
    "koicaCumulative": {
      "total": "약 445억 7,757만 원",
      "latest": "약 26억 424만 원",
      "latestYear": "2023",
      "startYear": "1991"
    },
    "koicaHealthDetail": {
      "year": "2024",
      "sectors": [
        {
          "name": "보건정책 및 행정관리",
          "percent": 65.0,
          "amount": "29,457,000 원"
        },
        {
          "name": "보건인력개발",
          "percent": 35.0,
          "amount": "15,870,000 원"
        }
      ]
    },
    "diplomaticContact": {
      "overseas": {
        "missionName": "주 알제리 대한민국 대사관",
        "missionType": "대사관",
        "jointCoverage": false,
        "address": "23, Chemin de la Madeleine Chekiken,Hydra, Alger, Algeria,",
        "phone": "(213)23-47-28-38",
        "consularCenter": "(82)2-3210-0404",
        "tollFree": "080-020-0219",
        "emergency": "(213)770-11-44-00",
        "website": "http://overseas.mofa.go.kr/dz-ko/index.do",
        "lat": 36.755049,
        "lng": 3.02583
      },
      "domestic": {
        "ambassador": "Nabil TIBOURTINE",
        "address": "서울특별시 용산구 회나무로 81",
        "phone": "794-5034/5",
        "email": "dzemb@algerianemb.or.kr",
        "fax": "794-5040",
        "updatedAt": "2021-11-15"
      }
    },
    "marketEntry": {
      "companyCount": 0,
      "industries": [],
      "startupCount": 0,
      "startupFields": [],
      "companies": [],
      "startups": []
    }
  },
  "앙골라": {
    "id": "앙골라",
    "name": "앙골라",
    "nameEn": "Angola",
    "population": "33,000,000명 (2020년 기준)",
    "language": "포르투갈어(공용어), 반투어(토착어)",
    "capital": "루안다(Luanda)",
    "climateScore": null,
    "mainClimateIssue": null,
    "diplomacyScore": null,
    "matchScore": null,
    "recommended": null,
    "priorityPartner": false,
    "koreaOdaHistory": true,
    "economy": {
      "gdpPerCapita": {
        "usd": "2,450 USD",
        "krw": "약 367만 원",
        "year": "2023",
        "source": "IMF/국제통화기금"
      },
      "gdpTotal": {
        "usd": "92,900,000,000 USD",
        "krw": "약 139조 3,500억 원",
        "year": "2023",
        "source": "IMF/국제통화기금"
      },
      "odaNetReceived": {
        "usd": "약 0억 USD",
        "krw": "약 90억 7,315만 원",
        "year": "2019",
        "isNet": false
      },
      "recipientOda": {
        "usd": "약 111백만 USD",
        "krw": "약 1,665억 원",
        "year": "2019",
        "isNet": false
      },
      "bilateral": {
        "usd": "약 38백만 USD",
        "krw": "약 570억 원",
        "year": "2019",
        "isNet": false
      },
      "koreaOda": {
        "usd": "약 6백만 USD",
        "krw": "약 90억 원",
        "year": "2019",
        "isNet": false
      }
    },
    "koica": {
      "total": "14,800,000 원",
      "sectors": [
        {
          "name": "보건",
          "percent": 1.9,
          "amount": "275,183 원"
        },
        {
          "name": "교육",
          "percent": 40.8,
          "amount": "6,031,929 원"
        },
        {
          "name": "농림수산",
          "percent": 47.1,
          "amount": "6,965,378 원"
        },
        {
          "name": "기술환경에너지",
          "percent": 1.4,
          "amount": "213,725 원"
        },
        {
          "name": "공공행정",
          "percent": 8.3,
          "amount": "1,226,524 원"
        },
        {
          "name": "긴급구호",
          "percent": 0.2,
          "amount": "29,966 원"
        },
        {
          "name": "기타",
          "percent": 0.1,
          "amount": "22,174 원"
        }
      ]
    },
    "infrastructure": {
      "hospitalBeds": {
        "value": "0.8",
        "unit": "병상 / 1,000명",
        "year": "2019",
        "source": "World Bank"
      },
      "physicians": {
        "value": "0.2",
        "unit": "의사 / 1,000명",
        "year": "2022",
        "source": "World Bank"
      },
      "nursesMidwives": {
        "value": "1.9",
        "unit": "간호사·조산사 / 1,000명",
        "year": "2022",
        "source": "World Bank"
      },
      "electricityAccess": {
        "value": "55.5",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableEnergyShare": {
        "value": "91.2",
        "unit": "%",
        "year": "2021",
        "source": "World Bank"
      },
      "cleanCookingAccess": {
        "value": "50.2",
        "unit": "%",
        "year": "2023",
        "source": "World Bank"
      },
      "internetPenetration": {
        "value": "40.7",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "mobileSubscriptions": {
        "value": "69.7",
        "unit": "건 / 100명",
        "year": "2024",
        "source": "World Bank"
      },
      "basicWater": {
        "value": "68.0",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "basicSanitation": {
        "value": "50.3",
        "unit": "%",
        "year": "2022",
        "source": "World Bank"
      },
      "renewableWaterPerCapita": {
        "value": "4153.2",
        "unit": "m³ / 인",
        "year": "2022",
        "source": "World Bank"
      },
      "pavedRoads": {
        "value": "10.4",
        "unit": "%",
        "year": "2001",
        "source": "World Bank"
      },
      "railLines": {
        "value": null,
        "unit": "km",
        "year": null,
        "source": null
      }
    },
    "koicaCumulative": {
      "total": "약 193억 5,501만 원",
      "latest": "약 16억 6,024만 원",
      "latestYear": "2023",
      "startYear": "1991"
    },
    "koicaHealthDetail": {
      "year": "2024",
      "sectors": [
        {
          "name": "보건정책 및 행정관리",
          "percent": 100.0,
          "amount": "606,352,500 원"
        }
      ]
    },
    "diplomaticContact": {
      "overseas": {
        "missionName": "주 앙골라 대한민국 대사관",
        "missionType": "대사관",
        "jointCoverage": false,
        "address": "Condominio Zenith, Torre 1, 7&ordm; Andar, Via AL 16, Luanda, Angola,",
        "phone": "(244)222-006-067",
        "consularCenter": "(82)2-3210-0404",
        "tollFree": "080-020-0219",
        "emergency": "(244)938-880-573",
        "website": "http://overseas.mofa.go.kr/ao-ko/index.do",
        "lat": -8.920868,
        "lng": 13.202023
      },
      "domestic": {
        "ambassador": "Edgar Augusto Brandão Gaspar Martins",
        "address": "서울특별시 성북구 선잠로5길 14",
        "phone": "792-8463",
        "email": "secretariado@angolaembassy.or.kr",
        "fax": "792-8467",
        "updatedAt": "2020-01-13"
      }
    },
    "marketEntry": {
      "companyCount": 0,
      "industries": [],
      "startupCount": 1,
      "startupFields": [
        {
          "name": "헬스케어",
          "count": 1
        }
      ],
      "companies": [],
      "startups": [
        {
          "nameKo": "애피 사우데",
          "field": "헬스케어",
          "foundedYear": "2016",
          "hq": "앙골라 루안다",
          "employees": null,
          "funding": {
            "usd": "2,500,000 USD",
            "krw": "약 37억 5,000만 원",
            "year": null
          },
          "topInvestor": null,
          "fundingStage": "Seed",
          "website": "http://appysaude.co.al/"
        }
      ]
    }
  },
  "에리트레아": {
    "id": "에리트레아",
    "name": "에리트레아",
    "nameEn": "Eritrea",
    "population": "3,660,000명 (2011년 기준)",
    "language": "티그리냐어, 아랍어",
    "capital": "아스마라 (Asmara)",
    "climateScore": null,
    "mainClimateIssue": null,
    "diplomacyScore": null,
    "matchScore": null,
    "recommended": null,
    "priorityPartner": false,
    "koreaOdaHistory": true,
    "economy": {
      "gdpPerCapita": {
        "usd": "566 USD",
        "krw": "약 84만 원",
        "year": "2019",
        "source": "IMF/국제통화기금"
      },
      "gdpTotal": {
        "usd": "1,980,000,000 USD",
        "krw": "약 2조 9,700억 원",
        "year": "2019",
        "source": "IMF/국제통화기금"
      },
      "odaNetReceived": {
        "usd": "약 7억 USD",
        "krw": "약 9,802억 5,675만 원",
        "year": "2011",
        "isNet": false
      },
      "recipientOda": {
        "usd": "약 276백만 USD",
        "krw": "약 4,140억 원",
        "year": "2019",
        "isNet": false
      },
      "bilateral": {
        "usd": "약 81백만 USD",
        "krw": "약 1,215억 원",
        "year": "2011",
        "isNet": false
      },
      "koreaOda": {
        "usd": null,
        "krw": null,
        "year": null,
        "isNet": false
      }
    },
    "koica": {
      "total": "603,161 원",
      "sectors": [
        {
          "name": "보건",
          "percent": 8.4,
          "amount": "50,402 원"
        },
        {
          "name": "교육",
          "percent": 4.0,
          "amount": "24,049 원"
        },
        {
          "name": "농림수산",
          "percent": 29.6,
          "amount": "178,572 원"
        },
        {
          "name": "기술환경에너지",
          "percent": 2.1,
          "amount": "12,905 원"
        },
        {
          "name": "공공행정",
          "percent": 26.9,
          "amount": "162,273 원"
        },
        {
          "name": "긴급구호",
          "percent": 24.1,
          "amount": "145,162 원"
        },
        {
          "name": "기타",
          "percent": 4.9,
          "amount": "29,798 원"
        }
      ]
    },
    "infrastructure": {
      "hospitalBeds": {
        "value": "1.0",
        "unit": "병상 / 1,000명",
        "year": "2023",
        "source": "World Bank"
      },
      "physicians": {
        "value": "0.1",
        "unit": "의사 / 1,000명",
        "year": "2022",
        "source": "World Bank"
      },
      "nursesMidwives": {
        "value": "1.5",
        "unit": "간호사·조산사 / 1,000명",
        "year": "2022",
        "source": "World Bank"
      },
      "electricityAccess": {
        "value": "55.3",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableEnergyShare": {
        "value": "5.1",
        "unit": "%",
        "year": "2021",
        "source": "World Bank"
      },
      "cleanCookingAccess": {
        "value": "12",
        "unit": "%",
        "year": "2023",
        "source": "World Bank"
      },
      "internetPenetration": {
        "value": "14.3",
        "unit": "%",
        "year": "2020",
        "source": "World Bank"
      },
      "mobileSubscriptions": {
        "value": "59.1",
        "unit": "건 / 100명",
        "year": "2022",
        "source": "World Bank"
      },
      "basicWater": {
        "value": "51.8",
        "unit": "%",
        "year": "2016",
        "source": "World Bank"
      },
      "basicSanitation": {
        "value": "11.9",
        "unit": "%",
        "year": "2016",
        "source": "World Bank"
      },
      "renewableWaterPerCapita": {
        "value": "821.2",
        "unit": "m³ / 인",
        "year": "2022",
        "source": "World Bank"
      },
      "pavedRoads": {
        "value": "21.8",
        "unit": "%",
        "year": "2001",
        "source": "World Bank"
      },
      "railLines": {
        "value": null,
        "unit": "km",
        "year": null,
        "source": null
      }
    },
    "koicaCumulative": {
      "total": "약 5억 9,199만 원",
      "latest": null,
      "latestYear": "2023",
      "startYear": "1991"
    },
    "koicaHealthDetail": null,
    "diplomaticContact": {
      "overseas": {
        "missionName": "주 수단 대한민국 대사관",
        "missionType": "대사관",
        "jointCoverage": true,
        "address": "House No.55, Al-Jazira Street 56, Khartoum 2, P.O.Box 2414, Khartoum, Sudan,",
        "phone": "(249)1-8358-0031",
        "consularCenter": "(82)2-3210-0404",
        "tollFree": "080-020-0219",
        "emergency": "(249)9-1217-2813",
        "website": "http://overseas.mofa.go.kr/sd-ko/index.do",
        "lat": 15.501577,
        "lng": 32.572596
      },
      "domestic": null
    },
    "marketEntry": {
      "companyCount": 0,
      "industries": [],
      "startupCount": 0,
      "startupFields": [],
      "companies": [],
      "startups": []
    }
  },
  "에스와티니": {
    "id": "에스와티니",
    "name": "에스와티니",
    "nameEn": "Eswatini",
    "population": "1,170,000명",
    "language": "영어(공용어), 시스와티어(공용어)",
    "capital": "음바바네(Mbabane)",
    "climateScore": null,
    "mainClimateIssue": null,
    "diplomacyScore": null,
    "matchScore": null,
    "recommended": null,
    "priorityPartner": false,
    "koreaOdaHistory": false,
    "economy": {
      "gdpPerCapita": {
        "usd": "3,880 USD",
        "krw": "약 582만 원",
        "year": "2022",
        "source": "IMF/국제통화기금"
      },
      "gdpTotal": {
        "usd": "4,460,000,000 USD",
        "krw": "약 6조 6,900억 원",
        "year": "2022",
        "source": "IMF/국제통화기금"
      },
      "odaNetReceived": {
        "usd": null,
        "krw": null,
        "year": null,
        "isNet": false
      },
      "recipientOda": {
        "usd": null,
        "krw": null,
        "year": null,
        "isNet": false
      },
      "bilateral": {
        "usd": null,
        "krw": null,
        "year": null,
        "isNet": false
      },
      "koreaOda": {
        "usd": null,
        "krw": null,
        "year": null,
        "isNet": false
      }
    },
    "koica": {
      "total": null,
      "sectors": []
    },
    "infrastructure": {
      "hospitalBeds": {
        "value": "2.0",
        "unit": "병상 / 1,000명",
        "year": "2013",
        "source": "World Bank"
      },
      "physicians": {
        "value": "0.6",
        "unit": "의사 / 1,000명",
        "year": "2023",
        "source": "World Bank"
      },
      "nursesMidwives": {
        "value": "4.3",
        "unit": "간호사·조산사 / 1,000명",
        "year": "2023",
        "source": "World Bank"
      },
      "electricityAccess": {
        "value": "89.3",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableEnergyShare": {
        "value": "83.1",
        "unit": "%",
        "year": "2021",
        "source": "World Bank"
      },
      "cleanCookingAccess": {
        "value": "50.3",
        "unit": "%",
        "year": "2023",
        "source": "World Bank"
      },
      "internetPenetration": {
        "value": "63.4",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "mobileSubscriptions": {
        "value": "139.8",
        "unit": "건 / 100명",
        "year": "2024",
        "source": "World Bank"
      },
      "basicWater": {
        "value": "80.4",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "basicSanitation": {
        "value": "64.5",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableWaterPerCapita": {
        "value": "2165.9",
        "unit": "m³ / 인",
        "year": "2022",
        "source": "World Bank"
      },
      "pavedRoads": {
        "value": "30.0",
        "unit": "%",
        "year": "2002",
        "source": "World Bank"
      },
      "railLines": {
        "value": "300",
        "unit": "km",
        "year": "2011",
        "source": "World Bank"
      }
    },
    "koicaCumulative": {
      "total": "약 41억 1,845만 원",
      "latest": "약 3억 9,921만 원",
      "latestYear": "2023",
      "startYear": "1991"
    },
    "koicaHealthDetail": {
      "year": "2024",
      "sectors": [
        {
          "name": "보건정책 및 행정관리",
          "percent": 100.0,
          "amount": "217,117,500 원"
        }
      ]
    },
    "diplomaticContact": {
      "overseas": {
        "missionName": "주 남아프리카공화국 대한민국 대사관",
        "missionType": "대사관",
        "jointCoverage": true,
        "address": "265 Melk Street, Nieuw Muckleneuk, Pretoria 0181, South Africa,",
        "phone": "(27)12-460-2508",
        "consularCenter": "(82)2-3210-0404",
        "tollFree": "080-020-0219",
        "emergency": "(27)66-332-5897",
        "website": "http://overseas.mofa.go.kr/za-ko/index.do",
        "lat": -25.773293,
        "lng": 28.226605
      },
      "domestic": null
    },
    "marketEntry": {
      "companyCount": 0,
      "industries": [],
      "startupCount": 0,
      "startupFields": [],
      "companies": [],
      "startups": []
    }
  },
  "에티오피아": {
    "id": "에티오피아",
    "name": "에티오피아",
    "nameEn": "Ethiopia",
    "population": "123,000,000명 (2020년 기준)",
    "language": "암하라어(공용어), 영어",
    "capital": "아디스아바바(Addis Ababa)",
    "climateScore": null,
    "mainClimateIssue": null,
    "diplomacyScore": null,
    "matchScore": null,
    "recommended": null,
    "priorityPartner": true,
    "koreaOdaHistory": true,
    "economy": {
      "gdpPerCapita": {
        "usd": "1,790 USD",
        "krw": "약 268만 원",
        "year": "2023",
        "source": "IMF/국제통화기금"
      },
      "gdpTotal": {
        "usd": "192,000,000,000 USD",
        "krw": "약 288조 원",
        "year": "2023",
        "source": "World Bank"
      },
      "odaNetReceived": {
        "usd": "약 5억 USD",
        "krw": "약 7,568억 9,550만 원",
        "year": "2019",
        "isNet": false
      },
      "recipientOda": {
        "usd": "약 4,925백만 USD",
        "krw": "약 7조 3,875억 원",
        "year": "2019",
        "isNet": false
      },
      "bilateral": {
        "usd": "약 45백만 USD",
        "krw": "약 675억 원",
        "year": "2019",
        "isNet": false
      },
      "koreaOda": {
        "usd": "약 80백만 USD",
        "krw": "약 1,200억 원",
        "year": "2019",
        "isNet": false
      }
    },
    "koica": {
      "total": "212,000,000 원",
      "sectors": [
        {
          "name": "보건",
          "percent": 35.1,
          "amount": "74,400,000 원"
        },
        {
          "name": "교육",
          "percent": 29.8,
          "amount": "63,200,000 원"
        },
        {
          "name": "농림수산",
          "percent": 16.5,
          "amount": "35,000,000 원"
        },
        {
          "name": "기술환경에너지",
          "percent": 8.1,
          "amount": "17,100,000 원"
        },
        {
          "name": "공공행정",
          "percent": 8.0,
          "amount": "17,000,000 원"
        },
        {
          "name": "긴급구호",
          "percent": 1.2,
          "amount": "2,488,338 원"
        },
        {
          "name": "기타",
          "percent": 1.3,
          "amount": "2,678,378 원"
        }
      ]
    },
    "infrastructure": {
      "hospitalBeds": {
        "value": "0.3",
        "unit": "병상 / 1,000명",
        "year": "2016",
        "source": "World Bank"
      },
      "physicians": {
        "value": "0.1",
        "unit": "의사 / 1,000명",
        "year": "2023",
        "source": "World Bank"
      },
      "nursesMidwives": {
        "value": "1.2",
        "unit": "간호사·조산사 / 1,000명",
        "year": "2022",
        "source": "World Bank"
      },
      "electricityAccess": {
        "value": "56.6",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableEnergyShare": {
        "value": "95.4",
        "unit": "%",
        "year": "2020",
        "source": "World Bank"
      },
      "cleanCookingAccess": {
        "value": "7.1",
        "unit": "%",
        "year": "2023",
        "source": "World Bank"
      },
      "internetPenetration": {
        "value": "21.9",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "mobileSubscriptions": {
        "value": "65.1",
        "unit": "건 / 100명",
        "year": "2024",
        "source": "World Bank"
      },
      "basicWater": {
        "value": "55.6",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "basicSanitation": {
        "value": "10.4",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableWaterPerCapita": {
        "value": "973.0",
        "unit": "m³ / 인",
        "year": "2022",
        "source": "World Bank"
      },
      "pavedRoads": {
        "value": "13.7",
        "unit": "%",
        "year": "2007",
        "source": "World Bank"
      },
      "railLines": {
        "value": "754",
        "unit": "km",
        "year": "2018",
        "source": "World Bank"
      }
    },
    "koicaCumulative": {
      "total": "약 3,122억 8,813만 원",
      "latest": "약 339억 9,466만 원",
      "latestYear": "2023",
      "startYear": "1991"
    },
    "koicaHealthDetail": {
      "year": "2024",
      "sectors": [
        {
          "name": "생식보건",
          "percent": 49.8,
          "amount": "1,462,798,500 원"
        },
        {
          "name": "의료서비스",
          "percent": 19.7,
          "amount": "580,539,000 원"
        },
        {
          "name": "보건교육",
          "percent": 18.7,
          "amount": "550,044,000 원"
        },
        {
          "name": "기초보건진료",
          "percent": 11.8,
          "amount": "346,662,000 원"
        }
      ]
    },
    "diplomaticContact": {
      "overseas": {
        "missionName": "주 에티오피아 대한민국 대사관",
        "missionType": "대사관",
        "jointCoverage": false,
        "address": "Embassy of the Repulic of Korea House No. 856, Kebele 04, Nefas Silk Lafto, Addis Ababa, Ethiopia,",
        "phone": "(251)113-72-81-11",
        "consularCenter": "(82)2-3210-0404",
        "tollFree": "080-020-0219",
        "emergency": "(251)92-217-4741",
        "website": "http://overseas.mofa.go.kr/et-ko/index.do",
        "lat": 9.051879,
        "lng": 38.727486
      },
      "domestic": {
        "ambassador": "Shiferaw Shigutie WOLASSA",
        "address": "서울특별시 용산구 회나무로44길 20",
        "phone": "790-9766/7",
        "email": "embassyethio@gmail.com",
        "fax": "790-0156",
        "updatedAt": "2020-01-14"
      }
    },
    "marketEntry": {
      "companyCount": 0,
      "industries": [],
      "startupCount": 0,
      "startupFields": [],
      "companies": [],
      "startups": []
    }
  },
  "우간다": {
    "id": "우간다",
    "name": "우간다",
    "nameEn": "Uganda",
    "population": "47,000,000명 (2020년 기준)",
    "language": "영어(공용어), 루간다어, 스와힐리어 등",
    "capital": "캄팔라(Kampala)",
    "climateScore": null,
    "mainClimateIssue": null,
    "diplomacyScore": null,
    "matchScore": null,
    "recommended": null,
    "priorityPartner": true,
    "koreaOdaHistory": true,
    "economy": {
      "gdpPerCapita": {
        "usd": "1,160 USD",
        "krw": "약 174만 원",
        "year": "2023",
        "source": "IMF/국제통화기금"
      },
      "gdpTotal": {
        "usd": "52,400,000,000 USD",
        "krw": "약 78조 6,000억 원",
        "year": "2023",
        "source": "IMF/국제통화기금"
      },
      "odaNetReceived": {
        "usd": "약 6억 USD",
        "krw": "약 9,196억 590만 원",
        "year": "2019",
        "isNet": false
      },
      "recipientOda": {
        "usd": "약 2,445백만 USD",
        "krw": "약 3조 6,675억 원",
        "year": "2019",
        "isNet": false
      },
      "bilateral": {
        "usd": "약 54백만 USD",
        "krw": "약 810억 원",
        "year": "2019",
        "isNet": false
      },
      "koreaOda": {
        "usd": "약 26백만 USD",
        "krw": "약 390억 원",
        "year": "2019",
        "isNet": false
      }
    },
    "koica": {
      "total": "103,000,000 원",
      "sectors": [
        {
          "name": "보건",
          "percent": 20.9,
          "amount": "21,500,000 원"
        },
        {
          "name": "교육",
          "percent": 17.7,
          "amount": "18,200,000 원"
        },
        {
          "name": "농림수산",
          "percent": 31.0,
          "amount": "31,900,000 원"
        },
        {
          "name": "기술환경에너지",
          "percent": 12.2,
          "amount": "12,600,000 원"
        },
        {
          "name": "공공행정",
          "percent": 11.1,
          "amount": "11,400,000 원"
        },
        {
          "name": "긴급구호",
          "percent": 3.4,
          "amount": "3,524,593 원"
        },
        {
          "name": "기타",
          "percent": 3.8,
          "amount": "3,890,249 원"
        }
      ]
    },
    "infrastructure": {
      "hospitalBeds": {
        "value": "0.5",
        "unit": "병상 / 1,000명",
        "year": "2010",
        "source": "World Bank"
      },
      "physicians": {
        "value": "0.2",
        "unit": "의사 / 1,000명",
        "year": "2022",
        "source": "World Bank"
      },
      "nursesMidwives": {
        "value": "2.3",
        "unit": "간호사·조산사 / 1,000명",
        "year": "2022",
        "source": "World Bank"
      },
      "electricityAccess": {
        "value": "55.3",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableEnergyShare": {
        "value": "90.0",
        "unit": "%",
        "year": "2021",
        "source": "World Bank"
      },
      "cleanCookingAccess": {
        "value": "1.8",
        "unit": "%",
        "year": "2023",
        "source": "World Bank"
      },
      "internetPenetration": {
        "value": "8.9",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "mobileSubscriptions": {
        "value": "83.2",
        "unit": "건 / 100명",
        "year": "2024",
        "source": "World Bank"
      },
      "basicWater": {
        "value": "63.0",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "basicSanitation": {
        "value": "23.9",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableWaterPerCapita": {
        "value": "824.3",
        "unit": "m³ / 인",
        "year": "2022",
        "source": "World Bank"
      },
      "pavedRoads": {
        "value": "23",
        "unit": "%",
        "year": "2003",
        "source": "World Bank"
      },
      "railLines": {
        "value": "259",
        "unit": "km",
        "year": "2002",
        "source": "World Bank"
      }
    },
    "koicaCumulative": {
      "total": "약 1,741억 5,825만 원",
      "latest": "약 252억 5,853만 원",
      "latestYear": "2023",
      "startYear": "1991"
    },
    "koicaHealthDetail": {
      "year": "2024",
      "sectors": [
        {
          "name": "보건정책 및 행정관리",
          "percent": 96.2,
          "amount": "13,563,480,000 원"
        },
        {
          "name": "의료서비스",
          "percent": 2.1,
          "amount": "290,269,500 원"
        },
        {
          "name": "보건교육",
          "percent": 1.6,
          "amount": "224,661,000 원"
        },
        {
          "name": "보건인력개발",
          "percent": 0.1,
          "amount": "15,870,000 원"
        }
      ]
    },
    "diplomaticContact": {
      "overseas": {
        "missionName": "주 우간다 대한민국 대사관",
        "missionType": "대사관",
        "jointCoverage": false,
        "address": "Plot 14 Ternan Avenue, Kampala, Uganda,",
        "phone": "(256)414-500-197",
        "consularCenter": "(82)2-3210-0404",
        "tollFree": "080-020-0219",
        "emergency": "(256)774-478-376",
        "website": null,
        "lat": 0.320245,
        "lng": 32.583
      },
      "domestic": null
    },
    "marketEntry": {
      "companyCount": 2,
      "industries": [
        {
          "name": "제조업",
          "count": 1
        },
        {
          "name": "금융 및 보험업",
          "count": 1
        }
      ],
      "startupCount": 2,
      "startupFields": [
        {
          "name": "금융&핀테크",
          "count": 1
        },
        {
          "name": "헬스케어",
          "count": 1
        }
      ],
      "companies": [
        {
          "nameKo": "브리티쉬 아메리칸 토바코 우간다",
          "nameEn": "British American Tobacco UG",
          "foundedYear": "1928",
          "parentCompany": "British American Tobacco Investments Limited \r- 창립자: Imperial Tobacco, \rAmerican Tobacco company\r- 창립연도: 1902년",
          "hq": "우간다 캄팔라(Kampala)",
          "industry": "제조업",
          "subIndustry": "담배 생산, 가공, 유통",
          "corpType": "사기업(주식회사)",
          "employees": "1158",
          "marketCap": {
            "usd": "387,000,000 USD",
            "krw": "약 5,805억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "4,000,000 USD",
            "krw": "약 60억 원",
            "year": "2020"
          },
          "website": "www.bat.com",
          "highlights": [
            "모회사인 British American Tobacco Investments Limited는 영국에 본사를 둔 다국적 기업으로 1902년 영국왕실 담배회사와 미국 담배회사의 합작투자로 설립되었으며, 전 세계 180여 개국에서 담배 생산, 가공, 유통중임. 대표적인 브랜드로 던힐, 켄트, 럭키스트라이크 등이 있음",
            "1927년 우간다에 자회사를설립하였으며 1972년에 국영화되기도 했으나 2000년 상장됨",
            "우간다의 13개 지역에서 담배잎을 경작하여 캄팔라(Kampala)에서 가공처리를 하며 유럽, 아시아, 아프리카 등으로 수출됨"
          ]
        },
        {
          "nameKo": "스택빅 은행 우간다",
          "nameEn": "Stanbic Bank Uganda",
          "foundedYear": "1906",
          "parentCompany": "Stanbic Bank \r- 창립자: John Paterson\r- 창립연도: 1962년",
          "hq": "우간다 캄팔라(Kampala)",
          "industry": "금융 및 보험업",
          "subIndustry": "대출, 저축, 투자 등",
          "corpType": "사기업(주식회사)",
          "employees": "55000",
          "marketCap": {
            "usd": "323,000,000 USD",
            "krw": "약 4,845억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "57,000,000 USD",
            "krw": "약 855억 원",
            "year": "2020"
          },
          "website": "www.stanbicbank.co.ug",
          "highlights": [
            "1991년 Standard Bank 우간다의 Grindlays Bank를 매입하고 우간다 지사의 명칭을 Stanbic Bank Limited로 변경함",
            "최대주주는 전체의 80% 지분을 보유한 Stabic Africa Holdings이며, 보츠나와, 가나, 케냐, 말라위, 나이지리아 등에서 Stanbic Bank라는 이름으로 운영, 나미비아, 에스와티니, 레소토, 앙골라, 모잠비크 등에서는  Standard Bank로 운영",
            "Stanbic Bank Uganda는 2019년 기준 총 자산 약 18억 달러로 자산가치로 우간다 최대 상업은행에 등극하였으며, 우간다 전역에 70여개의 지점을 운영하며 우단다 내 최다 지점 보유",
            "신용평가기관 Fitch는 2018년 Stanbic Bank Uganda의 신용등급을 AAA(안정적)로 평가"
          ]
        }
      ],
      "startups": [
        {
          "nameKo": "누미다",
          "field": "금융&핀테크",
          "foundedYear": "2015",
          "hq": "우간다 캄팔라",
          "employees": "11~50명",
          "funding": null,
          "topInvestor": "Optimizer Foundation, Beyound Capital, Draper Richards Kaplan Foundation",
          "fundingStage": "Seed",
          "website": "http://www.numida.co/"
        },
        {
          "nameKo": "테헤카",
          "field": "헬스케어",
          "foundedYear": "2016",
          "hq": "우간다 캄팔라",
          "employees": "1~10명",
          "funding": null,
          "topInvestor": null,
          "fundingStage": "Seed",
          "website": "http://techca.com/"
        }
      ]
    }
  },
  "이집트": {
    "id": "이집트",
    "name": "이집트",
    "nameEn": "Egypt",
    "population": "106,000,000명 (2020년 기준)",
    "language": "아랍어(공용어)",
    "capital": "카이로(Cairo)",
    "climateScore": null,
    "mainClimateIssue": null,
    "diplomacyScore": null,
    "matchScore": null,
    "recommended": null,
    "priorityPartner": true,
    "koreaOdaHistory": true,
    "economy": {
      "gdpPerCapita": {
        "usd": "3,512 USD",
        "krw": "약 526만 원",
        "year": "2023",
        "source": "World Bank"
      },
      "gdpTotal": {
        "usd": "359,500,000,000 USD",
        "krw": "약 539조 2,500억 원",
        "year": "2023",
        "source": "World Bank"
      },
      "odaNetReceived": {
        "usd": "약 1억 USD",
        "krw": "약 893억 9,205만 원",
        "year": "2019",
        "isNet": false
      },
      "recipientOda": {
        "usd": "약 5,349백만 USD",
        "krw": "약 8조 235억 원",
        "year": "2019",
        "isNet": false
      },
      "bilateral": {
        "usd": "약 67백만 USD",
        "krw": "약 1,005억 원",
        "year": "2019",
        "isNet": false
      },
      "koreaOda": {
        "usd": "약 71백만 USD",
        "krw": "약 1,065억 원",
        "year": "2019",
        "isNet": false
      }
    },
    "koica": {
      "total": "70,600,000 원",
      "sectors": [
        {
          "name": "보건",
          "percent": 6.8,
          "amount": "4,816,624 원"
        },
        {
          "name": "교육",
          "percent": 44.1,
          "amount": "31,100,000 원"
        },
        {
          "name": "농림수산",
          "percent": 1.9,
          "amount": "1,346,031 원"
        },
        {
          "name": "기술환경에너지",
          "percent": 29.5,
          "amount": "20,800,000 원"
        },
        {
          "name": "공공행정",
          "percent": 16.1,
          "amount": "11,400,000 원"
        },
        {
          "name": "긴급구호",
          "percent": 0.5,
          "amount": "330,941 원"
        },
        {
          "name": "기타",
          "percent": 1.0,
          "amount": "737,899 원"
        }
      ]
    },
    "infrastructure": {
      "hospitalBeds": {
        "value": "1.1",
        "unit": "병상 / 1,000명",
        "year": "2021",
        "source": "World Bank"
      },
      "physicians": {
        "value": "0.7",
        "unit": "의사 / 1,000명",
        "year": "2020",
        "source": "World Bank"
      },
      "nursesMidwives": {
        "value": "1.8",
        "unit": "간호사·조산사 / 1,000명",
        "year": "2018",
        "source": "World Bank"
      },
      "electricityAccess": {
        "value": "100",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableEnergyShare": {
        "value": "12.2",
        "unit": "%",
        "year": "2021",
        "source": "World Bank"
      },
      "cleanCookingAccess": {
        "value": "99.9",
        "unit": "%",
        "year": "2023",
        "source": "World Bank"
      },
      "internetPenetration": {
        "value": "74.6",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "mobileSubscriptions": {
        "value": "97.1",
        "unit": "건 / 100명",
        "year": "2024",
        "source": "World Bank"
      },
      "basicWater": {
        "value": "97.3",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "basicSanitation": {
        "value": "97.1",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableWaterPerCapita": {
        "value": "8.9",
        "unit": "m³ / 인",
        "year": "2022",
        "source": "World Bank"
      },
      "pavedRoads": {
        "value": "92.2",
        "unit": "%",
        "year": "2010",
        "source": "World Bank"
      },
      "railLines": {
        "value": "5153",
        "unit": "km",
        "year": "2016",
        "source": "World Bank"
      }
    },
    "koicaCumulative": {
      "total": "약 986억 4,208만 원",
      "latest": "약 92억 8,535만 원",
      "latestYear": "2023",
      "startYear": "1991"
    },
    "koicaHealthDetail": {
      "year": "2024",
      "sectors": [
        {
          "name": "보건정책 및 행정관리",
          "percent": 100.0,
          "amount": "31,740,000 원"
        }
      ]
    },
    "diplomaticContact": {
      "overseas": {
        "missionName": "주 이집트 대한민국 대사관",
        "missionType": "대사관",
        "jointCoverage": false,
        "address": "3 Boulos Hanna Street, Dokki, Cairo, Arab Republic of Egypt,",
        "phone": "(20)2-3761-1234",
        "consularCenter": "(82)2-3210-0404",
        "tollFree": "080-020-0219",
        "emergency": "(20)12-8333-3236",
        "website": "http://overseas.mofa.go.kr/eg-ko/index.do",
        "lat": 30.041069,
        "lng": 31.215145
      },
      "domestic": {
        "ambassador": "Hazem Mostafa Ibrahim FAHMY",
        "address": "서울특별시 용산구 독서당로 114",
        "phone": "749-0787/9",
        "email": "embassy.seoul@mfa.gov.eg / egyptian.embassy.seoul@gmail.com",
        "fax": "795-2588",
        "updatedAt": "2020-04-06"
      }
    },
    "marketEntry": {
      "companyCount": 41,
      "industries": [
        {
          "name": "제조업",
          "count": 11
        },
        {
          "name": "금융 및 보험업",
          "count": 10
        },
        {
          "name": "부동산업",
          "count": 6
        },
        {
          "name": "정보통신업",
          "count": 4
        },
        {
          "name": "광업",
          "count": 3
        },
        {
          "name": "숙박 및 음식점업",
          "count": 2
        },
        {
          "name": "교육 서비스업",
          "count": 1
        },
        {
          "name": "운수 및 창고업",
          "count": 1
        },
        {
          "name": "도매 및 소매업",
          "count": 1
        },
        {
          "name": "건설업",
          "count": 1
        },
        {
          "name": "보건 및 사회복지서비스업",
          "count": 1
        }
      ],
      "startupCount": 3,
      "startupFields": [
        {
          "name": "에듀테크",
          "count": 1
        },
        {
          "name": "헬스케어",
          "count": 1
        },
        {
          "name": "금융&핀테크",
          "count": 1
        }
      ],
      "companies": [
        {
          "nameKo": "골든 피라미드 플라자",
          "nameEn": "Golden Pyramids Plaza",
          "foundedYear": "1991",
          "parentCompany": null,
          "hq": "이집트 카이로(Cairo)",
          "industry": "숙박 및 음식점업",
          "subIndustry": "호텔, 리조트, 사무실, 식당 등 운영",
          "corpType": "사기업(주식회사)",
          "employees": "10000",
          "marketCap": {
            "usd": "940,000,000 USD",
            "krw": "약 1조 4,100억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "21,000,000 USD",
            "krw": "약 315억 원",
            "year": "2020"
          },
          "website": "www.citystars.com.eg",
          "highlights": [
            "이집트 기반의 엔터테이먼트 숙박 시설 운영 기업으로 나르스(Nasr City)에 'CityStars Heliopolis' 대형 호텔 및 복합쇼핑센터를 운영하고 있음",
            "주거용 공간, 의료센터, 미디어센터, 연회장, 사무실, 쇼핑몰, 호텔, 수영장, 영화관 등으로 구성",
            "5성급 1개, 4성급 2개 등 3개의 호텔시설 유치: Holiday Inn Cairo- Citystars(5성), InterContinental Citystars Cairo(4성), Staybridge Suites Cairo(4성)",
            "관광, 농업개발, 부동산, 건축과 관련된 5개의 자회사 소유. 자회사로는 AI Abnaa Tourism Development Company, AI Amjad Toursm, Industrial and Agricultural Development Company, Arab Tourism Development and Real Estate Investment Company, City Stars Company for Construction 등이 있음"
          ]
        },
        {
          "nameKo": "국제상업은행",
          "nameEn": "Commercial International Bank",
          "foundedYear": "1975",
          "parentCompany": "Fairfax Finansial Holdings Ltd",
          "hq": "이집트 카이로(Cairo)",
          "industry": "금융 및 보험업",
          "subIndustry": "카드, 투자, 대출, 자산관리, 인터넷은행 등",
          "corpType": "사기업",
          "employees": "8000",
          "marketCap": {
            "usd": "6,061,000,000 USD",
            "krw": "약 9조 915억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "747,000,000 USD",
            "krw": "약 1조 1,205억 원",
            "year": "2020"
          },
          "website": "www.cibeg.com",
          "highlights": [
            "이집트 내 28개 도시에 200여개 지점과 천여 대의 현금자동인출기(ATM)를 운영",
            "상류층 고객, 정부 및 비정부기구에 보안서비스를 제공하는 Falcom Group, 대출/카드결제 및 현금/예금서비스를 제공하는 Fawry Plus, 전문 기업투자사인 Cventures 등 여러 금융기관과 제휴",
            "2010년, 이집트 내 소외계층 아이들의 영양과 보건서비스 증진을 위한 비영리단체인 CIC Foundation 설립",
            "2019년 포브스 선정 세계 500대 기업에서 90위를 차지하며 글로벌 기업 이미지 구축"
          ]
        },
        {
          "nameKo": "글로벌 텔레콤 홀딩",
          "nameEn": "Global Telecom Holding",
          "foundedYear": "1998",
          "parentCompany": "VimpelCom Ltd\r- 창립자: Dmity Zimin, Augie K Fabela\r- 창립연도: 2009년",
          "hq": "이집트 카이로(Cairo)",
          "industry": "정보통신업",
          "subIndustry": "모바일 네트워크",
          "corpType": "사기업",
          "employees": "3411",
          "marketCap": {
            "usd": "209,000,000 USD",
            "krw": "약 3,135억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "78,000,000 USD",
            "krw": "약 1,170억 원",
            "year": "2020"
          },
          "website": "www.gtelecom.com",
          "highlights": [
            "모회사인 VimpelCom Ltd는 네델란드 암스테르담에 본사를 둔 다국적 통신서비스 회사이자 약 2억 1,200만 고객을 보유한 세계적인 모바일 네트워크 기업"
          ]
        },
        {
          "nameKo": "메디넷 나스르 주택",
          "nameEn": "Medinet Nasr for Housing",
          "foundedYear": "1959",
          "parentCompany": null,
          "hq": "이집트 카이로(Cairo)",
          "industry": "부동산업",
          "subIndustry": "도시개발",
          "corpType": "사기업(주식회사)",
          "employees": "15000",
          "marketCap": {
            "usd": "262,000,000 USD",
            "krw": "약 3,930억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "62,000,000 USD",
            "krw": "약 930억 원",
            "year": "2020"
          },
          "website": "mnhd.com",
          "highlights": [
            "1995년 이집트 증권거래소에 상장된 부동산 개발회사로 카이로 외각 토지개발을 시작으로 Taj City 토지개발, Sarai 토지개발, Tag Sultan 토지개발 등 이집트 전역의 인프라 구축 및 대형 프로젝트 진행",
            "3개의 자회사 소유: El Nasr Utilities and Installation Company, AI Nasr Co. for Utilities and Erections-S.A.E, A1 Nasr Co. for Utilities & Erections S.A.E",
            "국제상업은행 (CIB)과 7년간 약 5,880만 달러 규모의장기 신디케이트 계약체결"
          ]
        },
        {
          "nameKo": "미스르 비료생산",
          "nameEn": "Misr Fertilizers Production Company",
          "foundedYear": "1998",
          "parentCompany": null,
          "hq": "이집트 카이로(Cairo)",
          "industry": "제조업",
          "subIndustry": "암모니아, 요소, 질소비료 등 화학제품 생산",
          "corpType": "사기업",
          "employees": "1500",
          "marketCap": {
            "usd": "612,000,000 USD",
            "krw": "약 9,180억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "104,000,000 USD",
            "krw": "약 1,560억 원",
            "year": "2020"
          },
          "website": "www.mopco-eg.com",
          "highlights": [
            "지속가능한 에너지 활용에 대한 기업의 공로를 인정받아 CEM(Clean Energy Ministerial)이 선정한 2020년 에너지 관리 분야 리더십상 수상",
            "CEM은 청정에너지 기술을 고도화하는 정책과 프로그램을 추진학 모범사례를 공유하며, 글로벌 청정에너지 경제로의 전환을 독려하기 위한 고위급 글로벌 포럼",
            "코로나 19 영향에도 불구하고 2020년 상반기 매출이 전년대비 26% 증가"
          ]
        },
        {
          "nameKo": "보다폰 이집트",
          "nameEn": "Vodafone Egypt",
          "foundedYear": "1998",
          "parentCompany": "Vodafone",
          "hq": "이집트 카이로(Cairo)",
          "industry": "정보통신업",
          "subIndustry": "통신, 인터넷 등",
          "corpType": "사기업(주식회사)",
          "employees": "60000",
          "marketCap": {
            "usd": "2,391,000,000 USD",
            "krw": "약 3조 5,865억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "105,800,000 USD",
            "krw": "약 1,587억 원",
            "year": "2020"
          },
          "website": "web.vodafone.com.eg",
          "highlights": [
            "4G, 3G, AD니 등 광연 인터넷망 서비스를 제공하는 이집트에서 가장 큰 통신업체이며, 2017년 기준 이집트 통신사 가입자 중 4,300만 명이 Vodafone Egypt에 가입함",
            "2007년, 이집트통신규제청(NTRA)으로부터 15년간 3G 서비스 공급자로 허가를 받았으며, 2016년에는 4G 이동통신 서비스 허가를 받음",
            "Raya for Telecommunication S.A.E, Raya Telecom, Vodafone International Service LLC, Vodafone Egypt Technologies LLc 등 4개의 자회사 소유"
          ]
        },
        {
          "nameKo": "삼크레트 미스르",
          "nameEn": "Samcrete Misr",
          "foundedYear": "1963",
          "parentCompany": null,
          "hq": "이집트 기자(Giza)",
          "industry": "제조업",
          "subIndustry": "도로건설, 콘크리트 등",
          "corpType": "사기업",
          "employees": "152000",
          "marketCap": {
            "usd": "555,000,000 USD",
            "krw": "약 8,325억 원",
            "year": "2020"
          },
          "netProfit": null,
          "website": "www.samcrete.com",
          "highlights": [
            "도로건설, 콘크리트 공정 및 복원을 전문으로 하는 건축 및 부동산 개발회사로, 자회사로는 독일과 이집트 합자회사인 창문/문 제작사 Holztec, 농작물 보관 탱크 등을 제작하는 NEI (National Engineering Industries) 등이 있음",
            "2004년 미국의 다국적 엔지니어링 및 건축기업인 FLUOR로부터 Safety Excellence Award 수상, 2006년 카이로 미국대학교로부터 Safety Excellence Award 수여받음"
          ]
        },
        {
          "nameKo": "소딕",
          "nameEn": "SODIC",
          "foundedYear": "1996",
          "parentCompany": null,
          "hq": "이집트 기자(Giza)",
          "industry": "부동산업",
          "subIndustry": "호텔, 리조트, 의료시설 등",
          "corpType": "사기업(합자회사)",
          "employees": "53332",
          "marketCap": {
            "usd": "218,000,000 USD",
            "krw": "약 3,270억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "46,000,000 USD",
            "krw": "약 690억 원",
            "year": "2020"
          },
          "website": "ir.sodic.com",
          "highlights": [
            "SODIC(Six of October Development)은 이집트 내 3개의 센터(Cairo- Alexandria Desert Road Sales Centrr, Heliopolis Sales Centrr, New Cairo Sales Centre)를 운영하고 있으며 동부, 서부, 북해안에 호텔, 리조트 등 거주단지 및 상업시설 13단지 개발"
          ]
        },
        {
          "nameKo": "수에즈 운하 테크놀로지",
          "nameEn": "Suez Canal for Technology",
          "foundedYear": "1996",
          "parentCompany": null,
          "hq": "이집트 카이로(Cairo)",
          "industry": "교육 서비스업",
          "subIndustry": "온라인 교육 등",
          "corpType": "공기업",
          "employees": "19000",
          "marketCap": {
            "usd": "239,000,000 USD",
            "krw": "약 3,585억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "30,000,000 USD",
            "krw": "약 450억 원",
            "year": "2020"
          },
          "website": "www.scts-eg.com",
          "highlights": [
            "첨단기술을 활용한 교육서비스 제공을 목적으로 기술개발연구소를 설립 및 운영하고 있으며, 관련 소프트웨어를 설계하고 컨텐츠를 생산함",
            "카이로 근교의 10월 6일 대학(October 6 University)에 투자하였으며 교육, 행정, 사회시설 등의 연구에 투자함"
          ]
        },
        {
          "nameKo": "시디 케리르 석유화학",
          "nameEn": "Sidi Kerir Petrochemicals",
          "foundedYear": "1997",
          "parentCompany": "Egyptian Pertrochemicals Holding Company \r- 창립연도: 2002년",
          "hq": "이집트 알렉산드리아(Alexandria)",
          "industry": "제조업",
          "subIndustry": "에틸렌, 프로판, 부탄, 플라스틱 등 화학제품 생산",
          "corpType": "사기업(유한회사)",
          "employees": "13838",
          "marketCap": {
            "usd": "208,000,000 USD",
            "krw": "약 3,120억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "31,000,000 USD",
            "krw": "약 465억 원",
            "year": "2020"
          },
          "website": "www.sidpec.com",
          "highlights": [
            "Sidi Kerir Petrochemicals는 1997년 이집트 투자법에 의해 설립된 석유화학기업으로 에틸렌, LPG, 부탄 등을 취급하고 있음",
            "이집트 현지 8곳의 석유화학물 판매 및 유통업체 보유",
            "Technotrad SAE, Shoman, Shedid for Trading and plastics, AI Hussein, Trans World, Egyptian Company for Industrial Supplies, Crown Misr, Hebish",
            "아프리카를 비롯한 유럽, 북미, 중동, 아시아 29개국에 유통하고 있음"
          ]
        },
        {
          "nameKo": "시타델 캐피탈",
          "nameEn": "Citadel Capital",
          "foundedYear": "2004",
          "parentCompany": null,
          "hq": "이집트 카이로(Cairo)",
          "industry": "금융 및 보험업",
          "subIndustry": "보험 관련 서비스업",
          "corpType": "사기업",
          "employees": "4400",
          "marketCap": {
            "usd": "240,000,000 USD",
            "krw": "약 3,600억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "-299,000,000 USD",
            "krw": "약 -4,485억 원",
            "year": "2020"
          },
          "website": "www.qalaahoidings.com",
          "highlights": [
            "Citadel Capital에서 Qalaa Holdings로 기업명 변경하였으며, Qalaa Holdings는 아프리카와 중동에서 에너지, 시멘트, 인프라 등 산업 다분야에서 활동하며 9개의 자회사를 소유하고 있음",
            "에너지 분야: Taqa Arabia, Tawazon, Egyptian Refining Company",
            "시멘트 분야: Asrc Holding",
            "농식품: Gozour, Wafra",
            "운송&물류: NILE Logistics, Africa Railways",
            "광업: Ascom",
            "아프리카와 중공 12개국에서 에너지, 시멘트, 인쇄, 운송 및 물류, 광업분야 사업 진행"
          ]
        },
        {
          "nameKo": "아부 키르 비료화학",
          "nameEn": "Abuu Qir Fertilizers & Chemicals",
          "foundedYear": "1976",
          "parentCompany": null,
          "hq": "이집트 알렉산드리아(Alexandria)",
          "industry": "제조업",
          "subIndustry": "질소비료, 혼합비료, 플라스틱 등 화학제품 제조",
          "corpType": "사기업",
          "employees": null,
          "marketCap": {
            "usd": "1,230,000,000 USD",
            "krw": "약 1조 8,450억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "200,000,000 USD",
            "krw": "약 3,000억 원",
            "year": "2020"
          },
          "website": "abuqir.net",
          "highlights": [
            "질소비료, 화학제품 등 관련 물질을 제조하며, 6개의 화학공장에서 이집트 질소비료의 50%를 생산하고 있음",
            "Abou Qir Fertilizers&Chemicals 의 회장인 Saad Ibrahim Abo El-Maati는 2019년 6월 프랑스에서 개최된 'World Strategic Fertilizer 컨퍼런스'에서 국제비료협회(IFA)로부터 식물안전, 배출가스 저감, 에너지 절약에 기여한 공로를 인정받아 IFA Industry Stewardship Champion Gild Medal 수상",
            "2019년 5월, 알렉산드리아 대학에서 개최한 산학협력포럼에서 동 대학교와 파트너십 체결, 교육 커리큘럼 및 연구, 환경개발, 공공서비스 등 분야에서의 상호협력 약속"
          ]
        },
        {
          "nameKo": "알렉산드리아 컨테이너상품",
          "nameEn": "Alexandria Containers & Goods",
          "foundedYear": "1984",
          "parentCompany": null,
          "hq": "이집트 알렉산드리아(Alexandria)",
          "industry": "운수 및 창고업",
          "subIndustry": "트럭, 트레인 등 화물운송",
          "corpType": "공기업",
          "employees": null,
          "marketCap": {
            "usd": "630,000,000 USD",
            "krw": "약 9,450억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "116,000,000 USD",
            "krw": "약 1,740억 원",
            "year": "2020"
          },
          "website": "alexcont.com",
          "highlights": [
            "이집트 최조의 전문 컨테이너 취급회사이며 멸균 시스템을 도입하여 들어오는 모든 컨테이너를 소독하고 있음",
            "Marsek Shipping Line, Mediterranean Shipping Co. Egy, EverGreen Shipping Line, Arkas Shipping Line, MIDDLE EAST Shipping Line 등 22개 해운회사의 컨테이너 취급",
            "2개의 주요 터미널(Alexandria 항구의 Alexandria 터미널, Dekheila 항구의 El Dekheila 터미널) 운영 및 관리",
            "항구에 정박하는 선박 정보를 매일 홈페이지에 게시하고 있으며, Alexandria 터미널에는 트럭 18대, 트랙터 40대를 EL Dekheila 터미널에는 트럭 17개, 트랙터 44대를 보유함. 이외에도 선박, 육지용 크레인 등 다수 보유하고 있음"
          ]
        },
        {
          "nameKo": "에디타 식품산업",
          "nameEn": "Edita Food Industries",
          "foundedYear": "1996",
          "parentCompany": null,
          "hq": "이집트 10월6일시(6th of October City)",
          "industry": "제조업",
          "subIndustry": "케이크, 사탕 등 식품제조",
          "corpType": "사기업",
          "employees": "9000",
          "marketCap": {
            "usd": "459,000,000 USD",
            "krw": "약 6,885억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "26,000,000 USD",
            "krw": "약 390억 원",
            "year": "2020"
          },
          "website": "edita.com.eg",
          "highlights": [
            "이집트 및 중동지역의 대표적인 소비재 기업이며 국내에 첨단 생산설비를 구축하고 있음",
            "6th of Otober City(3개 공장), 10th of Ramadan City(1개 공장), Beni Suef industrial zone(1개 공장)",
            "이집트 내 19개 도시에 21개 지점 운영 및 3개의 자회사를 소유하고 있으며, 중동지역에서 과자케이크 , 쿠키 등 10개 브랜드를 취급하고 있음",
            "2018년 모로코 내 65,000곳 이상의 판매점 유통업체인 Motocco's Dislog Group과의 합작투자로 Edita Morocco를 설립했으며 51% 지분을 소유하고 있음",
            "2020년 3월, Edita Foundation for Social Development 설립",
            "2020년 4월 코로나19에 대응하기 위해 약 11만 9천 달러를 재단에 지원, 동 기금은 산소호흡기, 개인보호장비 구입에 사용"
          ]
        },
        {
          "nameKo": "에마르 미스르 포 디벨로먼트",
          "nameEn": "Emaar Misr for Development",
          "foundedYear": "1997",
          "parentCompany": "Emaar Properties PJSC",
          "hq": "이집트 카이로(Cairo)",
          "industry": "부동산업",
          "subIndustry": "쇼핑몰, 아파트, 비즈니스센터 등 개발",
          "corpType": "사기업",
          "employees": "4000",
          "marketCap": {
            "usd": "769,000,000 USD",
            "krw": "약 1조 1,535억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "110,000,000 USD",
            "krw": "약 1,650억 원",
            "year": "2020"
          },
          "website": "www.emaarmisr.com",
          "highlights": [
            "이집트 기반의 부동산 개발업체로 상업, 주거 지구, 비즈니스센터 등을 개발, 대표사업으로 Uptown Cairo, Marassi, Mivida residential community 등이 있음",
            "아랍에미리트 기반의 자산개발사 Emaar Properties PJSC의 자회사임"
          ]
        },
        {
          "nameKo": "에즈 스틸",
          "nameEn": "Ezz Steel",
          "foundedYear": "1994",
          "parentCompany": null,
          "hq": "이집트 카이로(Cairo)",
          "industry": "광업",
          "subIndustry": "철근, 와이어, 철망 등 철강 생산",
          "corpType": "사기업",
          "employees": "1776",
          "marketCap": {
            "usd": "202,000,000 USD",
            "krw": "약 3,030억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "-104,000,000 USD",
            "krw": "약 -1,560억 원",
            "year": "2020"
          },
          "website": "www.ezzsteel.com",
          "highlights": [
            "Ezz Steel는 중동 내에서 활동하는 선두적인 철강 제조기업으로 연간 680만톤의 철강을 제조하고 있음",
            "알렉산드리아, 사다트(Sadat City), 텐스 오브 라마단(10th of Ramadan City), 아인 수크나(Ain Sokhna)등 4개 도시에 공장을 운영하며 엄격한 품질관리 기준으로 (ISO 9001 인증 획득) 제품을 생산함",
            "이집트 내 에너지관리시스템 ISO 5001 인증을 받은 최조의 철강기업으로 먼지, 가스 등과 같은 공기중 배출, 폐수처리, 소음수준과 같은 요인을 엄격하게 통제하며 Ezz Steel의 모든 공장은 국제적으로 안정된 환경 및 산재보험 안전표준과 이산화탄소에 대한 국제지침을 준수함"
          ]
        },
        {
          "nameKo": "엘 에즈 알데케라 철강",
          "nameEn": "El Ezz Aldekhela Steel",
          "foundedYear": "1982",
          "parentCompany": null,
          "hq": "이집트 기자(Giza)",
          "industry": "광업",
          "subIndustry": "철강",
          "corpType": "사기업(주식회사)",
          "employees": "3000",
          "marketCap": {
            "usd": "381,000,000 USD",
            "krw": "약 5,715억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "109,000,000 USD",
            "krw": "약 1,635억 원",
            "year": null
          },
          "website": "www.ezzsteel.com",
          "highlights": [
            "이집트에 본사를 둔 철강제조 기업으로 1995년 이집트 증권거래소에 상장되었고 미국, 캐나다, 유럽, 중극 등에 제품을 수출하고 있음",
            "모기업인 Ezz Steel 은 동 기업의 지분 54.59%을 소유하고 있으며 자회사로는 압연 및 코일을 생산하는 Al Ezz Steel Sheet Manufacturing Company SAE와 금속제품 제작 및 유통에 초점을 둔 Steel Company for Industry, Trade and Contracting Company SAE가 있음"
          ]
        },
        {
          "nameKo": "엘스웨디 전기",
          "nameEn": "Elswedy Electric",
          "foundedYear": "1938",
          "parentCompany": null,
          "hq": "이집트 카이로(Cairo)",
          "industry": "제조업",
          "subIndustry": "변압기, 광섬유 액세서리, 전원케이블 등 제조",
          "corpType": "사기업",
          "employees": "2300",
          "marketCap": {
            "usd": "1,239,000,000 USD",
            "krw": "약 1조 8,585억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "255,000,000 USD",
            "krw": "약 3,825억 원",
            "year": "2020"
          },
          "website": "www.elsewedyelectric.com",
          "highlights": [
            "와이어와 케이블이 회사 매출의 약 81.5%를 차지하고 있으며 제조업, 에너지, 전력 등을 전문으로 하는 자회사 14개를 운영(Egyptian Company for Manufacturing Lelctrical Insulators, EL. E. Energy Limited, El Sewedy Electric Zamdia Limited, Jeddah cable company Ltd. 등)",
            "2020년 8월 자회사인 Elsewedy Electric for Transmisson & Distribution of Energy는 콩고민주공화국의 국영전력사인 SNEL (Societe Nationale d'Electricite)과 고전압 배전 변전소 건설계약 체결",
            "동 프로젝트의 투자 규모는 3,860만 달러로 콩고민주공화국 남동부에 위치한 오카탕가(Haut-Katanga) 주에서 진행"
          ]
        },
        {
          "nameKo": "엠엠 산업",
          "nameEn": "MM Group for Industry",
          "foundedYear": "1996",
          "parentCompany": "MM Group \r- 창립자: Gamal Mahmoud, Salah Mahmoud, Amin Mahmoud\r- 창립연도: 1895년",
          "hq": "이집트 카이로(Cairo)",
          "industry": "도매 및 소매업",
          "subIndustry": "자동차, 오토바이, 가전제품 등",
          "corpType": "사기업(합자회사)",
          "employees": "2617",
          "marketCap": {
            "usd": "264,000,000 USD",
            "krw": "약 3,960억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "29,000,000 USD",
            "krw": "약 435억 원",
            "year": "2020"
          },
          "website": "mti-mmgroup.com",
          "highlights": [
            "지리적으로 광범위한 유통채널과 소매채널 플랫폼으로서 40,000개 이상의 판매점 보유",
            "MTI는 글로벌 선도 브랜드와의 파트너십을 통해 다각화된 제품군을 보유하는 등 다양한 사업라인 운영",
            "자동차(랜드로버, 제규어, 마세라티, 벤틀리), 중국(Huawei)의 휴대폰 및 태블릿, 영국 트랙터 전문기업 SOLIS tractors, 독일 글로벌 가전제품 제조사인 BSH Group, 고성능 모터사이클 제조업체인 이탈리아의 DUCATI와 미국의 Victory Motorcycles의 공식 유통업체",
            "모회사인 MM Group은 전 세계 15개국에서 건축, 제조, 무역, 유통 등 다양한 분야의 21개 기업을 자회사로 두고 있으며(EGYPAC, EGYBELL, INTERPAC Factory, DATUM Company 등), 약 14,000명의 직원을 고용"
          ]
        },
        {
          "nameKo": "오라스컴 건설",
          "nameEn": "Orascom Construction",
          "foundedYear": "1950",
          "parentCompany": null,
          "hq": "이집트 카이로(Cairo)",
          "industry": "건설업",
          "subIndustry": "빌딩, 리조트, 발전소, LNG설비 등",
          "corpType": "사기업",
          "employees": "4000",
          "marketCap": {
            "usd": "477,000,000 USD",
            "krw": "약 7,155억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "8,000,000 USD",
            "krw": "약 120억 원",
            "year": "2020"
          },
          "website": "www.orascom.com",
          "highlights": [
            "중동, 아프리카 등 세계 20개국에서 사업을 진행하며, 건축, 엔지니어링, 시설관리 등을 전문으로 하는 15개의 자회사를 소유함",
            "공공 및 민간부문 다수으 인프라 프로젝트를 담당(2005년 알제리 담수처리 공장 수주, 2007년 이집트 최초의 태양광 집열기 수주, 2009년 이집트 최초의 민관협력 프로젝트 뉴 카이로 페수처리공장 수주 등)",
            "2011년 사우디아라비아의 인프라산업 프로젝트를 담당하는 합작회사 Orascom Saudi Limited 설립 및 60% 지분 소유",
            "2019년 전세계 건설/엔지니어링 뉴스 및 분석데이터를 제공하는 매체인 미국의 Engineering News-Record는 동 기업을 글로벌 계약업체 Top250중 42위에 선정, 아프리카 Top10 계약업체 중 5위에 선정"
          ]
        },
        {
          "nameKo": "오렌지 이집트",
          "nameEn": "Orange Egypt",
          "foundedYear": "1998",
          "parentCompany": "Orange\r- 창립연도: 1988년",
          "hq": "이집트 카이로(Cairo)",
          "industry": "정보통신업",
          "subIndustry": "휴대폰, 액세서리, 인터넷 서비스 등",
          "corpType": "사기업(합자회사)",
          "employees": null,
          "marketCap": {
            "usd": "1,995,000,000 USD",
            "krw": "약 2조 9,925억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "-104,000,000 USD",
            "krw": "약 -1,560억 원",
            "year": "2020"
          },
          "website": "www.orange.eg/en/",
          "highlights": [
            "모회사 Orange는 프랑스에 본사를 둔 글로벌 통신기업",
            "전 세계 26개국에서 통신서비스를 지원하며, 약 147,000명의 직원고용(프랑스에서 약 87,000명 고용)",
            "이집트 내 28개 주요도시에 지점 운영하고 있음"
          ]
        },
        {
          "nameKo": "오리엔탈 위버스",
          "nameEn": "Oriental Weavers",
          "foundedYear": "1979",
          "parentCompany": null,
          "hq": "이집트 카이로(Cairo)",
          "industry": "제조업",
          "subIndustry": "카펫, 돗자리, 러그 등 제조",
          "corpType": "사기업",
          "employees": "29000",
          "marketCap": {
            "usd": "220,000,000 USD",
            "krw": "약 3,300억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "49,000,000 USD",
            "krw": "약 735억 원",
            "year": "2020"
          },
          "website": "orientalweavers.com",
          "highlights": [
            "1997년 이집트 증권거래소에 상장된 글로벌 카펫, 융단 및 관련 원자재 생산기업 중 한 곳으로 6개의 자회사를 소유하고 있으며 이집트, 미국, 중국에 공장을 운영하여 130개국에 유통채널을 확보하고 있음",
            "소매업체, 홈패션 브랜드, 럭셔리호텔, 리조트 등 다양한 분야의 고객층을 보유하고 있음",
            "스웨덴 IKEA, 영국 Landbond, 미국 Costco, TJ Maxx, Kohl's, Taget Corparation, Ethan Allen, Sears, 독일 OBI, 캐나다 HOMESENSE, ZELLERS, 노르웨이 REMA1000 등",
            "2019년 Business Today로부터 이집트 경제발전 공로를 인정받아 bt100상 수상",
            "수년간 동 회사는 올해의 카펫 공급업체, 올해의 가구 공급업체, 올해의 홈 솔루션 공급업체, 아프리카 혁신기업 등 다양한 성과를 기록함"
          ]
        },
        {
          "nameKo": "이스턴 토바코",
          "nameEn": "Eatern Tobacco",
          "foundedYear": "1920",
          "parentCompany": "Chemical Industries Holding Company",
          "hq": "이집트 기자(Giza)",
          "industry": "제조업",
          "subIndustry": "시가, 파이프담배, 액상담배, 담배필터 등 제조",
          "corpType": "사기업",
          "employees": "6058",
          "marketCap": {
            "usd": "1,791,000,000 USD",
            "krw": "약 2조 6,865억 원",
            "year": null
          },
          "netProfit": {
            "usd": "236,000,000 USD",
            "krw": "약 3,540억 원",
            "year": "2020"
          },
          "website": "www.easternegypt.com",
          "highlights": [
            "이집트 기반의 담배 제조기업으로 시가, 파이프담배, 담배 필터 등을 생산하고 유통함",
            "전 세계 18개국으로 상품을 수출하며, ㄱ수출 브랜드로는 Cleopatra, Taba, Golden Weat, President, Delta 등이 있음"
          ]
        },
        {
          "nameKo": "이에프지 헤르메스",
          "nameEn": "EFG Hermes",
          "foundedYear": "1984",
          "parentCompany": null,
          "hq": "이집트 알렉산드리아(Alexandria)",
          "industry": "금융 및 보험업",
          "subIndustry": "증권, 자산관리, 투자 등",
          "corpType": "사기업",
          "employees": "2400",
          "marketCap": {
            "usd": "550,000,000 USD",
            "krw": "약 8,250억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "87,000,000 USD",
            "krw": "약 1,305억 원",
            "year": "2020"
          },
          "website": "www.efghermes.com",
          "highlights": [
            "중동, 아프리카 및 남아시아 12개국에서 사업을 진행하며 다양한 사업 부문의 금융상품 및 서비스 제공(증권중개업, 투자은행업무, 자산관리, 사모, 임대차계약, 소액금융, 대리업 등), 2020년 기준 순수익 전년대비 8% 증가",
            "EFG Hermes는 2015년 비은행 금융활동을 지원하는 NBFI (Non-Bank Finance Companies) 플랫폼 'EFG Hermes Finance'를 설립",
            "유럽 주식투자사업 전반을 평가하는 Extel Survey로부터 2018년, 2019년 2년 연속 신흥시장 중개업체 1위 선정, 2019년 중동지역 내 베스트 투자은행으로 선정"
          ]
        },
        {
          "nameKo": "이집트 국제관광",
          "nameEn": "Egypt International Tourism",
          "foundedYear": "1983",
          "parentCompany": "American Group For Food & Touristic Projects",
          "hq": "이집트 기자(Giza)",
          "industry": "숙박 및 음식점업",
          "subIndustry": null,
          "corpType": "사기업(합자회사)",
          "employees": "100000",
          "marketCap": {
            "usd": "387,000,000 USD",
            "krw": "약 5,805억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "1,000,000 USD",
            "krw": "약 15억 원",
            "year": "2020"
          },
          "website": "www.ecitp-americana.com",
          "highlights": [
            "호텔, 관광지 개발 기업으로 음료 및 케이터링 사업도 진행함",
            "대주주는 Americana Group Food & Touristic Projects로 지분 90.3% 보유",
            "자회사로는 Egyptian International Food Industries, Egyptian Company for Restaurants and Foodstuff, The Moroccan Company for Tourism Projects, Egyptian Company for Staech and Glucose Industry 등이 있음"
          ]
        },
        {
          "nameKo": "이집트 국제제약",
          "nameEn": "EIPICO",
          "foundedYear": "1980",
          "parentCompany": null,
          "hq": "이집트 샤르키야(Sharqia)",
          "industry": "제조업",
          "subIndustry": "의약품 제조",
          "corpType": "사기업(주식회사)",
          "employees": "2000",
          "marketCap": {
            "usd": "345,000,000 USD",
            "krw": "약 5,175억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "40,000,000 USD",
            "krw": "약 600억 원",
            "year": "2020"
          },
          "website": "www.eipico.com.eg",
          "highlights": [
            "이집트의 대표적인 제약회사로 항생제, 안약 등 400여개 이상의 의약품을 생산하며 유럽, 아프리카, 아시아 등 65개국에 수출",
            "2014년 국제보건기구(WHO)로부터 이집트 및 중동 지역의 살균 항생제 제품 공급자로 승인받음"
          ]
        },
        {
          "nameKo": "이집트 농업은행",
          "nameEn": "Credit Agricole Egypt",
          "foundedYear": "2006",
          "parentCompany": "credit Agricole Groupe",
          "hq": "이집트 카이로(Cairo)",
          "industry": "금융 및 보험업",
          "subIndustry": "보험, 카드 등",
          "corpType": "사기업(주식회사)",
          "employees": "1200",
          "marketCap": {
            "usd": "590,000,000 USD",
            "krw": "약 8,850억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "149,000,000 USD",
            "krw": "약 2,235억 원",
            "year": "2020"
          },
          "website": "www.ca-egypt.com",
          "highlights": [
            "78개 지점, 2,300여 명의 직원 및 약 356,000명 고객 보유",
            "기업의 자체 디지털 플랫폼인 'Banki'를 통해 고객들의 은행서비스 지원",
            "2020년 4월 기준, 전년대비 디지털 거래 38% 증가, 청구결제 및 계좌이체 전녀대비 43% 증가, 2020년 1/4분기 대비 거래처 수 33% 증가",
            "모회사인 Credit Agricle은 1894년 창립된 프랑스 회사로 전 세계 5,100만 명의 고객, 1050만 명의 회원 및 약 142,000명의 직원을 보유한 대형 금융전문 기업"
          ]
        },
        {
          "nameKo": "이집트 알루미늄",
          "nameEn": "Egyptalum",
          "foundedYear": "1972",
          "parentCompany": "Maetallurgical Industries Company\r- 창립연도: 1962년",
          "hq": "이집트 나그함마디(Nagaa Hammadi)",
          "industry": "광업",
          "subIndustry": "알루미늄 생산",
          "corpType": "사기업(주식회사)",
          "employees": "1358",
          "marketCap": {
            "usd": "240,000,000 USD",
            "krw": "약 3,600억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "36,000,000 USD",
            "krw": "약 540억 원",
            "year": "2020"
          },
          "website": "www.egyptalum.com.eg",
          "highlights": [
            "이집트 최대의 알루미늄 생산 업체로 연간 총 생산량은 약 320,000톤임",
            "생산공장은 룩소르(Luxor)로부터 100킬로미터 떨어진 나드하마디(NagHammady)에 위치하며 생산제품은 주괴, 슬래브, 시트, 알루미늄 선 등임",
            "최대 주주는 Metallurgical Industries Company로 89.97%정도이며 철강, 알루미늄, 세라믹, 석유 화학제품 등을 생산하는 기업에 투자하는 공기업"
          ]
        },
        {
          "nameKo": "이집트 쿠웨이트 홀딩",
          "nameEn": "Egypt Kuwait Holding",
          "foundedYear": "1997",
          "parentCompany": null,
          "hq": "이집트 기자(Giza)",
          "industry": "금융 및 보험업",
          "subIndustry": "투자",
          "corpType": "사기업",
          "employees": "2706",
          "marketCap": {
            "usd": "988,000,000 USD",
            "krw": "약 1조 4,820억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "98,000,000 USD",
            "krw": "약 1,470억 원",
            "year": "2020"
          },
          "website": "www.ekholding.com",
          "highlights": [
            "이집트와 쿠웨이트 사업가의 컨소시엄으로 설립된 투자회사로 주요 투자 분야는 비료, 석유화학, 가스공급, 발전, 건설자재 등임",
            "자회사로는 이집트 내 천연가스 공급망 구축 및 전력을 생산하는 NatEnergy, 비료 및 석유화학제품 기업인 AlexFert와 Sprea Misr 등이 있음",
            "통신회사(Globe Telecommunications), 보험회사(Delta Insurance)등의 기업에 투자하여 지분을 보유하고 있음"
          ]
        },
        {
          "nameKo": "이집트 텔레콤",
          "nameEn": "TelecomEgypt",
          "foundedYear": "1881",
          "parentCompany": "Ministry of Communications and Information Technology",
          "hq": "이집트 카이로(Cairo)",
          "industry": "정보통신업",
          "subIndustry": "이동통신서비스, 인터넷 등",
          "corpType": "사기업",
          "employees": "3000",
          "marketCap": {
            "usd": "1,094,000,000 USD",
            "krw": "약 1조 6,410억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "279,000,000 USD",
            "krw": "약 4,185억 원",
            "year": "2020"
          },
          "website": "te.eg",
          "highlights": [
            "이집트 정보통신기술부(Ministry of Communications and Information Technology)가 Telecom Egypt의 지분 80%를 보유하고 있음",
            "600만 명 이상의 가입자를 보유하고 있으며 동종기업인 Vodafone Egypt의 지분을 44.95% 소유",
            "2019년 2월, Telecom Egypt는 이집트 내 5G 사용화를 위해 글로벌 통신 네트워크 회사인 NOKIA와 파트너십 체결"
          ]
        },
        {
          "nameKo": "이집트 파이살 이슬람 은행",
          "nameEn": "Faisal Islamic Bank of Egypt",
          "foundedYear": "1979",
          "parentCompany": null,
          "hq": "이집트 카이로(Cairo)",
          "industry": "금융 및 보험업",
          "subIndustry": "인터넷 은행, 카드, 대출 등",
          "corpType": "사기업(합자회사)",
          "employees": "1232",
          "marketCap": {
            "usd": "439,000,000 USD",
            "krw": "약 6,585억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "159,000,000 USD",
            "krw": "약 2,385억 원",
            "year": "2020"
          },
          "website": "www.faisalbank.com.eg",
          "highlights": [
            "농업, 무역, 서비스 분야 사업에 투자자금을 제공하고 있으며 특히 국가경제 발전의 핵심요소인 생산 분야에 집중적으로 투자",
            "36개 지점 운영 및 416개의 현금자동인출기(ATM)를 관리하고 있음",
            "무역, 자산관리 등 금융권 자회사 Islamic Foreign Trade, Faisal Islamic Bank of Egypt, Asset Management Arm, Faisal For Financial Investment S.A.E 소유함"
          ]
        },
        {
          "nameKo": "이집트 화학산업",
          "nameEn": "Egypt Chemical Industries",
          "foundedYear": "1956",
          "parentCompany": null,
          "hq": "이집트 아스완(Aswan)",
          "industry": "제조업",
          "subIndustry": "화학비료 등 생산",
          "corpType": "사기업(합자회사)",
          "employees": "2040",
          "marketCap": {
            "usd": "218,000,000 USD",
            "krw": "약 3,270억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "2,000,000 USD",
            "krw": "약 30억 원",
            "year": "2020"
          },
          "website": "www.kimaegypt.com",
          "highlights": [
            "화학비료와 관련 제품(초산 암모니아, 질소가스, 질산 등) 생산",
            "Chemical Industries Holding Company가 약 59.9%, Social Insurance Fund for Governmental sector employees이 약 25.6%의 지분 보유"
          ]
        },
        {
          "nameKo": "주택개발은행",
          "nameEn": "Housing & Development Bank",
          "foundedYear": "1979",
          "parentCompany": null,
          "hq": "이집트 기자(Giza)",
          "industry": "금융 및 보험업",
          "subIndustry": "계좌, 카드, 대출 등",
          "corpType": "사기업(합자회사)",
          "employees": "19754",
          "marketCap": {
            "usd": "245,000,000 USD",
            "krw": "약 3,675억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "140,000,000 USD",
            "krw": "약 2,100억 원",
            "year": "2020"
          },
          "website": "www.hdb-egy.com",
          "highlights": [
            "이집트 내 83개의 지점 운영, 17개의 자회사를 보유하고 있으며 이 중 1,000만 달러 이상의 가치를 지닌 회사는 5개 (Holding Company For Investment & Development, Housing & Development Company For Real Estste Investment, El-Tameer Company For Mortgage Finance, City Edge Development, Hyde Park Real Estate Company For Development)",
            "중소기업을 위한 특별자금지원 프로그램 운영",
            "원자재 구입, 기계 및 장비구입, 계약서 등 관련 서류 작성 등 금융서비스 지원"
          ]
        },
        {
          "nameKo": "주헤이나 식품산업",
          "nameEn": "Juhayna Food Industries",
          "foundedYear": "1983",
          "parentCompany": null,
          "hq": "이집트 기자(Giza)",
          "industry": "제조업",
          "subIndustry": "우유, 요구르트, 음료 등 식료품 제조",
          "corpType": "사기업",
          "employees": "4000",
          "marketCap": {
            "usd": "420,000,000 USD",
            "krw": "약 6,300억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "21,000,000 USD",
            "krw": "약 315억 원",
            "year": "2020"
          },
          "website": "www.juhayna.com",
          "highlights": [
            "이집트 내 유제품 및 주스 제품을 유통하는 대표적인 기업으로 200가지 이상의 제품군 및 13개의 브랜드(Dairy, Juhayna, Yoghurt, Greek Yoghurt, Zabado, Rayed, Mix Milk, Mix, Classic, Pure, Happy Kitchen, Classic Blends, Bekhero Juice, Bekhero)보유",
            "4개의 제조공장 및 10개 자회사 (Egyptian Food Industries, Juhayna Food Indus, Arju Food Indus, Juhayna Food Indus El MArwa Food Indus Company 등) 운영"
          ]
        },
        {
          "nameKo": "카이로 은행",
          "nameEn": "Banque du Caire",
          "foundedYear": "1952",
          "parentCompany": "Mirs Investment Company",
          "hq": "이집트 카이로(Cairo)",
          "industry": "금융 및 보험업",
          "subIndustry": "은행, 투자, 송금 등",
          "corpType": "공기업",
          "employees": "1041",
          "marketCap": {
            "usd": "332,000,000 USD",
            "krw": "약 4,980억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "246,000,000 USD",
            "krw": "약 3,690억 원",
            "year": "2020"
          },
          "website": "www.banqueducaire.com",
          "highlights": [
            "이집트 내 231개 이상의 지점을 운영하고 있으며 중동, 아프리카, 동유럽에 지점 및 대표사무소 운영",
            "대표적인 자회사로 Suez Steel, Air Cairo 등이 있음"
          ]
        },
        {
          "nameKo": "카타르국립은행 알아홀리",
          "nameEn": "Oatar National Bank Alahli",
          "foundedYear": "1978",
          "parentCompany": "QNB Group \r- 창립자: 카타르 투자청 \r- 창립연도: 1964년",
          "hq": "이집트 카이로(Cairo)",
          "industry": "금융 및 보험업",
          "subIndustry": "예금, 카드, 투자, 대출 등 은행서비스",
          "corpType": "사기업",
          "employees": "1968",
          "marketCap": {
            "usd": "2,474,000,000 USD",
            "krw": "약 3조 7,110억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "456,000,000 USD",
            "krw": "약 6,840억 원",
            "year": "2020"
          },
          "website": "www.qnbalahli.com",
          "highlights": [
            "모회사인 QNB그룹은 전 세계 28개국에서 대표사무소, 자회사 및 계열사를 운영하고 있으며, 2,000만 고객 보유, 4,200개의 현금자동인출기(ATM) 운영",
            "Capital Finance International Magazine 선정 2020년 이집트 최고의 중소기업 은행이자 이집트 최고의 소액거래 은행, international Finance Magazine 선정 2020년 이집트 최고의 모바일 은행",
            "세계 3대 신용평가기관의 평가에서 우수한 평가를 받음",
            "영국 FitchRatings, 투자적격 10단계 중 5단계 'A+'로 평가",
            "미국 Moody's, 투자적격 10단계 중 4단계 'Aa3'로 평가",
            "미국 Standard & Poor's, 투자적격 10단계 중 6단계 'A'로 평가"
          ]
        },
        {
          "nameKo": "쿠웨이트국립은행 이집트",
          "nameEn": "National Bank of Kuwait - Egypt",
          "foundedYear": "1980",
          "parentCompany": "National Bank of Kuwait",
          "hq": "이집트 기자(Giza)",
          "industry": "금융 및 보험업",
          "subIndustry": "투자, 카드, 대출 등",
          "corpType": "사기업",
          "employees": "2461",
          "marketCap": {
            "usd": "223,000,000 USD",
            "krw": "약 3,345억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "127,000,000 USD",
            "krw": "약 1,905억 원",
            "year": "2020"
          },
          "website": "www.nbk.com/egypt",
          "highlights": [
            "세계 최고의 금융기관을 선별하는 Global Finance에서 2009~2016년간 세계에서 안전한 은행 Top50에 선정",
            "세계 3대 신용평가기관의 평가",
            "영국 FitchRatings, 투자적격 10단계 중 4단계 'AA-'로 평가",
            "미국 Moody's, 투자적격 10단계 중 4단계 'Aa3'로 평가",
            "미국 Standard & Poor's, 투자적격 10단계 중 5단계 'A+'로 평가"
          ]
        },
        {
          "nameKo": "클레오파트라 병원",
          "nameEn": "CleoPatra Hospital Group",
          "foundedYear": "2014",
          "parentCompany": null,
          "hq": "이집트 카이로(Cairo)",
          "industry": "보건 및 사회복지서비스업",
          "subIndustry": "병원 운영",
          "corpType": "사기업",
          "employees": "4518",
          "marketCap": {
            "usd": "456,000,000 USD",
            "krw": "약 6,840억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "16,000,000 USD",
            "krw": "약 240억 원",
            "year": "2020"
          },
          "website": "www.cleopatrahospitals.com",
          "highlights": [
            "1,500명 이상의 전문의와 레지턴트, 900명의 간호사를 고용하고 있으며6개의 병원과 2개의 센터를 운영하는 이집트 내 가장 큰 규모의 민간 병원그룹",
            "심장학, 소아병동과, 피부과, 안과, 산부인과, 흉부외과 등",
            "Cleopatra Hospital Group은 Cleopatra Hospital을 포함하여 Cairo Specialized Hospital, Nile Badrawi Hospital, Al Shorouk Hospital, Queens Hospital, El Katib Hospital 운영"
          ]
        },
        {
          "nameKo": "티엠지 홀딩",
          "nameEn": "TMG Holding",
          "foundedYear": "1974",
          "parentCompany": null,
          "hq": "이집트 카이로(Cairo)",
          "industry": "부동산업",
          "subIndustry": "호텔, 리조트 운영",
          "corpType": "사기업",
          "employees": "10000",
          "marketCap": {
            "usd": "681,000,000 USD",
            "krw": "약 1조 215억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "119,000,000 USD",
            "krw": "약 1,785억 원",
            "year": "2020"
          },
          "website": "www.talaatmoustafa.com",
          "highlights": [
            "도시개발 프로젝트",
            "Madinaty 프로젝트: 미국 디자인 회사인 HHCP, CWA 및 Sasaki와 협력하여 뉴 카이로 교외 확장을 목적으로 12만 세대, 약 60만 명에게 거주지 및 생활센터 공급",
            "Al-Rehab  프로젝트: 3만여 세대 아파트와 빌라 외, 학교, 쇼핑몰, 의료센터 등 공급",
            "이외의 Al-Rabwa, MayFair, Virginia Beach, Al Rawda Ai Khadra, Celia등의 도시개발 프로젝트 진행",
            "최고급 호텔 및 리조트 건축(four Seasons Nile Plaza, Four Seasons Hotel Alexandria San Stefano, Four Seasons Sharm El Sheikh Resort, kempinski Nile Hotel Cairo 등)"
          ]
        },
        {
          "nameKo": "팜 힐스 개발",
          "nameEn": "Palm Hills Developments",
          "foundedYear": "1997",
          "parentCompany": null,
          "hq": "이집트 기자(Giza)",
          "industry": "부동산업",
          "subIndustry": "리조트, 호텔, 상업시설 등",
          "corpType": "사기업",
          "employees": "10000",
          "marketCap": {
            "usd": "227,000,000 USD",
            "krw": "약 3,405억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "54,000,000 USD",
            "krw": "약 810억 원",
            "year": "2020"
          },
          "website": "www.palmhillsdevelopments.com",
          "highlights": [
            "카이로, 북해안 및 홍해안에서 24개의 부동산 프로젝트 진행",
            "카이로: Golf Central, Westlane, The Crown, Hale Town, Palm Parks, Woodville, Golf Extension, Palm Hills October, Casa Sheikh Zayed, Palm Valley, Bamboo Extension, Palm Hills New Cairo, Capital Gardens, Village Gate, Palm Hills Katameya, Village Avenue, Palm Hills Katameya 2, The Village, Village Gardens Katameya",
            "븍해안: Hacienda Bay, Hacienda White, Palm Hills Alexandria",
            "홍해안: Palm Hills Sokhna at Laguna Bay, Tawaya Sahl Hasheesh",
            "청년들의 직업훈련 및 채용기회를 제공하기 위해 중소기업/무역/산업부의 산업교육위원회(Industrial Training Council)와 제휴하고, 하수 및 배수시설 공급을 위한 약 706만 달러 기금을 조성하는 등 사회적 책임에 대한 기업노력 다각화"
          ]
        },
        {
          "nameKo": "헬리오폴리스 주택개발",
          "nameEn": "Heliopolis Company for Housing & Devrlopment",
          "foundedYear": "1906",
          "parentCompany": "The Holding Company for Construction and Development",
          "hq": "이집트 카이로(Cairo)",
          "industry": "부동산업",
          "subIndustry": "주택, 건설 및 설계 등",
          "corpType": "사기업(합자회사)",
          "employees": "10000",
          "marketCap": {
            "usd": "363,000,000 USD",
            "krw": "약 5,445억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "24,000,000 USD",
            "krw": "약 360억 원",
            "year": "2020"
          },
          "website": "www.hccd-construction.com",
          "highlights": [
            "토지 매립 및 분할, 주거용 부동산 개발 및 관리, 부동산 프로젝트 계획 및 감독을 전문으로 하며 교량, 주택, 호텔, 휴양시설 및 병원 등 건설",
            "모회사인 The Holding Company for Construction and Development는 이집트 공공산업부 산하기관으로 19개의 계열사 보유",
            "하청부문 9개사, 주택부문 3개사, 전력부문 2개사, 건축설계 & 컨설팅부문 1개사, 기타부문(농업/운송/무역) 4개사"
          ]
        }
      ],
      "startups": [
        {
          "nameKo": "눈 아카데미",
          "field": "에듀테크",
          "foundedYear": "2013",
          "hq": "이집트 카이로",
          "employees": "101~250명",
          "funding": {
            "usd": "21,600,000 USD",
            "krw": "약 324억 원",
            "year": null
          },
          "topInvestor": "STV, Raed VC, Saudi Venture Capital Investment Company, Abdulla Elyas, Dr.Abdulrahman Aljadhai, Mazen Aljubair",
          "fundingStage": "Series B",
          "website": "http://www.noonacademy.com/eg-en/"
        },
        {
          "nameKo": "셰즈롱",
          "field": "헬스케어",
          "foundedYear": "2014",
          "hq": "이집트 기자",
          "employees": "11~50명",
          "funding": {
            "usd": "300,000 USD",
            "krw": "약 4억 5,000만 원",
            "year": null
          },
          "topInvestor": null,
          "fundingStage": "Series A",
          "website": "http://www.shezlong.com"
        },
        {
          "nameKo": "페어리",
          "field": "금융&핀테크",
          "foundedYear": "2008",
          "hq": "이집트 기자",
          "employees": "251~500명",
          "funding": {
            "usd": "122,000,000 USD",
            "krw": "약 1,830억 원",
            "year": null
          },
          "topInvestor": "Ideavelopers",
          "fundingStage": null,
          "website": "http://fawry.com"
        }
      ]
    }
  },
  "잠비아": {
    "id": "잠비아",
    "name": "잠비아",
    "nameEn": "Zambia",
    "population": "18,920,000명 (2020년 기준)",
    "language": "영어(공용어)",
    "capital": "루사카(Lusaka)",
    "climateScore": null,
    "mainClimateIssue": null,
    "diplomacyScore": null,
    "matchScore": null,
    "recommended": null,
    "priorityPartner": false,
    "koreaOdaHistory": true,
    "economy": {
      "gdpPerCapita": {
        "usd": "1,490 USD",
        "krw": "약 223만 원",
        "year": "2022",
        "source": "IMF/국제통화기금"
      },
      "gdpTotal": {
        "usd": "29,740,000,000 USD",
        "krw": "약 44조 6,100억 원",
        "year": "2022",
        "source": "IMF/국제통화기금"
      },
      "odaNetReceived": {
        "usd": "약 4억 USD",
        "krw": "약 6,392억 5,845만 원",
        "year": "2019",
        "isNet": false
      },
      "recipientOda": {
        "usd": "약 987백만 USD",
        "krw": "약 1조 4,805억 원",
        "year": "2019",
        "isNet": false
      },
      "bilateral": {
        "usd": "약 56백만 USD",
        "krw": "약 840억 원",
        "year": "2019",
        "isNet": false
      },
      "koreaOda": {
        "usd": "약 2백만 USD",
        "krw": "약 30억 원",
        "year": "2019",
        "isNet": false
      }
    },
    "koica": {
      "total": "8,237,165 원",
      "sectors": [
        {
          "name": "보건",
          "percent": 19.4,
          "amount": "1,601,480 원"
        },
        {
          "name": "교육",
          "percent": 8.4,
          "amount": "690,036 원"
        },
        {
          "name": "농림수산",
          "percent": 40.7,
          "amount": "3,349,892 원"
        },
        {
          "name": "기술환경에너지",
          "percent": 3.4,
          "amount": "280,289 원"
        },
        {
          "name": "공공행정",
          "percent": 25.2,
          "amount": "2,076,035 원"
        },
        {
          "name": "긴급구호",
          "percent": 2.6,
          "amount": "212,376 원"
        },
        {
          "name": "기타",
          "percent": 0.3,
          "amount": "27,057 원"
        }
      ]
    },
    "infrastructure": {
      "hospitalBeds": {
        "value": "2",
        "unit": "병상 / 1,000명",
        "year": "2010",
        "source": "World Bank"
      },
      "physicians": {
        "value": "0.3",
        "unit": "의사 / 1,000명",
        "year": "2022",
        "source": "World Bank"
      },
      "nursesMidwives": {
        "value": "2.9",
        "unit": "간호사·조산사 / 1,000명",
        "year": "2022",
        "source": "World Bank"
      },
      "electricityAccess": {
        "value": "53.6",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableEnergyShare": {
        "value": "92.0",
        "unit": "%",
        "year": "2021",
        "source": "World Bank"
      },
      "cleanCookingAccess": {
        "value": "9.2",
        "unit": "%",
        "year": "2023",
        "source": "World Bank"
      },
      "internetPenetration": {
        "value": "17.1",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "mobileSubscriptions": {
        "value": "108.7",
        "unit": "건 / 100명",
        "year": "2024",
        "source": "World Bank"
      },
      "basicWater": {
        "value": "73.4",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "basicSanitation": {
        "value": "37.5",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableWaterPerCapita": {
        "value": "3979.6",
        "unit": "m³ / 인",
        "year": "2022",
        "source": "World Bank"
      },
      "pavedRoads": {
        "value": "22",
        "unit": "%",
        "year": "2001",
        "source": "World Bank"
      },
      "railLines": {
        "value": "1248",
        "unit": "km",
        "year": "2019",
        "source": "World Bank"
      }
    },
    "koicaCumulative": {
      "total": "약 70억 3,835만 원",
      "latest": "약 3억 8,479만 원",
      "latestYear": "2023",
      "startYear": "1991"
    },
    "koicaHealthDetail": null,
    "diplomaticContact": {
      "overseas": {
        "missionName": "주 짐바브웨 대한민국 대사관",
        "missionType": "대사관",
        "jointCoverage": true,
        "address": "3rd floor(Bridge-Red light side), Eastgate Building, 3rd Street/Robert Mugabe Rolad, Harare, Zimbavwe(P.O.Box 4970),",
        "phone": "(263-242)756-541",
        "consularCenter": "(82)2-3210-0404",
        "tollFree": "080-020-0219",
        "emergency": "(263)782-840-787",
        "website": "http://overseas.mofa.go.kr/zw-ko/index.do",
        "lat": -17.831424,
        "lng": 31.052597
      },
      "domestic": {
        "ambassador": "Wylbur Chisiya SIMUUSA",
        "address": "서울특별시 용산구 이태원로 27길 56",
        "phone": "793-1961",
        "email": "zamembseoul@gmail.com",
        "fax": "793-1969",
        "updatedAt": "2020-10-19"
      }
    },
    "marketEntry": {
      "companyCount": 1,
      "industries": [
        {
          "name": "제조업",
          "count": 1
        }
      ],
      "startupCount": 1,
      "startupFields": [
        {
          "name": "금융&핀테크",
          "count": 1
        }
      ],
      "companies": [
        {
          "nameKo": "잠비아 브루어리",
          "nameEn": "Zambian Breweries",
          "foundedYear": "1963",
          "parentCompany": "SAMMiller",
          "hq": "잠비아 루사카(Lusaka)",
          "industry": "제조업",
          "subIndustry": "음료 제조",
          "corpType": "사기업(주식회사)",
          "employees": "6000",
          "marketCap": {
            "usd": "239,000,000 USD",
            "krw": "약 3,585억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "80,000,000 USD",
            "krw": "약 1,200억 원",
            "year": "2020"
          },
          "website": null,
          "highlights": [
            "National Breweries, Heinrich's Syndicate Limited를 자회사로 운영하고 있으며 5개의 양조공장 및 병입공장 소유",
            "9개의 맥주 브랜드(Mosi Lager, Eagle Lager, Eagle Maize Lager, Castle Lager, Castel Lite, Carling Black Label, Flying Fish, Stella Artois, Budweiser)취급"
          ]
        }
      ],
      "startups": [
        {
          "nameKo": "아이에이티에프",
          "field": "금융&핀테크",
          "foundedYear": "2007",
          "hq": "남아프리카공화국 프레토리아",
          "employees": null,
          "funding": null,
          "topInvestor": "ECP investments",
          "fundingStage": null,
          "website": "http://www.transportforex.co.za/"
        }
      ]
    }
  },
  "적도기니": {
    "id": "적도기니",
    "name": "적도기니",
    "nameEn": "Equatorial Guinea",
    "population": "1,670,000명 (2020년 기준)",
    "language": "스페인어(공용어), 프랑스어(공용어), 포르투갈어(공용어), 팡어",
    "capital": "말라보(Malabo)",
    "climateScore": null,
    "mainClimateIssue": null,
    "diplomacyScore": null,
    "matchScore": null,
    "recommended": null,
    "priorityPartner": false,
    "koreaOdaHistory": true,
    "economy": {
      "gdpPerCapita": {
        "usd": "10,980 USD",
        "krw": "약 1,647만 원",
        "year": "2022",
        "source": "IMF/국제통화기금"
      },
      "gdpTotal": {
        "usd": "16,400,000,000 USD",
        "krw": "약 24조 6,000억 원",
        "year": "2022",
        "source": "IMF/국제통화기금"
      },
      "odaNetReceived": {
        "usd": "약 1억 USD",
        "krw": "약 1,153억 7,329만 원",
        "year": "2019",
        "isNet": false
      },
      "recipientOda": {
        "usd": "약 57백만 USD",
        "krw": "약 855억 원",
        "year": "2019",
        "isNet": false
      },
      "bilateral": {
        "usd": "약 6백만 USD",
        "krw": "약 90억 원",
        "year": "2019",
        "isNet": false
      },
      "koreaOda": {
        "usd": "약 0백만 USD",
        "krw": "약 0 원",
        "year": "2019",
        "isNet": false
      }
    },
    "koica": {
      "total": "1,115,178 원",
      "sectors": [
        {
          "name": "보건",
          "percent": 9.3,
          "amount": "103,732 원"
        },
        {
          "name": "교육",
          "percent": 32.0,
          "amount": "357,269 원"
        },
        {
          "name": "농림수산",
          "percent": 1.8,
          "amount": "19,644 원"
        },
        {
          "name": "기술환경에너지",
          "percent": 10.3,
          "amount": "115,110 원"
        },
        {
          "name": "공공행정",
          "percent": 46.6,
          "amount": "519,422 원"
        }
      ]
    },
    "infrastructure": {
      "hospitalBeds": {
        "value": "2.1",
        "unit": "병상 / 1,000명",
        "year": "2010",
        "source": "World Bank"
      },
      "physicians": {
        "value": "0.2",
        "unit": "의사 / 1,000명",
        "year": "2022",
        "source": "World Bank"
      },
      "nursesMidwives": {
        "value": "1.4",
        "unit": "간호사·조산사 / 1,000명",
        "year": "2022",
        "source": "World Bank"
      },
      "electricityAccess": {
        "value": "65.1",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableEnergyShare": {
        "value": "8.8",
        "unit": "%",
        "year": "2021",
        "source": "World Bank"
      },
      "cleanCookingAccess": {
        "value": "22.1",
        "unit": "%",
        "year": "2023",
        "source": "World Bank"
      },
      "internetPenetration": {
        "value": "63.3",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "mobileSubscriptions": {
        "value": "49.5",
        "unit": "건 / 100명",
        "year": "2022",
        "source": "World Bank"
      },
      "basicWater": {
        "value": "64.7",
        "unit": "%",
        "year": "2017",
        "source": "World Bank"
      },
      "basicSanitation": {
        "value": "66.3",
        "unit": "%",
        "year": "2017",
        "source": "World Bank"
      },
      "renewableWaterPerCapita": {
        "value": "14416.1",
        "unit": "m³ / 인",
        "year": "2022",
        "source": "World Bank"
      },
      "pavedRoads": {
        "value": null,
        "unit": "%",
        "year": null,
        "source": null
      },
      "railLines": {
        "value": null,
        "unit": "km",
        "year": null,
        "source": null
      }
    },
    "koicaCumulative": {
      "total": "약 21억 9,580만 원",
      "latest": "약 7억 9,295만 원",
      "latestYear": "2023",
      "startYear": "1991"
    },
    "koicaHealthDetail": null,
    "diplomaticContact": {
      "overseas": {
        "missionName": "주 적도기니공화국 대한민국 대사관 말라보 분관",
        "missionType": "대사관 말라보 분관",
        "jointCoverage": false,
        "address": "Villa 14, Hotel 3 de Agosto, Malabo, Guinea Ecuatorial,",
        "phone": "(240)333-090-775",
        "consularCenter": "(82)2-3210-0404",
        "tollFree": "080-020-0219",
        "emergency": "(240)222-433-173",
        "website": "http://overseas.mofa.go.kr/gq-ko/index.do",
        "lat": 3.7535273,
        "lng": 8.7069704
      },
      "domestic": null
    },
    "marketEntry": {
      "companyCount": 0,
      "industries": [],
      "startupCount": 0,
      "startupFields": [],
      "companies": [],
      "startups": []
    }
  },
  "중앙아프리카": {
    "id": "중앙아프리카",
    "name": "중앙아프리카",
    "nameEn": "Central African Republic",
    "population": "5,450,000명 (2020년 기준)",
    "language": "프랑스어(공용어), 상고어(국어)",
    "capital": "방기(Bangui)",
    "climateScore": null,
    "mainClimateIssue": null,
    "diplomacyScore": null,
    "matchScore": null,
    "recommended": null,
    "priorityPartner": false,
    "koreaOdaHistory": true,
    "economy": {
      "gdpPerCapita": {
        "usd": "461 USD",
        "krw": "약 69만 원",
        "year": "2021",
        "source": "World Bank"
      },
      "gdpTotal": {
        "usd": "2,520,000,000 USD",
        "krw": "약 3조 7,800억 원",
        "year": "2021",
        "source": "World Bank"
      },
      "odaNetReceived": {
        "usd": "약 32억 USD",
        "krw": "약 4조 7,391억 6,150만 원",
        "year": "2019",
        "isNet": false
      },
      "recipientOda": {
        "usd": "약 672백만 USD",
        "krw": "약 1조 80억 원",
        "year": "2019",
        "isNet": false
      },
      "bilateral": {
        "usd": "약 42백만 USD",
        "krw": "약 630억 원",
        "year": "2019",
        "isNet": false
      },
      "koreaOda": {
        "usd": "약 2백만 USD",
        "krw": "약 30억 원",
        "year": "2019",
        "isNet": false
      }
    },
    "koica": {
      "total": "5,069,495 원",
      "sectors": [
        {
          "name": "보건",
          "percent": 9.9,
          "amount": "503,736 원"
        },
        {
          "name": "교육",
          "percent": 3.0,
          "amount": "153,118 원"
        },
        {
          "name": "농림수산",
          "percent": 3.7,
          "amount": "187,098 원"
        },
        {
          "name": "기술환경에너지",
          "percent": 1.9,
          "amount": "97,121 원"
        },
        {
          "name": "공공행정",
          "percent": 77.3,
          "amount": "3,916,369 원"
        },
        {
          "name": "긴급구호",
          "percent": 4.1,
          "amount": "207,013 원"
        },
        {
          "name": "기타",
          "percent": 0.1,
          "amount": "5,040 원"
        }
      ]
    },
    "infrastructure": {
      "hospitalBeds": {
        "value": "1",
        "unit": "병상 / 1,000명",
        "year": "2011",
        "source": "World Bank"
      },
      "physicians": {
        "value": "0.1",
        "unit": "의사 / 1,000명",
        "year": "2023",
        "source": "World Bank"
      },
      "nursesMidwives": {
        "value": "1.1",
        "unit": "간호사·조산사 / 1,000명",
        "year": "2023",
        "source": "World Bank"
      },
      "electricityAccess": {
        "value": "18.2",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableEnergyShare": {
        "value": "96.5",
        "unit": "%",
        "year": "2021",
        "source": "World Bank"
      },
      "cleanCookingAccess": {
        "value": "1",
        "unit": "%",
        "year": "2023",
        "source": "World Bank"
      },
      "internetPenetration": {
        "value": "13.8",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "mobileSubscriptions": {
        "value": "38.8",
        "unit": "건 / 100명",
        "year": "2022",
        "source": "World Bank"
      },
      "basicWater": {
        "value": "36.5",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "basicSanitation": {
        "value": "14.0",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableWaterPerCapita": {
        "value": "27657.7",
        "unit": "m³ / 인",
        "year": "2022",
        "source": "World Bank"
      },
      "pavedRoads": {
        "value": "6.8",
        "unit": "%",
        "year": "2010",
        "source": "World Bank"
      },
      "railLines": {
        "value": null,
        "unit": "km",
        "year": null,
        "source": null
      }
    },
    "koicaCumulative": {
      "total": "약 38억 9,491만 원",
      "latest": "약 15억 2,835만 원",
      "latestYear": "2023",
      "startYear": "1991"
    },
    "koicaHealthDetail": null,
    "diplomaticContact": {
      "overseas": {
        "missionName": "주 카메룬 대한민국 대사관",
        "missionType": "대사관",
        "jointCoverage": true,
        "address": "House NO. 85, Rosa Park Avenue, Ntougou-Golf, P.O.Box, 13286, Yaounde, Cameroon,",
        "phone": "(237)2-2220-3756",
        "consularCenter": "(82)2-3210-0404",
        "tollFree": "080-020-0219",
        "emergency": "(237)694-873-695",
        "website": "http://overseas.mofa.go.kr/cm-ko/index.do",
        "lat": 3.896586103,
        "lng": 11.51830304
      },
      "domestic": null
    },
    "marketEntry": {
      "companyCount": 0,
      "industries": [],
      "startupCount": 0,
      "startupFields": [],
      "companies": [],
      "startups": []
    }
  },
  "지부티": {
    "id": "지부티",
    "name": "지부티",
    "nameEn": "Djibouti",
    "population": "1,110,000명 (2020년 기준)",
    "language": "프랑스어, 아랍어",
    "capital": "지부티(Djibouti)",
    "climateScore": null,
    "mainClimateIssue": null,
    "diplomacyScore": null,
    "matchScore": null,
    "recommended": null,
    "priorityPartner": false,
    "koreaOdaHistory": true,
    "economy": {
      "gdpPerCapita": {
        "usd": "4,030 USD",
        "krw": "약 604만 원",
        "year": "2023",
        "source": "IMF/국제통화기금"
      },
      "gdpTotal": {
        "usd": "4,200,000,000 USD",
        "krw": "약 6조 3,000억 원",
        "year": "2023",
        "source": "IMF/국제통화기금"
      },
      "odaNetReceived": {
        "usd": "약 8억 USD",
        "krw": "약 1조 2,650억 7,765만 원",
        "year": "2019",
        "isNet": false
      },
      "recipientOda": {
        "usd": "약 314백만 USD",
        "krw": "약 4,710억 원",
        "year": "2019",
        "isNet": false
      },
      "bilateral": {
        "usd": "약 52백만 USD",
        "krw": "약 780억 원",
        "year": "2019",
        "isNet": false
      },
      "koreaOda": {
        "usd": "약 0백만 USD",
        "krw": "약 0 원",
        "year": "2019",
        "isNet": false
      }
    },
    "koica": {
      "total": "4,255,693 원",
      "sectors": [
        {
          "name": "보건",
          "percent": 17.6,
          "amount": "750,610 원"
        },
        {
          "name": "교육",
          "percent": 0.1,
          "amount": "2,474 원"
        },
        {
          "name": "농림수산",
          "percent": 0.2,
          "amount": "8,243 원"
        },
        {
          "name": "기술환경에너지",
          "percent": 31.4,
          "amount": "1,336,814 원"
        },
        {
          "name": "공공행정",
          "percent": 47.9,
          "amount": "2,036,398 원"
        },
        {
          "name": "긴급구호",
          "percent": 2.8,
          "amount": "121,154 원"
        }
      ]
    },
    "infrastructure": {
      "hospitalBeds": {
        "value": "1.4",
        "unit": "병상 / 1,000명",
        "year": "2018",
        "source": "World Bank"
      },
      "physicians": {
        "value": "0.2",
        "unit": "의사 / 1,000명",
        "year": "2022",
        "source": "World Bank"
      },
      "nursesMidwives": {
        "value": "0.2",
        "unit": "간호사·조산사 / 1,000명",
        "year": "2022",
        "source": "World Bank"
      },
      "electricityAccess": {
        "value": "69.2",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableEnergyShare": {
        "value": "35.4",
        "unit": "%",
        "year": "2021",
        "source": "World Bank"
      },
      "cleanCookingAccess": {
        "value": "10",
        "unit": "%",
        "year": "2023",
        "source": "World Bank"
      },
      "internetPenetration": {
        "value": "65.3",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "mobileSubscriptions": {
        "value": "48.5",
        "unit": "건 / 100명",
        "year": "2023",
        "source": "World Bank"
      },
      "basicWater": {
        "value": "79.7",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "basicSanitation": {
        "value": "67.0",
        "unit": "%",
        "year": "2023",
        "source": "World Bank"
      },
      "renewableWaterPerCapita": {
        "value": "263.8",
        "unit": "m³ / 인",
        "year": "2022",
        "source": "World Bank"
      },
      "pavedRoads": {
        "value": "45",
        "unit": "%",
        "year": "2001",
        "source": "World Bank"
      },
      "railLines": {
        "value": "781",
        "unit": "km",
        "year": "2003",
        "source": "World Bank"
      }
    },
    "koicaCumulative": {
      "total": "약 48억 5,697만 원",
      "latest": "약 1억 4,730만 원",
      "latestYear": "2023",
      "startYear": "1991"
    },
    "koicaHealthDetail": null,
    "diplomaticContact": {
      "overseas": {
        "missionName": "주 에티오피아 대한민국 대사관",
        "missionType": "대사관",
        "jointCoverage": true,
        "address": "Embassy of the Repulic of Korea House No. 856, Kebele 04, Nefas Silk Lafto, Addis Ababa, Ethiopia,",
        "phone": "(251)113-72-81-11",
        "consularCenter": "(82)2-3210-0404",
        "tollFree": "080-020-0219",
        "emergency": "(251)92-217-4741",
        "website": "http://overseas.mofa.go.kr/et-ko/index.do",
        "lat": 9.051879,
        "lng": 38.727486
      },
      "domestic": null
    },
    "marketEntry": {
      "companyCount": 0,
      "industries": [],
      "startupCount": 0,
      "startupFields": [],
      "companies": [],
      "startups": []
    }
  },
  "짐바브웨": {
    "id": "짐바브웨",
    "name": "짐바브웨",
    "nameEn": "Zimbabwe",
    "population": "15,090,000명 (2020년 기준)",
    "language": "영어(공용어), 토착어",
    "capital": "하라레(Harare)",
    "climateScore": null,
    "mainClimateIssue": null,
    "diplomacyScore": null,
    "matchScore": null,
    "recommended": null,
    "priorityPartner": false,
    "koreaOdaHistory": true,
    "economy": {
      "gdpPerCapita": {
        "usd": "2,320 USD",
        "krw": "약 348만 원",
        "year": "2022",
        "source": "IMF/국제통화기금"
      },
      "gdpTotal": {
        "usd": "33,020,000,000 USD",
        "krw": "약 49조 5,300억 원",
        "year": "2022",
        "source": "IMF/국제통화기금"
      },
      "odaNetReceived": {
        "usd": "약 6억 USD",
        "krw": "약 8,790억 5,730만 원",
        "year": "2019",
        "isNet": false
      },
      "recipientOda": {
        "usd": "약 913백만 USD",
        "krw": "약 1조 3,695억 원",
        "year": "2019",
        "isNet": false
      },
      "bilateral": {
        "usd": "약 54백만 USD",
        "krw": "약 810억 원",
        "year": "2019",
        "isNet": false
      },
      "koreaOda": {
        "usd": "약 2백만 USD",
        "krw": "약 30억 원",
        "year": "2019",
        "isNet": false
      }
    },
    "koica": {
      "total": "20,100,000 원",
      "sectors": [
        {
          "name": "보건",
          "percent": 11.4,
          "amount": "2,289,517 원"
        },
        {
          "name": "교육",
          "percent": 6.0,
          "amount": "1,208,815 원"
        },
        {
          "name": "농림수산",
          "percent": 25.5,
          "amount": "5,129,348 원"
        },
        {
          "name": "기술환경에너지",
          "percent": 8.4,
          "amount": "1,682,434 원"
        },
        {
          "name": "공공행정",
          "percent": 45.2,
          "amount": "9,078,030 원"
        },
        {
          "name": "긴급구호",
          "percent": 0.7,
          "amount": "132,598 원"
        },
        {
          "name": "기타",
          "percent": 2.7,
          "amount": "535,847 원"
        }
      ]
    },
    "infrastructure": {
      "hospitalBeds": {
        "value": "1.9",
        "unit": "병상 / 1,000명",
        "year": "2014",
        "source": "World Bank"
      },
      "physicians": {
        "value": "0.1",
        "unit": "의사 / 1,000명",
        "year": "2023",
        "source": "World Bank"
      },
      "nursesMidwives": {
        "value": "3.1",
        "unit": "간호사·조산사 / 1,000명",
        "year": "2022",
        "source": "World Bank"
      },
      "electricityAccess": {
        "value": "62",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableEnergyShare": {
        "value": "88.3",
        "unit": "%",
        "year": "2021",
        "source": "World Bank"
      },
      "cleanCookingAccess": {
        "value": "30.7",
        "unit": "%",
        "year": "2023",
        "source": "World Bank"
      },
      "internetPenetration": {
        "value": "41.6",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "mobileSubscriptions": {
        "value": "94.2",
        "unit": "건 / 100명",
        "year": "2024",
        "source": "World Bank"
      },
      "basicWater": {
        "value": "67.2",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "basicSanitation": {
        "value": "34.6",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableWaterPerCapita": {
        "value": "763.0",
        "unit": "m³ / 인",
        "year": "2022",
        "source": "World Bank"
      },
      "pavedRoads": {
        "value": "19",
        "unit": "%",
        "year": "2002",
        "source": "World Bank"
      },
      "railLines": {
        "value": "3120",
        "unit": "km",
        "year": "2020",
        "source": "World Bank"
      }
    },
    "koicaCumulative": {
      "total": "약 228억 8,382만 원",
      "latest": "약 11억 4,861만 원",
      "latestYear": "2023",
      "startYear": "1991"
    },
    "koicaHealthDetail": {
      "year": "2024",
      "sectors": [
        {
          "name": "보건정책 및 행정관리",
          "percent": 100.0,
          "amount": "31,740,000 원"
        }
      ]
    },
    "diplomaticContact": {
      "overseas": {
        "missionName": "주 짐바브웨 대한민국 대사관",
        "missionType": "대사관",
        "jointCoverage": false,
        "address": "3rd floor(Bridge-Red light side), Eastgate Building, 3rd Street/Robert Mugabe Rolad, Harare, Zimbavwe(P.O.Box 4970),",
        "phone": "(263-242)756-541",
        "consularCenter": "(82)2-3210-0404",
        "tollFree": "080-020-0219",
        "emergency": "(263)782-840-787",
        "website": "http://overseas.mofa.go.kr/zw-ko/index.do",
        "lat": -17.831424,
        "lng": 31.052597
      },
      "domestic": null
    },
    "marketEntry": {
      "companyCount": 2,
      "industries": [
        {
          "name": "제조업",
          "count": 1
        },
        {
          "name": "정보통신업",
          "count": 1
        }
      ],
      "startupCount": 1,
      "startupFields": [
        {
          "name": "금융&핀테크",
          "count": 1
        }
      ],
      "companies": [
        {
          "nameKo": "델타 코퍼레이션",
          "nameEn": "Delta Corportation",
          "foundedYear": "1898",
          "parentCompany": null,
          "hq": "짐바브웨 하라레(Harare)",
          "industry": "제조업",
          "subIndustry": "맥주, 청량음료 등 음료 제조",
          "corpType": "사기업(유한회사)",
          "employees": "1060",
          "marketCap": {
            "usd": "313,000,000 USD",
            "krw": "약 4,695억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "2,000,000 USD",
            "krw": "약 30억 원",
            "year": "2020"
          },
          "website": "www.delta.co.zw",
          "highlights": [
            "4개의 자회사를 운영하고 있으며 벨기에 양조회사인 ABlnBev와 미국 코카콜라와 제휴",
            "8종의 맥주(Castle, Carling, Golden Pilsener 등), 5종의 음료(Coca cola, Fanta, Sprite 등) 취급"
          ]
        },
        {
          "nameKo": "에코넷 와이어리스",
          "nameEn": "Econet Wireless Zimbabwe",
          "foundedYear": "1998",
          "parentCompany": "Econet Wireless Global Ltd\r- 창립자: Strive Masiyiwa \r- 창립연도: 1993년",
          "hq": "짐바브웨 하라레(Harare)",
          "industry": "정보통신업",
          "subIndustry": "4G, WIFI, 로밍 등",
          "corpType": "사기업(유한회사)",
          "employees": null,
          "marketCap": {
            "usd": "409,000,000 USD",
            "krw": "약 6,135억 원",
            "year": null
          },
          "netProfit": {
            "usd": "4,000,000 USD",
            "krw": "약 60억 원",
            "year": null
          },
          "website": "www.econet.co.zw",
          "highlights": [
            "24개국에서 지점 운영",
            "가나, 감비아, 나미비아, 나이지리아, 남수단, 남아공, 라이베리아, 레소토, 르완다, 말라위, 모리셔스, 보츠나와, 부룬디, 수단, 시에라리온, 에티오피아, 에스와티니, 우간다, 이집트, 잠비아, 짐바브웨, 케냐, 콩고민주공화국, 탄자니아",
            "네트워크 서비스 제공(2018년 이후 가입자 수 약 1,140만 명)",
            "2009년 3G 네트워크 도입 및 모바일머니 서비스(Ecocash) 시행",
            "2013년 4G 네트워크 도입 및 모바일머니 서비스(Ecocash) 시행",
            "2020년 2월, 짐바브웨에서 최초로 증강현실(AR) 기반 게임 출시",
            "자회사인 Liquid Telecom과 Transaction Payment Solutions는 짐바브웨 제 1의 인터넷서비스 제공사이자 금융거래 지원사"
          ]
        }
      ],
      "startups": [
        {
          "nameKo": "페이잇업",
          "field": "금융&핀테크",
          "foundedYear": "2017",
          "hq": "짐바브웨 하라레",
          "employees": "1~10명",
          "funding": {
            "usd": "13,000,000 USD",
            "krw": "약 195억 원",
            "year": null
          },
          "topInvestor": "Thawer Fund Management",
          "fundingStage": "Series A",
          "website": "http://www.payitup.co/(연결불가)"
        }
      ]
    }
  },
  "차드": {
    "id": "차드",
    "name": "차드",
    "nameEn": "Chad",
    "population": "17,170,000명 (2020년 기준)",
    "language": "프랑스어, 아랍어",
    "capital": "은자메나(N'Djamena)",
    "climateScore": null,
    "mainClimateIssue": null,
    "diplomacyScore": null,
    "matchScore": null,
    "recommended": null,
    "priorityPartner": false,
    "koreaOdaHistory": true,
    "economy": {
      "gdpPerCapita": {
        "usd": "685 USD",
        "krw": "약 102만 원",
        "year": "2021",
        "source": "World Bank"
      },
      "gdpTotal": {
        "usd": "11,700,000,000 USD",
        "krw": "약 17조 5,500억 원",
        "year": "2021",
        "source": "World Bank"
      },
      "odaNetReceived": {
        "usd": "약 6억 USD",
        "krw": "약 9,519억 5,685만 원",
        "year": "2019",
        "isNet": false
      },
      "recipientOda": {
        "usd": "약 721백만 USD",
        "krw": "약 1조 815억 원",
        "year": "2019",
        "isNet": false
      },
      "bilateral": {
        "usd": "약 39백만 USD",
        "krw": "약 585억 원",
        "year": "2019",
        "isNet": false
      },
      "koreaOda": {
        "usd": "약 2백만 USD",
        "krw": "약 30억 원",
        "year": "2019",
        "isNet": false
      }
    },
    "koica": {
      "total": "8,632,230 원",
      "sectors": [
        {
          "name": "보건",
          "percent": 0.2,
          "amount": "13,816 원"
        },
        {
          "name": "교육",
          "percent": 60.4,
          "amount": "5,211,992 원"
        },
        {
          "name": "농림수산",
          "percent": 1.0,
          "amount": "89,816 원"
        },
        {
          "name": "기술환경에너지",
          "percent": 5.6,
          "amount": "484,302 원"
        },
        {
          "name": "공공행정",
          "percent": 26.9,
          "amount": "2,319,216 원"
        },
        {
          "name": "긴급구호",
          "percent": 5.6,
          "amount": "485,134 원"
        },
        {
          "name": "기타",
          "percent": 0.3,
          "amount": "27,954 원"
        }
      ]
    },
    "infrastructure": {
      "hospitalBeds": {
        "value": "0.1",
        "unit": "병상 / 1,000명",
        "year": "2020",
        "source": "World Bank"
      },
      "physicians": {
        "value": "0.1",
        "unit": "의사 / 1,000명",
        "year": "2023",
        "source": "World Bank"
      },
      "nursesMidwives": {
        "value": "0.2",
        "unit": "간호사·조산사 / 1,000명",
        "year": "2023",
        "source": "World Bank"
      },
      "electricityAccess": {
        "value": "13.4",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableEnergyShare": {
        "value": "4.6",
        "unit": "%",
        "year": "2021",
        "source": "World Bank"
      },
      "cleanCookingAccess": {
        "value": "9.7",
        "unit": "%",
        "year": "2023",
        "source": "World Bank"
      },
      "internetPenetration": {
        "value": "12.6",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "mobileSubscriptions": {
        "value": "72.9",
        "unit": "건 / 100명",
        "year": "2024",
        "source": "World Bank"
      },
      "basicWater": {
        "value": "52.2",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "basicSanitation": {
        "value": "13.1",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableWaterPerCapita": {
        "value": "812.8",
        "unit": "m³ / 인",
        "year": "2022",
        "source": "World Bank"
      },
      "pavedRoads": {
        "value": "0.8",
        "unit": "%",
        "year": "2000",
        "source": "World Bank"
      },
      "railLines": {
        "value": null,
        "unit": "km",
        "year": null,
        "source": null
      }
    },
    "koicaCumulative": {
      "total": "약 59억 1,363만 원",
      "latest": "약 20억 9,637만 원",
      "latestYear": "2023",
      "startYear": "1991"
    },
    "koicaHealthDetail": null,
    "diplomaticContact": {
      "overseas": {
        "missionName": "주 카메룬 대한민국 대사관",
        "missionType": "대사관",
        "jointCoverage": true,
        "address": "House NO. 85, Rosa Park Avenue, Ntougou-Golf, P.O.Box, 13286, Yaounde, Cameroon,",
        "phone": "(237)2-2220-3756",
        "consularCenter": "(82)2-3210-0404",
        "tollFree": "080-020-0219",
        "emergency": "(237)694-873-695",
        "website": "http://overseas.mofa.go.kr/cm-ko/index.do",
        "lat": 3.896586103,
        "lng": 11.51830304
      },
      "domestic": null
    },
    "marketEntry": {
      "companyCount": 0,
      "industries": [],
      "startupCount": 0,
      "startupFields": [],
      "companies": [],
      "startups": []
    }
  },
  "카메룬": {
    "id": "카메룬",
    "name": "카메룬",
    "nameEn": "Cameroon",
    "population": "30,140,000명 (2020년 기준)",
    "language": "프랑스어(인구 80%)·영어(인구20%) 공용어",
    "capital": "야운데(Yaounde)",
    "climateScore": null,
    "mainClimateIssue": null,
    "diplomacyScore": null,
    "matchScore": null,
    "recommended": null,
    "priorityPartner": false,
    "koreaOdaHistory": true,
    "economy": {
      "gdpPerCapita": {
        "usd": "1,446 USD",
        "krw": "약 216만 원",
        "year": "2022",
        "source": "World Bank"
      },
      "gdpTotal": {
        "usd": "44,300,000,000 USD",
        "krw": "약 66조 4,500억 원",
        "year": "2022",
        "source": "World Bank"
      },
      "odaNetReceived": {
        "usd": "약 3억 USD",
        "krw": "약 5,234억 8,155만 원",
        "year": "2019",
        "isNet": false
      },
      "recipientOda": {
        "usd": "약 1,614백만 USD",
        "krw": "약 2조 4,210억 원",
        "year": "2019",
        "isNet": false
      },
      "bilateral": {
        "usd": "약 51백만 USD",
        "krw": "약 765억 원",
        "year": "2019",
        "isNet": false
      },
      "koreaOda": {
        "usd": "약 14백만 USD",
        "krw": "약 210억 원",
        "year": "2019",
        "isNet": false
      }
    },
    "koica": {
      "total": "65,300,000 원",
      "sectors": [
        {
          "name": "보건",
          "percent": 22.1,
          "amount": "14,400,000 원"
        },
        {
          "name": "교육",
          "percent": 23.6,
          "amount": "15,400,000 원"
        },
        {
          "name": "농림수산",
          "percent": 7.4,
          "amount": "4,800,465 원"
        },
        {
          "name": "기술환경에너지",
          "percent": 7.5,
          "amount": "4,919,308 원"
        },
        {
          "name": "공공행정",
          "percent": 25.9,
          "amount": "16,900,000 원"
        },
        {
          "name": "긴급구호",
          "percent": 8.7,
          "amount": "5,662,245 원"
        },
        {
          "name": "기타",
          "percent": 5.1,
          "amount": "3,308,819 원"
        }
      ]
    },
    "infrastructure": {
      "hospitalBeds": {
        "value": "2.6",
        "unit": "병상 / 1,000명",
        "year": "2016",
        "source": "World Bank"
      },
      "physicians": {
        "value": "0.1",
        "unit": "의사 / 1,000명",
        "year": "2022",
        "source": "World Bank"
      },
      "nursesMidwives": {
        "value": "0.7",
        "unit": "간호사·조산사 / 1,000명",
        "year": "2022",
        "source": "World Bank"
      },
      "electricityAccess": {
        "value": "72",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableEnergyShare": {
        "value": "61.9",
        "unit": "%",
        "year": "2021",
        "source": "World Bank"
      },
      "cleanCookingAccess": {
        "value": "30.7",
        "unit": "%",
        "year": "2023",
        "source": "World Bank"
      },
      "internetPenetration": {
        "value": "46.3",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "mobileSubscriptions": {
        "value": "108.2",
        "unit": "건 / 100명",
        "year": "2024",
        "source": "World Bank"
      },
      "basicWater": {
        "value": "71.4",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "basicSanitation": {
        "value": "47.1",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableWaterPerCapita": {
        "value": "9879.6",
        "unit": "m³ / 인",
        "year": "2022",
        "source": "World Bank"
      },
      "pavedRoads": {
        "value": "17",
        "unit": "%",
        "year": "2008",
        "source": "World Bank"
      },
      "railLines": {
        "value": "884",
        "unit": "km",
        "year": "2021",
        "source": "World Bank"
      }
    },
    "koicaCumulative": {
      "total": "약 853억 8,000만 원",
      "latest": "약 73억 1,119만 원",
      "latestYear": "2023",
      "startYear": "1991"
    },
    "koicaHealthDetail": {
      "year": "2024",
      "sectors": [
        {
          "name": "보건정책 및 행정관리",
          "percent": 79.3,
          "amount": "253,258,500 원"
        },
        {
          "name": "의료서비스",
          "percent": 13.6,
          "amount": "43,333,500 원"
        },
        {
          "name": "보건교육",
          "percent": 7.2,
          "amount": "22,881,000 원"
        }
      ]
    },
    "diplomaticContact": {
      "overseas": {
        "missionName": "주 카메룬 대한민국 대사관",
        "missionType": "대사관",
        "jointCoverage": false,
        "address": "House NO. 85, Rosa Park Avenue, Ntougou-Golf, P.O.Box, 13286, Yaounde, Cameroon,",
        "phone": "(237)2-2220-3756",
        "consularCenter": "(82)2-3210-0404",
        "tollFree": "080-020-0219",
        "emergency": "(237)694-873-695",
        "website": "http://overseas.mofa.go.kr/cm-ko/index.do",
        "lat": 3.896586103,
        "lng": 11.51830304
      },
      "domestic": null
    },
    "marketEntry": {
      "companyCount": 0,
      "industries": [],
      "startupCount": 2,
      "startupFields": [
        {
          "name": "금융&핀테크",
          "count": 1
        },
        {
          "name": "헬스케어",
          "count": 1
        }
      ],
      "companies": [],
      "startups": [
        {
          "nameKo": "디올",
          "field": "금융&핀테크",
          "foundedYear": "2015",
          "hq": "카메룬 두알라",
          "employees": "1~10명",
          "funding": {
            "usd": "2,100,000 USD",
            "krw": "약 31억 5,000만 원",
            "year": null
          },
          "topInvestor": "Seedstars",
          "fundingStage": "Seed",
          "website": "diool.com"
        },
        {
          "nameKo": "키프티드맘",
          "field": "헬스케어",
          "foundedYear": "2013",
          "hq": "카메룬 야운데",
          "employees": "11~50명",
          "funding": {
            "usd": "220,000 USD",
            "krw": "약 3억 3,000만 원",
            "year": null
          },
          "topInvestor": null,
          "fundingStage": "Seed",
          "website": "http://healthlane.co/"
        }
      ]
    }
  },
  "카보베르데": {
    "id": "카보베르데",
    "name": "카보베르데",
    "nameEn": "Cape Verde",
    "population": "593,000명 (2020년 기준)",
    "language": "포르투갈어(공용어), 크리올어",
    "capital": "프라야(Praia)",
    "climateScore": null,
    "mainClimateIssue": null,
    "diplomacyScore": null,
    "matchScore": null,
    "recommended": null,
    "priorityPartner": false,
    "koreaOdaHistory": true,
    "economy": {
      "gdpPerCapita": {
        "usd": "3,903 USD",
        "krw": "약 585만 원",
        "year": "2022",
        "source": "World Bank"
      },
      "gdpTotal": {
        "usd": "2,310,000,000 USD",
        "krw": "약 3조 4,650억 원",
        "year": "2022",
        "source": "World Bank"
      },
      "odaNetReceived": {
        "usd": "약 8억 USD",
        "krw": "약 1조 1,797억 6,440만 원",
        "year": "2019",
        "isNet": false
      },
      "recipientOda": {
        "usd": "약 184백만 USD",
        "krw": "약 2,760억 원",
        "year": "2019",
        "isNet": false
      },
      "bilateral": {
        "usd": "약 37백만 USD",
        "krw": "약 555억 원",
        "year": "2019",
        "isNet": false
      },
      "koreaOda": {
        "usd": "약 0백만 USD",
        "krw": "약 0 원",
        "year": "2019",
        "isNet": false
      }
    },
    "koica": {
      "total": "540,293 원",
      "sectors": [
        {
          "name": "보건",
          "percent": 28.5,
          "amount": "154,065 원"
        },
        {
          "name": "교육",
          "percent": 0.3,
          "amount": "1,438 원"
        },
        {
          "name": "기술환경에너지",
          "percent": 5.8,
          "amount": "31,233 원"
        },
        {
          "name": "공공행정",
          "percent": 65.4,
          "amount": "353,557 원"
        }
      ]
    },
    "infrastructure": {
      "hospitalBeds": {
        "value": "2.2",
        "unit": "병상 / 1,000명",
        "year": "2022",
        "source": "World Bank"
      },
      "physicians": {
        "value": "0.7",
        "unit": "의사 / 1,000명",
        "year": "2023",
        "source": "World Bank"
      },
      "nursesMidwives": {
        "value": "1.8",
        "unit": "간호사·조산사 / 1,000명",
        "year": "2023",
        "source": "World Bank"
      },
      "electricityAccess": {
        "value": "98.4",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableEnergyShare": {
        "value": "18.3",
        "unit": "%",
        "year": "2021",
        "source": "World Bank"
      },
      "cleanCookingAccess": {
        "value": "83.9",
        "unit": "%",
        "year": "2023",
        "source": "World Bank"
      },
      "internetPenetration": {
        "value": "74.7",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "mobileSubscriptions": {
        "value": "111.8",
        "unit": "건 / 100명",
        "year": "2024",
        "source": "World Bank"
      },
      "basicWater": {
        "value": "92.3",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "basicSanitation": {
        "value": "83.1",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableWaterPerCapita": {
        "value": "577.2",
        "unit": "m³ / 인",
        "year": "2022",
        "source": "World Bank"
      },
      "pavedRoads": {
        "value": "69.0",
        "unit": "%",
        "year": "2001",
        "source": "World Bank"
      },
      "railLines": {
        "value": null,
        "unit": "km",
        "year": null,
        "source": null
      }
    },
    "koicaCumulative": {
      "total": "약 7억 3,782만 원",
      "latest": null,
      "latestYear": "2023",
      "startYear": "1991"
    },
    "koicaHealthDetail": null,
    "diplomaticContact": {
      "overseas": {
        "missionName": "주 세네갈 대한민국 대사관",
        "missionType": "대사관",
        "jointCoverage": true,
        "address": "Ambassade de la Republique de Coree, Villa Hamoudy, Rue Aime Cesaire, Fann Residence, B.P.5850, Dakar, Senegal,",
        "phone": "(221)33-824-06-72",
        "consularCenter": "(82)2-3210-0404",
        "tollFree": "080-020-0219",
        "emergency": "(221)77-639-5109",
        "website": "http://overseas.mofa.go.kr/sn-ko/index.do",
        "lat": 14.695506,
        "lng": -17.467318
      },
      "domestic": null
    },
    "marketEntry": {
      "companyCount": 0,
      "industries": [],
      "startupCount": 0,
      "startupFields": [],
      "companies": [],
      "startups": []
    }
  },
  "케냐": {
    "id": "케냐",
    "name": "케냐",
    "nameEn": "Kenya",
    "population": "50,920,000명 (2020년 기준)",
    "language": "스와힐리어(상용어), 영어(공용어)",
    "capital": "나이로비(Nairobi)",
    "climateScore": null,
    "mainClimateIssue": null,
    "diplomacyScore": null,
    "matchScore": null,
    "recommended": null,
    "priorityPartner": false,
    "koreaOdaHistory": true,
    "economy": {
      "gdpPerCapita": {
        "usd": "2,190 USD",
        "krw": "약 328만 원",
        "year": "2023",
        "source": "IMF/국제통화기금"
      },
      "gdpTotal": {
        "usd": "112,800,000,000 USD",
        "krw": "약 169조 2,000억 원",
        "year": "2023",
        "source": "IMF/국제통화기금"
      },
      "odaNetReceived": {
        "usd": "약 3억 USD",
        "krw": "약 5,211억 1,110만 원",
        "year": "2019",
        "isNet": false
      },
      "recipientOda": {
        "usd": "약 3,245백만 USD",
        "krw": "약 4조 8,675억 원",
        "year": "2019",
        "isNet": false
      },
      "bilateral": {
        "usd": "약 45백만 USD",
        "krw": "약 675억 원",
        "year": "2019",
        "isNet": false
      },
      "koreaOda": {
        "usd": "약 23백만 USD",
        "krw": "약 345억 원",
        "year": "2019",
        "isNet": false
      }
    },
    "koica": {
      "total": "77,200,000 원",
      "sectors": [
        {
          "name": "보건",
          "percent": 23.1,
          "amount": "17,800,000 원"
        },
        {
          "name": "교육",
          "percent": 25.1,
          "amount": "19,400,000 원"
        },
        {
          "name": "농림수산",
          "percent": 8.8,
          "amount": "6,785,925 원"
        },
        {
          "name": "기술환경에너지",
          "percent": 23.6,
          "amount": "18,200,000 원"
        },
        {
          "name": "공공행정",
          "percent": 10.3,
          "amount": "7,929,097 원"
        },
        {
          "name": "긴급구호",
          "percent": 7.7,
          "amount": "5,928,066 원"
        },
        {
          "name": "기타",
          "percent": 1.5,
          "amount": "1,181,724 원"
        }
      ]
    },
    "infrastructure": {
      "hospitalBeds": {
        "value": "1.3",
        "unit": "병상 / 1,000명",
        "year": "2019",
        "source": "World Bank"
      },
      "physicians": {
        "value": "0.3",
        "unit": "의사 / 1,000명",
        "year": "2023",
        "source": "World Bank"
      },
      "nursesMidwives": {
        "value": "2.3",
        "unit": "간호사·조산사 / 1,000명",
        "year": "2023",
        "source": "World Bank"
      },
      "electricityAccess": {
        "value": "77",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableEnergyShare": {
        "value": "78.1",
        "unit": "%",
        "year": "2021",
        "source": "World Bank"
      },
      "cleanCookingAccess": {
        "value": "31.6",
        "unit": "%",
        "year": "2023",
        "source": "World Bank"
      },
      "internetPenetration": {
        "value": "35.0",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "mobileSubscriptions": {
        "value": "126.5",
        "unit": "건 / 100명",
        "year": "2024",
        "source": "World Bank"
      },
      "basicWater": {
        "value": "65.6",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "basicSanitation": {
        "value": "40.9",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableWaterPerCapita": {
        "value": "381.5",
        "unit": "m³ / 인",
        "year": "2022",
        "source": "World Bank"
      },
      "pavedRoads": {
        "value": "14.3",
        "unit": "%",
        "year": "2010",
        "source": "World Bank"
      },
      "railLines": {
        "value": "1917",
        "unit": "km",
        "year": "2004",
        "source": "World Bank"
      }
    },
    "koicaCumulative": {
      "total": "약 1,177억 3,584만 원",
      "latest": "약 143억 2,656만 원",
      "latestYear": "2023",
      "startYear": "1991"
    },
    "koicaHealthDetail": {
      "year": "2024",
      "sectors": [
        {
          "name": "의료교육 및 훈련",
          "percent": 78.7,
          "amount": "176,310,000 원"
        },
        {
          "name": "보건정책 및 행정관리",
          "percent": 14.2,
          "amount": "31,740,000 원"
        },
        {
          "name": "보건인력개발",
          "percent": 7.1,
          "amount": "15,870,000 원"
        }
      ]
    },
    "diplomaticContact": {
      "overseas": {
        "missionName": "주 케냐 대한민국 대사관",
        "missionType": "대사관",
        "jointCoverage": false,
        "address": "Misha Towers, Westlands Road, Nairobi, Kenya,",
        "phone": "(254)20-361-5109",
        "consularCenter": "(82)2-3210-0404",
        "tollFree": "080-020-0219",
        "emergency": "(254)708-984-891",
        "website": "http://overseas.mofa.go.kr/ke-ko/index.do",
        "lat": -1.270147,
        "lng": 36.810002
      },
      "domestic": {
        "ambassador": "Mwende MWINZI",
        "address": "서울특별시 용산구 회나무로44길 38",
        "phone": "3785-2903/4",
        "email": "info@kenya-embassy.or.kr",
        "fax": "3785-2905",
        "updatedAt": "2021-02-23"
      }
    },
    "marketEntry": {
      "companyCount": 11,
      "industries": [
        {
          "name": "금융 및 보험업",
          "count": 7
        },
        {
          "name": "제조업",
          "count": 2
        },
        {
          "name": "정보통신업",
          "count": 1
        },
        {
          "name": "전기, 가스, 증기 및 공기조절 공급업",
          "count": 1
        }
      ],
      "startupCount": 14,
      "startupFields": [
        {
          "name": "금융&핀테크",
          "count": 8
        },
        {
          "name": "에너지",
          "count": 3
        },
        {
          "name": "에듀테크",
          "count": 1
        },
        {
          "name": "헬스케어",
          "count": 1
        },
        {
          "name": "보험",
          "count": 1
        }
      ],
      "companies": [
        {
          "nameKo": "다이아몬드 트러스트 은행",
          "nameEn": "Diamond Trust Bank",
          "foundedYear": "1945",
          "parentCompany": "Diamond Trust Bank Group",
          "hq": "케냐 나이로비(Nairobi)",
          "industry": "금융 및 보험업",
          "subIndustry": "투자, 대출, 카드 등",
          "corpType": "사기업",
          "employees": "1665",
          "marketCap": {
            "usd": "226,000,000 USD",
            "krw": "약 3,390억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "64,000,000 USD",
            "krw": "약 960억 원",
            "year": "2020"
          },
          "website": "dtbk.dtbafrica.com",
          "highlights": [
            "Diamond Trust Bank는 케냐를 비롯한 탄자니아, 우간다, 부룬디, 르완다등에 자회사를 운영하며, 동부 아프리카 지역에 100여개가 넘는 지점을 보유"
          ]
        },
        {
          "nameKo": "브리티쉬 아메리칸 토바코 케냐",
          "nameEn": "British American Tobacco Kenya",
          "foundedYear": "1907",
          "parentCompany": "British American Tobacco Group \r-  창립자: Imperial Tobacco, American Tobacco Company \r- 창립연도: 1902년",
          "hq": "케냐 나이로비(Nairobi)",
          "industry": "제조업",
          "subIndustry": "담배 생산, 가공, 유통",
          "corpType": "사기업",
          "employees": "2269",
          "marketCap": {
            "usd": "304,000,000 USD",
            "krw": "약 4,560억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "37,000,000 USD",
            "krw": "약 555억 원",
            "year": "2020"
          },
          "website": "www.batkenya.com",
          "highlights": [
            "모회사인 British American Tobacco Investments Limited는 영국에  본사를 둔 다국적 기업으로 1902년 영국왕실 담배회사와 미국 담배회사의 합작으로 설립되었으며, 전 세계 180여 개국에서 담배 생산, 가공, 유통중임. 대표적인 브랜드로 던힐, 켄트, 럭키스트라이크 등이 있음.",
            "케냐 자회사는 1907년부터 운영했으며, 1969년 나이로비 증권거래소에 상장함",
            "케냐의 미고리(Migori), 분고마(Bungoma), 메루(Meru)지역에 있는 5천여명의 농민과 계약을 체결하여 담배를 생산하며, 케냐에서 생산된 담배는 케냐 국내시장뿐만 아니라 동부, 중부, 남부 아프리카 국가로도 수출되고 있음"
          ]
        },
        {
          "nameKo": "사파리콤",
          "nameEn": "Sataricom",
          "foundedYear": "1993",
          "parentCompany": "Telkom Kenya",
          "hq": "케냐 나이로비(Nairobi)",
          "industry": "정보통신업",
          "subIndustry": "모바일 송금",
          "corpType": "사기업(주식회사)",
          "employees": "426",
          "marketCap": {
            "usd": "9,966,000,000 USD",
            "krw": "약 14조 9,490억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "598,000,000 USD",
            "krw": "약 8,970억 원",
            "year": "2020"
          },
          "website": "www.safaricom.co.ke",
          "highlights": [
            "1997년 Telkom Kenya의 자회사로 설립되었으나 2000년 영국의 Vodafone Group이 40%의 지분을 사들여 최대 주주가 되었으며, 케냐정부가 35% 지분 보유",
            "대표적인 브랜드는 2007년 시작된 휴대폰 기반의 송금서비스 엠페사(M-Pesa)로, 케냐에서 간편결제, 송금시장 점유율 80%이상을 기록하며 상용화에 성공을 거두고, 남아공, 탄자니아, 모잠비크, 이집트, 인도 등 다른 국가에도 진출함.",
            "2015년 Fortune 선정, 혁신을 통해 세상을 바꾼 기업 1위에 오른바 있으며, Forbes 발표 아프리카 최고의 고용기업으로 선정(세계 최우수 고용기업 200위 중 67위 기록)"
          ]
        },
        {
          "nameKo": "스탠다드 차타드 케냐",
          "nameEn": "Standard Chartered Kenya",
          "foundedYear": "1911",
          "parentCompany": "Standard Chartered\r- 창립자: James Wilson \r- 창립연도: 1853년",
          "hq": "케냐 나이로비(Nairobi)",
          "industry": "금융 및 보험업",
          "subIndustry": "카드, 대출, 투자, 보험 등",
          "corpType": "사기업",
          "employees": "6477",
          "marketCap": {
            "usd": "592,000,000 USD",
            "krw": "약 8,880억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "78,000,000 USD",
            "krw": "약 1,170억 원",
            "year": "2020"
          },
          "website": "www.sc.com/ke",
          "highlights": [
            "정부 지분은 약 25%를 상회하며 나머지는 Standard Chartered Public Limited Company가 소유, 케냐 전역에 36개의 지점과 100여개가 넘는 현금자동입출금기 운영 중",
            "2016년 Global Finace Awaeds의 Best Global Consumer Mobile Banking  및 Best Global Information Security Initiatives 분야에서 최우수은행으로 선정, 중동/아프리카지역 Best Digital Bank로 선정됨"
          ]
        },
        {
          "nameKo": "아이앤앰 홀딩스",
          "nameEn": "I&M Holdings",
          "foundedYear": "1974",
          "parentCompany": null,
          "hq": "케냐 나이로비(Nairobi)",
          "industry": "금융 및 보험업",
          "subIndustry": "보험, 투자 등",
          "corpType": "사기업",
          "employees": "1600",
          "marketCap": {
            "usd": "412,000,000 USD",
            "krw": "약 6,180억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "75,000,000 USD",
            "krw": "약 1,125억 원",
            "year": "2020"
          },
          "website": "www.imbank.com",
          "highlights": [
            "케냐, 모리셔스, 르완다, 탄자니아, 우간다 등에 자회사가 있음",
            "I&M Holdings의 지분은 케냐 기업 Minard Holdings Limited (약 21.4%), Tecoma Limited (약 18%), Ziyungi Limited (약 18%), 영국의 CDC Group (약 10%)등으로 구성"
          ]
        },
        {
          "nameKo": "에쿼티 그룹 홀딩스",
          "nameEn": "Equity Group Holdings",
          "foundedYear": "1984",
          "parentCompany": null,
          "hq": "케냐 나이로비(Nairobi)",
          "industry": "금융 및 보험업",
          "subIndustry": "대출, 투자, 카드 등",
          "corpType": "사기업(주식회사)",
          "employees": "900",
          "marketCap": {
            "usd": "1,168,000,000 USD",
            "krw": "약 1조 7,520억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "211,000,000 USD",
            "krw": "약 3,165억 원",
            "year": "2020"
          },
          "website": "equitygroupholdings.com/ke",
          "highlights": [
            "저소득층 고객을 위한 모기지 금융서비스를 시작으로 동아프리카의 대호수지역을 기반으로 금융서비스 지주회사로 성장",
            "아프리카대륙 내에서 남아공 외에 유일하게 American Espress 신용카드 발급 독점권을 가지고 있음",
            "Arise B.V, British-American Investments Company 등이 지분 보유"
          ]
        },
        {
          "nameKo": "엔씨비에이",
          "nameEn": "NCBA",
          "foundedYear": "1959",
          "parentCompany": null,
          "hq": "케냐 나이로비(Nairobi)",
          "industry": "금융 및 보험업",
          "subIndustry": "대출, 투자, 카드 등",
          "corpType": "사기업",
          "employees": "8959",
          "marketCap": {
            "usd": "220,000,000 USD",
            "krw": "약 3,300억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "54,000,000 USD",
            "krw": "약 810억 원",
            "year": "2020"
          },
          "website": "www.ncbagroup.com",
          "highlights": [
            "2019년 케냐 National Industrial Credit과 Commercial Bank of Africa Group의 합병으로 탄생",
            "케냐 외에도 르완다, 우간다, 코트디부아르에서 자회사를 운영하며 약 4천만명이 넘는 고객 보유"
          ]
        },
        {
          "nameKo": "이스트 아프리칸 브루어리",
          "nameEn": "East African Breweries",
          "foundedYear": "1922",
          "parentCompany": "Diageo \r-창립연도: 1997년",
          "hq": "케냐 나이로비(Nairobi)",
          "industry": "제조업",
          "subIndustry": "맥주, 보드카, 양주 등 주류 생산",
          "corpType": "사기업",
          "employees": "2400",
          "marketCap": {
            "usd": "1,082,000,000 USD",
            "krw": "약 1조 6,230억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "84,000,000 USD",
            "krw": "약 1,260억 원",
            "year": "2020"
          },
          "website": "www.eabl.com",
          "highlights": [
            "1922년 이주민에 의해 설립되었으며, 1930년대 후반 주류기업과의 합병으로 East African Breweries가 탄생함. 케냐, 탄자니아, 우간다, 남수단 등에 자회사를 보유하고 있으며 부룬디, 콩고민주공화국, 르완다 등에도 수출함",
            "2000년, 영국의 주류 및 음료 기업인 Diageo가 최대주주가 됨",
            "주요 브랜드로 라거 맥주인 Tusker가 있으며, Tusker는 케냐 맥주시장의 30%이상을 점유"
          ]
        },
        {
          "nameKo": "케냐발전",
          "nameEn": "Kenya Electricity Generating",
          "foundedYear": "1954",
          "parentCompany": null,
          "hq": "케냐 나이로비(Nairobi)",
          "industry": "전기, 가스, 증기 및 공기조절 공급업",
          "subIndustry": "지열, 수력, 풍력, 화력 등",
          "corpType": "사기업(공개유한회사)",
          "employees": "1653",
          "marketCap": {
            "usd": "305,000,000 USD",
            "krw": "약 4,575억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "74,000,000 USD",
            "krw": "약 1,110억 원",
            "year": "2020"
          },
          "website": "www.kengen.co.ke",
          "highlights": [
            "케냐발전은 8개의 수력발전소(총 818MW), 7개의 지열발전소(총 534 MW), 4개의 화력발전소(254MW), 1개의 풍력발전소(26Mw) 등을 운영함",
            "EAPIC 선정 올해의 청정에너지사업(Clean Energy Project of the Year), 2019년 Carital Finance International Awards 선정 동부아프리카 최우수 지속가능 전력생산기업(East Africa's Best Sustainable Power producer)",
            "2006년에 상장되었으며, 케냐정부가 최대지분(70%)을 보유함"
          ]
        },
        {
          "nameKo": "케냐협동은행",
          "nameEn": "Co-Operative Bank of Kenya",
          "foundedYear": "1965",
          "parentCompany": "Co-Operative Movement",
          "hq": "케냐 나이로비(Nairobi)",
          "industry": "금융 및 보험업",
          "subIndustry": "보험, 대출, 카드 등",
          "corpType": "사기업(주식회사)",
          "employees": "2500",
          "marketCap": {
            "usd": "690,000,000 USD",
            "krw": "약 1조 350억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "135,000,000 USD",
            "krw": "약 2,025억 원",
            "year": "2020"
          },
          "website": "www.co-opbank.co.ke",
          "highlights": [
            "Financial Times로부터 2010년 최우수은행, 2015년 올해의 은행(Bank of the Year 2015)으로 선정되었으며, 2014년 International Banker Magazine에서 최우수 혁신 소매은행 (Best Innovation in Retail Banking)으로 선정"
          ]
        },
        {
          "nameKo": "케이씨비 은행",
          "nameEn": "KCB Group",
          "foundedYear": "1896",
          "parentCompany": null,
          "hq": "케냐 나이로비(Nairobi)",
          "industry": "금융 및 보험업",
          "subIndustry": "대출, 예금, 보험 등",
          "corpType": "사기업",
          "employees": "4100",
          "marketCap": {
            "usd": "999,000,000 USD",
            "krw": "약 1조 4,985억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "238,000,000 USD",
            "krw": "약 3,570억 원",
            "year": "2020"
          },
          "website": "ke.kcngroup.com",
          "highlights": [
            "KCB Group은 케냐 나이로비에 본사를 두고 케냐 내 170여개의 지점을 운영 중임. 이외 부룬디, 르완다, 탄자니아, 우간다 등에 자회사를 운영하고 있음"
          ]
        }
      ],
      "startups": [
        {
          "nameKo": "디라이트",
          "field": "에너지",
          "foundedYear": "2007",
          "hq": "미국 샌프란시스코",
          "employees": "501~1,000명",
          "funding": {
            "usd": "197,000,000 USD",
            "krw": "약 2,955억 원",
            "year": null
          },
          "topInvestor": "Inspired Evolution Investment Management",
          "fundingStage": "Series E",
          "website": "http://www.dlight.com/"
        },
        {
          "nameKo": "브랜치",
          "field": "금융&핀테크",
          "foundedYear": "2015",
          "hq": "미국 샌프란시스코",
          "employees": "1010~250명",
          "funding": {
            "usd": "264,700,000 USD",
            "krw": "약 3,970억 5,000만 원",
            "year": null
          },
          "topInvestor": "Foundation Capital, Visa",
          "fundingStage": "Series C",
          "website": "http://branch.co/"
        },
        {
          "nameKo": "비박스",
          "field": "에너지",
          "foundedYear": "2010",
          "hq": "영국 런던",
          "employees": "101~250명",
          "funding": {
            "usd": "31,000,000 USD",
            "krw": "약 465억 원",
            "year": null
          },
          "topInvestor": "Mitsubishi Corporation",
          "fundingStage": "Series D",
          "website": "http://www.bboxx.co.ke"
        },
        {
          "nameKo": "비트페사",
          "field": "금융&핀테크",
          "foundedYear": "2013",
          "hq": "케냐 나이로비",
          "employees": null,
          "funding": null,
          "topInvestor": null,
          "fundingStage": "Seed",
          "website": "http:/www.bitpesa.co/"
        },
        {
          "nameKo": "아주리",
          "field": "에너지",
          "foundedYear": "2012",
          "hq": "영국 케임브리지",
          "employees": "101~250명",
          "funding": {
            "usd": "53,500,000 USD",
            "krw": "약 802억 5,000만 원",
            "year": null
          },
          "topInvestor": "Marubeni Corporation",
          "fundingStage": null,
          "website": "http://www.azuri-group.com/"
        },
        {
          "nameKo": "아폴로 어그리컬쳐",
          "field": "금융&핀테크",
          "foundedYear": "2015",
          "hq": "케냐 나이로비",
          "employees": "51~100명",
          "funding": {
            "usd": "7,600,000 USD",
            "krw": "약 114억 원",
            "year": null
          },
          "topInvestor": "Anthemis Group, Fmo, Mastercard Foundation Fund for Rural Prosperity, Rabobank",
          "fundingStage": "Series A",
          "website": "www.apolloagriculture.com"
        },
        {
          "nameKo": "앙가자 엘리무",
          "field": "에듀테크",
          "foundedYear": "2017",
          "hq": "케냐 나이로비",
          "employees": "11~50명",
          "funding": null,
          "topInvestor": null,
          "fundingStage": null,
          "website": "http://angazaelimu.com/#home"
        },
        {
          "nameKo": "얼터너티브 서클",
          "field": "금융&핀테크",
          "foundedYear": "2016",
          "hq": "케냐 나이로비",
          "employees": "1~10명",
          "funding": {
            "usd": "1,100,000 USD",
            "krw": "약 16억 5,000만 원",
            "year": null
          },
          "topInvestor": "Creditinfo",
          "fundingStage": "Seed",
          "website": "www.alternativecircle.com/"
        },
        {
          "nameKo": "에이제트에이 그룹",
          "field": "금융&핀테크",
          "foundedYear": "2013",
          "hq": "케냐 나이로비",
          "employees": "101~250명",
          "funding": {
            "usd": "30,000,000 USD",
            "krw": "약 450억 원",
            "year": null
          },
          "topInvestor": "Development Bank of South Africa(DBSA)",
          "fundingStage": "Series B",
          "website": "http://www.azafinance.com/"
        },
        {
          "nameKo": "자자 두카",
          "field": "금융&핀테크",
          "foundedYear": "2018",
          "hq": null,
          "employees": null,
          "funding": null,
          "topInvestor": null,
          "fundingStage": "Seed",
          "website": "http://ke.kcbgroup.com/jaza-duka"
        },
        {
          "nameKo": "케어페이",
          "field": "헬스케어",
          "foundedYear": "2015",
          "hq": "네델란드 암스테르담",
          "employees": "101~250명",
          "funding": {
            "usd": "45,200,000 USD",
            "krw": "약 678억 원",
            "year": null
          },
          "topInvestor": "ELMA Philanthropies",
          "fundingStage": "Series A",
          "website": "http://www.carepay.com/"
        },
        {
          "nameKo": "탈라",
          "field": "금융&핀테크",
          "foundedYear": "2011",
          "hq": "미국 산타모니카",
          "employees": "501~1,000명",
          "funding": {
            "usd": "204,400,000 USD",
            "krw": "약 3,066억 원",
            "year": null
          },
          "topInvestor": "RPS Ventures",
          "fundingStage": "Series D",
          "website": "http://tala.co/"
        },
        {
          "nameKo": "튜라코",
          "field": "금융&핀테크",
          "foundedYear": "2018",
          "hq": "케냐 나이로비",
          "employees": "1~10명",
          "funding": {
            "usd": "3,300,000 USD",
            "krw": "약 49억 5,000만 원",
            "year": null
          },
          "topInvestor": "Novastar Ventures, Catalyst Fund, Villgro",
          "fundingStage": "Seed",
          "website": "http://www.myTuraco.com/"
        },
        {
          "nameKo": "페사바자르",
          "field": "보험",
          "foundedYear": "2014",
          "hq": "케냐 나이로비",
          "employees": "1~10명",
          "funding": {
            "usd": "500,000 USD",
            "krw": "약 7억 5,000만 원",
            "year": null
          },
          "topInvestor": "Novastar Venture, Safaricom",
          "fundingStage": "Seed",
          "website": "http://www.pesabazaar.com/"
        }
      ]
    }
  },
  "코모로": {
    "id": "코모로",
    "name": "코모로",
    "nameEn": "Comoros",
    "population": "821,000명 (2020년 기준)",
    "language": "프랑스어, 아랍어, 코모로어(스와힐리어와 아랍어의 혼합)",
    "capital": "모로니(Moroni)",
    "climateScore": null,
    "mainClimateIssue": null,
    "diplomacyScore": null,
    "matchScore": null,
    "recommended": null,
    "priorityPartner": false,
    "koreaOdaHistory": true,
    "economy": {
      "gdpPerCapita": {
        "usd": "1,485 USD",
        "krw": "약 222만 원",
        "year": "2022",
        "source": "World Bank"
      },
      "gdpTotal": {
        "usd": "1,200,000,000 USD",
        "krw": "약 1조 8,000억 원",
        "year": "2022",
        "source": "World Bank"
      },
      "odaNetReceived": {
        "usd": "약 7억 USD",
        "krw": "약 1조 22억 3,130만 원",
        "year": "2019",
        "isNet": false
      },
      "recipientOda": {
        "usd": "약 78백만 USD",
        "krw": "약 1,170억 원",
        "year": "2019",
        "isNet": false
      },
      "bilateral": {
        "usd": "약 55백만 USD",
        "krw": "약 825억 원",
        "year": "2019",
        "isNet": false
      },
      "koreaOda": {
        "usd": "약 0백만 USD",
        "krw": "약 0 원",
        "year": "2019",
        "isNet": false
      }
    },
    "koica": {
      "total": "659,267 원",
      "sectors": [
        {
          "name": "교육",
          "percent": 7.9,
          "amount": "52,200 원"
        },
        {
          "name": "농림수산",
          "percent": 1.6,
          "amount": "10,328 원"
        },
        {
          "name": "기술환경에너지",
          "percent": 2.9,
          "amount": "19,355 원"
        },
        {
          "name": "공공행정",
          "percent": 87.6,
          "amount": "577,385 원"
        }
      ]
    },
    "infrastructure": {
      "hospitalBeds": {
        "value": "2.2",
        "unit": "병상 / 1,000명",
        "year": "2010",
        "source": "World Bank"
      },
      "physicians": {
        "value": "0.4",
        "unit": "의사 / 1,000명",
        "year": "2022",
        "source": "World Bank"
      },
      "nursesMidwives": {
        "value": "1.6",
        "unit": "간호사·조산사 / 1,000명",
        "year": "2022",
        "source": "World Bank"
      },
      "electricityAccess": {
        "value": "91.7",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableEnergyShare": {
        "value": "0",
        "unit": "%",
        "year": "2021",
        "source": "World Bank"
      },
      "cleanCookingAccess": {
        "value": "10.4",
        "unit": "%",
        "year": "2023",
        "source": "World Bank"
      },
      "internetPenetration": {
        "value": "32.5",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "mobileSubscriptions": {
        "value": "109.9",
        "unit": "건 / 100명",
        "year": "2023",
        "source": "World Bank"
      },
      "basicWater": {
        "value": "85.1",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "basicSanitation": {
        "value": "57.2",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableWaterPerCapita": {
        "value": "1438.5",
        "unit": "m³ / 인",
        "year": "2022",
        "source": "World Bank"
      },
      "pavedRoads": {
        "value": "76.5",
        "unit": "%",
        "year": "2001",
        "source": "World Bank"
      },
      "railLines": {
        "value": null,
        "unit": "km",
        "year": null,
        "source": null
      }
    },
    "koicaCumulative": {
      "total": "약 47억 807만 원",
      "latest": "약 15억 4,167만 원",
      "latestYear": "2023",
      "startYear": "1991"
    },
    "koicaHealthDetail": null,
    "diplomaticContact": {
      "overseas": {
        "missionName": "주 마다가스카르 대한민국 대사관",
        "missionType": "대사관",
        "jointCoverage": true,
        "address": "Immeuble Fitaratra-9eme Etage Nord, Ankorondrano, 101 Antananarivo, Madagascar,",
        "phone": "(261)20-222-2933",
        "consularCenter": "(82)2-3210-0404",
        "tollFree": "080-020-0219",
        "emergency": "(261)32-781-0874",
        "website": "http://overseas.mofa.go.kr/mg-ko/index.do",
        "lat": -18.884792,
        "lng": 47.522183
      },
      "domestic": null
    },
    "marketEntry": {
      "companyCount": 0,
      "industries": [],
      "startupCount": 0,
      "startupFields": [],
      "companies": [],
      "startups": []
    }
  },
  "코트디부아르": {
    "id": "코트디부아르",
    "name": "코트디부아르",
    "nameEn": "Cote D'Ivoir",
    "population": "27,480,000명 (2020년 기준)",
    "language": "프랑스어(공용어), 종족어",
    "capital": "야무수크로(Yamoussoukro)",
    "climateScore": null,
    "mainClimateIssue": null,
    "diplomacyScore": null,
    "matchScore": null,
    "recommended": null,
    "priorityPartner": false,
    "koreaOdaHistory": true,
    "economy": {
      "gdpPerCapita": {
        "usd": "2,468 USD",
        "krw": "약 370만 원",
        "year": "2022",
        "source": "IMF/국제통화기금"
      },
      "gdpTotal": {
        "usd": "70,000,000,000 USD",
        "krw": "약 105조 원",
        "year": "2022",
        "source": "IMF/국제통화기금"
      },
      "odaNetReceived": {
        "usd": "약 2억 USD",
        "krw": "약 3,162억 4,845만 원",
        "year": "2019",
        "isNet": false
      },
      "recipientOda": {
        "usd": "약 1,782백만 USD",
        "krw": "약 2조 6,730억 원",
        "year": "2019",
        "isNet": false
      },
      "bilateral": {
        "usd": "약 54백만 USD",
        "krw": "약 810억 원",
        "year": "2019",
        "isNet": false
      },
      "koreaOda": {
        "usd": "약 9백만 USD",
        "krw": "약 135억 원",
        "year": "2019",
        "isNet": false
      }
    },
    "koica": {
      "total": "50,800,000 원",
      "sectors": [
        {
          "name": "보건",
          "percent": 30.5,
          "amount": "15,500,000 원"
        },
        {
          "name": "교육",
          "percent": 34.8,
          "amount": "17,700,000 원"
        },
        {
          "name": "농림수산",
          "percent": 2.5,
          "amount": "1,278,397 원"
        },
        {
          "name": "기술환경에너지",
          "percent": 16.8,
          "amount": "8,525,444 원"
        },
        {
          "name": "공공행정",
          "percent": 10.8,
          "amount": "5,492,479 원"
        },
        {
          "name": "긴급구호",
          "percent": 2.6,
          "amount": "1,330,293 원"
        },
        {
          "name": "기타",
          "percent": 2.0,
          "amount": "1,000,850 원"
        }
      ]
    },
    "infrastructure": {
      "hospitalBeds": {
        "value": "0.4",
        "unit": "병상 / 1,000명",
        "year": "2006",
        "source": "World Bank"
      },
      "physicians": {
        "value": "0.2",
        "unit": "의사 / 1,000명",
        "year": "2023",
        "source": "World Bank"
      },
      "nursesMidwives": {
        "value": "0.8",
        "unit": "간호사·조산사 / 1,000명",
        "year": "2023",
        "source": "World Bank"
      },
      "electricityAccess": {
        "value": "72.9",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableEnergyShare": {
        "value": "22.8",
        "unit": "%",
        "year": "2021",
        "source": "World Bank"
      },
      "cleanCookingAccess": {
        "value": "44.1",
        "unit": "%",
        "year": "2023",
        "source": "World Bank"
      },
      "internetPenetration": {
        "value": "41.4",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "mobileSubscriptions": {
        "value": "183.9",
        "unit": "건 / 100명",
        "year": "2024",
        "source": "World Bank"
      },
      "basicWater": {
        "value": "77.2",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "basicSanitation": {
        "value": "40.4",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableWaterPerCapita": {
        "value": "2528.0",
        "unit": "m³ / 인",
        "year": "2022",
        "source": "World Bank"
      },
      "pavedRoads": {
        "value": "7.9",
        "unit": "%",
        "year": "2007",
        "source": "World Bank"
      },
      "railLines": {
        "value": "639",
        "unit": "km",
        "year": "2021",
        "source": "World Bank"
      }
    },
    "koicaCumulative": {
      "total": "약 699억 6,509만 원",
      "latest": "약 111억 8,976만 원",
      "latestYear": "2023",
      "startYear": "1991"
    },
    "koicaHealthDetail": {
      "year": "2024",
      "sectors": [
        {
          "name": "보건정책 및 행정관리",
          "percent": 100.0,
          "amount": "164,307,000 원"
        }
      ]
    },
    "diplomaticContact": {
      "overseas": {
        "missionName": "주 코트디부아르 대한민국 대사관",
        "missionType": "대사관",
        "jointCoverage": false,
        "address": "01BP 3950 Abidjan 01, Rue Sainte Marie Lot 18-19, Cocody Sud, Abidjan, Cote d&rsquo;Ivoire,",
        "phone": "(225)2248-6701",
        "consularCenter": "(82)2-3210-0404",
        "tollFree": "080-020-0219",
        "emergency": "(225)8827-3480",
        "website": "http://overseas.mofa.go.kr/ci-ko/index.do",
        "lat": 5.331987,
        "lng": -3.996877
      },
      "domestic": {
        "ambassador": "Sylvere ABBA",
        "address": "서울특별시 중구 세종대로 55 부영태평빌딩 19층",
        "phone": "3785-0561/2",
        "email": "info.seoul@diplomatie.gouv.ci",
        "fax": "3785-0564",
        "updatedAt": "2021-12-01"
      }
    },
    "marketEntry": {
      "companyCount": 2,
      "industries": [
        {
          "name": "금융 및 보험업",
          "count": 2
        }
      ],
      "startupCount": 2,
      "startupFields": [
        {
          "name": "금융&핀테크",
          "count": 2
        }
      ],
      "companies": [
        {
          "nameKo": "소시에테 이보리엔 드 방크",
          "nameEn": "Societe Ivoirienne de banque",
          "foundedYear": "1962",
          "parentCompany": "Attijariwafa Bank",
          "hq": "코트디부아르 아비장(Abidjan)",
          "industry": "금융 및 보험업",
          "subIndustry": "예금, 신용대출 등",
          "corpType": "사기업(주식회사)",
          "employees": "2471",
          "marketCap": {
            "usd": "216,000,000 USD",
            "krw": "약 3,240억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "39,000,000 USD",
            "krw": "약 585억 원",
            "year": "2020"
          },
          "website": "www.sib.ci",
          "highlights": [
            "21개 도시에 64개 지점, 2개의 비즈니스센터 운영",
            "2017년 서아프리카경제통화연맹(UEMOA) 선정 코트디부아르 최고금융기관상 수상, 2018년 영국 Financial Times가 꼽은 올해의 은행으로 선정",
            "자회사인 Wafa Assurance Maroc을 통해 보험서비스 제공",
            "2016년 서아프리카 증권거래소(BRVM) 상장"
          ]
        },
        {
          "nameKo": "소시에테 제네랄 코트디부아르",
          "nameEn": "Societe Generale cote d'ivoire",
          "foundedYear": "1962",
          "parentCompany": "Societe Generale\r- 창립자: Paulin Talabot \r- 창립연도: 1864년",
          "hq": "코트디부아르 아비장(Abidjan)",
          "industry": "금융 및 보험업",
          "subIndustry": "예금, 저축, 보험 등",
          "corpType": "사기업",
          "employees": "810",
          "marketCap": {
            "usd": "376,000,000 USD",
            "krw": "약 5,640억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "70,000,000 USD",
            "krw": "약 1,050억 원",
            "year": "2020"
          },
          "website": "societegenerale.ci.fr",
          "highlights": [
            "Societe Generale은 프랑스 기반의 금융그룹으로 프랑스에서 가장 오래된 은행 중 하나이며 1941년 코트디부아르 자사 운영을 시작으로 1962년 아프리카 상업은행(Banque Commerciale Africaine)을 인수하며 Societe Generale Cote d'ivoire 창립",
            "고액 고객을 위한 프라이빗 금융서비스 지점 운영, 중소기업 전용서비스 등을 제공",
            "코트디부아르 전국에 지점과 ATM 기기를 보유하고 있으며 트럭을 활용한 이동식 은행서비스 제공"
          ]
        }
      ],
      "startups": [
        {
          "nameKo": "시넷페이",
          "field": "금융&핀테크",
          "foundedYear": "2016",
          "hq": "코트디부아르 아비장",
          "employees": "11~50명",
          "funding": null,
          "topInvestor": null,
          "fundingStage": "Seed",
          "website": "www.cinetpay.com"
        },
        {
          "nameKo": "줄라야",
          "field": "금융&핀테크",
          "foundedYear": "2018",
          "hq": "코트디부아르 아비장",
          "employees": "1~10명",
          "funding": {
            "usd": "115,000 USD",
            "krw": "약 1억 7,250만 원",
            "year": null
          },
          "topInvestor": "Damien Guermonprez",
          "fundingStage": "Seed",
          "website": "http://julaya.co"
        }
      ]
    }
  },
  "콩고": {
    "id": "콩고",
    "name": "콩고",
    "nameEn": "Congo",
    "population": "5,830,000명 (2020년 기준)",
    "language": "프랑스어(공용어), 토착어(링갈라, 키투바)",
    "capital": "브라자빌(Brazzaville)",
    "climateScore": null,
    "mainClimateIssue": null,
    "diplomacyScore": null,
    "matchScore": null,
    "recommended": null,
    "priorityPartner": false,
    "koreaOdaHistory": true,
    "economy": {
      "gdpPerCapita": {
        "usd": "2,945 USD",
        "krw": "약 441만 원",
        "year": "2022",
        "source": "IMF/국제통화기금"
      },
      "gdpTotal": {
        "usd": "14,400,000,000 USD",
        "krw": "약 21조 6,000억 원",
        "year": "2022",
        "source": "IMF/국제통화기금"
      },
      "odaNetReceived": {
        "usd": "약 2억 USD",
        "krw": "약 2,820억 1,680만 원",
        "year": "2019",
        "isNet": false
      },
      "recipientOda": {
        "usd": "약 -432백만 USD",
        "krw": "약 -6,480억 원",
        "year": "2019",
        "isNet": true
      },
      "bilateral": {
        "usd": "약 51백만 USD",
        "krw": "약 765억 원",
        "year": "2019",
        "isNet": false
      },
      "koreaOda": {
        "usd": "약 0백만 USD",
        "krw": "약 0 원",
        "year": "2019",
        "isNet": false
      }
    },
    "koica": {
      "total": "3,808,830 원",
      "sectors": [
        {
          "name": "보건",
          "percent": 2.4,
          "amount": "92,792 원"
        },
        {
          "name": "교육",
          "percent": 42.2,
          "amount": "1,607,259 원"
        },
        {
          "name": "농림수산",
          "percent": 3.8,
          "amount": "146,495 원"
        },
        {
          "name": "기술환경에너지",
          "percent": 3.1,
          "amount": "118,243 원"
        },
        {
          "name": "공공행정",
          "percent": 46.0,
          "amount": "1,753,133 원"
        },
        {
          "name": "긴급구호",
          "percent": 1.1,
          "amount": "41,696 원"
        },
        {
          "name": "기타",
          "percent": 1.3,
          "amount": "49,213 원"
        }
      ]
    },
    "infrastructure": {
      "hospitalBeds": {
        "value": "1.6",
        "unit": "병상 / 1,000명",
        "year": "2005",
        "source": "World Bank"
      },
      "physicians": {
        "value": "0.2",
        "unit": "의사 / 1,000명",
        "year": "2022",
        "source": "World Bank"
      },
      "nursesMidwives": {
        "value": "1.1",
        "unit": "간호사·조산사 / 1,000명",
        "year": "2022",
        "source": "World Bank"
      },
      "electricityAccess": {
        "value": "53",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableEnergyShare": {
        "value": "31.7",
        "unit": "%",
        "year": "2021",
        "source": "World Bank"
      },
      "cleanCookingAccess": {
        "value": "40.1",
        "unit": "%",
        "year": "2023",
        "source": "World Bank"
      },
      "internetPenetration": {
        "value": "47.3",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "mobileSubscriptions": {
        "value": "95.5",
        "unit": "건 / 100명",
        "year": "2024",
        "source": "World Bank"
      },
      "basicWater": {
        "value": "73.5",
        "unit": "%",
        "year": "2021",
        "source": "World Bank"
      },
      "basicSanitation": {
        "value": "20.6",
        "unit": "%",
        "year": "2021",
        "source": "World Bank"
      },
      "renewableWaterPerCapita": {
        "value": "36784.8",
        "unit": "m³ / 인",
        "year": "2022",
        "source": "World Bank"
      },
      "pavedRoads": {
        "value": "7.1",
        "unit": "%",
        "year": "2006",
        "source": "World Bank"
      },
      "railLines": {
        "value": "893.2",
        "unit": "km",
        "year": "2012",
        "source": "World Bank"
      }
    },
    "koicaCumulative": {
      "total": "약 42억 1,529만 원",
      "latest": "약 4억 8,196만 원",
      "latestYear": "2023",
      "startYear": "1991"
    },
    "koicaHealthDetail": null,
    "diplomaticContact": {
      "overseas": {
        "missionName": "주 콩고민주공화국 대한민국 대사관",
        "missionType": "대사관",
        "jointCoverage": true,
        "address": "63 Av De 1a Justice Gombe Kinshasa,",
        "phone": "(243)1-503-5001",
        "consularCenter": "(82)2-3210-0404",
        "tollFree": "080-020-0219",
        "emergency": "(243)85-110-7971",
        "website": "http://overseas.mofa.go.kr/cd-ko/index.do",
        "lat": -4.3123424,
        "lng": 15.2847223
      },
      "domestic": null
    },
    "marketEntry": {
      "companyCount": 0,
      "industries": [],
      "startupCount": 0,
      "startupFields": [],
      "companies": [],
      "startups": []
    }
  },
  "콩고민주공화국": {
    "id": "콩고민주공화국",
    "name": "콩고민주공화국",
    "nameEn": "Congo (the Democratic Republic of the)",
    "population": "96,800,000명",
    "language": "프랑스어(공용어), 토착어(링갈라, 스와힐리, 키콩고, 씰루바)",
    "capital": "킨샤사(Kinshasa)",
    "climateScore": null,
    "mainClimateIssue": null,
    "diplomacyScore": null,
    "matchScore": null,
    "recommended": null,
    "priorityPartner": false,
    "koreaOdaHistory": false,
    "economy": {
      "gdpPerCapita": {
        "usd": "660 USD",
        "krw": "약 99만 원",
        "year": "2022",
        "source": "IMF/국제통화기금"
      },
      "gdpTotal": {
        "usd": "63,900,000,000 USD",
        "krw": "약 95조 8,500억 원",
        "year": "2022",
        "source": "IMF/국제통화기금"
      },
      "odaNetReceived": {
        "usd": null,
        "krw": null,
        "year": null,
        "isNet": false
      },
      "recipientOda": {
        "usd": null,
        "krw": null,
        "year": null,
        "isNet": false
      },
      "bilateral": {
        "usd": null,
        "krw": null,
        "year": null,
        "isNet": false
      },
      "koreaOda": {
        "usd": null,
        "krw": null,
        "year": null,
        "isNet": false
      }
    },
    "koica": {
      "total": null,
      "sectors": []
    },
    "infrastructure": {
      "hospitalBeds": {
        "value": "0.8",
        "unit": "병상 / 1,000명",
        "year": "2006",
        "source": "World Bank"
      },
      "physicians": {
        "value": "0.2",
        "unit": "의사 / 1,000명",
        "year": "2022",
        "source": "World Bank"
      },
      "nursesMidwives": {
        "value": "1.2",
        "unit": "간호사·조산사 / 1,000명",
        "year": "2022",
        "source": "World Bank"
      },
      "electricityAccess": {
        "value": "22.5",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableEnergyShare": {
        "value": "90.4",
        "unit": "%",
        "year": "2021",
        "source": "World Bank"
      },
      "cleanCookingAccess": {
        "value": "5",
        "unit": "%",
        "year": "2023",
        "source": "World Bank"
      },
      "internetPenetration": {
        "value": "19.7",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "mobileSubscriptions": {
        "value": "58.5",
        "unit": "건 / 100명",
        "year": "2024",
        "source": "World Bank"
      },
      "basicWater": {
        "value": "35.7",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "basicSanitation": {
        "value": "16.3",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableWaterPerCapita": {
        "value": "8789.3",
        "unit": "m³ / 인",
        "year": "2022",
        "source": "World Bank"
      },
      "pavedRoads": {
        "value": "1.8",
        "unit": "%",
        "year": "2004",
        "source": "World Bank"
      },
      "railLines": {
        "value": "3641",
        "unit": "km",
        "year": "2021",
        "source": "World Bank"
      }
    },
    "koicaCumulative": {
      "total": "약 1,188억 7,102만 원",
      "latest": "약 120억 6,763만 원",
      "latestYear": "2023",
      "startYear": "1991"
    },
    "koicaHealthDetail": {
      "year": "2024",
      "sectors": [
        {
          "name": "전염병 관리 및 예방(말라리아,결핵, 성병, 코로나19 제외)",
          "percent": 85.7,
          "amount": "9,000,000,000 원"
        },
        {
          "name": "생식보건",
          "percent": 13.6,
          "amount": "1,425,000,000 원"
        },
        {
          "name": "보건정책 및 행정관리",
          "percent": 0.8,
          "amount": "79,350,000 원"
        }
      ]
    },
    "diplomaticContact": {
      "overseas": {
        "missionName": "주 콩고민주공화국 대한민국 대사관",
        "missionType": "대사관",
        "jointCoverage": false,
        "address": "63 Av De 1a Justice Gombe Kinshasa,",
        "phone": "(243)1-503-5001",
        "consularCenter": "(82)2-3210-0404",
        "tollFree": "080-020-0219",
        "emergency": "(243)85-110-7971",
        "website": "http://overseas.mofa.go.kr/cd-ko/index.do",
        "lat": -4.3123424,
        "lng": 15.2847223
      },
      "domestic": null
    },
    "marketEntry": {
      "companyCount": 0,
      "industries": [],
      "startupCount": 0,
      "startupFields": [],
      "companies": [],
      "startups": []
    }
  },
  "탄자니아": {
    "id": "탄자니아",
    "name": "탄자니아",
    "nameEn": "Tanzania",
    "population": "59,730,000명 (2020년 기준)",
    "language": "스와힐리어, 영어",
    "capital": "다레살람(Dar es Salaam, 경제·행정수도) 도도마(Dodoma, 정치수도, 의회소재지)",
    "climateScore": null,
    "mainClimateIssue": null,
    "diplomacyScore": null,
    "matchScore": null,
    "recommended": null,
    "priorityPartner": true,
    "koreaOdaHistory": true,
    "economy": {
      "gdpPerCapita": {
        "usd": "1,130 USD",
        "krw": "약 169만 원",
        "year": "2023",
        "source": "IMF/국제통화기금"
      },
      "gdpTotal": {
        "usd": "84,000,000,000 USD",
        "krw": "약 126조 원",
        "year": "2023",
        "source": "IMF/국제통화기금"
      },
      "odaNetReceived": {
        "usd": "약 3억 USD",
        "krw": "약 5,216억 9,130만 원",
        "year": "2019",
        "isNet": false
      },
      "recipientOda": {
        "usd": "약 1,972백만 USD",
        "krw": "약 2조 9,580억 원",
        "year": "2019",
        "isNet": false
      },
      "bilateral": {
        "usd": "약 51백만 USD",
        "krw": "약 765억 원",
        "year": "2019",
        "isNet": false
      },
      "koreaOda": {
        "usd": "약 59백만 USD",
        "krw": "약 885억 원",
        "year": "2019",
        "isNet": false
      }
    },
    "koica": {
      "total": "154,000,000 원",
      "sectors": [
        {
          "name": "보건",
          "percent": 29.1,
          "amount": "44,800,000 원"
        },
        {
          "name": "교육",
          "percent": 25.1,
          "amount": "38,700,000 원"
        },
        {
          "name": "농림수산",
          "percent": 22.5,
          "amount": "34,600,000 원"
        },
        {
          "name": "기술환경에너지",
          "percent": 6.7,
          "amount": "10,300,000 원"
        },
        {
          "name": "공공행정",
          "percent": 14.8,
          "amount": "22,800,000 원"
        },
        {
          "name": "긴급구호",
          "percent": 0.5,
          "amount": "752,943 원"
        },
        {
          "name": "기타",
          "percent": 1.4,
          "amount": "2,111,661 원"
        }
      ]
    },
    "infrastructure": {
      "hospitalBeds": {
        "value": "0.8",
        "unit": "병상 / 1,000명",
        "year": "2022",
        "source": "World Bank"
      },
      "physicians": {
        "value": "0.1",
        "unit": "의사 / 1,000명",
        "year": "2022",
        "source": "World Bank"
      },
      "nursesMidwives": {
        "value": "0.7",
        "unit": "간호사·조산사 / 1,000명",
        "year": "2023",
        "source": "World Bank"
      },
      "electricityAccess": {
        "value": "52.4",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableEnergyShare": {
        "value": "37.2",
        "unit": "%",
        "year": "2021",
        "source": "World Bank"
      },
      "cleanCookingAccess": {
        "value": "9.8",
        "unit": "%",
        "year": "2023",
        "source": "World Bank"
      },
      "internetPenetration": {
        "value": "31.2",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "mobileSubscriptions": {
        "value": "126.6",
        "unit": "건 / 100명",
        "year": "2024",
        "source": "World Bank"
      },
      "basicWater": {
        "value": "64.6",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "basicSanitation": {
        "value": "37.2",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableWaterPerCapita": {
        "value": "1298.1",
        "unit": "m³ / 인",
        "year": "2022",
        "source": "World Bank"
      },
      "pavedRoads": {
        "value": "14.9",
        "unit": "%",
        "year": "2009",
        "source": "World Bank"
      },
      "railLines": {
        "value": "2701",
        "unit": "km",
        "year": "2017",
        "source": "World Bank"
      }
    },
    "koicaCumulative": {
      "total": "약 2,245억 3,535만 원",
      "latest": "약 235억 5,708만 원",
      "latestYear": "2023",
      "startYear": "1991"
    },
    "koicaHealthDetail": {
      "year": "2024",
      "sectors": [
        {
          "name": "기초영양",
          "percent": 60.7,
          "amount": "1,451,019,000 원"
        },
        {
          "name": "의료서비스",
          "percent": 17.2,
          "amount": "411,799,500 원"
        },
        {
          "name": "보건정책 및 행정관리",
          "percent": 8.8,
          "amount": "209,623,500 원"
        },
        {
          "name": "보건교육",
          "percent": 6.1,
          "amount": "146,640,000 원"
        },
        {
          "name": "기초보건진료",
          "percent": 4.0,
          "amount": "95,332,500 원"
        },
        {
          "name": "보건인력개발",
          "percent": 2.0,
          "amount": "47,610,000 원"
        },
        {
          "name": "의료교육 및 훈련",
          "percent": 1.2,
          "amount": "28,600,500 원"
        }
      ]
    },
    "diplomaticContact": {
      "overseas": {
        "missionName": "주 탄자니아 대한민국 대사관",
        "missionType": "대사관",
        "jointCoverage": false,
        "address": "19th floor, Golden Jubilee Towers, Ohio street, City Centre, P.O. Box 1154, Dar es Salaam, Tanzania,",
        "phone": "(255)22-211-6086",
        "consularCenter": "(82)2-3210-0404",
        "tollFree": "080-020-0219",
        "emergency": "(255)743-8282-04",
        "website": "http://overseas.mofa.go.kr/tz-ko/index.do",
        "lat": -6.813547,
        "lng": 39.289251
      },
      "domestic": {
        "ambassador": "Togolani Edriss Mavura",
        "address": "서울특별시 용산구 서빙고로 51길 52 비비안빌딩 4층",
        "phone": "02-793-7007",
        "email": "info@tanzaniaembassy.kr",
        "fax": "02-795-8990",
        "updatedAt": "2021-11-09"
      }
    },
    "marketEntry": {
      "companyCount": 4,
      "industries": [
        {
          "name": "제조업",
          "count": 2
        },
        {
          "name": "정보통신업",
          "count": 1
        },
        {
          "name": "금융 및 보험업",
          "count": 1
        }
      ],
      "startupCount": 2,
      "startupFields": [
        {
          "name": "금융&핀테크",
          "count": 1
        },
        {
          "name": "헬스케어",
          "count": 1
        }
      ],
      "companies": [
        {
          "nameKo": "보다콤 탄자니아",
          "nameEn": "Vodacom Tanzania",
          "foundedYear": "2000",
          "parentCompany": "Vodacom\r- 창립자: Alan Knoot-Craig\r- 창립연도: 1994년",
          "hq": "탄자니아 다르에스살람(Dar es salaam)",
          "industry": "정보통신업",
          "subIndustry": "3G, 4G서비스, 무선 인터넷 등",
          "corpType": "사기업",
          "employees": "6483",
          "marketCap": {
            "usd": "827,000,000 USD",
            "krw": "약 1조 2,405억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "39,000,000 USD",
            "krw": "약 585억 원",
            "year": "2020"
          },
          "website": "www.vodacom.co.tz",
          "highlights": [
            "Vodacom Tanzania는 남아공 소재 Vodacom의 자회사로 2000년에 서비스를 개시하여 일년만에 탄자니아 내 최대 이동통신 사업자가 됨",
            "Vodacom Tanzania는 아프리카에서 두번째로 큰 통신기업이며, 2016년 기준 탄자니아 내 1,240면여 명의 고객을 보유함"
          ]
        },
        {
          "nameKo": "엔엠비 은행",
          "nameEn": "NMB Bank",
          "foundedYear": "1997",
          "parentCompany": null,
          "hq": "탄자니아 다르에스살람(Dar es salaam)",
          "industry": "금융 및 보험업",
          "subIndustry": "대출, 저축, 투자, 신용카드 등",
          "corpType": "사기업(주식회사)",
          "employees": "570",
          "marketCap": {
            "usd": "508,000,000 USD",
            "krw": "약 7,620억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "65,000,000 USD",
            "krw": "약 975억 원",
            "year": "2020"
          },
          "website": "www.nmbbank.co.tz",
          "highlights": [
            "1997년 탄자니아의 소액금융은행설립법에 의해 설립되었으며, 2005년 탄자니아 정부가 엔엠비은행을 민영화하면서 상장되었으며 현재 지분은 네델란드 기반의 다국적 은행 Rabbank가 34.9%, 탄자니아 정부가 31.8%등을 보유",
            "2015년 기준 탄자니아 전역에 약 200여개에 달하는 지점 운영",
            "2020년 8월 신용평가기관 Moody's는 NMB Bank의 신용등급을 '부정적'에서 '안정적'으로 상향 조정"
          ]
        },
        {
          "nameKo": "탄자니아 담배회사",
          "nameEn": "Tanzania Cigarette co.",
          "foundedYear": "1961",
          "parentCompany": "JTI\r- 창립연도: 1999년",
          "hq": "탄자니아 다르에스살람(Dar es salaam)",
          "industry": "제조업",
          "subIndustry": "담배 제조, 유통",
          "corpType": "사기업(주식회사)",
          "employees": "3316",
          "marketCap": {
            "usd": "738,000,000 USD",
            "krw": "약 1조 1,070억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "20,000,000 USD",
            "krw": "약 300억 원",
            "year": "2020"
          },
          "website": "www.jti.com/africa/tanzania",
          "highlights": [
            "1961년에 East African Tobacco로 설립되어 1975년 국영화되었다가 이후 경영난으로 탄자니아 정부가 지분을 매각하면서 민영화됨. 현재는 JTI(Japan Tobacco International)가 75%의 지분을 가지고 있는 JTI의 자회사임",
            "탄자니아 내 유일의 담배생산기업으로 국내 시장의 90%를 점유하고 있으며 콩고민주공화국, 모잠비크, 잠비아 등으로 수출함. 대표브랜드로 Camel, Winston등이 있음"
          ]
        },
        {
          "nameKo": "탄자니아 브루어리",
          "nameEn": "Tanzania Breweries",
          "foundedYear": "1933",
          "parentCompany": "SABMiller\r- 창립자: Sharles Glass\r- 창립연도: 1895년",
          "hq": "탄자니아 다르에스살람(Dar es salaam)",
          "industry": "제조업",
          "subIndustry": "맥주, 와인, 무알콜 음료 제조",
          "corpType": "사기업(주식회사)",
          "employees": "600",
          "marketCap": {
            "usd": "1,396,000,000 USD",
            "krw": "약 2조 940억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "54,000,000 USD",
            "krw": "약 810억 원",
            "year": "2020"
          },
          "website": "www.ab-inbev.com",
          "highlights": [
            "1933년 Tanzania Breweries로 설립되었으며 이후 탕가니카(Tangganyika)와 잔자바르(Zanzibar)지역이 통합되면서 1964년 기업명을 Tanzania Breweries로 변경",
            "최대 주주는 영국의 다국적 주류기업 SABMiller Africa BV이며 57.54%의 지분을 보유함",
            "탄자니아 내 다르에스살람, 아루사(Aruha), 음완자(Mwanza), 음베야(Mbeya) 등 4개 지역에서 양조장을 운영하며 대표 제품으로는 Castle Lager, Kilimanjaro Lager등이 있음"
          ]
        }
      ],
      "startups": [
        {
          "nameKo": "날라",
          "field": "금융&핀테크",
          "foundedYear": "2017",
          "hq": "탄자니아 다르에스살람",
          "employees": "1~10명",
          "funding": {
            "usd": "220,000 USD",
            "krw": "약 3억 3,000만 원",
            "year": null
          },
          "topInvestor": "Y Combinator, Digital Financial Service (DFS) Lab",
          "fundingStage": "Seed",
          "website": "http://iwantnala.com/"
        },
        {
          "nameKo": "자미아프리카",
          "field": "헬스케어",
          "foundedYear": "2012",
          "hq": "탄자니아 다르에스살람",
          "employees": "1~10명",
          "funding": {
            "usd": "2,800,000 USD",
            "krw": "약 42억 원",
            "year": null
          },
          "topInvestor": "NewWave Technologies",
          "fundingStage": "Seed",
          "website": "http://www.jamiiafrica.com/"
        }
      ]
    }
  },
  "토고": {
    "id": "토고",
    "name": "토고",
    "nameEn": "Togo",
    "population": "8,800,000명 (2020년 기준)",
    "language": "프랑스어(공용어), 에웨어, 카비예어",
    "capital": "로메(Lome)",
    "climateScore": null,
    "mainClimateIssue": null,
    "diplomacyScore": null,
    "matchScore": null,
    "recommended": null,
    "priorityPartner": false,
    "koreaOdaHistory": true,
    "economy": {
      "gdpPerCapita": {
        "usd": "918 USD",
        "krw": "약 137만 원",
        "year": "2023",
        "source": "IMF/국제통화기금"
      },
      "gdpTotal": {
        "usd": "8,100,000,000 USD",
        "krw": "약 12조 1,500억 원",
        "year": "2023",
        "source": "IMF/국제통화기금"
      },
      "odaNetReceived": {
        "usd": "약 6억 USD",
        "krw": "약 8,525억 730만 원",
        "year": "2019",
        "isNet": false
      },
      "recipientOda": {
        "usd": "약 345백만 USD",
        "krw": "약 5,175억 원",
        "year": "2019",
        "isNet": false
      },
      "bilateral": {
        "usd": "약 22백만 USD",
        "krw": "약 330억 원",
        "year": "2019",
        "isNet": false
      },
      "koreaOda": {
        "usd": "약 1백만 USD",
        "krw": "약 15억 원",
        "year": "2019",
        "isNet": false
      }
    },
    "koica": {
      "total": "5,849,185 원",
      "sectors": [
        {
          "name": "보건",
          "percent": 6.7,
          "amount": "393,622 원"
        },
        {
          "name": "교육",
          "percent": 53.6,
          "amount": "3,136,939 원"
        },
        {
          "name": "농림수산",
          "percent": 6.0,
          "amount": "353,514 원"
        },
        {
          "name": "기술환경에너지",
          "percent": 1.4,
          "amount": "82,906 원"
        },
        {
          "name": "공공행정",
          "percent": 31.3,
          "amount": "1,833,184 원"
        },
        {
          "name": "긴급구호",
          "percent": 0.8,
          "amount": "49,021 원"
        }
      ]
    },
    "infrastructure": {
      "hospitalBeds": {
        "value": "0.3",
        "unit": "병상 / 1,000명",
        "year": "2022",
        "source": "World Bank"
      },
      "physicians": {
        "value": "0.1",
        "unit": "의사 / 1,000명",
        "year": "2022",
        "source": "World Bank"
      },
      "nursesMidwives": {
        "value": "0.5",
        "unit": "간호사·조산사 / 1,000명",
        "year": "2022",
        "source": "World Bank"
      },
      "electricityAccess": {
        "value": "61.1",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableEnergyShare": {
        "value": "25.3",
        "unit": "%",
        "year": "2021",
        "source": "World Bank"
      },
      "cleanCookingAccess": {
        "value": "13.2",
        "unit": "%",
        "year": "2023",
        "source": "World Bank"
      },
      "internetPenetration": {
        "value": "39.5",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "mobileSubscriptions": {
        "value": "80.8",
        "unit": "건 / 100명",
        "year": "2024",
        "source": "World Bank"
      },
      "basicWater": {
        "value": "64.8",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "basicSanitation": {
        "value": "25.2",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableWaterPerCapita": {
        "value": "1425.3",
        "unit": "m³ / 인",
        "year": "2022",
        "source": "World Bank"
      },
      "pavedRoads": {
        "value": "21",
        "unit": "%",
        "year": "2007",
        "source": "World Bank"
      },
      "railLines": {
        "value": null,
        "unit": "km",
        "year": null,
        "source": null
      }
    },
    "koicaCumulative": {
      "total": "약 37억 5,842만 원",
      "latest": "약 6억 214만 원",
      "latestYear": "2023",
      "startYear": "1991"
    },
    "koicaHealthDetail": null,
    "diplomaticContact": {
      "overseas": {
        "missionName": "주 가나 대한민국 대사관",
        "missionType": "대사관",
        "jointCoverage": true,
        "address": "No.10, Fifth Avenue Extension, Cantonments, P.O.Box GP 13700, Accra, Ghana,",
        "phone": "(233)302-771-705",
        "consularCenter": "(82)2-3210-0404",
        "tollFree": "080-020-0219",
        "emergency": "(233)244-321-858",
        "website": "http://overseas.mofa.go.kr/gh-ko/index.do",
        "lat": 5.575495,
        "lng": -0.185161
      },
      "domestic": null
    },
    "marketEntry": {
      "companyCount": 0,
      "industries": [],
      "startupCount": 0,
      "startupFields": [],
      "companies": [],
      "startups": []
    }
  },
  "튀니지": {
    "id": "튀니지",
    "name": "튀니지",
    "nameEn": "Tunisia",
    "population": "12,200,000명 (2020년 기준)",
    "language": "아랍어(공용어), 프랑스어 통용",
    "capital": "튀니스(Tunis)",
    "climateScore": null,
    "mainClimateIssue": null,
    "diplomacyScore": null,
    "matchScore": null,
    "recommended": null,
    "priorityPartner": false,
    "koreaOdaHistory": true,
    "economy": {
      "gdpPerCapita": {
        "usd": "4,340 USD",
        "krw": "약 651만 원",
        "year": "2023",
        "source": "IMF/국제통화기금"
      },
      "gdpTotal": {
        "usd": "53,500,000,000 USD",
        "krw": "약 80조 2,500억 원",
        "year": "2023",
        "source": "IMF/국제통화기금"
      },
      "odaNetReceived": {
        "usd": "약 3억 USD",
        "krw": "약 3,938억 3,430만 원",
        "year": "2019",
        "isNet": false
      },
      "recipientOda": {
        "usd": "약 1,630백만 USD",
        "krw": "약 2조 4,450억 원",
        "year": "2019",
        "isNet": false
      },
      "bilateral": {
        "usd": "약 70백만 USD",
        "krw": "약 1,050억 원",
        "year": "2019",
        "isNet": false
      },
      "koreaOda": {
        "usd": "약 4백만 USD",
        "krw": "약 60억 원",
        "year": "2019",
        "isNet": false
      }
    },
    "koica": {
      "total": "59,700,000 원",
      "sectors": [
        {
          "name": "보건",
          "percent": 0.7,
          "amount": "407,285 원"
        },
        {
          "name": "교육",
          "percent": 17.9,
          "amount": "10,700,000 원"
        },
        {
          "name": "농림수산",
          "percent": 9.8,
          "amount": "5,858,679 원"
        },
        {
          "name": "기술환경에너지",
          "percent": 18.9,
          "amount": "11,300,000 원"
        },
        {
          "name": "공공행정",
          "percent": 45.6,
          "amount": "27,200,000 원"
        },
        {
          "name": "긴급구호",
          "percent": 0.1,
          "amount": "51,448 원"
        },
        {
          "name": "기타",
          "percent": 7.1,
          "amount": "4,261,191 원"
        }
      ]
    },
    "infrastructure": {
      "hospitalBeds": {
        "value": "1.8",
        "unit": "병상 / 1,000명",
        "year": "2023",
        "source": "World Bank"
      },
      "physicians": {
        "value": "1.3",
        "unit": "의사 / 1,000명",
        "year": "2021",
        "source": "World Bank"
      },
      "nursesMidwives": {
        "value": "2.2",
        "unit": "간호사·조산사 / 1,000명",
        "year": "2021",
        "source": "World Bank"
      },
      "electricityAccess": {
        "value": "100",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableEnergyShare": {
        "value": "2.8",
        "unit": "%",
        "year": "2021",
        "source": "World Bank"
      },
      "cleanCookingAccess": {
        "value": "99.9",
        "unit": "%",
        "year": "2023",
        "source": "World Bank"
      },
      "internetPenetration": {
        "value": "76.5",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "mobileSubscriptions": {
        "value": "117.6",
        "unit": "건 / 100명",
        "year": "2024",
        "source": "World Bank"
      },
      "basicWater": {
        "value": "96.7",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "basicSanitation": {
        "value": "98.5",
        "unit": "%",
        "year": "2024",
        "source": "World Bank"
      },
      "renewableWaterPerCapita": {
        "value": "346.1",
        "unit": "m³ / 인",
        "year": "2022",
        "source": "World Bank"
      },
      "pavedRoads": {
        "value": "76",
        "unit": "%",
        "year": "2010",
        "source": "World Bank"
      },
      "railLines": {
        "value": "1777",
        "unit": "km",
        "year": "2021",
        "source": "World Bank"
      }
    },
    "koicaCumulative": {
      "total": "약 778억 6,729만 원",
      "latest": "약 50억 1,955만 원",
      "latestYear": "2023",
      "startYear": "1991"
    },
    "koicaHealthDetail": {
      "year": "2024",
      "sectors": [
        {
          "name": "의료서비스",
          "percent": 76.9,
          "amount": "86,665,500 원"
        },
        {
          "name": "기초보건진료",
          "percent": 23.1,
          "amount": "25,999,500 원"
        }
      ]
    },
    "diplomaticContact": {
      "overseas": {
        "missionName": "주 튀니지 대한민국 대사관",
        "missionType": "대사관",
        "jointCoverage": false,
        "address": "Immeuble BLUE SQUARE, Avenue de la Bourse, les Jardins du Lac 2, 1053 Tunis, Tunisia,",
        "phone": "(216)71-198-595",
        "consularCenter": "(82)2-3210-0404",
        "tollFree": "080-020-0219",
        "emergency": "(216)99-567-040",
        "website": "http://overseas.mofa.go.kr/tn-ko/index.do",
        "lat": 36.83541,
        "lng": 10.1674
      },
      "domestic": {
        "ambassador": "Nabih EL ABED",
        "address": "서울특별시 용산구 장문로6길 8",
        "phone": "790-4334/5",
        "email": "at.seoul@diplomatie.gov.tn",
        "fax": "790-4333",
        "updatedAt": "2018-01-03"
      }
    },
    "marketEntry": {
      "companyCount": 12,
      "industries": [
        {
          "name": "금융 및 보험업",
          "count": 7
        },
        {
          "name": "제조업",
          "count": 4
        },
        {
          "name": "복합산업",
          "count": 1
        }
      ],
      "startupCount": 0,
      "startupFields": [],
      "companies": [
        {
          "nameKo": "국립농업은행",
          "nameEn": "Banque Nationale Agricole",
          "foundedYear": "1959",
          "parentCompany": null,
          "hq": "튀니지 튀니스(Tunis)",
          "industry": "금융 및 보험업",
          "subIndustry": "은행업",
          "corpType": "공기업",
          "employees": "10000",
          "marketCap": {
            "usd": "202,000,000 USD",
            "krw": "약 3,030억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "57,000,000 USD",
            "krw": "약 855억 원",
            "year": "2020"
          },
          "website": "www.bna.tn",
          "highlights": [
            "튀니지 정부를 포함한 공기관이 은행 지분의 약 64%를 소유",
            "자회사 18개사 중 9개사는 금융 관련, 9개사는 부동산, 농업 및 서비스 관련 기업"
          ]
        },
        {
          "nameKo": "델리스 홀딩",
          "nameEn": "Delice Holding",
          "foundedYear": "1978",
          "parentCompany": null,
          "hq": "튀니지 튀니스(Tunis)",
          "industry": "제조업",
          "subIndustry": "유제품, 주스 등 식음료 생산",
          "corpType": "사기업",
          "employees": "10000",
          "marketCap": {
            "usd": "205,000,000 USD",
            "krw": "약 3,075억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "11,000,000 USD",
            "krw": "약 165억 원",
            "year": "2020"
          },
          "website": "www.delice.tn",
          "highlights": [
            "Danone이나 Bongrain과 같은 유명기업과 전략적 파트너쉽을 구축하며 성장",
            "2014년 튀니스 증권거래소 상장"
          ]
        },
        {
          "nameKo": "스시에테 다티클 이제니크",
          "nameEn": "Societe d'Articles Hygieniques",
          "foundedYear": "1994",
          "parentCompany": null,
          "hq": "튀니지 튀니스(Tunis)",
          "industry": "제조업",
          "subIndustry": "기저귀, 생리대, 물티슈, 휴지 등 위생용품 제조",
          "corpType": "사기업",
          "employees": "10000",
          "marketCap": {
            "usd": "206,000,000 USD",
            "krw": "약 3,090억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "8,000,000 USD",
            "krw": "약 120억 원",
            "year": "2020"
          },
          "website": "www.lilas.com.tn",
          "highlights": [
            "자회사 SAH Algerie, SAH Libye, Azur Detergents, SAH Maroc, SAH CI, SAH Senegal의 지분 51% 이상 소유",
            "Lilas Protevt, Miss Lilas, Lilas Bebe, Lilas Papier, Azur Detergent 5개의 브랜드 보유"
          ]
        },
        {
          "nameKo": "아멘 은행",
          "nameEn": "Amen Bank",
          "foundedYear": "1966",
          "parentCompany": "Amen Group",
          "hq": "튀니지 튀니스(Tunis)",
          "industry": "금융 및 보험업",
          "subIndustry": "은행업",
          "corpType": "사기업",
          "employees": "10000",
          "marketCap": {
            "usd": "230,000,000 USD",
            "krw": "약 3,450억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "43,000,000 USD",
            "krw": "약 645억 원",
            "year": "2020"
          },
          "website": "www.amenbank.com.tn",
          "highlights": [
            "튀니지 아랍국제은행(BIAT) 이후 두 번째로 설립된 튀니지 사설은행으로 모회사 Amen Groupe이 지분의 약 61.4%를 소유",
            "전국 160개 지점 보유"
          ]
        },
        {
          "nameKo": "아티자리 은행",
          "nameEn": "Attijari Bank",
          "foundedYear": "1968",
          "parentCompany": "Attijariwafa Bank",
          "hq": "튀니지 튀니스(Tunis)",
          "industry": "금융 및 보험업",
          "subIndustry": "은행업",
          "corpType": "사기업",
          "employees": "10000",
          "marketCap": {
            "usd": "374,000,000 USD",
            "krw": "약 5,610억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "52,000,000 USD",
            "krw": "약 780억 원",
            "year": "2020"
          },
          "website": "www.attijaribank.com.tn",
          "highlights": [
            "2016년 기준 튀니지 전국 203개 지점 보유",
            "Attijari Insurance, Attijari Finances Tunisie, Attijari Gestion, Attijari Leasing, Attijari Immobiliere 등 보험, 금융 관려 자회사 소유",
            "The Banker가 뽑은 올해의 최고 은행(Best of the Year)에 4년 연속 선정"
          ]
        },
        {
          "nameKo": "원 테크 은행",
          "nameEn": "One Tech Holding",
          "foundedYear": "2010",
          "parentCompany": null,
          "hq": "튀니지 튀니스(Tunis)",
          "industry": "제조업",
          "subIndustry": "케이블, 기계류, 통신 등 전자기기 제조",
          "corpType": "사기업",
          "employees": "10000",
          "marketCap": {
            "usd": "211,000,000 USD",
            "krw": "약 3,165억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "20,000,000 USD",
            "krw": "약 300억 원",
            "year": "2020"
          },
          "website": "www.onetech-group.com",
          "highlights": [
            "케이블 및 기계류 부문에서 Stucom, Oen Tech Business Solutions, Fuba PCT, Sofia Technologies 등의 자회사를 운영하고 있음",
            "꾸준히 신제품 개발에 투자하고 있으며 2014년부터 2019년까지 기술 투자액은 약 5,100만 달러에 달함"
          ]
        },
        {
          "nameKo": "유비씨아이",
          "nameEn": "UBCI",
          "foundedYear": "1961",
          "parentCompany": "BNP Parisbas",
          "hq": "튀니지 튀니스(Tunis)",
          "industry": "금융 및 보험업",
          "subIndustry": "은행업",
          "corpType": "사기업",
          "employees": "10000",
          "marketCap": {
            "usd": "195,000,000 USD",
            "krw": "약 2,925억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "2,000,000 USD",
            "krw": "약 30억 원",
            "year": "2020"
          },
          "website": "www.ubci.tn",
          "highlights": [
            "111개 지점을 보유하고 있으며 모기업 BNP Parisbas가 대주주",
            "2002년 국제활동 관련, 2012년 전자거래 관련 ISO 9001인증을 취득하였음",
            "UBCI Finance, Union Tunisienne de Perticipation-SICAF, Global Invest SICAR, UBCI Capital Development 자회사를 통해 고객 맞춤서비스 제공"
          ]
        },
        {
          "nameKo": "튀니지 국제아랍은행",
          "nameEn": "BIAT",
          "foundedYear": "1976",
          "parentCompany": null,
          "hq": "튀니지 튀니스(Tunis)",
          "industry": "금융 및 보험업",
          "subIndustry": "은행업",
          "corpType": "사기업",
          "employees": "10000",
          "marketCap": {
            "usd": "599,000,000 USD",
            "krw": "약 8,985억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "90,000,000 USD",
            "krw": "약 1,350억 원",
            "year": "2020"
          },
          "website": "www.biat.com.tn",
          "highlights": [
            "튀니지에서 가장 큰 규모의 은행으로 전국 205개 지점 보유",
            "Assurances BIAT, BIAT Consulting, BIAT Asset Management, BIAT Capital Risque, BIAT Capital, BIAT France 등의 자회사를 보유"
          ]
        },
        {
          "nameKo": "튀니지 은행",
          "nameEn": "Banque de Tunisie",
          "foundedYear": "1884",
          "parentCompany": null,
          "hq": "튀니지 튀니스(Tunis)",
          "industry": "금융 및 보험업",
          "subIndustry": "은행업",
          "corpType": "사기업(유한회사)",
          "employees": "10000",
          "marketCap": {
            "usd": "563,000,000 USD",
            "krw": "약 8,445억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "39,000,000 USD",
            "krw": "약 585억 원",
            "year": "2020"
          },
          "website": "www.bt.com.tn",
          "highlights": [
            "1948년 이탈리아-프랑스 신용은행(Banqueitalo-francaise de credit)을 인수했으며, 1950년대 독립전쟁과 독립 이후에도 일정시간 튀니지에서 국내 지점을 보유한 유일한 은행이었음"
          ]
        },
        {
          "nameKo": "튀니지 은행사",
          "nameEn": "Societe Tunisienne de Banque",
          "foundedYear": "1957",
          "parentCompany": null,
          "hq": "튀니지 튀니스(Tunis)",
          "industry": "금융 및 보험업",
          "subIndustry": "은행업",
          "corpType": "공기업",
          "employees": "10000",
          "marketCap": {
            "usd": "207,000,000 USD",
            "krw": "약 3,105억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "23,000,000 USD",
            "krw": "약 345억 원",
            "year": "2020"
          },
          "website": "www.stb.com.tn",
          "highlights": [
            "튀니지 독립 이후에 설립된 은행으로 독립 이후 저축 및 수출을 기반으로 국가경제발전에 기여한 것으로 평가됨",
            "해외기금 및 국가기금을 관리하는 기관으로 튀니스 증권거래소 설립에 관한 법률 제정에 주도적 역할을 함"
          ]
        },
        {
          "nameKo": "튀니지 음료",
          "nameEn": "SFBT",
          "foundedYear": "1925",
          "parentCompany": "Castel Group",
          "hq": "튀니지 튀니스(Tunis)",
          "industry": "제조업",
          "subIndustry": "탄산수, 맥주, 미네랄생수 등 음료생산",
          "corpType": "사기업",
          "employees": "10000",
          "marketCap": {
            "usd": "1,197,000,000 USD",
            "krw": "약 1조 7,955억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "61,000,000 USD",
            "krw": "약 915억 원",
            "year": "2020"
          },
          "website": null,
          "highlights": [
            "1979년 프랑스 모기업 Castel Group으로부터 분리되었으며 2008년에는 튀니지기업 최초로 시장심리지수(MSI 2000)에 등록됨",
            "튀니지 맥주 시장의 85%, 탄산음료 시장의 90%, 미네랄생수 시장의 40~50%를 점유"
          ]
        },
        {
          "nameKo": "풀리나 그룹 홀딩",
          "nameEn": "Poulina Group Holding",
          "foundedYear": "1967",
          "parentCompany": null,
          "hq": "튀니지 벤아루스(Ben Arous)",
          "industry": "복합산업",
          "subIndustry": "제조업, 도소매업, 부동산업 등",
          "corpType": "사기업",
          "employees": "10000",
          "marketCap": {
            "usd": "746,000,000 USD",
            "krw": "약 1조 1,190억 원",
            "year": "2020"
          },
          "netProfit": {
            "usd": "52,000,000 USD",
            "krw": "약 780억 원",
            "year": "2020"
          },
          "website": "www.pouilnagroupholding.com",
          "highlights": [
            "가금류 사육으로 시작하여 여러 기업을 인수하며 성장하였으며, 부동산, 건설, 목재, 소비재, 포장, 철강, 가공, 무역 등 다양한 분야로 사업을 확대",
            "부동산, 공공 건설, 목재, 소비재, 포장, 철강 가공, 무역, 건축자재, 가금류 등 다양한 산업을 다룸",
            "모로코, 알제리, 리비아 등 북아프리카 국가 외에도 프랑스, 중국 등 진출"
          ]
        }
      ],
      "startups": []
    }
  }
};
