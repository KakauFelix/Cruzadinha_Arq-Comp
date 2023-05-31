    // Adicionando sistema de pontuação para o usuário marcar a cada acerto
    var pontos = 0;

    // Pegando os IDs de cada checkbox para fazer uma checagem automática
    // var verify1 = document.getElementById('checkbox1');
    // var verify2 = document.getElementById('checkbox2');
    // var verify3 = document.getElementById('checkbox3');
    // var verify4 = document.getElementById('checkbox4');
    // var verify5 = document.getElementById('checkbox5');
    // var verify6 = document.getElementById('checkbox6');
    // var verify7 = document.getElementById('checkbox7');
    // var verify8 = document.getElementById('checkbox8');

    // 
    function validarCruzadinha() {
        // 1. CPU
        var c_cpu_cs = ipt_c_cpu_cs.value;
        var p_cpu = ipt_p_cpu.value;
        var u_cpu = ipt_u_cpu.value;

        var cpu = c_cpu_cs == 'C' && p_cpu == 'P' && u_cpu == 'U';

        if (cpu) {
            pontos++;
            console.log('CPU completo!');

            // c_cpu_cs.style.backgroundColor = '#DDFFBB';
            // p_cpu.style.backgroundColor = '#DDFFBB';
            // u_cpu.style.backgroundColor = '#DDFFBB';
        } else {
            console.log('CPU não completo!');

            // c_cpu_cs.style.backgroundColor = '#FF7878';
            // p_cpu.style.backgroundColor = '#FF7878';
            // u_cpu.style.backgroundColor = '#FF7878';
        }

        // 2. ULA
        var u_ula_quad = ipt_u_ula_quad.value;
        var l_ula = ipt_l_ula.value;
        var a_ula_flash = ipt_a_ula_flash.value;

        var ula = u_ula_quad == 'U' && l_ula == 'L' && a_ula_flash == 'A';

        if (cpu) {
            pontos++;
            console.log('ULA completa!');

            // c_cpu_cs.style.backgroundColor = '#DDFFBB';
            // p_cpu.style.backgroundColor = '#DDFFBB';
            // u_cpu.style.backgroundColor = '#DDFFBB';
        } else {
            console.log('ULA não completa!');

            // c_cpu_cs.style.backgroundColor = '#FF7878';
            // p_cpu.style.backgroundColor = '#FF7878';
            // u_cpu.style.backgroundColor = '#FF7878';
        }

        // 3. Registradores
        var r_reg = ipt_r_reg.value;
        var e_reg = ipt_e_reg.value;
        var g_reg = ipt_g_reg.value;
        var i_reg_i5 = ipt_i_reg_i5.value;
        var s_reg_threads = ipt_s_reg_threads.value;
        var t_reg = ipt_t_reg.value;
        var r2_reg = ipt_r2_reg.value;
        var a_reg_dma = ipt_a_reg_dma.value;
        var d_reg = ipt_d_reg.value;
        var o_reg = ipt_o_reg.value;
        var r3_reg = ipt_r3_reg.value;
        var e2_reg = ipt_e2_reg.value;
        var s_reg = ipt_s_reg.value;

        var registradores =
            r_reg == 'R' && e_reg == 'E' && g_reg == 'G' &&
            i_reg_i5 == 'I' && s_reg_threads == 'S' && t_reg == 'T' &&
            r2_reg == 'R' && a_reg_dma == 'A' && d_reg == 'D' &&
            o_reg == 'O' && r3_reg == 'R' && e2_reg == 'E' && s_reg == 'S';

        if (registradores) {
            pontos++;
            console.log('Registradores completo!')
        } else {
            console.log('Registradores não completo!')
        }

        // 4. RAM
        var r_ram = ipt_r_ram.value;
        var a_ram_dataBus = ipt_a_ram.value;
        var m_ram_eprom = ipt_m_ram_eprom.value;

        var ram = r_ram == 'R' && a_ram_dataBus == 'A' && m_ram_eprom == 'M';

        if (ram) {
            pontos++;
            console.log('RAM completo!')
        } else {
            console.log('RAM não completo!')
        }

        // 5. ROM
        var r_rom_threads = ipt_r_rom_threads.value;
        var o_rom_dualCore = ipt_o_rom_dualCore.value;
        var m_rom = ipt_m_rom.value;

        var rom = r_rom_threads == 'R' && o_rom_dualCore == 'O' && m_rom == 'M';

        if (rom) {
            pontos++;
            console.log('ROM completo!')
        } else {
            console.log('ROM não completo!')
        }

        // 6. EPROM
        var e_eprom = ipt_e_eprom.value;
        var p_eprom = ipt_p_eprom.value;
        var r_eprom_quadCore = ipt_r_eprom_quadCore.value;
        var o_eprom = ipt_o_eprom.value;
        // m_ram_eprom;

        var eprom =
        e_eprom == 'E' && p_eprom == 'P' && r_eprom_quadCore == 'R'
        o_eprom == 'O' && m_ram_eprom == 'M';

        if (eprom) {
            pontos++;
            console.log('EPROM completo!')
        } else {
            console.log('EPROM não completo!')
        }

        // 7. FLASH
        var f_flash = ipt_f_flash.value;
        var l_flash = ipt_l_flash.value;
        // a_ula_flash;
        var s_flash_cs = ipt_h_flash.value;
        var h_flash = ipt_h_flash.value;

        var flash =
            f_flash == 'F' && l_flash == 'L' && a_ula_flash == 'A'
        s_flash_cs == 'S' && h_flash == 'H';

        if (flash) {
            pontos++;
            console.log('FLASH completo!')
        } else {
            console.log('FLASH não completo!')
        }

        // 8. Memória de Massa
        var m_memoriaDeMassa = ipt_m_memoriaDeMassa.value;
        var e_memoriaDeMassa = ipt_e_memoriaDeMassa.value;
        var m1_memoriaDeMassa = ipt_m1_memoriaDeMassa.value;
        var o_memoriaDeMassa = ipt_o_memoriaDeMassa.value;
        var r_memoriaDeMassa = ipt_r_memoriaDeMassa.value;
        var i_memoriaDeMassa_i7 = ipt_i_memoriaDeMassa_i7.value;
        var a_memoriaDeMassa = ipt_a_memoriaDeMassa.value;
        var d_memoriaDeMassa = ipt_d_memoriaDeMassa.value;
        var e1_memoriaDeMassa = ipt_e1_memoriaDeMassa.value;
        var m2_memoriaDeMassa = ipt_m2_memoriaDeMassa.value;
        var a1_memoriaDeMassa_dualCore = ipt_a1_memoriaDeMassa_dualCore.value;
        var s_memoriaDeMassa_addressBus = ipt_s_memoriaDeMassa_addressBus.value;
        var s1_memoriaDeMassa = ipt_s1_memoriaDeMassa.value;
        var a2_memoriaDeMassa = ipt_a2_memoriaDeMassa.value;

        var memoriaDeMassa =
            m_memoriaDeMassa == 'M' && e_memoriaDeMassa == 'E' &&
            m1_memoriaDeMassa == 'M' && o_memoriaDeMassa == 'Ó' &&
            r_memoriaDeMassa == 'R' && i_memoriaDeMassa_i7 == 'I' &&
            a_memoriaDeMassa == 'A' && d_memoriaDeMassa == 'D' &&
            e1_memoriaDeMassa == 'E' && m2_memoriaDeMassa == 'M' &&
            a1_memoriaDeMassa_dualCore == 'A' && s_memoriaDeMassa_addressBus == 'S' &&
            s1_memoriaDeMassa == 'S' && a2_memoriaDeMassa == 'A';

        if (memoriaDeMassa) {
            pontos++;
            console.log('Memória de Massa completa!');

            // m_memoriaDeMassa.style.backgroundColor = '#DDFFBB';
            // e_memoriaDeMassa.style.backgroundColor = '#DDFFBB';
            // m1_memoriaDeMassa.style.backgroundColor = '#DDFFBB';
            // o_memoriaDeMassa.style.backgroundColor = '#DDFFBB';
            // r_memoriaDeMassa.style.backgroundColor = '#DDFFBB';
            // i_memoriaDeMassa_i7.style.backgroundColor = '#DDFFBB';
            // a_memoriaDeMassa.style.backgroundColor = '#DDFFBB';
            // d_memoriaDeMassa.style.backgroundColor = '#DDFFBB';
            // e1_memoriaDeMassa.style.backgroundColor = '#DDFFBB';
            // m2_memoriaDeMassa.style.backgroundColor = '#DDFFBB';
            // a1_memoriaDeMassa_dualCore.style.backgroundColor = '#DDFFBB';
            // s_memoriaDeMassa_addressBus.style.backgroundColor = '#DDFFBB';
            // s1_memoriaDeMassa.style.backgroundColor = '#DDFFBB';
            // a2_memoriaDeMassa.style.backgroundColor = '#DDFFBB';
            // a2_memoriaDeMassa.style.backgroundColor = '#DDFFBB';
        } else {
            console.log('Memória de massa incompleta!');

            // m_memoriaDeMassa.style.backgroundColor = '#FF7878';
            // e_memoriaDeMassa.style.backgroundColor = '#FF7878';
            // m1_memoriaDeMassa.style.backgroundColor = '#FF7878';
            // o_memoriaDeMassa.style.backgroundColor = '#FF7878';
            // r_memoriaDeMassa.style.backgroundColor = '#FF7878';
            // i_memoriaDeMassa_i7.style.backgroundColor = '#FF7878';
            // a_memoriaDeMassa.style.backgroundColor = '#FF7878';
            // d_memoriaDeMassa.style.backgroundColor = '#FF7878';
            // e1_memoriaDeMassa.style.backgroundColor = '#FF7878';
            // m2_memoriaDeMassa.style.backgroundColor = '#FF7878';
            // a1_memoriaDeMassa_dualCore.style.backgroundColor = '#FF7878';
            // s_memoriaDeMassa_addressBus.style.backgroundColor = '#FF7878';
            // s1_memoriaDeMassa.style.backgroundColor = '#FF7878';
            // a2_memoriaDeMassa.style.backgroundColor = '#FF7878';
            // a2_memoriaDeMassa.style.backgroundColor = '#FF7878';
        }

        // 9. DMA
        var d_dma = ipt_d_dma.value;
        var m_dma = ipt_m_dma.value;
        // a_reg_dma;

        var dma = d_dma == 'D' && m_dma == 'M' && a_reg_dma == 'A';

        if (dma) {
            pontos++;
            console.log('DMA completo!')
        } else {
            console.log('DMA não completo!')
        }

        // 10. CS
        // c_cpu_cs;
        // s_flash_cs;

        var cs = c_cpu_cs == 'C' && s_flash_cs == 'S';

        if (cs) {
            pontos++;
            console.log('CS completo!')
        } else {
            console.log('CS não completo!')
        }

        // 11. Address Bus
        var a_addressBus = ipt_a_addressBus.value;
        var d_addressBus = ipt_d_addressBus.value;
        var d1_addressBus = ipt_d1_addressBus.value;
        var r_addressBus = ipt_r_addressBus.value;
        var e_addressBus = ipt_e_addressBus.value;
        var s_addressBus = ipt_s_addressBus.value;
        var s1_addressBus_dataBus = ipt_s1_addressBus_dataBus.value;
        var b_addressBus = ipt_b_addressBus.value;
        var u_addressBus = ipt_u_addressBus.value;
        // s_memoriaDeMassa_addressBus;

        var addressBus =
            a_addressBus == 'A' && d_addressBus == 'D' && d1_addressBus == 'D' &&
            r_addressBus == 'R' && e_addressBus == 'E' && s_addressBus == 'S' &&
            s1_addressBus_dataBus == 'S' && b_addressBus == 'B' && u_addressBus == 'U' &&
            s_memoriaDeMassa_addressBus == 'S';

        if (addressBus) {
            pontos++;
            console.log('Addrees Bus completo!');
        } else {
            console.log('Addrees Bus não completo!');
        }

        // 12. Data Bus
        var d_dataBus = ipt_d_dataBus.value;
        // a_ram_dataBus;
        var t_dataBus = ipt_t_dataBus.value;
        var a1_dataBus = ipt_a1_dataBus.value;
        var b_dataBus = ipt_b_dataBus.value;
        var u_dataBus = ipt_u_dataBus.value;
        // s1_addressBus_dataBus;

        var dataBus = d_dataBus == 'D' && a_ram_dataBus == 'A' && t_dataBus == 'T' &&
            a1_dataBus == 'A' && b_dataBus == 'B' && u_dataBus == 'U' && s1_addressBus_dataBus == 'S';

        if (dataBus) {
            pontos++;
            console.log('Data Bus completo!');
        } else {
            console.log('Data Bus não completo!');
        }

        // 13. I5
        // i_reg_i5;
        var cinco_i5 = ipt_cinco_i5.value;

        var i5 = i_reg_i5 == 'I' && cinco_i5 == '5';

        if (i5) {
            pontos++;
            console.log('i5 completo!');
        } else {
            console.log('i5 não completo!');
        }

        // 14. I7
        // i_memoriaDeMassa_i7
        var sete_i7 = ipt_sete_i7.value;

        var i7 = i_memoriaDeMassa_i7 == 'I' && sete_i7 == '7';

        if (i7) {
            pontos++;
            console.log('i7 completo!');
        } else {
            console.log('i7 não completo!');
        }

        // 15. Dual Core
        var d_dualCore = ipt_d_dualCore.value;
        var u_dualCore = ipt_u_dualCore.value;
        // a1_memoriaDeMassa_dualCore;
        var l_dualCore = ipt_l_dualCore.value;
        var c_dualCore = ipt_c_dualCore.value;
        // o_rom_dualCore;
        var r_dualCore = ipt_r_dualCore.value;
        var e_dualCore = ipt_e_dualCore.value;

        var dualCore = d_dualCore == 'D' && u_dualCore == 'U' && a1_memoriaDeMassa_dualCore == 'A' &&
            l_dualCore == 'L' && c_dualCore == 'C' && o_rom_dualCore == 'O' && r_dualCore == 'R' &&
            e_dualCore == 'E';

        if (dualCore) {
            pontos++;
            console.log('Dual Core completo!');
        } else {
            console.log('Dual Core não completo!');
        }

        // 16. Quad Core
        var q_quadCore = ipt_q_quadCore.value;
        var u_ula_quad = ipt_u_ula_quad.value;
        var a_quadCore = ipt_a_quadCore.value;
        var d_quadCore = ipt_d_quadCore.value;
        var c_quadCore = ipt_c_quadCore.value;
        var o_quadCore = ipt_o_quadCore.value;
        var r_eprom_quadCore = ipt_r_eprom_quadCore.value;
        var e_quadCore_cache = ipt_e_quadCore_cache.value;

        var quadCore = q_quadCore == 'Q' && u_ula_quad == 'U' && a_quadCore == 'A' &&
        d_quadCore == 'D' && c_quadCore == 'C' && o_quadCore == 'O' &&
        r_eprom_quadCore == 'R' && e_quadCore_cache == 'E';

        if (quadCore) {
            pontos++;
            console.log('Quad Core completo!');
        } else {
            console.log('Quad Core não completo!');
        }

        // 17. Threads
        var t_threads = ipt_t_threads.value;
        var h_threads = ipt_h_threads.value;
        // r_rom_threads;
        var e_threads = ipt_e_threads.value;
        var a_threads = ipt_a_threads.value;
        var d_threads = ipt_d_threads.value;
        // s_reg_threads;

        var threads = t_threads == 'T' && h_threads == 'H' && r_rom_threads == 'R' &&
        e_threads == 'E' && a_threads == 'A' && d_threads == 'D' && s_reg_threads == 'S';

        if (threads) {
            pontos++;
            console.log('Threads completo!');
        } else {
            console.log('Threads não completo!');
        }

        // 18. Cache
        var c_cache = ipt_c_cache.value;
        var a_cache = ipt_a_cache.value;
        var c1_cache = ipt_c1_cache.value;
        var h_cache = ipt_h_cache.value;
        // e_quadCore_cache;

        var cache = c_cache == 'C' && a_cache == 'A' && c1_cache == 'C' &&
        h_cache == 'H' && e_quadCore_cache == 'E';

        if (cache) {
            pontos++;
            console.log('Cache completo!');
        } else {
            console.log('Cache não completo!');
        }

        // Se finalizado e conseguir 18 pontos, o usuário irá ganhar o jogo
        if (pontos == 18) {
            alert("Parabéns, você concluiu a cruzadinha!");
        }
    }

    // Desenvolvido por: Kauanny Tenório, Vinicius Costa e Lucas Santos