import React from "react"

const AppStaticSubmitOfferMissingFill = () => {
  return (
    <div className="items-center gap-x-3 border p-3 rounded">
      <h3>preencha todos os campos para poder escolher sua imagem :)</h3>
      <div className="flex gap-x-3 items-center">
        <span className="text-yellow-200 text-lg">⚠</span>
        <small className="text-white">
          seu anúncio será enviado automaticamente após o envio da imagem, que
          deve ter no máximo 1MB
        </small>
      </div>
    </div>
  )
}

export default AppStaticSubmitOfferMissingFill
