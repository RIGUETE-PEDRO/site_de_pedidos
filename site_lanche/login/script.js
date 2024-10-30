
        let generatedCode = null; // Variável para armazenar o código gerado

        // Função para abrir a modal de recuperação de senha
        document.querySelector(".forgot-password").addEventListener("click", function () {
            document.getElementById("reset-password-modal").style.display = "block";
        });

        // Função para fechar a modal
        function closeModal() {
            document.getElementById("reset-password-modal").style.display = "none";
            resetModal();
        }

        // Função para enviar o código de recuperação
        function sendResetCode() {
            const email = document.getElementById("reset-email").value;
            if (!email) {
                alert("Por favor, insira seu e-mail.");
                return;
            }

            generatedCode = Math.floor(100000 + Math.random() * 900000); // Gera um código de 6 dígitos
            alert("Código de verificação enviado: " + generatedCode); // Simula o envio do código por e-mail

            document.getElementById("step-email").style.display = "none";
            document.getElementById("step-code").style.display = "block";
        }

        // Função para verificar o código
        function verifyCode() {
            const code = document.getElementById("reset-code").value;
            if (parseInt(code) === generatedCode) {
                alert("Código verificado com sucesso!");
                document.getElementById("step-code").style.display = "none";
                document.getElementById("step-new-password").style.display = "block";
            } else {
                alert("Código incorreto. Tente novamente.");
            }
        }

        // Função para redefinir a senha
        function resetPassword() {
            const newPassword = document.getElementById("new-password").value;
            if (!newPassword) {
                alert("Por favor, insira uma nova senha.");
                return;
            }
            alert("Senha redefinida com sucesso!");
            closeModal();
        }

        // Função para resetar a modal para o passo inicial
        function resetModal() {
            document.getElementById("step-email").style.display = "block";
            document.getElementById("step-code").style.display = "none";
            document.getElementById("step-new-password").style.display = "none";
            document.getElementById("reset-email").value = "";
            document.getElementById("reset-code").value = "";
            document.getElementById("new-password").value = "";
        }

