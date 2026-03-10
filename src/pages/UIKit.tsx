import Button from "../components/Button";
import Card from "../components/Card";
import Input from "../components/Input";
import Alert from "../components/Alert";

export default function UIKit() {
  return (
    <section className="mt-16 border-t border-slate-200 pt-10 dark:border-slate-700">
      <h2 className="mb-6 text-2xl font-bold sm:text-3xl">UI Kit</h2>

      <div className="space-y-10">
        <div>
          <h3 className="mb-4 text-xl font-semibold">Butonlar</h3>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="ghost">Ghost</Button>
          </div>

          <div className="mt-4 flex flex-wrap gap-4">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-semibold">Inputlar</h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Input label="Ad Soyad" id="ui-name" placeholder="Adınızı girin" />
            <Input
              label="E-posta"
              id="ui-email"
              type="email"
              placeholder="mail@example.com"
            />
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-semibold">Kartlar</h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Card title="Kart 1">
              <p className="text-slate-700 dark:text-slate-300">
                Bu bir örnek kart bileşenidir.
              </p>
            </Card>

            <Card title="Kart 2">
              <p className="text-slate-700 dark:text-slate-300">
                Tailwind CSS ile stillendirilmiştir.
              </p>
            </Card>

            <Card title="Kart 3">
              <p className="text-slate-700 dark:text-slate-300">
                Yeniden kullanılabilir yapıdadır.
              </p>
            </Card>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-semibold">Alertler</h3>
          <div className="space-y-3">
            <Alert variant="info">Bilgilendirme mesajı</Alert>
            <Alert variant="success">İşlem başarıyla tamamlandı</Alert>
            <Alert variant="warning">
              Dikkat edilmesi gereken bir durum var
            </Alert>
            <Alert variant="error">Bir hata oluştu</Alert>
          </div>
        </div>
      </div>
    </section>
  );
}