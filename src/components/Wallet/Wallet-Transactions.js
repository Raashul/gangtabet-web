import React from 'react';
import { Container, Row, SubHeadingText, AppText, Col } from '../../globalStyle';
import { TransactionContainer } from './Wallet.elements';

function WalletTransactions() {
	return (
		<Container>
			<TransactionContainer>
				<Row>
					<Col>
						<SubHeadingText>Pending Transactions</SubHeadingText>
					</Col>

					<Col>
						<AppText fontSize="12">No pending transactions</AppText>
					</Col>
				</Row>
			</TransactionContainer>

			<TransactionContainer>
				<Row>
					<Col>
						<SubHeadingText>Completed Transactions</SubHeadingText>
					</Col>

					<Col>
						<AppText fontSize="12">No completed transactions</AppText>
					</Col>
				</Row>
			</TransactionContainer>
		</Container>
	);
}

export default WalletTransactions;
