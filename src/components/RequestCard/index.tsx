import React, { useState } from 'react';
import {
    ApproveButton,
    RejectButton,
    ButtonGroup,
    CardContainer,
    Content,
    Divider,
    Dropdown,
    DropdownItem,
    HeaderWrapper,
    Image,
    Info,
    MenuButton,
    Title,
    TopContent,
    RequestInfo,
} from './styles';
import TagStatus from '../TagStatus';
import { DonationStatus } from '../../services/queries/donateAnimals/interface';
import { Address } from '../../services/queries/User/interface';

interface CardItemProps {
    title: string;
    image: string;
    status: DonationStatus;
    infoLines?: string[];
    requestName?: string;
    requestPhone?: string;
    requestLocation?: Address;
    onApprove?: () => void;
    onReject?: () => void;
    onConfirmReceipt?: () => void;
    onEdit?: () => void;
    onDelete?: () => void;
    showButtons?: boolean;
    source?: 'my-ads' | 'my-interests';
}

const RequestCard = ({
    title,
    image,
    status,
    infoLines = [],
    requestName,
    requestPhone,
    requestLocation,
    onApprove,
    onReject,
    onConfirmReceipt,
    onEdit,
    onDelete,
    showButtons = true,
    source = 'my-ads',
}: CardItemProps) => {

    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    const isFromAds = source === 'my-ads';
    const isFromInterests = source === 'my-interests';

    const shouldShowApproveReject =
        status === 'Em interesse' && isFromAds && showButtons;

    const shouldShowCancel =
        status === 'Em interesse' && isFromInterests;

    const shouldShowMessage =
        status === 'Em espera de confirmação de doação' ||
        status === 'Em espera de confirmação de recebimento';

    const getInfoMessage = () => {
        switch (status) {
            case 'Em espera de confirmação de doação':
                return 'Aguardando o tutor aprovar sua solicitação...';
            case 'Em espera de confirmação de recebimento':
                return 'Seu animal já chegou até você?';
            default:
                return '';
        }
    };

    return (
        <CardContainer>
            <HeaderWrapper>
                <Image src={image} alt={title} />
                <MenuButton onClick={handleMenuToggle}>⋮</MenuButton>
                {menuOpen && (
                    <Dropdown>
                        <DropdownItem onClick={onEdit}>Editar</DropdownItem>
                        <DropdownItem onClick={onDelete}>Excluir</DropdownItem>
                    </Dropdown>
                )}
            </HeaderWrapper>
            <Content>
                <TopContent>
                    <Title>{title}</Title>
                    <TagStatus status={status} />
                </TopContent>

                {infoLines.map((line, idx) => (
                    <Info key={idx}>{line}</Info>
                ))}

                {(shouldShowApproveReject || shouldShowCancel || shouldShowMessage || requestName) && <Divider />}

                {requestName && (
                    <RequestInfo>
                        <strong>{requestName}</strong><br />
                        {requestPhone && <>{requestPhone}<br /></>}
                        {requestLocation && <>{requestLocation.city} - {requestLocation.state}</>}
                    </RequestInfo>
                )}

                {shouldShowApproveReject && (
                    <ButtonGroup>
                        <ApproveButton onClick={onApprove}>Aprovar</ApproveButton>
                        <RejectButton onClick={onReject}>Recusar</RejectButton>
                    </ButtonGroup>
                )}

                {shouldShowCancel && (
                    <ButtonGroup>
                        <RejectButton onClick={onReject}>Cancelar</RejectButton>
                    </ButtonGroup>
                )}

                {shouldShowMessage && (
                    <div style={{ padding: '1rem', textAlign: 'center' }}>
                        <p style={{ fontWeight: 'bold', color: '#555', marginBottom: '1rem' }}>
                            {getInfoMessage()}
                        </p>
                        {status === 'Em espera de confirmação de recebimento' && isFromInterests && (
                            <ApproveButton onClick={onConfirmReceipt}>
                                Confirmar recebimento
                            </ApproveButton>
                        )}
                    </div>
                )}
            </Content>
        </CardContainer>
    );
};

export default RequestCard;
