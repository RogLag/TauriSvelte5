<script lang="ts">
    import Button from "$lib/shadcn/components/ui/button/button.svelte";
    import {
        isPermissionGranted,
        requestPermission,
        sendNotification,
    } from "@tauri-apps/plugin-notification";
    import { moveWindow, Position } from "@tauri-apps/plugin-positioner";

    async function sendNotificationExample() {
        // Do you have permission to send a notification?
        let permissionGranted = await isPermissionGranted();

        // If not we need to request it
        if (!permissionGranted) {
            const permission = await requestPermission();
            permissionGranted = permission === "granted";
        }

        // Once permission has been granted we can send the notification
        if (permissionGranted) {
            sendNotification({ title: "Tauri", body: "Tauri is awesome!" });
        }
    }

    async function moveWindowExample() {
        await moveWindow(Position.TopRight);
    }
</script>

<div
    class="bg-white/100 backdrop-blur-xl rounded-2xl shadow-xl p-10 flex flex-col items-center max-w-md w-full gap-6"
>
    <h1 class="text-2xl font-bold">Page de test de l'api de Tauri</h1>
    <div class="flex flex-col gap-2 w-full">
        <h1 class="text-xl font-semibold">Notifications</h1>
        <p>Testez l'API de notification de Tauri</p>
        <Button
            variant="default"
            class="flex-1"
            onclick={() => sendNotificationExample()}
            >Envoyer une notification</Button
        >
    </div>
    <div class="flex flex-col gap-2 w-full">
        <h1 class="text-xl font-semibold">Positionnement de la fenêtre</h1>
        <p>Déplacez la fenêtre dans le coin supérieur droit</p>
        <Button
            variant="default"
            class="flex-1"
            onclick={() => moveWindowExample()}>Déplacer la fenêtre</Button
        >
    </div>
</div>
