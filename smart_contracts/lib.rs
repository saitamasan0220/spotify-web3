use anchor_lang::prelude::*;
use anchor_lang::solana_program::entrypoint::ProgramResult;
use anchor_spl::token::{self, Token};
use std::mem::size_of;

// This is your program's public key and it will update
// automatically when you build the project.
declare_id!("Fd2W9GUSBYF9n38va7aisKH8Ht4Gparh5UDDd1GPXZUe");

#[program]
mod spotify_clone {
    use super::*;
    pub fn accept_payment(ctx: Context<PayerContext>) -> ProgramResult {
        let payer_wallet = &mut ctx.accounts.payer_wallet;
        payer_wallet.wallet = ctx.accounts.authority.key();

        let ix = anchor_lang::solana_program::system_instruction::transfer(
            &ctx.accounts.authority.key(),
            &ctx.accounts.receiver.key(),
            100000000,
        );

        anchor_lang::solana_program::program::invoke(
            &ix,
            &[
                ctx.accounts.authority.to_account_info(),
                ctx.accounts.receiver.to_account_info(),
            ]
        )
    }
}

#[derive(Accounts)]
pub struct PayerContext<'info> {
    #[account(
        init,
        seeds = [b"payer".as_ref(), authority.key().as_ref()],
        bump,
        payer = authority,
        space = size_of::<PayerAccount>() + 8
    )]
    pub payer_wallet: Account<'info, PayerAccount>,
    
    #[account(mut)]
    pub receiver: AccountInfo<'info>,
    #[account(mut)]
    pub authority: Signer<'info>,
    pub system_program: UncheckedAccount<'info>,

    // Token Program
    #[account(constraint = token_program.key == &token::ID)]
    pub token_program: Program<'info, Token>,

    // Clock to save time
    pub clock: Sysvar<'info, Clock>,
}

#[account]
pub struct PayerAccount {
    pub wallet: Pubkey,
}