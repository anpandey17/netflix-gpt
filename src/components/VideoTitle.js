import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 text-white bg-gradient-to-r from-black absolute">
      <h1 className="text-6xl font-bold absolute">{title}</h1>
      <p className="py-[5%] text-lg w-1/4 ">{overview}</p>
      <div>
        <button className="bg-white text-black p-4 px-12 text-xl rounded-lg hover:bg-opacity-80">
          ▶ Play
        </button>
        <button className="bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;

// {
  /* <div class="t">Usable</div>
/html/body/div[1]/div/div[3]/div[4]/div[2]/div[1]
<div class="ifo"><div class="name">USDT</div><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAdCAQAAADmpk8KAAABAklEQVQoz53QsUoDQRDG8f+seAmHVkIaG30Bbe0sbLTQd7CTRDAJaF5BLRRExNY2KSzF4h5CezmLFFokWAiGIK6Fq95dZvcg0+wM/NjZ/aC0BI63pGOfosP20ENO5u0LMfAwt7E/0IipxMQArL4nlwsqab5y7noPErByemX33KysEyhD8nOEkPw2fiT/2ocku1VHkn+9hqSYQhbZx+p6681MBGWP6nLt+pXxBRglTbt8wLMb1lTSjdIeS264U0g3Snt2x92X1DoTJA9mt3dHhR8VQfujkIsOMsQH/ogfOBICIGUADKQ3IQBytjjuhwAYhgxCAGbuPzeTr6rc1hr1EdPWNwzEj9RpgYn4AAAAAElFTkSuQmCC"></div>
document.querySelector("#app > div > div.flex1.overYauto.pdlr15 > div.bibibulbox > div:nth-child(2) > div.alltotal > div:nth-child(1) > div.t")

{
    "type": "ok",
    "message": {
        "id": 1117,
        "user_id": 11692,
        "bank_id": 0,
        "bank_name": "",
        "bank_branch": "",
        "bank_account": "",
        "real_name": "",
        "alipay_account": "",
        "wechat_nickname": "",
        "wechat_account": "",
        "create_time": "1970-01-01 05:30:00",
        "alipay_qr_code": "",
        "wechat_qr_code": "",
        "banks": [
            {
                "id": 1,
                "name": "\u5de5\u5546\u94f6\u884c"
            },
            {
                "id": 2,
                "name": "\u5efa\u8bbe\u94f6\u884c"
            },
            {
                "id": 3,
                "name": "\u4ea4\u901a\u94f6\u884c"
            },
            {
                "id": 4,
                "name": "\u519c\u6751\u5546\u4e1a\u94f6\u884c"
            },
            {
                "id": 5,
                "name": "\u4e2d\u56fd\u94f6\u884c"
            },
            {
                "id": 6,
                "name": "\u62db\u5546\u94f6\u884c"
            },
            {
                "id": 7,
                "name": "\u519c\u4e1a\u94f6\u884c"
            },
            {
                "id": 8,
                "name": "\u6c11\u751f\u94f6\u884c"
            },
            {
                "id": 9,
                "name": "\u90ae\u653f\u50a8\u84c4"
            },
            {
                "id": 10,
                "name": "\u534e\u590f\u94f6\u884c"
            },
            {
                "id": 11,
                "name": "\u5e7f\u53d1\u94f6\u884c"
            }
        ],
        "account_number": "8303582343"
    }
} */
// }

// {
//   "type": "ok",
//   "message": {
//       "legal_wallet": {
//           "balance": [
//               {
//                   "id": 32150,
//                   "currency": 3,
//                   "legal_balance": "0.00000000",
//                   "lock_legal_balance": "0.00000000",
//                   "currency_name": "USDT",
//                   "currency_type": "usdt",
//                   "is_legal": 1,
//                   "is_lever": 1,
//                   "is_match": 1,
//                   "is_micro": 1,
//                   "cny_price": 6.5,
//                   "pb_price": 1,
//                   "usdt_price": "1.00000000"
//               }
//           ],
//           "totle": 0,
//           "usdt_totle": 0,
//           "CNY": ""
//       },
//       "change_wallet": {
//           "balance": [
//               {
//                   "id": 32165,
//                   "px": 689,
//                   "currency": 34,
//                   "change_balance": "0.00000000",
//                   "lock_change_balance": "0.00000000",
//                   "currency_name": "XAUT",
//                   "currency_type": "xaut",
//                   "is_legal": 0,
//                   "is_lever": 1,
//                   "is_match": 1,
//                   "is_micro": 1,
//                   "cny_price": 17060.745,
//                   "pb_price": "1.00000000",
//                   "usdt_price": "2624.73000000"
//               },
//               {
//                   "id": 32148,
//                   "px": 100,
//                   "currency": 1,
//                   "change_balance": "0.00000000",
//                   "lock_change_balance": "0.00000000",
//                   "currency_name": "BTC",
//                   "currency_type": "btc",
//                   "is_legal": 0,
//                   "is_lever": 0,
//                   "is_match": 1,
//                   "is_micro": 0,
//                   "cny_price": 277401.865,
//                   "pb_price": "42677.21000",
//                   "usdt_price": "96843.50000000"
//               },
//               {
//                   "id": 32149,
//                   "px": 90,
//                   "currency": 2,
//                   "change_balance": "0.00000000",
//                   "lock_change_balance": "0.00000000",
//                   "currency_name": "ETH",
//                   "currency_type": "eth",
//                   "is_legal": 0,
//                   "is_lever": 0,
//                   "is_match": 1,
//                   "is_micro": 0,
//                   "cny_price": 18975.45,
//                   "pb_price": "2919.30000",
//                   "usdt_price": "3219.93000000"
//               },
//               {
//                   "id": 32163,
//                   "px": 81,
//                   "currency": 32,
//                   "change_balance": "0.00000000",
//                   "lock_change_balance": "0.00000000",
//                   "currency_name": "TRX",
//                   "currency_type": "trx",
//                   "is_legal": 0,
//                   "is_lever": 0,
//                   "is_match": 1,
//                   "is_micro": 0,
//                   "cny_price": 1.4649115,
//                   "pb_price": "1.00000000",
//                   "usdt_price": "0.22537100"
//               },
//               {
//                   "id": 32161,
//                   "px": 70,
//                   "currency": 30,
//                   "change_balance": "0.00000000",
//                   "lock_change_balance": "0.00000000",
//                   "currency_name": "PANDA",
//                   "currency_type": "USDT",
//                   "is_legal": 0,
//                   "is_lever": 0,
//                   "is_match": 1,
//                   "is_micro": 0,
//                   "cny_price": 2.502084,
//                   "pb_price": "1.00000000",
//                   "usdt_price": "0.38493600"
//               },
//               {
//                   "id": 32164,
//                   "px": 68,
//                   "currency": 33,
//                   "change_balance": "0.00000000",
//                   "lock_change_balance": "0.00000000",
//                   "currency_name": "DOGE",
//                   "currency_type": "doge",
//                   "is_legal": 0,
//                   "is_lever": 0,
//                   "is_match": 1,
//                   "is_micro": 0,
//                   "cny_price": 2.2953775,
//                   "pb_price": "1.00000000",
//                   "usdt_price": "0.35313500"
//               },
//               {
//                   "id": 32152,
//                   "px": 67,
//                   "currency": 6,
//                   "change_balance": "0.00000000",
//                   "lock_change_balance": "0.00000000",
//                   "currency_name": "LTC",
//                   "currency_type": "usdt",
//                   "is_legal": 0,
//                   "is_lever": 0,
//                   "is_match": 1,
//                   "is_micro": 0,
//                   "cny_price": 981.6300000000001,
//                   "pb_price": "151.02000",
//                   "usdt_price": "100.76000000"
//               },
//               {
//                   "id": 32151,
//                   "px": 66,
//                   "currency": 5,
//                   "change_balance": "0.00000000",
//                   "lock_change_balance": "0.00000000",
//                   "currency_name": "XRP",
//                   "currency_type": "xrp",
//                   "is_legal": 0,
//                   "is_lever": 0,
//                   "is_match": 1,
//                   "is_micro": 0,
//                   "cny_price": 16.80328,
//                   "pb_price": "1.00000000",
//                   "usdt_price": "2.58512000"
//               },
//               {
//                   "id": 32162,
//                   "px": 65,
//                   "currency": 31,
//                   "change_balance": "0.00000000",
//                   "lock_change_balance": "0.00000000",
//                   "currency_name": "XMR",
//                   "currency_type": "xmr",
//                   "is_legal": 0,
//                   "is_lever": 0,
//                   "is_match": 1,
//                   "is_micro": 0,
//                   "cny_price": 1350.375,
//                   "pb_price": "1.00000000",
//                   "usdt_price": "207.75000000"
//               },
//               {
//                   "id": 32155,
//                   "px": 64,
//                   "currency": 11,
//                   "change_balance": "0.00000000",
//                   "lock_change_balance": "0.00000000",
//                   "currency_name": "ETC",
//                   "currency_type": "erc20",
//                   "is_legal": 0,
//                   "is_lever": 0,
//                   "is_match": 1,
//                   "is_micro": 0,
//                   "cny_price": 164.30829999999997,
//                   "pb_price": "1.00000000",
//                   "usdt_price": "25.27820000"
//               },
//               {
//                   "id": 32154,
//                   "px": 63,
//                   "currency": 10,
//                   "change_balance": "0.00000000",
//                   "lock_change_balance": "0.00000000",
//                   "currency_name": "BCH",
//                   "currency_type": "erc20",
//                   "is_legal": 0,
//                   "is_lever": 0,
//                   "is_match": 1,
//                   "is_micro": 0,
//                   "cny_price": 3349.3849999999998,
//                   "pb_price": "515.29000",
//                   "usdt_price": "438.02000000"
//               },
//               {
//                   "id": 32153,
//                   "px": 62,
//                   "currency": 8,
//                   "change_balance": "0.00000000",
//                   "lock_change_balance": "0.00000000",
//                   "currency_name": "EOS",
//                   "currency_type": "erc20",
//                   "is_legal": 0,
//                   "is_lever": 0,
//                   "is_match": 1,
//                   "is_micro": 0,
//                   "cny_price": 26.02145,
//                   "pb_price": "4.00330",
//                   "usdt_price": "0.79190000"
//               },
//               {
//                   "id": 32150,
//                   "px": 1,
//                   "currency": 3,
//                   "change_balance": "0.00000000",
//                   "lock_change_balance": "0.00000000",
//                   "currency_name": "USDT",
//                   "currency_type": "usdt",
//                   "is_legal": 1,
//                   "is_lever": 1,
//                   "is_match": 1,
//                   "is_micro": 1,
//                   "cny_price": 6.5,
//                   "pb_price": 1,
//                   "usdt_price": "1.00000000"
//               },
//               {
//                   "id": 32156,
//                   "px": 1,
//                   "currency": 12,
//                   "change_balance": "0.00000000",
//                   "lock_change_balance": "0.00000000",
//                   "currency_name": "BNB",
//                   "currency_type": "bnb",
//                   "is_legal": 0,
//                   "is_lever": 0,
//                   "is_match": 1,
//                   "is_micro": 0,
//                   "cny_price": 4529.59,
//                   "pb_price": "1.00000000",
//                   "usdt_price": "696.86000000"
//               },
//               {
//                   "id": 32157,
//                   "px": 1,
//                   "currency": 13,
//                   "change_balance": "0.00000000",
//                   "lock_change_balance": "0.00000000",
//                   "currency_name": "IOTA",
//                   "currency_type": "btc",
//                   "is_legal": 0,
//                   "is_lever": 0,
//                   "is_match": 1,
//                   "is_micro": 0,
//                   "cny_price": 2.2685,
//                   "pb_price": "1.00000000",
//                   "usdt_price": "0.34900000"
//               },
//               {
//                   "id": 32158,
//                   "px": 1,
//                   "currency": 15,
//                   "change_balance": "0.00000000",
//                   "lock_change_balance": "0.00000000",
//                   "currency_name": "DOT",
//                   "currency_type": "usdt",
//                   "is_legal": 0,
//                   "is_lever": 0,
//                   "is_match": 1,
//                   "is_micro": 0,
//                   "cny_price": 42.55095,
//                   "pb_price": "1.00000000",
//                   "usdt_price": "6.54630000"
//               },
//               {
//                   "id": 32159,
//                   "px": 1,
//                   "currency": 16,
//                   "change_balance": "0.00000000",
//                   "lock_change_balance": "0.00000000",
//                   "currency_name": "DASH",
//                   "currency_type": "usdt",
//                   "is_legal": 0,
//                   "is_lever": 0,
//                   "is_match": 1,
//                   "is_micro": 0,
//                   "cny_price": 241.27999999999997,
//                   "pb_price": "1.00000000",
//                   "usdt_price": "37.12000000"
//               },
//               {
//                   "id": 32160,
//                   "px": 1,
//                   "currency": 17,
//                   "change_balance": "0.00000000",
//                   "lock_change_balance": "0.00000000",
//                   "currency_name": "HT",
//                   "currency_type": "usdt",
//                   "is_legal": 0,
//                   "is_lever": 0,
//                   "is_match": 1,
//                   "is_micro": 0,
//                   "cny_price": 34.00995,
//                   "pb_price": "1.00000000",
//                   "usdt_price": "5.23230000"
//               }
//           ],
//           "totle": 0,
//           "usdt_totle": 0,
//           "CNY": ""
//       },
//       "micro_wallet": {
//           "CNY": "",
//           "totle": 0,
//           "usdt_totle": 239777,
//           "balance": [
//               {
//                   "id": 32165,
//                   "currency": 34,
//                   "micro_balance": "0.00000000",
//                   "lock_micro_balance": "0.00000000",
//                   "currency_name": "XAUT",
//                   "currency_type": "xaut",
//                   "is_legal": 0,
//                   "is_lever": 1,
//                   "is_match": 1,
//                   "is_micro": 1,
//                   "cny_price": 17060.745,
//                   "pb_price": "1.00000000",
//                   "usdt_price": "2624.73000000"
//               },
//               {
//                   "id": 32150,
//                   "currency": 3,
//                   "micro_balance": "0.00000000",
//                   "lock_micro_balance": "239777.00000000",
//                   "currency_name": "USDT",
//                   "currency_type": "usdt",
//                   "is_legal": 1,
//                   "is_lever": 1,
//                   "is_match": 1,
//                   "is_micro": 1,
//                   "cny_price": 6.5,
//                   "pb_price": 1,
//                   "usdt_price": "1.00000000"
//               }
//           ]
//       },
//       "lever_wallet": {
//           "balance": [
//               {
//                   "id": 32165,
//                   "currency": 34,
//                   "lever_balance": "0.00000000",
//                   "lock_lever_balance": "0.00000000",
//                   "currency_name": "XAUT",
//                   "currency_type": "xaut",
//                   "is_legal": 0,
//                   "is_lever": 1,
//                   "is_match": 1,
//                   "is_micro": 1,
//                   "cny_price": 17060.745,
//                   "pb_price": "1.00000000",
//                   "usdt_price": "2624.73000000"
//               },
//               {
//                   "id": 32150,
//                   "currency": 3,
//                   "lever_balance": "0.00000000",
//                   "lock_lever_balance": "0.00000000",
//                   "currency_name": "USDT",
//                   "currency_type": "usdt",
//                   "is_legal": 1,
//                   "is_lever": 1,
//                   "is_match": 1,
//                   "is_micro": 1,
//                   "cny_price": 6.5,
//                   "pb_price": 1,
//                   "usdt_price": "1.00000000"
//               }
//           ],
//           "totle": 0,
//           "usdt_totle": 0,
//           "CNY": ""
//       },
//       "ExRate": "6.5",
//       "is_open_CTbi": "1"
//   }
// }

// {
//   "type": "ok",
//   "message": {
//       "legal_wallet": {
//           "balance": [
//               {
//                   "id": 32150,
//                   "currency": 3,
//                   "legal_balance": "0.00000000",
//                   "lock_legal_balance": "0.00000000",
//                   "currency_name": "USDT",
//                   "currency_type": "usdt",
//                   "is_legal": 1,
//                   "is_lever": 1,
//                   "is_match": 1,
//                   "is_micro": 1,
//                   "cny_price": 6.5,
//                   "pb_price": 1,
//                   "usdt_price": "1.00000000"
//               }
//           ],
//           "totle": 0,
//           "usdt_totle": 0,
//           "CNY": ""
//       },
//       "change_wallet": {
//           "balance": [
//               {
//                   "id": 32165,
//                   "px": 689,
//                   "currency": 34,
//                   "change_balance": "0.00000000",
//                   "lock_change_balance": "0.00000000",
//                   "currency_name": "XAUT",
//                   "currency_type": "xaut",
//                   "is_legal": 0,
//                   "is_lever": 1,
//                   "is_match": 1,
//                   "is_micro": 1,
//                   "cny_price": 17060.745,
//                   "pb_price": "1.00000000",
//                   "usdt_price": "2624.73000000"
//               },
//               {
//                   "id": 32148,
//                   "px": 100,
//                   "currency": 1,
//                   "change_balance": "0.00000000",
//                   "lock_change_balance": "0.00000000",
//                   "currency_name": "BTC",
//                   "currency_type": "btc",
//                   "is_legal": 0,
//                   "is_lever": 0,
//                   "is_match": 1,
//                   "is_micro": 0,
//                   "cny_price": 277401.865,
//                   "pb_price": "42677.21000",
//                   "usdt_price": "96796.01000000"
//               },
//               {
//                   "id": 32149,
//                   "px": 90,
//                   "currency": 2,
//                   "change_balance": "0.00000000",
//                   "lock_change_balance": "0.00000000",
//                   "currency_name": "ETH",
//                   "currency_type": "eth",
//                   "is_legal": 0,
//                   "is_lever": 0,
//                   "is_match": 1,
//                   "is_micro": 0,
//                   "cny_price": 18975.45,
//                   "pb_price": "2919.30000",
//                   "usdt_price": "3216.95000000"
//               },
//               {
//                   "id": 32163,
//                   "px": 81,
//                   "currency": 32,
//                   "change_balance": "0.00000000",
//                   "lock_change_balance": "0.00000000",
//                   "currency_name": "TRX",
//                   "currency_type": "trx",
//                   "is_legal": 0,
//                   "is_lever": 0,
//                   "is_match": 1,
//                   "is_micro": 0,
//                   "cny_price": 1.464515,
//                   "pb_price": "1.00000000",
//                   "usdt_price": "0.22531000"
//               },
//               {
//                   "id": 32161,
//                   "px": 70,
//                   "currency": 30,
//                   "change_balance": "0.00000000",
//                   "lock_change_balance": "0.00000000",
//                   "currency_name": "PANDA",
//                   "currency_type": "USDT",
//                   "is_legal": 0,
//                   "is_lever": 0,
//                   "is_match": 1,
//                   "is_micro": 0,
//                   "cny_price": 2.502084,
//                   "pb_price": "1.00000000",
//                   "usdt_price": "0.38493600"
//               },
//               {
//                   "id": 32164,
//                   "px": 68,
//                   "currency": 33,
//                   "change_balance": "0.00000000",
//                   "lock_change_balance": "0.00000000",
//                   "currency_name": "DOGE",
//                   "currency_type": "doge",
//                   "is_legal": 0,
//                   "is_lever": 0,
//                   "is_match": 1,
//                   "is_micro": 0,
//                   "cny_price": 2.295059,
//                   "pb_price": "1.00000000",
//                   "usdt_price": "0.35308600"
//               },
//               {
//                   "id": 32152,
//                   "px": 67,
//                   "currency": 6,
//                   "change_balance": "0.00000000",
//                   "lock_change_balance": "0.00000000",
//                   "currency_name": "LTC",
//                   "currency_type": "usdt",
//                   "is_legal": 0,
//                   "is_lever": 0,
//                   "is_match": 1,
//                   "is_micro": 0,
//                   "cny_price": 981.6300000000001,
//                   "pb_price": "151.02000",
//                   "usdt_price": "100.68000000"
//               },
//               {
//                   "id": 32151,
//                   "px": 66,
//                   "currency": 5,
//                   "change_balance": "0.00000000",
//                   "lock_change_balance": "0.00000000",
//                   "currency_name": "XRP",
//                   "currency_type": "xrp",
//                   "is_legal": 0,
//                   "is_lever": 0,
//                   "is_match": 1,
//                   "is_micro": 0,
//                   "cny_price": 16.80328,
//                   "pb_price": "1.00000000",
//                   "usdt_price": "2.58512000"
//               },
//               {
//                   "id": 32162,
//                   "px": 65,
//                   "currency": 31,
//                   "change_balance": "0.00000000",
//                   "lock_change_balance": "0.00000000",
//                   "currency_name": "XMR",
//                   "currency_type": "xmr",
//                   "is_legal": 0,
//                   "is_lever": 0,
//                   "is_match": 1,
//                   "is_micro": 0,
//                   "cny_price": 1350.375,
//                   "pb_price": "1.00000000",
//                   "usdt_price": "207.75000000"
//               },
//               {
//                   "id": 32155,
//                   "px": 64,
//                   "currency": 11,
//                   "change_balance": "0.00000000",
//                   "lock_change_balance": "0.00000000",
//                   "currency_name": "ETC",
//                   "currency_type": "erc20",
//                   "is_legal": 0,
//                   "is_lever": 0,
//                   "is_match": 1,
//                   "is_micro": 0,
//                   "cny_price": 164.25565,
//                   "pb_price": "1.00000000",
//                   "usdt_price": "25.27010000"
//               },
//               {
//                   "id": 32154,
//                   "px": 63,
//                   "currency": 10,
//                   "change_balance": "0.00000000",
//                   "lock_change_balance": "0.00000000",
//                   "currency_name": "BCH",
//                   "currency_type": "erc20",
//                   "is_legal": 0,
//                   "is_lever": 0,
//                   "is_match": 1,
//                   "is_micro": 0,
//                   "cny_price": 3349.3849999999998,
//                   "pb_price": "515.29000",
//                   "usdt_price": "437.83000000"
//               },
//               {
//                   "id": 32153,
//                   "px": 62,
//                   "currency": 8,
//                   "change_balance": "0.00000000",
//                   "lock_change_balance": "0.00000000",
//                   "currency_name": "EOS",
//                   "currency_type": "erc20",
//                   "is_legal": 0,
//                   "is_lever": 0,
//                   "is_match": 1,
//                   "is_micro": 0,
//                   "cny_price": 26.02145,
//                   "pb_price": "4.00330",
//                   "usdt_price": "0.79160000"
//               },
//               {
//                   "id": 32150,
//                   "px": 1,
//                   "currency": 3,
//                   "change_balance": "0.00000000",
//                   "lock_change_balance": "0.00000000",
//                   "currency_name": "USDT",
//                   "currency_type": "usdt",
//                   "is_legal": 1,
//                   "is_lever": 1,
//                   "is_match": 1,
//                   "is_micro": 1,
//                   "cny_price": 6.5,
//                   "pb_price": 1,
//                   "usdt_price": "1.00000000"
//               },
//               {
//                   "id": 32156,
//                   "px": 1,
//                   "currency": 12,
//                   "change_balance": "0.00000000",
//                   "lock_change_balance": "0.00000000",
//                   "currency_name": "BNB",
//                   "currency_type": "bnb",
//                   "is_legal": 0,
//                   "is_lever": 0,
//                   "is_match": 1,
//                   "is_micro": 0,
//                   "cny_price": 4529.59,
//                   "pb_price": "1.00000000",
//                   "usdt_price": "696.86000000"
//               },
//               {
//                   "id": 32157,
//                   "px": 1,
//                   "currency": 13,
//                   "change_balance": "0.00000000",
//                   "lock_change_balance": "0.00000000",
//                   "currency_name": "IOTA",
//                   "currency_type": "btc",
//                   "is_legal": 0,
//                   "is_lever": 0,
//                   "is_match": 1,
//                   "is_micro": 0,
//                   "cny_price": 2.26655,
//                   "pb_price": "1.00000000",
//                   "usdt_price": "0.34870000"
//               },
//               {
//                   "id": 32158,
//                   "px": 1,
//                   "currency": 15,
//                   "change_balance": "0.00000000",
//                   "lock_change_balance": "0.00000000",
//                   "currency_name": "DOT",
//                   "currency_type": "usdt",
//                   "is_legal": 0,
//                   "is_lever": 0,
//                   "is_match": 1,
//                   "is_micro": 0,
//                   "cny_price": 42.52495,
//                   "pb_price": "1.00000000",
//                   "usdt_price": "6.54230000"
//               },
//               {
//                   "id": 32159,
//                   "px": 1,
//                   "currency": 16,
//                   "change_balance": "0.00000000",
//                   "lock_change_balance": "0.00000000",
//                   "currency_name": "DASH",
//                   "currency_type": "usdt",
//                   "is_legal": 0,
//                   "is_lever": 0,
//                   "is_match": 1,
//                   "is_micro": 0,
//                   "cny_price": 241.27999999999997,
//                   "pb_price": "1.00000000",
//                   "usdt_price": "37.12000000"
//               },
//               {
//                   "id": 32160,
//                   "px": 1,
//                   "currency": 17,
//                   "change_balance": "0.00000000",
//                   "lock_change_balance": "0.00000000",
//                   "currency_name": "HT",
//                   "currency_type": "usdt",
//                   "is_legal": 0,
//                   "is_lever": 0,
//                   "is_match": 1,
//                   "is_micro": 0,
//                   "cny_price": 34.00995,
//                   "pb_price": "1.00000000",
//                   "usdt_price": "5.23230000"
//               }
//           ],
//           "totle": 0,
//           "usdt_totle": 0,
//           "CNY": ""
//       },
//       "micro_wallet": {
//           "CNY": "",
//           "totle": 0,
//           "usdt_totle": 239777,
//           "balance": [
//               {
//                   "id": 32165,
//                   "currency": 34,
//                   "micro_balance": "0.00000000",
//                   "lock_micro_balance": "0.00000000",
//                   "currency_name": "XAUT",
//                   "currency_type": "xaut",
//                   "is_legal": 0,
//                   "is_lever": 1,
//                   "is_match": 1,
//                   "is_micro": 1,
//                   "cny_price": 17060.745,
//                   "pb_price": "1.00000000",
//                   "usdt_price": "2624.73000000"
//               },
//               {
//                   "id": 32150,
//                   "currency": 3,
//                   "micro_balance": "0.00000000",
//                   "lock_micro_balance": "239777.00000000",
//                   "currency_name": "USDT",
//                   "currency_type": "usdt",
//                   "is_legal": 1,
//                   "is_lever": 1,
//                   "is_match": 1,
//                   "is_micro": 1,
//                   "cny_price": 6.5,
//                   "pb_price": 1,
//                   "usdt_price": "1.00000000"
//               }
//           ]
//       },
//       "lever_wallet": {
//           "balance": [
//               {
//                   "id": 32165,
//                   "currency": 34,
//                   "lever_balance": "0.00000000",
//                   "lock_lever_balance": "0.00000000",
//                   "currency_name": "XAUT",
//                   "currency_type": "xaut",
//                   "is_legal": 0,
//                   "is_lever": 1,
//                   "is_match": 1,
//                   "is_micro": 1,
//                   "cny_price": 17060.745,
//                   "pb_price": "1.00000000",
//                   "usdt_price": "2624.73000000"
//               },
//               {
//                   "id": 32150,
//                   "currency": 3,
//                   "lever_balance": "0.00000000",
//                   "lock_lever_balance": "0.00000000",
//                   "currency_name": "USDT",
//                   "currency_type": "usdt",
//                   "is_legal": 1,
//                   "is_lever": 1,
//                   "is_match": 1,
//                   "is_micro": 1,
//                   "cny_price": 6.5,
//                   "pb_price": 1,
//                   "usdt_price": "1.00000000"
//               }
//           ],
//           "totle": 0,
//           "usdt_totle": 0,
//           "CNY": ""
//       },
//       "ExRate": "6.5",
//       "is_open_CTbi": "1"
//   }
// }
