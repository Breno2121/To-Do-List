import { contextBridge } from "electron";
import Veiculo from "./enty/veiculo";
import { ipcRenderer } from "electron/renderer";

contextBridge.exposeInMainWorld('bancoAPI', {
    createVeiculo: async (veiculo: Veiculo) => await ipcRenderer.invoke('create', veiculo)
})

