/* eslint-disable camelcase */
export interface TradeInterface{
    id: number;
    portfolio_id: number;
    currency: string;
    direction: string;

    entry_price: number;
    stop_loss?: number;
    take_profit?: number;
    exit_price?: number;

    positions: number;
    amount: number;
    fees?: number;

    profit_and_loss_price?: number;
    profit_and_loss_percentage?: number;
    notes?: string;
    status: string;

    entry_date: Date;
    exit_date?: Date;
}
