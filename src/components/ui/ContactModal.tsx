import React from "react";
import { useTranslation } from "react-i18next";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";
import { Button } from "./button";
import { Input } from "./input";
import { Textarea } from "./textarea";

interface ContactModalProps {
  trigger?: React.ReactNode;
}

export function ContactModal({ trigger }: ContactModalProps) {
  const { t } = useTranslation();

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger || <Button>Contáctanos</Button>}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] bg-white text-black p-8 rounded-[20px]">
        <DialogHeader className="mb-6">
          <DialogTitle className="text-3xl font-augenblick font-normal">{t('form_contact.title')}</DialogTitle>
          <DialogDescription className="text-gray-500 text-lg">
            {t('form_contact.description')}
          </DialogDescription>
        </DialogHeader>
        <form className="flex flex-col gap-5">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium ml-1">{t('form_contact.inputs.name')}</label>
            <Input id="name" placeholder="Ej. Juan Pérez" className="h-12 rounded-xl bg-gray-50 border-gray-200" />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium ml-1">{t('form_contact.inputs.email')}</label>
            <Input id="email" type="email" placeholder="nombre@empresa.com" className="h-12 rounded-xl bg-gray-50 border-gray-200" />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium ml-1">{t('form_contact.inputs.mensage')}</label>
            <Textarea id="message" placeholder="¿En qué podemos ayudarte?" rows={4} className="resize-none rounded-xl bg-gray-50 border-gray-200" />
          </div>
          <Button type="submit" className="w-full bg-black hover:bg-black/80 text-white font-bold h-14 rounded-xl text-lg mt-2">
            {t('form_contact.sending')}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
