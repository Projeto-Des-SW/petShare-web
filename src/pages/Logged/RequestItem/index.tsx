import React from 'react'
import Button from '../../../components/Button'
import { Container, DropzoneContainer, FormContainer } from './style'
import Dropzone from '../../../components/Dropzone'
import { MdArrowBackIos } from 'react-icons/md'
import Input from '../../../components/Input'
import TextArea from '../../../components/TextArea'
import { BiSolidDonateHeart } from 'react-icons/bi'
import { FormProvider, useForm } from 'react-hook-form'
import { Navigate, useNavigate, useSearchParams } from 'react-router-dom'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { DonateItemPayload, Item } from '../../../services/queries/donateItems/interface'
import { PostDonateItem } from '../../../services/queries/donateItems'
import { useMutation } from '@tanstack/react-query'
import { PostRequestItem } from '../../../services/queries/requestItems'

export const requestItemSchema = z.object({
    name: z.string().min(1, 'Nome é obrigatório'),
    brand: z.string().optional(),
    quantity: z.string().min(1, 'Quantidade é obrigatória'),
    description: z.string().optional(),
    image: z.any().optional(),
})

export type RequestItemFormData = z.infer<typeof requestItemSchema>

const RequestItem = () => {

    const [searchParams] = useSearchParams()
    const category = searchParams.get('category')
    const validCategories = [
        'food',
        'toy',
        'bed',
        'clothing',
        'hygiene',
        'carrier',
        'accessories',
        'other',
    ]

    const navigate = useNavigate()

    const methods = useForm<RequestItemFormData>({
        resolver: zodResolver(requestItemSchema)
    })


    const { setValue, handleSubmit } = methods

    if (!category || !validCategories.includes(category)) {
        return <Navigate to="/DonateType" replace />
    }

    const mutation = useMutation({
        mutationFn: (payload: DonateItemPayload) => PostRequestItem(payload),
        onSuccess: () => {
            navigate('/success?type=help')
        },
        onError: () => {
            alert('Erro ao cadastrar doação.')
        },
    })

    const onSubmit = (data: RequestItemFormData) => {

        console.log(data)
        const payload: DonateItemPayload = {
            quantity: parseFloat(data.quantity),
            item: {
                name: data.name,
                description: data.description || '',
                brand: data.brand || '',
                category: category as Item['category'],
                status: 'Disponível para adoção'
            },
            userId: 1,
            post: {
                images: data.image,
            },
        }

        console.log(payload)
        mutation.mutate(payload)
    }



    return (
        <FormProvider {...methods}>
            <Container>
                <DropzoneContainer>
                    <Dropzone name='image' />
                </DropzoneContainer>
                <FormContainer>
                    <Input name='name' label='Nome' placeholder='Nome do Item' />
                    <Input name='brand' label='Marca' placeholder='Idade do Item' />
                    <Input name='quantity' label='Quantidade' placeholder='Quantidade do Item' />
                    <TextArea name='description' label='Descrição' placeholder='Descrição do Item' />
                    <Button rounded primary icon={<BiSolidDonateHeart size={25} />} style={{ width: '100%' }} onClick={handleSubmit(onSubmit)}>Confirmar Solicitação de Ajuda</Button>
                </FormContainer>
            </Container>
        </FormProvider>
    )
}

export default RequestItem