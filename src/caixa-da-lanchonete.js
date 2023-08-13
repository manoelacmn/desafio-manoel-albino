class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {

        if(itens==0) return "Não há itens no carrinho de compra!"

        let totalValue = 0;
        let multiplier;
        let tempValue;
        let mainSandwich = false
        let mainCoffee = false
        if (metodoDePagamento==null)
        {
            return "Forma de pagamento inválida!"
        }else{
            switch (metodoDePagamento) {
                case "credito":
                    multiplier = 1.03;
                    break;
                case "dinheiro":
                     multiplier = 0.95;
                     break;
                case "debito":
                    multiplier = 1;
                    break;
                default:
                    return "Forma de pagamento inválida!"
            }
        }

        for (let i = 0;i< itens.length;i++)
        {

            let parts = itens[i].split(",")
            let item = parts[0]
            let amount = parts[1]


                    console.log(itens[i])
                    switch (item) {
                        case "cafe":
                            tempValue = 3.00;
                            mainCoffee = true
                            break;
                        case "chantily":
                            if(mainCoffee===false) return "Item extra não pode ser pedido sem o principal";
                            tempValue = 1.50;
                            break;
                        case "suco":
                            tempValue = 6.20;
                            break;
                        case "sanduiche":
                            mainSandwich = true
                            tempValue = 6.50;
                            break;
                        case "queijo":
                            if(mainSandwich===false) return "Item extra não pode ser pedido sem o principal";
                            tempValue = 2.00;
                            break;
                        case "salgado":
                            tempValue = 7.25;
                            break;
                        case "combo1":
                            tempValue = 9.25;
                            break;
                        case "combo2":
                            tempValue = 7.50;
                            break;
                        default:
                            return "Item inválido!"
                    }
                    if (amount <= 0) return 'Quantidade inválida!';
                    totalValue+=(tempValue*amount);
                    tempValue = 0;
        }
        totalValue = (totalValue*multiplier).toFixed(2)
        totalValue = Number(totalValue).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL' });
        return totalValue;
    }

}

export { CaixaDaLanchonete };
