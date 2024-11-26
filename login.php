<?php
session_start();

?>

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Вход в систему</title>
    <link rel="stylesheet" href="styles/main.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="styles/pages/login.css">
</head>
<body>
    <div id="background-particles" class="background-particles"></div>
    
    <div class="login-page">
        <?php include 'modules/header.php'; ?>
        
            <form action="login.php" method="post">
            <a href="/" class="back-button">
                        <i class="fa fa-arrow-left"></i>
                    </a>
                    
                
                <div class="con">
                    <div class="form-header">
                        <h2>Вход в<span> систему</span></h2>
                        <p>Войдите, используя имя пользователя и пароль</p>
                    </div>

                    <div class="field-set">
                        <div class="input-group">
                            <span class="input-item">
                                <i class="fa fa-user-circle"></i>
                            </span>
                            <input class="form-input" 
                                id="txt-input" 
                                type="text" 
                                name="username" 
                                placeholder="Имя пользователя"
                                autocomplete="username"
                                required>
                        </div>
                        
                        <div class="input-group">
                            <span class="input-item">
                                <i class="fa fa-key"></i>
                            </span>
                            <input class="form-input" 
                                type="password" 
                                placeholder="Пароль" 
                                id="pwd" 
                                name="password" 
                                autocomplete="current-password"
                                required>
                            <span class="eye-icon">
                                <i class="fa fa-eye-slash" 
                                aria-hidden="true" 
                                type="button" 
                                id="eye"></i>
                            </span>
                        </div>
                        
                        <button type="submit" class="log-in">Войти</button>
                    </div>
                </div>
            </form>
        </div>
        
    </div>

    <script type="module" src="scripts/main.js"></script>
    <script type="module" src="scripts/modules/particles.js"></script>
    <script type="module" src="scripts/modules/login.js"></script>
    <script src="scripts/modules/login-background.js"></script>
</body>
</html>