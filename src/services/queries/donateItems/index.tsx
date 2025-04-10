import api from "../../axios"
import { ItemDonation, DonateItemPayload } from "./interface"

export async function PostDonateItem(payload: DonateItemPayload) {
    const { data } = await api.post('/donateitems', payload)
    return data
}

export async function GetDonateItems() {
    const { data } = await api.get<ItemDonation[]>('/donateitems/available')
    return data
}

export async function GetDonateItemById(id: number) {
    const { data } = await api.get<ItemDonation>(`/donateitems/${id}`)
    return data
}

export async function GetDonateItemByDonorId(id: number) {
    const { data } = await api.get<ItemDonation[]>(`/donateitems/donor/${id}`)
    return data
}
