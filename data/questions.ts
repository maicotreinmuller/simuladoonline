import type { Question } from "@/types/question"

export const questions: Question[] = [
  // Redes (10 questões)
  {
    id: 1,
    question: "Qual protocolo é responsável por traduzir nomes de domínio em endereços IP?",
    options: ["FTP", "DNS", "DHCP", "SNMP"],
    correctAnswer: "b",
    explanation:
      "DNS (Domain Name System) resolve nomes de domínio (ex., www.exemplo.com) em endereços IP (ex.: 192.0.2.1). FTP transfere arquivos, DHCP atribui IPs dinamicamente e SNMP gerencia dispositivos de rede.",
    category: "redes",
  },
  {
    id: 2,
    question: "No modelo OSI, qual camada é responsável pelo roteamento de pacotes entre redes?",
    options: ["Enlace de Dados", "Rede", "Transporte", "Aplicação"],
    correctAnswer: "b",
    explanation:
      "A camada de Rede (Camada 3) gerencia o roteamento e encaminhamento de pacotes entre redes diferentes usando protocolos como IP. Enlace gerencia comunicação nó-a-nó, Transporte garante transferência confiável, e Aplicação fornece interfaces de usuário.",
    category: "redes",
  },
  {
    id: 3,
    question: "Qual é a máscara de sub-rede padrão para um endereço de IP de classe C?",
    options: ["255.0.0.0", "255.255.0.0", "255.255.255.0", "255.255.255.255"],
    correctAnswer: "c",
    explanation:
      "Um endereço de IP de classe C tem uma máscara padrão de 255.255.255.0 (/24), permitindo 256 endereços (254 utilizáveis). A classe A usa 255.0.0.0, a classe B usa 255.255.0.0, e 255.255.255.255 é uma máscara de host.",
    category: "redes",
  },
  {
    id: 4,
    question: "Qual protocolo usa a porta 443 por padrão?",
    options: ["HTTP", "HTTPS", "SMTP", "SSH"],
    correctAnswer: "b",
    explanation:
      "HTTPS (Hypertext Transfer Protocol Secure) usa a porta 443 para comunicação web segura via SSL/TLS. HTTP usa porta 80, SMTP usa porta 25, e SSH usa porta 22.",
    category: "redes",
  },
  {
    id: 5,
    question: "Qual é o objetivo de uma VLAN em uma rede?",
    options: [
      "Aumentar a largura de banda",
      "Segmentar o tráfego de rede",
      "Criptografar pacotes de dados",
      "Gerenciar endereços IP",
    ],
    correctAnswer: "b",
    explanation:
      "VLANs (Virtual Local Area Networks) separam logicamente o tráfego de rede em um único switch físico, melhorando a segurança e a eficiência. Elas não aumentam a banda, criptografam dados, ou gerenciam IPs.",
    category: "redes",
  },
  {
    id: 6,
    question: "Qual comando em Linux exibe a configuração atual da rede?",
    options: ["ifconfig", "netstat", "ping", "traceroute"],
    correctAnswer: "a",
    explanation:
      "`ifconfig` exibe configurações de interfaces de rede (ex.: IP, MAC). `netstat` mostra conexões de rede, `ping` testa alcançabilidade, e `traceroute` traça caminhos de pacotes.",
    category: "redes",
  },
  {
    id: 7,
    question: "Qual é a taxa máxima de dados de uma conexão Gigabit Ethernet?",
    options: ["100 Mbps", "1 Gbps", "10 Gbps", "100 Gbps"],
    correctAnswer: "b",
    explanation:
      "Gigabit Ethernet opera a 1 Gbps (1000 Mbps). Fast Ethernet é 100 Mbps, 10 Gigabit Ethernet é 10 Gbps, e 100 Gbps é para padrões avançados.",
    category: "redes",
  },
  {
    id: 8,
    question: "Qual protocolo garante a entrega confiável de dados retransmitindo pacotes perdidos?",
    options: ["UDP", "TCP", "ICMP", "ARP"],
    correctAnswer: "b",
    explanation:
      "TCP (Transmission Control Protocol) fornece entrega confiável por meio de confirmações e retransmissões. UDP é sem conexão, ICMP gerencia diagnósticos, e ARP resolve IP para MAC.",
    category: "redes",
  },
  {
    id: 9,
    question: "O que significa NAT em redes?",
    options: [
      "Tradução de Endereço de Rede",
      "Terminal de Rede de Acesso",
      "Token de Autenticação de Nó",
      "Ferramenta de Análise de Rede",
    ],
    correctAnswer: "a",
    explanation:
      "NAT (Network Address Translation) converte IPs privados em públicos, permitindo acesso à internet. As demais opções são incorretas ou fictícias.",
    category: "redes",
  },
  {
    id: 10,
    question: "Qual dispositivo opera primariamente na camada de Enlace de Dados do modelo OSI?",
    options: ["Router", "Switch", "Gateway", "Firewall"],
    correctAnswer: "b",
    explanation:
      "Switches operam na camada 2 (Enlace de Dados), encaminhando quadros com base em endereços MAC. Routers (camada 3) roteiam pacotes, gateways conectam protocolos diferentes, e firewalls filtram tráfego.",
    category: "redes",
  },

  // Bancos de Dados (10 questões)
  {
    id: 11,
    question: "Qual é a função de uma chave primária em um banco de dados relacional?",
    options: [
      "Armazenar valores únicos para cada linha",
      "Vincular tabelas",
      "Indexar dados para consultas mais rápidas",
      "Criptografar dados sensíveis",
    ],
    correctAnswer: "a",
    explanation:
      "A chave primária identifica de forma única cada linha em uma tabela, garantindo a integridade dos dados. Chaves estrangeiras vinculam tabelas, índices aceleram consultas, e criptografia protege dados.",
    category: "banco-dados",
  },
  {
    id: 12,
    question: "Qual comando SQL é usado para recuperar dados de um banco de dados?",
    options: ["INSERT", "UPDATE", "SELECT", "DELETE"],
    correctAnswer: "c",
    explanation:
      "`SELECT` recupera dados de tabelas. `INSERT` adiciona dados, `UPDATE` modifica dados, e `DELETE` exclui dados.",
    category: "banco-dados",
  },
  {
    id: 13,
    question: "O que é normalização de banco de dados?",
    options: [
      "Criptografar registros do banco",
      "Organizar dados para eliminar redundância",
      "Fazer backup de arquivos do banco",
      "Indexar todas as tabelas",
    ],
    correctAnswer: "b",
    explanation:
      "A normalização estrutura os dados em tabelas para reduzir redundância e melhorar a integridade. As demais opções descrevem outros processos.",
    category: "banco-dados",
  },
  {
    id: 14,
    question: "Qual dos seguintes é um tipo de JOIN válido em SQL?",
    options: ["MIDDLE JOIN", "INNER JOIN", "TOP JOIN", "BOTTOM JOIN"],
    correctAnswer: "b",
    explanation:
      "INNER JOIN retorna linhas com valores correspondentes em ambas as tabelas. Outros tipos de JOIN incluem LEFT, RIGHT e FULL, mas MIDDLE, TOP e BOTTOM são inválidos.",
    category: "banco-dados",
  },
  {
    id: 15,
    question: "Em SQL, o que faz a cláusula GROUP BY?",
    options: [
      "Filtra linhas com base em condições",
      "Ordena resultados da consulta",
      "Agrega dados em linhas resumidas",
      "Une várias tabelas",
    ],
    correctAnswer: "c",
    explanation:
      "GROUP BY agrupa linhas com valores iguais em linhas resumidas, geralmente usado com funções agregadas (ex.: COUNT, SUM). WHERE filtra, ORDER BY ordena, e JOIN une tabelas.",
    category: "banco-dados",
  },
  {
    id: 16,
    question: "O que é uma chave estrangeira em um banco de dados?",
    options: [
      "Um identificador único para uma tabela",
      "Um campo que liga à chave primária de outra tabela",
      "Um índice para buscas mais rápidas",
      "Um backup da chave primária",
    ],
    correctAnswer: "b",
    explanation:
      "Uma chave estrangeira é uma coluna que cria uma relação entre tabelas, referenciando a chave primária de outra tabela.",
    category: "banco-dados",
  },
  {
    id: 17,
    question: "Qual comando remove todas as linhas de uma tabela sem excluir sua estrutura?",
    options: ["DROP", "TRUNCATE", "DELETE", "ALTER"],
    correctAnswer: "b",
    explanation:
      "TRUNCATE remove todas as linhas, mas mantém a estrutura da tabela. DROP elimina a tabela, DELETE remove linhas específicas, e ALTER modifica a estrutura.",
    category: "banco-dados",
  },
  {
    id: 18,
    question: "Qual é o propósito de um índice em um banco de dados?",
    options: [
      "Garantir a unicidade dos dados",
      "Melhorar o desempenho de consultas",
      "Vincular tabelas",
      "Criptografar dados",
    ],
    correctAnswer: "b",
    explanation:
      "Índices aceleram a recuperação de dados, fornecendo caminhos de acesso rápidos. Chaves primárias garantem unicidade, chaves estrangeiras vinculam tabelas, e criptografia protege dados.",
    category: "banco-dados",
  },
  {
    id: 19,
    question: "Qual função SQL conta o número de linhas em um conjunto de resultados?",
    options: ["SUM()", "AVG()", "COUNT()", "MAX()"],
    correctAnswer: "c",
    explanation:
      "COUNT() retorna o número de linhas. SUM() soma valores, AVG() calcula médias, e MAX() encontra o maior valor.",
    category: "banco-dados",
  },
  {
    id: 20,
    question: "O que significa ACID em transações de banco de dados?",
    options: [
      "Acesso, Controle, Integridade, Dados",
      "Atomicidade, Consistência, Isolamento, Durabilidade",
      "Análise, Configuração, Integração, Implantação",
      "Autenticação, Confidencialidade, Integridade, Entrega",
    ],
    correctAnswer: "b",
    explanation:
      "ACID garante transações confiáveis: Atomicidade (tudo ou nada), Consistência (estado válido), Isolamento (transações independentes), Durabilidade (mudanças permanentes).",
    category: "banco-dados",
  },

  // Segurança (10 questões)
  {
    id: 21,
    question: "Qual é o propósito principal de um firewall em uma rede?",
    options: ["Criptografar dados", "Filtrar tráfego de rede", "Autenticar usuários", "Comprimir dados"],
    correctAnswer: "b",
    explanation:
      "Firewalls controlam o tráfego de entrada e saída com base em regras, aumentando a segurança. Criptografia, autenticação e compressão são gerenciadas por outras ferramentas.",
    category: "seguranca",
  },
  {
    id: 22,
    question: "Qual algoritmo de criptografia é comumente usado para comunicação web segura?",
    options: ["DES", "AES", "RSA", "MD5"],
    correctAnswer: "b",
    explanation:
      "AES (Advanced Encryption Standard) é amplamente utilizado para transmissão segura de dados (ex.: HTTPS). DES é obsoleto, RSA é para troca de chaves, e MD5 é uma função de hash.",
    category: "seguranca",
  },
  {
    id: 23,
    question: "O que é um ataque de injeção SQL?",
    options: [
      "Sobrecarregar um banco de dados com consultas",
      "Injetar código SQL malicioso em campos de entrada",
      "Excluir tabelas de banco de dados remotamente",
      "Criptografar conteúdos do banco de dados",
    ],
    correctAnswer: "b",
    explanation:
      "Injeção SQL explora entradas mal sanitizadas para executar comandos SQL não autorizados. As demais opções descrevem outros ataques ou ações.",
    category: "seguranca",
  },
  {
    id: 24,
    question: "Qual protocolo oferece acesso remoto seguro a um servidor?",
    options: ["Telnet", "FTP", "SSH", "HTTP"],
    correctAnswer: "c",
    explanation:
      "SSH (Secure Shell) criptografa conexões remotas, ao contrário de Telnet ou FTP. HTTP é para acesso à web e não é seguro sem HTTPS.",
    category: "seguranca",
  },
  {
    id: 25,
    question: "O que significa CIA em segurança da informação?",
    options: [
      "Controle, Integridade, Acesso",
      "Confidencialidade, Integridade, Disponibilidade",
      "Certificação, Inspeção, Autorização",
      "Comunicação, Integração, Análise",
    ],
    correctAnswer: "b",
    explanation: "A tríade CIA garante dados confidenciais, inalterados e acessíveis. As demais opções são incorretas.",
    category: "seguranca",
  },
  {
    id: 26,
    question: "Qual é o propósito de um certificado digital?",
    options: [
      "Comprimir dados",
      "Verificar identidade e autenticidade",
      "Fazer backup de dados do servidor",
      "Monitorar tráfego de rede",
    ],
    correctAnswer: "b",
    explanation:
      "Certificados digitais, emitidos por CAs, autenticam entidades e possibilitam conexões seguras via SSL/TLS. Eles não comprimem, fazem backup ou monitoram.",
    category: "seguranca",
  },
  {
    id: 27,
    question: "Qual tipo de ataque tenta adivinhar senhas repetidamente?",
    options: ["Phishing", "Força Bruta", "Homem-no-Meio", "Negação de Serviço"],
    correctAnswer: "b",
    explanation:
      "Ataques de força bruta tentam múltiplas combinações de senhas. Phishing engana usuários, MitM intercepta comunicação, e DoS sobrecarrega sistemas.",
    category: "seguranca",
  },
  {
    id: 28,
    question: "O que é autenticação de dois fatores (2FA)?",
    options: [
      "Usar duas senhas",
      "Exigir duas formas de identificação",
      "Criptografar dados duas vezes",
      "Fazer backup em dois locais",
    ],
    correctAnswer: "b",
    explanation:
      "2FA combina dois fatores (ex.: senha e código SMS) para maior segurança. As outras opções são diferentes processos.",
    category: "seguranca",
  },
  {
    id: 29,
    question: "Qual padrão define requisitos para um Sistema de Gestão de Segurança da Informação?",
    options: ["ISO 9001", "ISO 27001", "ISO 14001", "ISO 20000"],
    correctAnswer: "b",
    explanation:
      "ISO 27001 especifica requisitos para ISMS, gerenciamento de riscos de segurança. ISO 9001 é para qualidade, ISO 14001 para meio ambiente, e ISO 20000 para serviços de TI.",
    category: "seguranca",
  },
  {
    id: 30,
    question: "Qual é o propósito de uma VPN?",
    options: [
      "Aumentar a velocidade da internet",
      "Proteger conexões de rede remotas",
      "Bloquear propagandas",
      "Gerenciar endereços IP",
    ],
    correctAnswer: "b",
    explanation:
      "VPNs (Virtual Private Networks) criptografam conexões para acesso remoto seguro. Elas não aumentam a velocidade da internet, bloqueiam anúncios ou gerenciam IPs.",
    category: "seguranca",
  },

  // Governança de TI (10 questões)
  {
    id: 31,
    question: "Qual framework fornece boas práticas para gerenciamento de serviços de TI?",
    options: ["COBIT", "ITIL", "PMBOK", "TOGAF"],
    correctAnswer: "b",
    explanation:
      "ITIL (Information Technology Infrastructure Library) foca na gestão de serviços de TI. COBIT é para governança, PMBOK para projetos, e TOGAF para arquitetura empresarial.",
    category: "governanca",
  },
  {
    id: 32,
    question: "Qual é o objetivo principal do COBIT?",
    options: [
      "Gerenciar desenvolvimento de software",
      "Alinhar TI com objetivos de negócios",
      "Proteger infraestrutura de rede",
      "Otimizar desempenho de banco de dados",
    ],
    correctAnswer: "b",
    explanation:
      "COBIT (Control Objectives for Information and Related Technologies) garante que a TI suporta metas de negócios por meio de governança e gestão.",
    category: "governanca",
  },
  {
    id: 33,
    question: "Em ITIL, qual processo garante que os serviços atendam aos níveis acordados?",
    options: [
      "Gerenciamento de Incidentes",
      "Gerenciamento de Nível de Serviço",
      "Gerenciamento de Mudanças",
      "Gerenciamento de Problemas",
    ],
    correctAnswer: "b",
    explanation:
      "Gerenciamento de Nível de Serviço define e monitora acordos de nível de serviço (SLAs). Incidente restaura serviços, Mudança controla alterações, e Problemas aborda causas raízes.",
    category: "governanca",
  },
  {
    id: 34,
    question: "O que significa PMBOK?",
    options: [
      "Corpo de Conhecimento em Gerenciamento de Projetos",
      "Kit de Operações de Negócios de Gerenciamento de Processos",
      "Base de Conhecimento de Monitoramento de Programas",
      "Métricas de Desempenho para Otimização de Negócios",
    ],
    correctAnswer: "a",
    explanation: "PMBOK é um padrão do PMI para práticas de gerenciamento de projetos. As demais opções são fictícias.",
    category: "governanca",
  },
  {
    id: 35,
    question: "Qual processo em ITIL lida com interrupções inesperadas de serviço?",
    options: [
      "Gerenciamento de Problemas",
      "Gerenciamento de Incidentes",
      "Gerenciamento de Capacidade",
      "Gerenciamento de Liberação",
    ],
    correctAnswer: "b",
    explanation:
      "Gerenciamento de Incidentes restaura a operação normal do serviço após interrupções. Problemas aborda causas raízes, Capacidade planeja recursos, e Liberação implanta atualizações.",
    category: "governanca",
  },
  {
    id: 36,
    question: "Qual é um benefício essencial da governança de TI?",
    options: [
      "Desenvolvimento de software mais rápido",
      "Melhor gerenciamento de riscos",
      "Redução de custos de hardware",
      "Simplificação de design de banco",
    ],
    correctAnswer: "b",
    explanation:
      "A governança de TI garante a identificação e mitigação de riscos, alinhando TI com as necessidades do negócio. As demais opções são secundárias ou não relacionadas.",
    category: "governanca",
  },
  {
    id: 37,
    question: "Qual documento define o desempenho esperado de um serviço em ITIL?",
    options: [
      "Acordo de Nível de Serviço (SLA)",
      "Formulário de Solicitação de Mudança",
      "Relatório de Avaliação de Riscos",
      "Carta do Projeto",
    ],
    correctAnswer: "a",
    explanation:
      "SLAs especificam métricas de desempenho do serviço (ex.: tempo de atividade). Solicitações de Mudança gerenciam modificações, Relatórios de Risco avaliam ameaças, e Cartas de Projeto definem projetos.",
    category: "governanca",
  },
  {
    id: 38,
    question: "Em COBIT, o que é um objetivo de controle?",
    options: [
      "Uma meta mensurável de processo de TI",
      "Uma métrica de desempenho de hardware",
      "Um marco de desenvolvimento de software",
      "Um alvo de largura de banda de rede",
    ],
    correctAnswer: "a",
    explanation:
      "Objetivos de controle no COBIT definem resultados desejados para processos de TI, garantindo governança. As demais opções não são relacionadas.",
    category: "governanca",
  },
  {
    id: 39,
    question: "Qual processo em ITIL garante que novos serviços sejam introduzidos adequadamente?",
    options: [
      "Gerenciamento de Ativos e Configuração de Serviço",
      "Gerenciamento de Liberação e Implantação",
      "Gerenciamento de Incidentes",
      "Gerenciamento de Disponibilidade",
    ],
    correctAnswer: "b",
    explanation:
      "Gerenciamento de Liberação e Implantação planeja e implanta novos serviços. Os demais processos lidam com ativos, incidentes ou disponibilidade.",
    category: "governanca",
  },
  {
    id: 40,
    question: "Qual é o propósito de um registro de riscos na governança de TI?",
    options: [
      "Rastrear licenças de software",
      "Documentar riscos potenciais e planos de mitigação",
      "Monitorar desempenho de rede",
      "Agendar auditorias de TI",
    ],
    correctAnswer: "b",
    explanation:
      "Um registro de riscos identifica riscos, sua probabilidade, impacto e estratégias de mitigação. As demais opções descrevem outras ferramentas ou processos.",
    category: "governanca",
  },

  // Programação e Desenvolvimento (10 questões)
  {
    id: 41,
    question: "Em Python, qual é a saída de `print(2 ** 3)`?",
    options: ["6", "8", "9", "23"],
    correctAnswer: "b",
    explanation: "O operador `**` em Python realiza exponenciação. `2 ** 3` é igual a 2³ = 8.",
    category: "programacao",
  },
  {
    id: 42,
    question: "O que é uma lista encadeada em estruturas de dados?",
    options: [
      "Uma coleção de elementos armazenados em memória contígua",
      "Uma sequência de nós onde cada nó aponta para o próximo",
      "Uma estrutura em árvore com um nó raiz",
      "Uma tabela de pares chave-valor",
    ],
    correctAnswer: "b",
    explanation:
      "Uma lista encadeada consiste em nós, cada um contendo dados e um ponteiro para o próximo nó. Arrays usam memória contígua, árvores têm estruturas hierárquicas, e dicionários armazenam pares chave-valor.",
    category: "programacao",
  },
  {
    id: 43,
    question: "Qual algoritmo de ordenação tem complexidade de tempo no pior caso de O(n²)?",
    options: ["Merge Sort", "Quick Sort", "Bubble Sort", "Heap Sort"],
    correctAnswer: "c",
    explanation:
      "Bubble Sort compara e troca elementos adjacentes, com complexidade O(n²). Merge Sort e Heap Sort são O(n log n), e Quick Sort é O(n²) no pior caso, mas geralmente mais rápido.",
    category: "programacao",
  },
  {
    id: 44,
    question: "Em Java, qual palavra-chave é usada para herdar uma classe?",
    options: ["extends", "implements", "super", "this"],
    correctAnswer: "a",
    explanation:
      "`extends` é usada para herança de classe em Java. `implements` é para interfaces, `super` acessa métodos da classe pai, e `this` refere-se ao objeto atual.",
    category: "programacao",
  },
  {
    id: 45,
    question: "O que significa HTML?",
    options: [
      "Linguagem de Gerenciamento de HiperTexto",
      "Linguagem de Marcação de HiperTexto",
      "Protocolo de Transferência de HiperTexto",
      "Modelo de HiperTexto e Links",
    ],
    correctAnswer: "b",
    explanation: "HTML é uma linguagem de marcação para estruturação de conteúdo web. As demais opções são incorretas.",
    category: "programacao",
  },
  {
    id: 46,
    question: "Em JavaScript, qual método adiciona um elemento ao final de um array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    correctAnswer: "a",
    explanation:
      "`push()` adiciona elementos ao final de um array. `pop()` remove o último elemento, `shift()` remove o primeiro, e `unshift()` adiciona ao início.",
    category: "programacao",
  },
  {
    id: 47,
    question: "Qual é o propósito de um construtor em programação orientada a objetos?",
    options: ["Destruir objetos", "Inicializar propriedades do objeto", "Copiar objetos", "Comparar objetos"],
    correctAnswer: "b",
    explanation:
      "Construtores inicializam o estado de um objeto ao criá-lo. Destrutores (não em todas as linguagens) destroem objetos, e outros métodos lidam com cópia ou comparação.",
    category: "programacao",
  },
  {
    id: 48,
    question: "Qual sistema de controle de versão é comumente usado para rastrear alterações de código?",
    options: ["FTP", "Git", "HTTP", "SMTP"],
    correctAnswer: "b",
    explanation:
      "Git rastreia alterações de código e suporta colaboração. FTP, HTTP e SMTP são protocolos para transferência de arquivos, comunicação web e e-mail, respectivamente.",
    category: "programacao",
  },
  {
    id: 49,
    question: "Em Python, qual é o propósito do bloco `try-except`?",
    options: ["Definir funções", "Tratar exceções", "Iterar por dados", "Importar módulos"],
    correctAnswer: "b",
    explanation:
      "O bloco `try-except` captura e gerencia erros em tempo de execução (exceções). Funções usam `def`, loops usam `for` ou `while`, e módulos usam `import`.",
    category: "programacao",
  },
  {
    id: 50,
    question: "O que é uma API em desenvolvimento de software?",
    options: [
      "Um componente de hardware",
      "Um conjunto de regras para interação de software",
      "Uma ferramenta de gerenciamento de banco de dados",
      "Uma linguagem de programação",
    ],
    correctAnswer: "b",
    explanation:
      "APIs (Application Programming Interfaces) definem como componentes de software interagem. Elas não são hardware, bancos de dados ou linguagens.",
    category: "programacao",
  },

  // Administração de Sistemas (10 questões)
  {
    id: 51,
    question: "Qual comando em Linux altera permissões de arquivos?",
    options: ["chown", "chmod", "chgrp", "ls"],
    correctAnswer: "b",
    explanation:
      "`chmod` altera permissões de arquivos (ex.: leitura, escrita, execução). `chown` altera propriedade, `chgrp` altera grupo, e `ls` lista arquivos.",
    category: "sistemas",
  },
  {
    id: 52,
    question: "O que é virtualização em computação?",
    options: [
      "Executar múltiplos sistemas operacionais em uma única máquina física",
      "Criptografar tráfego de rede",
      "Fazer backup de dados na nuvem",
      "Otimizar consultas de banco",
    ],
    correctAnswer: "a",
    explanation:
      "Virtualização cria máquinas virtuais para executar múltiplos sistemas operacionais em um único host. As demais opções descrevem outros processos.",
    category: "sistemas",
  },
  {
    id: 53,
    question: "Qual ferramenta do Windows monitora o desempenho do sistema?",
    options: ["Gerenciador de Tarefas", "Painel de Controle", "Explorador de Arquivos", "Editor de Registro"],
    correctAnswer: "a",
    explanation:
      "Gerenciador de Tarefas exibe uso de CPU, memória e processos. Painel de Controle gerencia configurações, Explorador de Arquivos navega por arquivos, e Editor de Registro modifica o registro.",
    category: "sistemas",
  },
  {
    id: 54,
    question: "Qual é o propósito de uma configuração RAID?",
    options: [
      "Aumentar a velocidade do CPU",
      "Melhorar a redundância e desempenho de discos",
      "Criptografar dados",
      "Gerenciar endereços IP",
    ],
    correctAnswer: "b",
    explanation:
      "RAID (Redundant Array de Discos Independentes) melhora a confiabilidade e velocidade dos dados. Não afeta CPUs, redes ou IPs.",
    category: "sistemas",
  },
  {
    id: 55,
    question: "Qual protocolo é usado para sincronização de tempo na rede?",
    options: ["NTP", "SNMP", "FTP", "SMTP"],
    correctAnswer: "a",
    explanation:
      "NTP (Network Time Protocol) sincroniza relógios entre dispositivos. SNMP monitora dispositivos, FTP transfere arquivos, e SMTP envia e-mails.",
    category: "sistemas",
  },
  {
    id: 56,
    question: "No Windows, qual é o comando para verificar a configuração de IP?",
    options: ["ipconfig", "netstat", "ping", "tracert"],
    correctAnswer: "a",
    explanation:
      "`ipconfig` exibe configurações de IP. `netstat` mostra conexões, `ping` testa alcançabilidade, e `tracert` rastreia rotas.",
    category: "sistemas",
  },
  {
    id: 57,
    question: "O que é um hipervisor em virtualização?",
    options: [
      "Uma ferramenta de backup",
      "Uma camada de software que gerencia máquinas virtuais",
      "Uma ferramenta de monitoramento de rede",
      "Um motor de banco de dados",
    ],
    correctAnswer: "b",
    explanation:
      "Hipervisores (ex.: VMware, Hyper-V) gerenciam máquinas virtuais, alocando recursos. As demais opções não são relacionadas.",
    category: "sistemas",
  },
  {
    id: 58,
    question: "Qual sistema de arquivos é comumente usado em distribuições Linux modernas?",
    options: ["FAT32", "NTFS", "HFS+", "ext4"],
    correctAnswer: "d",
    explanation:
      "ext4 é o sistema de arquivos padrão para muitas distribuições Linux modernas, oferecendo desempenho e confiabilidade. FAT32 e NTFS são associados ao Windows, e HFS+ é para macOS.",
    category: "sistemas",
  },
  {
    id: 59,
    question: "O que o comando `cron` faz no Linux?",
    options: [
      "Gerenciar contas de usuário",
      "Agendar tarefas recorrentes",
      "Monitorar tráfego de rede",
      "Comprimir arquivos",
    ],
    correctAnswer: "b",
    explanation:
      "`cron` agenda tarefas (cron jobs) para execução em tempos específicos. As demais opções descrevem outros comandos ou ferramentas.",
    category: "sistemas",
  },
  {
    id: 60,
    question: "Qual estratégia de backup copia apenas arquivos alterados desde o último backup?",
    options: ["Completo", "Espelho", "Incremental", "Diferencial"],
    correctAnswer: "c",
    explanation:
      "Backups incrementais salvam alterações desde o último backup (completo ou incremental), minimizando armazenamento. Diferencial salva alterações desde o último backup completo, completo faz tudo, e espelho cria uma cópia exata.",
    category: "sistemas",
  },

  // Inteligência Artificial (20 questões)
  {
    id: 61,
    question: "O que é Machine Learning?",
    options: [
      "Um tipo de hardware especializado",
      "Um algoritmo que permite aos computadores aprender sem programação explícita",
      "Uma linguagem de programação",
      "Um sistema operacional",
    ],
    correctAnswer: "b",
    explanation:
      "Machine Learning é um subcampo da IA que permite aos sistemas aprenderem e melhorarem automaticamente através da experiência, sem serem explicitamente programados para cada tarefa.",
    category: "ia",
  },
  {
    id: 62,
    question: "Qual é a diferença entre IA supervisionada e não supervisionada?",
    options: [
      "Supervisionada usa dados rotulados, não supervisionada usa dados sem rótulos",
      "Supervisionada é mais rápida",
      "Não supervisionada é mais precisa",
      "Não há diferença",
    ],
    correctAnswer: "a",
    explanation:
      "Aprendizado supervisionado usa dados de treinamento com rótulos conhecidos, enquanto o não supervisionado encontra padrões em dados sem rótulos predefinidos.",
    category: "ia",
  },
  {
    id: 63,
    question: "O que são redes neurais artificiais?",
    options: [
      "Circuitos eletrônicos",
      "Modelos computacionais inspirados no cérebro humano",
      "Protocolos de rede",
      "Algoritmos de criptografia",
    ],
    correctAnswer: "b",
    explanation:
      "Redes neurais artificiais são modelos computacionais inspirados na estrutura e funcionamento dos neurônios biológicos, usados para reconhecimento de padrões e aprendizado.",
    category: "ia",
  },
  {
    id: 64,
    question: "O que é Deep Learning?",
    options: [
      "Aprendizado em águas profundas",
      "Um subcampo de ML que usa redes neurais com múltiplas camadas",
      "Um tipo de banco de dados",
      "Uma técnica de compressão",
    ],
    correctAnswer: "b",
    explanation:
      "Deep Learning é um subcampo do Machine Learning que utiliza redes neurais artificiais com múltiplas camadas ocultas para modelar e entender dados complexos.",
    category: "ia",
  },
  {
    id: 65,
    question: "O que é processamento de linguagem natural (NLP)?",
    options: [
      "Tradução automática",
      "Campo da IA que permite computadores entenderem linguagem humana",
      "Um protocolo de comunicação",
      "Um tipo de compilador",
    ],
    correctAnswer: "b",
    explanation:
      "NLP é um campo da IA que se concentra na interação entre computadores e linguagem humana, permitindo que máquinas compreendam, interpretem e gerem texto humano.",
    category: "ia",
  },
  {
    id: 66,
    question: "O que é um algoritmo de clustering?",
    options: [
      "Agrupa dados similares sem rótulos predefinidos",
      "Classifica dados com rótulos conhecidos",
      "Comprime arquivos",
      "Criptografa dados",
    ],
    correctAnswer: "a",
    explanation:
      "Algoritmos de clustering agrupam dados similares em clusters sem usar rótulos predefinidos, sendo uma técnica de aprendizado não supervisionado.",
    category: "ia",
  },
  {
    id: 67,
    question: "O que é overfitting em Machine Learning?",
    options: [
      "Quando o modelo é muito simples",
      "Quando o modelo memoriza dados de treinamento mas falha em generalizar",
      "Quando há poucos dados",
      "Quando o processamento é muito lento",
    ],
    correctAnswer: "b",
    explanation:
      "Overfitting ocorre quando um modelo aprende os dados de treinamento muito bem, incluindo ruído, mas falha em generalizar para novos dados não vistos.",
    category: "ia",
  },
  {
    id: 68,
    question: "O que são Large Language Models (LLMs)?",
    options: [
      "Modelos de IA treinados em grandes quantidades de texto",
      "Bancos de dados grandes",
      "Servidores de alta capacidade",
      "Algoritmos de compressão",
    ],
    correctAnswer: "a",
    explanation:
      "LLMs são modelos de IA treinados em vastas quantidades de dados textuais para entender e gerar linguagem humana, como GPT, BERT e outros.",
    category: "ia",
  },
  {
    id: 69,
    question: "O que é Computer Vision?",
    options: [
      "Hardware para computadores",
      "Campo da IA que permite computadores interpretarem imagens",
      "Software de edição de imagem",
      "Protocolo de transmissão de vídeo",
    ],
    correctAnswer: "b",
    explanation:
      "Computer Vision é um campo da IA que treina computadores para interpretar e entender o mundo visual através de imagens e vídeos.",
    category: "ia",
  },
  {
    id: 70,
    question: "O que é reinforcement learning?",
    options: [
      "Aprendizado através de recompensas e punições",
      "Aprendizado com dados rotulados",
      "Aprendizado sem dados",
      "Aprendizado apenas com texto",
    ],
    correctAnswer: "a",
    explanation:
      "Reinforcement Learning é um tipo de ML onde um agente aprende a tomar decisões através de tentativa e erro, recebendo recompensas ou punições por suas ações.",
    category: "ia",
  },
  {
    id: 71,
    question: "O que é bias em algoritmos de IA?",
    options: [
      "Erro de programação",
      "Preconceito sistemático nos dados ou modelo",
      "Velocidade de processamento",
      "Capacidade de memória",
    ],
    correctAnswer: "b",
    explanation:
      "Bias em IA refere-se a preconceitos sistemáticos que podem estar presentes nos dados de treinamento ou no próprio algoritmo, levando a resultados injustos ou discriminatórios.",
    category: "ia",
  },
  {
    id: 72,
    question: "O que é transfer learning?",
    options: [
      "Transferir dados entre servidores",
      "Usar conhecimento de uma tarefa para melhorar outra",
      "Mover modelos entre computadores",
      "Traduzir entre idiomas",
    ],
    correctAnswer: "b",
    explanation:
      "Transfer Learning é uma técnica onde um modelo treinado em uma tarefa é adaptado para uma tarefa relacionada, aproveitando o conhecimento já adquirido.",
    category: "ia",
  },
  {
    id: 73,
    question: "O que são GANs (Generative Adversarial Networks)?",
    options: [
      "Redes de segurança",
      "Duas redes neurais competindo para gerar dados realistas",
      "Protocolos de rede",
      "Algoritmos de compressão",
    ],
    correctAnswer: "b",
    explanation:
      "GANs consistem em duas redes neurais (gerador e discriminador) que competem entre si, resultando na geração de dados sintéticos muito realistas.",
    category: "ia",
  },
  {
    id: 74,
    question: "O que é feature engineering?",
    options: [
      "Construir hardware",
      "Processo de selecionar e transformar variáveis para ML",
      "Programar interfaces",
      "Configurar redes",
    ],
    correctAnswer: "b",
    explanation:
      "Feature Engineering é o processo de selecionar, modificar ou criar características (features) dos dados que são mais relevantes para o modelo de Machine Learning.",
    category: "ia",
  },
  {
    id: 75,
    question: "O que é cross-validation?",
    options: [
      "Validar senhas",
      "Técnica para avaliar performance de modelos",
      "Verificar dados duplicados",
      "Confirmar transações",
    ],
    correctAnswer: "b",
    explanation:
      "Cross-validation é uma técnica estatística para avaliar a capacidade de generalização de um modelo, dividindo os dados em múltiplos conjuntos de treino e teste.",
    category: "ia",
  },
  {
    id: 76,
    question: "O que é ensemble learning?",
    options: [
      "Combinar múltiplos modelos para melhor performance",
      "Treinar um modelo muito grande",
      "Usar apenas um algoritmo",
      "Processar dados em paralelo",
    ],
    correctAnswer: "a",
    explanation:
      "Ensemble Learning combina previsões de múltiplos modelos para obter melhor performance do que qualquer modelo individual, como Random Forest ou Gradient Boosting.",
    category: "ia",
  },
  {
    id: 77,
    question: "O que é gradient descent?",
    options: [
      "Algoritmo de otimização para minimizar erros",
      "Técnica de compressão",
      "Protocolo de rede",
      "Método de backup",
    ],
    correctAnswer: "a",
    explanation:
      "Gradient Descent é um algoritmo de otimização usado para minimizar a função de custo em modelos de ML, ajustando iterativamente os parâmetros do modelo.",
    category: "ia",
  },
  {
    id: 78,
    question: "O que é explainable AI (XAI)?",
    options: [
      "IA que explica outros programas",
      "IA cujas decisões podem ser interpretadas por humanos",
      "IA para educação",
      "IA muito simples",
    ],
    correctAnswer: "b",
    explanation:
      "Explainable AI refere-se a métodos e técnicas que tornam as decisões de sistemas de IA compreensíveis e interpretáveis para humanos.",
    category: "ia",
  },
  {
    id: 79,
    question: "O que é edge AI?",
    options: [
      "IA executada localmente em dispositivos",
      "IA na borda da internet",
      "IA muito avançada",
      "IA para gráficos",
    ],
    correctAnswer: "a",
    explanation:
      "Edge AI refere-se à execução de algoritmos de IA diretamente em dispositivos locais (edge devices) em vez de depender de processamento em nuvem.",
    category: "ia",
  },
  {
    id: 80,
    question: "O que é AutoML?",
    options: [
      "Carros autônomos",
      "Automatização do processo de Machine Learning",
      "ML para automação industrial",
      "ML muito rápido",
    ],
    correctAnswer: "b",
    explanation:
      "AutoML (Automated Machine Learning) automatiza o processo de aplicação de ML, incluindo seleção de algoritmos, feature engineering e otimização de hiperparâmetros.",
    category: "ia",
  },

  // ITIL 4 (20 questões)
  {
    id: 81,
    question: "Qual é o foco principal do ITIL 4?",
    options: ["Processos rígidos", "Valor para o cliente e co-criação", "Redução de custos", "Automação completa"],
    correctAnswer: "b",
    explanation:
      "ITIL 4 foca na criação de valor para o cliente através de co-criação, colaboração e transparência, sendo mais flexível que versões anteriores.",
    category: "itil4",
  },
  {
    id: 82,
    question: "Quantas dimensões do gerenciamento de serviços existem no ITIL 4?",
    options: ["3", "4", "5", "6"],
    correctAnswer: "b",
    explanation:
      "ITIL 4 define 4 dimensões: Organizações e pessoas, Informação e tecnologia, Parceiros e fornecedores, e Fluxos de valor e processos.",
    category: "itil4",
  },
  {
    id: 83,
    question: "O que é o Sistema de Valor de Serviço (SVS) no ITIL 4?",
    options: [
      "Um processo específico",
      "Um modelo que descreve como componentes trabalham juntos",
      "Uma ferramenta de software",
      "Um tipo de contrato",
    ],
    correctAnswer: "b",
    explanation:
      "O SVS é um modelo que descreve como todos os componentes e atividades da organização trabalham juntos para facilitar a criação de valor.",
    category: "itil4",
  },
  {
    id: 84,
    question: "Quantos princípios orientadores existem no ITIL 4?",
    options: ["5", "6", "7", "8"],
    correctAnswer: "c",
    explanation:
      "ITIL 4 possui 7 princípios orientadores: Foco no valor, Comece onde você está, Progrida iterativamente com feedback, Colabore e promova visibilidade, Pense e trabalhe holisticamente, Mantenha simples e prático, Otimize e automatize.",
    category: "itil4",
  },
  {
    id: 85,
    question: "O que são práticas no ITIL 4?",
    options: [
      "Processos antigos",
      "Conjuntos de recursos organizacionais para realizar trabalho",
      "Ferramentas de software",
      "Documentos de política",
    ],
    correctAnswer: "b",
    explanation:
      "Práticas são conjuntos de recursos organizacionais projetados para realizar trabalho ou atingir um objetivo, substituindo o conceito de processos do ITIL v3.",
    category: "itil4",
  },
  {
    id: 86,
    question: "Qual prática do ITIL 4 substitui o Gerenciamento de Incidentes?",
    options: ["Gerenciamento de Problemas", "Gerenciamento de Incidentes", "Central de Serviços", "Suporte ao Usuário"],
    correctAnswer: "b",
    explanation:
      "O Gerenciamento de Incidentes continua existindo no ITIL 4 como uma prática, mantendo seu foco na restauração rápida do serviço.",
    category: "itil4",
  },
  {
    id: 87,
    question: "O que é melhoria contínua no ITIL 4?",
    options: [
      "Um processo único",
      "Uma prática que permeia todas as atividades",
      "Uma ferramenta específica",
      "Um departamento separado",
    ],
    correctAnswer: "b",
    explanation:
      "Melhoria contínua no ITIL 4 é uma prática que deve permear todas as atividades da organização, não sendo limitada a um processo específico.",
    category: "itil4",
  },
  {
    id: 88,
    question: "Qual é o objetivo da prática de Gerenciamento de Mudanças no ITIL 4?",
    options: [
      "Impedir todas as mudanças",
      "Maximizar mudanças bem-sucedidas minimizando riscos",
      "Acelerar todas as mudanças",
      "Documentar mudanças",
    ],
    correctAnswer: "b",
    explanation:
      "O Gerenciamento de Mudanças visa maximizar o número de mudanças bem-sucedidas minimizando riscos para os serviços.",
    category: "itil4",
  },
  {
    id: 89,
    question: "O que são fluxos de valor no ITIL 4?",
    options: [
      "Processos financeiros",
      "Séries de atividades que criam valor",
      "Sistemas de TI",
      "Contratos de serviço",
    ],
    correctAnswer: "b",
    explanation:
      "Fluxos de valor são séries de atividades que uma organização realiza para criar e entregar produtos e serviços aos consumidores.",
    category: "itil4",
  },
  {
    id: 90,
    question: "Qual prática foca na experiência do usuário no ITIL 4?",
    options: [
      "Gerenciamento de Experiência do Cliente",
      "Central de Serviços",
      "Gerenciamento de Usuários",
      "Suporte Técnico",
    ],
    correctAnswer: "a",
    explanation:
      "O Gerenciamento de Experiência do Cliente é uma nova prática no ITIL 4 que foca em entender e melhorar a experiência do usuário.",
    category: "itil4",
  },
  {
    id: 91,
    question: "O que é governança no contexto do ITIL 4?",
    options: [
      "Controle total",
      "Meios pelos quais uma organização é dirigida e controlada",
      "Processo de auditoria",
      "Sistema de punições",
    ],
    correctAnswer: "b",
    explanation:
      "Governança refere-se aos meios pelos quais uma organização é dirigida e controlada, incluindo autoridade, responsabilidade e direção.",
    category: "itil4",
  },
  {
    id: 92,
    question: "Qual é a diferença entre outputs e outcomes no ITIL 4?",
    options: [
      "Não há diferença",
      "Outputs são entregáveis, outcomes são resultados",
      "Outputs são melhores",
      "Outcomes são mais caros",
    ],
    correctAnswer: "b",
    explanation:
      "Outputs são entregáveis tangíveis de uma atividade, enquanto outcomes são os resultados ou benefícios obtidos pelo cliente.",
    category: "itil4",
  },
  {
    id: 93,
    question: "O que é a prática de Gerenciamento de Ativos de TI no ITIL 4?",
    options: [
      "Comprar equipamentos",
      "Planejar e gerenciar todo o ciclo de vida dos ativos",
      "Vender ativos antigos",
      "Contar equipamentos",
    ],
    correctAnswer: "b",
    explanation:
      "O Gerenciamento de Ativos de TI planeja e gerencia todo o ciclo de vida dos ativos de TI para maximizar valor e controlar custos.",
    category: "itil4",
  },
  {
    id: 94,
    question: "O que caracteriza uma mudança padrão no ITIL 4?",
    options: [
      "Mudança de alto risco",
      "Mudança pré-autorizada e de baixo risco",
      "Mudança emergencial",
      "Mudança cara",
    ],
    correctAnswer: "b",
    explanation:
      "Mudanças padrão são pré-autorizadas, de baixo risco e seguem um procedimento estabelecido, não requerendo aprovação adicional.",
    category: "itil4",
  },
  {
    id: 95,
    question: "Qual é o foco da prática de Gerenciamento de Problemas no ITIL 4?",
    options: [
      "Resolver incidentes rapidamente",
      "Identificar e gerenciar causas de incidentes",
      "Criar novos serviços",
      "Treinar usuários",
    ],
    correctAnswer: "b",
    explanation:
      "O Gerenciamento de Problemas foca em identificar e gerenciar as causas raiz de incidentes para prevenir sua recorrência.",
    category: "itil4",
  },
  {
    id: 96,
    question: "O que é DevOps no contexto do ITIL 4?",
    options: [
      "Uma ferramenta específica",
      "Abordagem que integra desenvolvimento e operações",
      "Um tipo de servidor",
      "Uma linguagem de programação",
    ],
    correctAnswer: "b",
    explanation:
      "DevOps é uma abordagem que integra desenvolvimento e operações para melhorar a colaboração e acelerar a entrega de valor.",
    category: "itil4",
  },
  {
    id: 97,
    question: "Qual é o objetivo da prática de Monitoramento e Gerenciamento de Eventos?",
    options: [
      "Organizar festas",
      "Observar serviços e componentes sistematicamente",
      "Criar relatórios",
      "Treinar pessoal",
    ],
    correctAnswer: "b",
    explanation:
      "Esta prática observa sistematicamente serviços e componentes, registrando e relatando mudanças de estado identificadas como eventos.",
    category: "itil4",
  },
  {
    id: 98,
    question: "O que é a prática de Gerenciamento de Liberação no ITIL 4?",
    options: [
      "Liberar funcionários",
      "Disponibilizar serviços novos ou modificados",
      "Cancelar projetos",
      "Reduzir custos",
    ],
    correctAnswer: "b",
    explanation:
      "O Gerenciamento de Liberação torna serviços novos ou modificados disponíveis para uso, garantindo que sejam entregues de forma controlada.",
    category: "itil4",
  },
  {
    id: 99,
    question: "Qual princípio orientador enfatiza começar com a situação atual?",
    options: ["Foco no valor", "Comece onde você está", "Progrida iterativamente", "Colabore e promova visibilidade"],
    correctAnswer: "b",
    explanation:
      "O princípio 'Comece onde você está' enfatiza observar diretamente o estado atual e decidir o que pode ser reutilizado.",
    category: "itil4",
  },
  {
    id: 100,
    question: "O que é a cadeia de valor de serviço no ITIL 4?",
    options: ["Uma lista de preços", "Modelo operacional que define atividades-chave", "Um contrato", "Um organograma"],
    correctAnswer: "b",
    explanation:
      "A cadeia de valor de serviço é um modelo operacional que define as atividades-chave necessárias para responder à demanda e facilitar a realização de valor.",
    category: "itil4",
  },

  // Cloud Computing (20 questões)
  {
    id: 101,
    question: "O que caracteriza a computação em nuvem?",
    options: [
      "Apenas armazenamento online",
      "Entrega de recursos de TI sob demanda via internet",
      "Computadores muito rápidos",
      "Redes sem fio",
    ],
    correctAnswer: "b",
    explanation:
      "Computação em nuvem é a entrega de recursos de TI (servidores, armazenamento, bancos de dados, rede, software) sob demanda via internet com preços pay-as-you-go.",
    category: "cloud",
  },
  {
    id: 102,
    question: "Quais são os três principais modelos de serviço em nuvem?",
    options: ["IaaS, PaaS, SaaS", "Public, Private, Hybrid", "AWS, Azure, GCP", "CPU, RAM, Storage"],
    correctAnswer: "a",
    explanation:
      "Os três modelos são: IaaS (Infrastructure as a Service), PaaS (Platform as a Service) e SaaS (Software as a Service).",
    category: "cloud",
  },
  {
    id: 103,
    question: "O que é IaaS (Infrastructure as a Service)?",
    options: [
      "Software pronto para uso",
      "Infraestrutura virtualizada sob demanda",
      "Plataforma de desenvolvimento",
      "Serviço de internet",
    ],
    correctAnswer: "b",
    explanation:
      "IaaS fornece infraestrutura de TI virtualizada (servidores, rede, armazenamento) sob demanda, permitindo que usuários gerenciem sistemas operacionais e aplicações.",
    category: "cloud",
  },
  {
    id: 104,
    question: "Qual é a principal característica do modelo SaaS?",
    options: [
      "Você gerencia tudo",
      "Software acessível via internet sem instalação local",
      "Apenas para desenvolvedores",
      "Muito caro",
    ],
    correctAnswer: "b",
    explanation:
      "SaaS oferece aplicações de software completas acessíveis via internet, sem necessidade de instalação ou manutenção local pelo usuário.",
    category: "cloud",
  },
  {
    id: 105,
    question: "O que diferencia nuvem pública de nuvem privada?",
    options: ["Preço apenas", "Pública é compartilhada, privada é dedicada", "Não há diferença", "Velocidade"],
    correctAnswer: "b",
    explanation:
      "Nuvem pública é compartilhada entre múltiplos clientes, enquanto nuvem privada é dedicada a uma única organização, oferecendo maior controle e segurança.",
    category: "cloud",
  },
  {
    id: 106,
    question: "O que é elasticidade em computação em nuvem?",
    options: [
      "Flexibilidade física",
      "Capacidade de escalar recursos automaticamente",
      "Resistência a falhas",
      "Velocidade de rede",
    ],
    correctAnswer: "b",
    explanation:
      "Elasticidade é a capacidade de escalar recursos (CPU, memória, armazenamento) automaticamente para cima ou para baixo baseado na demanda.",
    category: "cloud",
  },
  {
    id: 107,
    question: "O que são containers em cloud computing?",
    options: [
      "Caixas físicas",
      "Unidades leves de virtualização para aplicações",
      "Tipos de servidor",
      "Protocolos de rede",
    ],
    correctAnswer: "b",
    explanation:
      "Containers são unidades leves de virtualização que empacotam aplicações e suas dependências, permitindo execução consistente em diferentes ambientes.",
    category: "cloud",
  },
  {
    id: 108,
    question: "O que é Kubernetes?",
    options: [
      "Uma linguagem de programação",
      "Plataforma de orquestração de containers",
      "Um banco de dados",
      "Um sistema operacional",
    ],
    correctAnswer: "b",
    explanation:
      "Kubernetes é uma plataforma open-source para orquestração de containers, automatizando deployment, scaling e gerenciamento de aplicações containerizadas.",
    category: "cloud",
  },
  {
    id: 109,
    question: "O que é serverless computing?",
    options: [
      "Computação sem servidores físicos",
      "Modelo onde o provedor gerencia toda a infraestrutura",
      "Computação offline",
      "Servidores muito pequenos",
    ],
    correctAnswer: "b",
    explanation:
      "Serverless é um modelo onde o provedor de nuvem gerencia automaticamente a infraestrutura, permitindo que desenvolvedores foquem apenas no código.",
    category: "cloud",
  },
  {
    id: 110,
    question: "O que é CDN (Content Delivery Network)?",
    options: [
      "Rede de desenvolvedores",
      "Rede distribuída para entrega rápida de conteúdo",
      "Tipo de banco de dados",
      "Protocolo de segurança",
    ],
    correctAnswer: "b",
    explanation:
      "CDN é uma rede geograficamente distribuída de servidores que entrega conteúdo web de forma rápida aos usuários baseado em sua localização.",
    category: "cloud",
  },
  {
    id: 111,
    question: "O que é auto-scaling em nuvem?",
    options: [
      "Escalar manualmente",
      "Ajustar recursos automaticamente baseado na demanda",
      "Reduzir sempre os recursos",
      "Aumentar sempre os recursos",
    ],
    correctAnswer: "b",
    explanation:
      "Auto-scaling ajusta automaticamente a quantidade de recursos computacionais baseado na demanda atual, otimizando performance e custos.",
    category: "cloud",
  },
  {
    id: 112,
    question: "O que é multi-cloud?",
    options: [
      "Múltiplas aplicações",
      "Usar serviços de múltiplos provedores de nuvem",
      "Muitos usuários",
      "Várias redes",
    ],
    correctAnswer: "b",
    explanation:
      "Multi-cloud é a estratégia de usar serviços de múltiplos provedores de nuvem para evitar vendor lock-in e otimizar recursos.",
    category: "cloud",
  },
  {
    id: 113,
    question: "O que é disaster recovery em nuvem?",
    options: [
      "Prevenção de desastres naturais",
      "Estratégia para recuperar sistemas após falhas",
      "Backup simples",
      "Seguro de equipamentos",
    ],
    correctAnswer: "b",
    explanation:
      "Disaster recovery é uma estratégia que utiliza recursos de nuvem para recuperar rapidamente sistemas e dados após falhas ou desastres.",
    category: "cloud",
  },
  {
    id: 114,
    question: "O que é edge computing?",
    options: [
      "Computação na borda da mesa",
      "Processamento próximo à fonte dos dados",
      "Computação muito avançada",
      "Processamento gráfico",
    ],
    correctAnswer: "b",
    explanation:
      "Edge computing processa dados próximo à sua fonte (dispositivos IoT, sensores) em vez de enviar tudo para data centers centralizados.",
    category: "cloud",
  },
  {
    id: 115,
    question: "O que é API Gateway em arquiteturas cloud?",
    options: ["Portal de entrada", "Ponto único de entrada para APIs", "Tipo de servidor", "Protocolo de rede"],
    correctAnswer: "b",
    explanation:
      "API Gateway é um serviço que atua como ponto único de entrada para múltiplas APIs, gerenciando autenticação, rate limiting e roteamento.",
    category: "cloud",
  },
  {
    id: 116,
    question: "O que é Infrastructure as Code (IaC)?",
    options: [
      "Código para infraestrutura",
      "Gerenciar infraestrutura através de código",
      "Programar hardware",
      "Código muito complexo",
    ],
    correctAnswer: "b",
    explanation:
      "IaC é a prática de gerenciar e provisionar infraestrutura através de código legível por máquina, em vez de processos manuais.",
    category: "cloud",
  },
  {
    id: 117,
    question: "O que são microservices?",
    options: [
      "Serviços muito pequenos",
      "Arquitetura com aplicações como serviços independentes",
      "Serviços gratuitos",
      "Serviços rápidos",
    ],
    correctAnswer: "b",
    explanation:
      "Microservices é uma arquitetura que estrutura aplicações como coleção de serviços independentes, cada um executando em seu próprio processo.",
    category: "cloud",
  },
  {
    id: 118,
    question: "O que é cloud-native?",
    options: ["Nativo da nuvem", "Aplicações projetadas especificamente para nuvem", "Muito natural", "Primeira nuvem"],
    correctAnswer: "b",
    explanation:
      "Cloud-native refere-se a aplicações projetadas especificamente para aproveitar as características da computação em nuvem, como escalabilidade e resiliência.",
    category: "cloud",
  },
  {
    id: 119,
    question: "O que é observabilidade em sistemas cloud?",
    options: [
      "Capacidade de ver sistemas",
      "Medir estado interno através de outputs",
      "Transparência total",
      "Monitoramento visual",
    ],
    correctAnswer: "b",
    explanation:
      "Observabilidade é a capacidade de medir o estado interno de um sistema através de seus outputs (logs, métricas, traces).",
    category: "cloud",
  },
  {
    id: 120,
    question: "O que é FinOps em cloud computing?",
    options: [
      "Operações financeiras",
      "Prática de otimização de custos em nuvem",
      "Finanças online",
      "Operações finais",
    ],
    correctAnswer: "b",
    explanation:
      "FinOps é uma prática que combina pessoas, processos e tecnologia para otimizar custos de nuvem e maximizar valor de negócio.",
    category: "cloud",
  },
]
