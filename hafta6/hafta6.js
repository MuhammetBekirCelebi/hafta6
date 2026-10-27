    let sifre = prompt("Lütfen şifreyi girin:");

       
        if (sifre !== "1234") {
            alert("Hatalı şifre! Erişim engellendi.");
            
            document.body.innerHTML = "<h2 style= 'color: red; text-align: center';>Erişim Engellendi! Sayfa Görüntülenemez.</h2>";
            
            throw new Error("Erişim Engellendi");
        }

        
        let num1 = 2;
        let num2 = 1;
        let txt2 = "Merhaba";
        let txt1 = "Ahmet";
        let sayi = "Nasılsın ?";

        
        function Uyarı() {
            alert("Bu bir uyarıdır.");
        }
    