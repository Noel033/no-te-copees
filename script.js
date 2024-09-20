function calculateReward() {
  const missions = parseInt(document.getElementById("missions").value) || 0;
  const enemies = parseInt(document.getElementById("enemies").value) || 0;
  const rewardType = document.getElementById("rewardType").value;

  const rewardRates = {
    gold: { mission: 100, enemy: 10 },
    gems: { mission: 5, enemy: 1 },
    xp: { mission: 500, enemy: 100 },
  };

  const totalReward =
    missions * rewardRates[rewardType].mission +
    enemies * rewardRates[rewardType].enemy;

  document.getElementById("result").innerHTML = `
        <h2>Resultado</h2>
        <p>
          Total de ${
            rewardType === "gold"
              ? "monedas de oro"
              : rewardType === "gems"
              ? "gemas"
              : "puntos de experiencia"
          }: ${totalReward}
        </p>
      `;
}
