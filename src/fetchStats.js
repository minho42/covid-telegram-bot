const axios = require("axios");

const fetchStats = async () => {
  const config = {
    method: "get",
    url: "https://nswdac-covid-19-postcode-heatmap.azurewebsites.net/datafiles/stats.json",
    headers: {
      Connection: "keep-alive",
      Pragma: "no-cache",
      "Cache-Control": "no-cache",
      "sec-ch-ua": '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
      Accept: "application/json",
      "X-Requested-With": "XMLHttpRequest",
      "sec-ch-ua-mobile": "?0",
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36",
      "Sec-Fetch-Site": "same-origin",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Dest": "empty",
      Referer: "https://nswdac-covid-19-postcode-heatmap.azurewebsites.net/newcases.html",
    },
  };

  const { data } = await axios(config);
  // data.data[0]
  // {
  //   "Recovered": 3099,
  //   "Test_24hrs": 55227,
  //   "Deaths": 56,
  //   "NewCases": 29,
  //   "Tested": 6678350,
  //   "Cases": 5535
  //   }
  return data.data[0];
};

module.exports = fetchStats;
